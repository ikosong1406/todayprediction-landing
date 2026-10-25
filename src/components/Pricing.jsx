import { useEffect, useState } from "react";
import background from "../assets/background.gif";

const Pricing = () => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    let active = true;

    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");

        if (!response.ok) {
          throw new Error("Country detection failed");
        }

        const data = await response.json();

        if (active && data.country_code) {
          setCountry(data.country_code.toUpperCase());
        }
      } catch (error) {
        // Fall back to the browser's timezone if detection fails.
        if (active) {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

          setCountry(timezone === "Africa/Lagos" ? "NG" : "OTHER");
        }
      }
    };

    detectCountry();

    return () => {
      active = false;
    };
  }, []);

  const isNigeria = country === "NG";
  const price = isNigeria ? "9.99" : "19.99";

  const benefits = [
    {
      title: "Daily Predictions",
      description:
        "Get fresh football predictions every day, ready for your analysis.",
    },
    {
      title: "Safe Tips",
      description:
        "Access carefully selected tips advertised with an 80% success rate.",
    },
    {
      title: "Multiple Betting Markets",
      description:
        "1X2, Double Chance, Over/Under Goals, and Both Teams to Score (BTTS).",
    },
    {
      title: "Major League Coverage",
      description:
        "Predictions covering major football leagues and competitions.",
    },
    {
      title: "Match Analysis",
      description:
        "Make more informed decisions with insights to help assess upcoming fixtures.",
    },
    {
      title: "Regular Updates",
      description: "Stay up to date with the latest available predictions.",
    },
    {
      title: "Mobile-Friendly Access",
      description:
        "Access your predictions from your phone, tablet, or computer.",
    },
    {
      title: "Cancel Anytime",
      description:
        "No long-term commitment. Cancel your subscription whenever you choose.",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#09100d] px-3.5 py-20 sm:px-6"
    >
        <div className="absolute inset-0 z-0">
             <img src={background} alt="" className="h-full w-full object-cover" />
             <div className="absolute inset-0 bg-black/50" />
        </div>

      <div className="relative mx-auto max-w-5xl z-10">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-[#efefef] sm:text-4xl md:text-4xl">
            Unlock Every Prediction
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-white text-sm">
            Get full access to daily football predictions, multiple betting
            markets, and premium features — all in one plan.
          </p>
        </div>

        {/* Single pricing card */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#855391] bg-[#101a15] shadow-2xl shadow-black/30">
          {/* Card header */}
          <div className="border-b border-[#376553]/60 bg-gradient-to-br from-[#173d2b] to-[#101a15] p-5 sm:p-10">

            <div className="mt-4">
              {country === null ? (
                <p className="text-sm text-gray-400">
                  Checking your regional price...
                </p>
              ) : (
                <>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                      £{price}
                    </span>
                    <span className="text-gray-400">/ Month</span>
                  </div>
                </>
              )}
            </div>

            <a
              href="https://app.todayprediction365.com"
              className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#18ffc8] px-6 py-3 text-base font-bold text-[#09100d] transition duration-300 hover:shadow-lg hover:shadow-[#fea92a]/20 ${
                country === null ? "pointer-events-none opacity-60" : ""
              }`}
              aria-disabled={country === null}
              onClick={(event) => {
                if (country === null) event.preventDefault();
              }}
            >
              Join Membership
            </a>
          </div>

          {/* Benefits */}
          <div className="p-4 sm:p-10">
            <h4 className="mb-6 text-lg font-bold text-white">
              Everything included in your plan
            </h4>

            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#376553]/30 text-[#fea92a]">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path
                        d="m5 12 4 4L19 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5 className="font-semibold text-[#efefef]">
                      {benefit.title}
                    </h5>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
