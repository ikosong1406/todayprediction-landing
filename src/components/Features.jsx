import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import {
  CheckCircle2,
  TrendingUp,
  Clock,
  ShieldCheck,
  Activity,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_URL = "https://punterhub-backend.onrender.com/client/getTip";

// Format percentages safely.
const formatPercentage = (value) => `${Number(value || 0).toFixed(1)}%`;

// Format dates returned by MongoDB.
const formatDate = (date) => {
  if (!date) return "Date unavailable";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date unavailable";
  }

  return parsedDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Map the backend schema to the frontend UI.
const normalizeTip = (tip) => ({
  id: tip._id,
  bookingCode: tip.bettingCode || "No booking code",
  company: tip.bettingSite || "Betting site unavailable",
  status: "Won",
  confidenceLevel: Number(tip.confidenceLevel || 0),
  totalOdds: Number(tip.totalOdd || 0),
  settledAt: formatDate(tip.updatedAt || tip.createdAt),
  category: tip.primaryCategory || "Sports",
  events: (tip.matches || []).map((match, index) => ({
    id: `${tip._id}-${index}`,
    teams: match.teams || "Teams unavailable",
    prediction: match.prediction || "Prediction unavailable",
  })),
});

// Winning status badge.
const StatusBadge = () => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-400">
    <CheckCircle2 size={14} />
    Won
  </span>
);

// Individual winning tip card.
const SlipCard = ({ slip }) => (
  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#855391] bg-[#162821] transition-all duration-300 hover:border-[#fea92a] hover:shadow-xl hover:shadow-black/20">
    {/* Header */}
    <div className="border-b border-white/10 bg-[#102019] p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Booking Code
          </p>

          <h3 className="break-all text-lg font-extrabold text-white">
            {slip.bookingCode}
          </h3>
        </div>

        <StatusBadge />
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-300">
        <ShieldCheck size={17} className="shrink-0 text-[#18ffc8]" />

        <span className="truncate">{slip.company}</span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
        <Clock size={14} />
        <span>{slip.settledAt}</span>
      </div>
    </div>

    {/* Tip statistics */}
    <div className="grid grid-cols-2 border-b border-white/10">
      <div className="border-r border-white/10 p-4">
        <p className="mb-1 text-xs text-gray-400">Total Odds</p>

        <p className="text-2xl font-extrabold text-[#18ffc8]">
          {slip.totalOdds.toFixed(2)}
        </p>
      </div>

      <div className="p-4">
        <p className="mb-1 text-xs text-gray-400">Confidence</p>

        <p className="text-2xl font-extrabold text-white">
          {formatPercentage(slip.confidenceLevel)}
        </p>
      </div>
    </div>

    {/* Matches */}
    <div className="flex-1 p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h4 className="text-sm font-bold text-white">Winning Selections</h4>

        <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-400">
          {slip.events.length} {slip.events.length === 1 ? "match" : "matches"}
        </span>
      </div>

      {slip.events.length > 0 ? (
        <div className="space-y-3">
          {slip.events.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-white/5 bg-[#0d1913] p-3"
            >
              <div className="mb-2">
                <span className="text-xs font-medium text-[#18ffc8]">
                  {slip.category}
                </span>
              </div>

              <p className="mb-3 break-words text-sm font-semibold leading-5 text-white">
                {event.teams}
              </p>

              <div className="border-t border-white/5 pt-3">
                <p className="text-xs text-gray-500">Prediction</p>

                <p className="mt-1 break-words text-sm font-semibold text-gray-200">
                  {event.prediction}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">
          No match details available for this tip.
        </p>
      )}
    </div>
  </article>
);

const Features = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchWinningTips = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(API_URL);

        const result = response.data.data;

        // Support common Express response formats.
        const records = Array.isArray(result)
          ? result
          : Array.isArray(result.tips)
            ? result.tips
            : Array.isArray(result.data)
              ? result.data
              : [];

        // Only show winning tips.
        const winningTips = records
          .filter((tip) => String(tip.status || "").toLowerCase() === "win")
          .map(normalizeTip);

        setTips(winningTips);
      } catch (err) {
        if (!controller.signal.aborted && !axios.isCancel(err)) {
          console.error(
            "Error fetching winning tips:",
            err.response?.data || err.message,
          );

          setError("Unable to load winning tips. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchWinningTips();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="features"
      className="overflow-hidden bg-[#09100d] py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            Winning Selections.
          </h2>

          <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Explore our recorded winning sports predictions.
          </p>
        </div>

        {/* Winning tips carousel */}
        <div id="winning-slips">
          {loading ? (
            <div className="rounded-2xl border border-[#376553] bg-[#162821] px-5 py-12 text-center">
              <Activity
                size={28}
                className="mx-auto mb-3 animate-pulse text-[#18ffc8]"
              />

              <p className="font-semibold text-white">
                Loading winning tips...
              </p>
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-red-400/20 bg-[#162821] px-5 py-12 text-center">
              <p className="font-semibold text-red-400">{error}</p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-4 rounded-lg bg-[#18ffc8] px-5 py-2 font-bold text-[#09100d] transition hover:opacity-80"
              >
                Try Again
              </button>
            </div>
          ) : tips.length > 0 ? (
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation
              // pagination={{ clickable: true }}
              autoplay={
                tips.length > 3
                  ? {
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              loop={tips.length > 3}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="winning-slips-swiper !pb-12"
            >
              {tips.map((tip) => (
                <SwiperSlide key={tip.id} className="!h-auto">
                  <SlipCard slip={tip} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="rounded-2xl border border-[#376553] bg-[#162821] px-5 py-12 text-center">
              <p className="font-semibold text-white">
                No winning tips available yet.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Check back when new winning tips have been recorded.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Carousel styling */}
      <style>{`
        .winning-slips-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #6b8276;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .winning-slips-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 8px;
          background: #18ffc8;
        }

        .winning-slips-swiper .swiper-slide {
          height: auto;
        }

        .winning-slips-swiper .swiper-button-next,
        .winning-slips-swiper .swiper-button-prev {
          color: #18ffc8;
        }
      `}</style>
    </section>
  );
};

export default Features;
