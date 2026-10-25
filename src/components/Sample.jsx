import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://punterhub-backend.onrender.com/client/getTip";

const LOCKED_SELECTIONS_VISIBLE = 3;

const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "";

  return parsedDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const SamplePredictions = () => {
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchLatestTip = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(API_URL, {
          signal: controller.signal,
          timeout: 10000,
        });

        // Extract tips from common API response structures.
        const result = response.data?.data ?? response.data;

        const tips = Array.isArray(result)
          ? result
          : Array.isArray(result?.tips)
            ? result.tips
            : Array.isArray(result?.data)
              ? result.data
              : result?.tip
                ? [result.tip]
                : result?._id
                  ? [result]
                  : [];

        console.log("Fetched tips:", tips);

        // Keep active tips and sort newest first.
        const activeTips = tips
          .filter((item) => item.status === "active")
          .sort(
            (a, b) =>
              new Date(b.createdAt || 0).getTime() -
              new Date(a.createdAt || 0).getTime(),
          );

        // Display only the newest active tip.
        const latestTip = activeTips[0] || null;

        console.log("Latest active tip:", latestTip);

        setTip(latestTip);
      } catch (err) {
        if (!controller.signal.aborted && !axios.isCancel(err)) {
          console.error(
            "Error fetching tips:",
            err.response?.data || err.message,
          );

          setError("Unable to load today's tip. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchLatestTip();

    return () => controller.abort();
  }, []);

  const matches = Array.isArray(tip?.matches) ? tip.matches : [];

  // Show the first two selections publicly.
  const visibleSelections = matches.slice(0, 2);

  // Keep the remaining selections locked.
  const lockedSelections = matches.slice(2);

  const totalOdd = Number(tip?.totalOdd || 0);

  const bettingCode = tip?.bettingCode || "Premium betting code";
  const bookmaker = tip?.bettingSite || "Bookmaker unavailable";
  const bettingStatus = String(tip?.status || "active").toUpperCase();

  return (
    <section
      id="predictions"
      className="relative overflow-hidden bg-[#09100d] px-4 py-20 sm:px-6"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#376553]/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fea92a]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Today's Top
            <span className="ml-4 text-[#fea92a]">Selection.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            Get a preview of our latest sports betting tip.
          </p>
        </div>

        {/* Betslip */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#376553] bg-[#101a15] shadow-2xl shadow-black/30">
          {/* Betslip header */}
          <div className="flex items-center justify-between gap-4 border-b border-[#376553]/60 bg-[#14251b] px-5 py-5 sm:px-7">
            <div>
              <h3 className="text-lg font-extrabold text-white sm:text-xl">
                Today's Accumulator
              </h3>
            </div>

            <span className="rounded-lg border border-[#fea92a]/40 bg-[#fea92a]/10 px-3 py-2 text-xs font-bold text-[#fea92a]">
              {selections.length} SELECTIONS
            </span>
          </div>

          {/* First two visible selections */}
          <div className="p-4 sm:p-7">

            <div className="space-y-3">
              {selections.slice(0, 2).map((selection, index) => (
                <div
                  key={selection.match}
                  className="rounded-xl border border-[#376553]/50 bg-[#09100d] p-4 sm:p-5"
                >
                  <p className="text-xs font-medium text-gray-500">
                    {selection.competition}
                  </p>

                        <h5 className="mt-2 break-words font-bold text-white sm:text-lg">
                          {selection.teams || "Teams to be announced"}
                        </h5>

                        <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-[#376553]/40 bg-[#14251b] p-3">
                          <div>
                            <p className="text-xs text-gray-500">Prediction</p>

                            <p className="mt-1 break-words text-sm font-semibold text-gray-200">
                              {selection.prediction || "Not specified"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="rounded-xl border border-[#376553]/50 bg-[#09100d] p-5 text-sm text-gray-400">
                      No individual selections are available for this tip.
                    </p>
                  )}

              {/* Locked remaining selections */}
              <div className="relative overflow-hidden rounded-xl border border-[#fea92a]/40 bg-[#09100d]">
                <div
                  className="pointer-events-none select-none p-4 sm:p-5"
                  aria-hidden="true"
                >
                  {selections.slice(2).map((selection, index) => (
                    <div
                      key={selection.match}
                      className="mb-3 rounded-lg border border-[#376553]/40 bg-[#14251b] p-4 last:mb-0"
                    >
                      <p className="text-xs text-gray-500">
                        SELECTION {String(index + 3).padStart(2, "0")}
                      </p>
                      <p className="mt-2 font-bold text-white">
                        {selection.match}
                      </p>
                      <div className="mt-3 flex justify-between gap-3">
                        <span className="text-sm text-gray-400">
                          {selection.market}
                        </span>
                        <span className="font-bold text-[#fea92a]">
                          {selection.odd}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#09100d]/65 px-4 text-center backdrop-blur-md">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#fea92a]/40 bg-[#fea92a]/10 text-[#fea92a]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <rect x="4" y="10" width="16" height="11" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                  </div>

                  <h5 className="text-lg font-extrabold text-white">
                    {selections.length - 2} Selections Locked
                  </h5>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-gray-300">
                    Unlock the full betslip to reveal every market, selection,
                    and individual odd.
                  </p>

                  <a
                    href="#pricing"
                    className="mt-4 rounded-lg bg-[#fea92a] px-5 py-3 text-sm font-extrabold text-[#09100d] transition hover:bg-amber-400"
                  >
                    Unlock Full Betslip
                  </a>
                </div>
              </div>
            </div>

            {/* Total odds */}
            <div className="mt-5 rounded-xl border border-[#fea92a]/40 bg-[#fea92a]/5 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    Total Accumulator Odds
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Combined odds for all selections
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-extrabold text-[#fea92a] sm:text-3xl">
                    {totalOdd}
                  </p>
                  <p className="text-xs text-gray-500">
                    {selections.length} selections
                  </p>
                </div>
              </div>
            </div>

            {/* Betting code */}
            <div className="mt-4 rounded-xl border border-[#376553]/50 bg-[#09100d] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-white">Betting Code</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Bookmaker: {bookmaker}
                  </p>
                </div>

                <span className="rounded-md bg-[#fea92a]/10 px-2 py-1 text-xs font-bold text-[#fea92a]">
                  PREMIUM
                </span>
              </div>

                  <div className="relative mt-4 overflow-hidden rounded-lg border border-[#376553]/40 bg-[#14251b] p-4">
                    <p
                      className="select-none break-all text-center font-mono text-lg font-bold tracking-widest text-white blur-[6px]"
                      aria-hidden="true"
                    >
                      {bettingCode}
                    </p>

                <div className="absolute inset-0 flex items-center justify-center bg-[#09100d]/20">
                  <span className="flex items-center gap-2 rounded-lg border border-[#fea92a]/40 bg-[#09100d]/95 px-3 py-2 text-xs font-bold text-[#fea92a]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <rect x="4" y="10" width="16" height="11" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                    CODE LOCKED
                  </span>
                </div>
              </div>

              <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                Subscribe to reveal the complete betting code and remaining
                selections.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 text-center">
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#fea92a] px-6 py-4 font-extrabold text-[#09100d] transition hover:bg-amber-400 sm:w-auto sm:min-w-[280px]"
              >
                Unlock Full Betslip
                <span aria-hidden="true">→</span>
              </a>

              <p className="mt-3 text-xs text-gray-500">
                Get full access with a premium subscription.
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-gray-500">
          Demonstration betslip only. Fixtures, selections, odds, bookmaker
          code, and combined odds are illustrative and are not verified live
          betting information. Odds can change, and betting involves risk.
        </p>
      </div>
    </section>
  );
};

export default SamplePredictions;
