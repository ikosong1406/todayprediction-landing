// src/components/Hero.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your background images
import background1 from "../assets/Premier.png";
import background2 from "../assets/LaLiga.png";
import background3 from "../assets/SerieA.png";
import background4 from "../assets/Ligue1.png";
import background5 from "../assets/Bundesliga.png";
import background6 from "../assets/NBAStars.png";
import background7 from "../assets/NBARivalry.png";

const backgrounds = [
  {
    id: 1,
    image: background1,
    alt: "Premier League football match in action",
  },
  {
    id: 2,
    image: background2,
    alt: "La Liga football players celebrating a goal",
  },
  {
    id: 3,
    image: background3,
    alt: "Serie A football stadium with fans cheering",
  },
  {
    id: 4,
    image: background4,
    alt: "Ligue 1 football match",
  },
  {
    id: 5,
    image: background5,
    alt: "Bundesliga football match",
  },
  {
    id: 6,
    image: background6,
    alt: "NBA basketball stars",
  },
  {
    id: 7,
    image: background7,
    alt: "NBA basketball rivalry",
  },
];

const Hero = () => {
    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="
        relative min-h-[50vh] overflow-hidden bg-[#07110f]
        sm:min-h-[50vh]
        lg:min-h-screen
      "
    >
      {/* Background Image Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1200}
        className="hero-swiper absolute inset-0 h-full w-full"
      >
        {backgrounds.map((background) => (
          <SwiperSlide key={background.id}>
            <div className="absolute inset-0 h-full w-full">
              <img
                src={background.image}
                alt={background.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050b0a]/80 via-[#050b0a]/60 to-[#050b0a]/25" />

      {/* Hero Content */}
      <div
        className="
          container relative z-[2] mx-auto flex
          min-h-[75vh] items-center
          px-5 pt-24 pb-16
          sm:min-h-[80vh] sm:px-8 sm:pt-28 sm:pb-20
          lg:min-h-screen lg:pt-30
        "
      >
        <div className="flex w-full flex-col items-center justify-between lg:flex-row">

          {/* Text Content */}
          <div className="w-full flex-1 text-center lg:text-left">

            {/* Main Headline */}
            <h1
              className="
                mx-auto mb-4 mt-2
                max-w-[320px]
                text-[2rem] font-extrabold
                leading-[1.12] tracking-tight text-white
                sm:mb-6 sm:max-w-[520px]
                sm:text-4xl sm:leading-tight
                md:max-w-[650px] md:text-5xl
                lg:mx-0 lg:mt-4
              "
            >
              Closer to the Game.
              <br />

              <span className="text-[#fea92a]">
                Smarter About
              </span>

              <br />

              Every Match.
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto mb-6 max-w-[330px]
                text-sm leading-6 text-gray-200
                sm:mb-8 sm:max-w-2xl
                sm:text-lg sm:leading-8
                lg:mx-0
              "
            >
              Get expert football predictions backed by in-depth match
              analysis, team news, form, and tactical insight from a UK-based
              team with a close view of English and European football.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                mb-8 flex flex-col justify-center gap-3
                sm:mb-10 sm:flex-row sm:gap-4
                lg:justify-start
              "
            >
              <button
                onClick={() => scrollToSection("predictions")}
                className="
                  rounded-lg bg-[#18ffc8]
                  px-6 py-3
                  text-center font-bold text-[#07110f]
                  shadow-lg shadow-[#18ffc8]/20
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-white
                  sm:px-8 text-sm
                "
              >
                Explore Predictions
              </button>

              <button
                onClick={() => scrollToSection("pricing")}
                className="
                  rounded-lg border border-white/40
                  bg-white/5 px-6 py-3
                  text-center text-sm font-bold text-white
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-[#18ffc8]
                  hover:bg-[#18ffc8] hover:text-[#07110f]
                  sm:px-8
                "
              >
                Join Membership
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Carousel Styles */}
      <style>{`
        .hero-swiper {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-swiper .swiper-slide {
          overflow: hidden;
        }

        .hero-swiper .swiper-slide img {
          transform: scale(1.05);
          transition: transform 6s ease;
        }

        .hero-swiper .swiper-slide-active img {
          transform: scale(1.12);
        }

        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: #18ffc8;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: #18ffc8;
          color: #07110f;
        }

        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 15px;
          font-weight: 900;
        }

        .hero-swiper .swiper-button-prev {
          left: 20px;
        }

        .hero-swiper .swiper-button-next {
          right: 20px;
        }

        .hero-swiper .swiper-pagination {
          bottom: 28px !important;
          z-index: 10;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: rgba(255, 255, 255, 0.65);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 10px;
          background: #18ffc8;
        }

        @media (max-width: 640px) {
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev {
            display: none;
          }

          .hero-swiper .swiper-pagination {
            bottom: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;