import React, { useEffect } from "react";
// Keep the correct import path for Font Awesome icons
import {
  FaCheckCircle,
  FaUserLock,
  FaGavel,
  FaLightbulb,
  FaExchangeAlt,
  FaBalanceScale,
} from "react-icons/fa";

// Your defined colors:
// black: "#09100d" (Background)
// gray: "#162821" (Section Background)
// orange:"#fea92a" (Subtle Highlight/Warning)
// purple:"#855391" (Key Information/Emphasis) -> CHANGING TO WHITE FOR READABILITY
// lightGray: "#376553" (Borders/Separators)
// white:"#efefef" (Main Text)
// pink:"#f57cff" (Accent/Callout)
// blue:"#18ffc8" (Primary Accent)

const Terms = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const termsData = [
    {
      icon: FaBalanceScale,
      title: "1. Definitions",
      content: [
        "“Subscriber” / “User” – an individual who pays for access to punters’ tips.",
        "“Content” – all information, tips, analysis, or other materials shared by punters or the Platform.",
        "“Subscription Fees” – payments made by Subscribers to access Content..",
      ],
    },
    {
      icon: FaCheckCircle,
      title: "2. Eligibility",
      content: [
        "You must be at least 18 years old (or the legal gambling age in your jurisdiction).",
        "You must comply with all local laws and regulations regarding gambling and online betting.",
        "The Platform is not responsible for any unlawful access or use by users in restricted jurisdictions.",
      ],
    },
    {
      icon: FaLightbulb,
      title: "3. Nature of Services",
      content: [
        "The Platform does not accept or place bets, handle bookmaker accounts, or guarantee any winnings.",
        "All Content is provided for informational and entertainment purposes only.",
      ],
    },
    {
      icon: FaUserLock,
      title: "4. Account Registration",
      content: [
        "Users must provide accurate and complete information when registering.",
        "You are responsible for maintaining the confidentiality of your account and password.",
        "The Platform reserves the right to suspend or terminate accounts that breach these Terms.",
      ],
    },
    {
      icon: FaGavel,
      title: "5. Fees and Payments",
      content: [
        "Subscription Fees are set by punters and paid by subscribers through the Platform.",
        "All payments are final and non-refundable, except as required by law.",
      ],
    },
    {
      icon: FaBalanceScale,
      title: "6. Subscribers’ Obligations",
      content: [
        "Subscribers acknowledge that betting involves risk, and past performance does not guarantee future results.",
        "Subscribers agree not to redistribute or resell punters’ Content outside the Platform.",
        "Subscribers are solely responsible for any betting decisions they make based on Content.",
      ],
    },
    {
      icon: FaExchangeAlt,
      title: "7. Responsible Gambling Disclaimer",
      content: [
        "The Platform encourages responsible gambling.",
        "If you feel you may have a gambling problem, please seek help at BeGambleAware.org (UK) or local support services.",
        "The Platform accepts no responsibility for losses incurred from gambling decisions.",
      ],
    },
    {
      icon: FaLightbulb,
      title: "8. Intellectual Property",
      content: [
        "All Content remains the property of the Platform.",
        "Unauthorized copying, sharing, or resale of Content is strictly prohibited.",
      ],
    },
    {
      icon: FaGavel,
      title: "9. Limitation of Liability",
      content: [
        "The Platform is not liable for:",
        "- Accuracy, reliability, or outcomes of punters’ Content.",
        "- Financial losses incurred by subscribers.",
        "- Service interruptions, delays, or errors.",
        "To the fullest extent permitted by law, the Platform disclaims all warranties and liability.",
      ],
    },
    {
      icon: FaUserLock,
      title: "10. Termination",
      content: [
        "We may suspend or terminate accounts for violating these Terms or applicable laws.",
        "Users may delete their accounts at any time, but fees already paid are non-refundable.",
      ],
    },
    // {
    //   icon: FaBalanceScale,
    //   title: "11. Governing Law",
    //   content: [
    //     "These Terms are governed by the laws of Nigeria.",
    //     "Any disputes will be subject to the exclusive jurisdiction of the courts in Nigeria.",
    //   ],
    // },
    {
      icon: FaExchangeAlt,
      title: "11. Changes to Terms",
      content: [
        "We may update these Terms from time to time.",
        "Continued use of the Platform after changes constitutes acceptance of the updated Terms.",
      ],
    },
  ];

  // Defining the new color for emphasized text
  const EMPHASIS_TEXT_COLOR = "#efefef"; // White

  return (
    <div className="min-h-screen bg-[#09100d] text-[#efefef] py-16 px-4 sm:px-6 lg:px-8 pt-30">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 border-b-2 border-[#376553] pb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#18ffc8] mb-2 tracking-tight">
            Terms & Conditions
          </h1>
          {/* Used Orange for the date highlight */}
          <p className="text-lg text-[#efefef] font-medium">
            Last Updated:{" "}
            <span className="text-[#fea92a]">August 24, 2026</span>
          </p>
          {/* Introductory paragraph is now white for better contrast */}
          <p
            className={`mt-4 text-[${EMPHASIS_TEXT_COLOR}] leading-relaxed italic text-opacity-90`}
          >
            Welcome to The Todayprediction365 (“the Platform”, “we”, “us”, “our”). By
            accessing or using our services, you (“User”, “Subscriber”, or
            “Punter”) agree to these Terms & Conditions. If you do not agree,
            you must not use the Platform.
          </p>
        </header>

        {/* Main Terms Sections */}
        <div className="space-y-8">
          {termsData.map((section, index) => (
            <section
              key={index}
              // Gray background with a subtle shadow
              className="bg-[#162821] p-6 rounded-xl shadow-lg border-l-4 border-[#18ffc8] transition-all duration-300 hover:shadow-2xl hover:border-l-8"
            >
              <div className="flex items-center mb-3">
                {/* Primary Blue icon */}
                <section.icon className="text-3xl text-[#fea92a] mr-3" />
                {/* Section Title uses main White color */}
                <h2 className="text-2xl font-bold text-[#efefef]">
                  {section.title}
                </h2>
              </div>
              <ul className="list-disc list-outside ml-8 space-y-2 text-[#efefef] text-opacity-80">
                {section.content.map((item, i) => (
                  <li key={i} className="pl-1">
                    {/* Key policy titles are bolded and now highlighted with the white variable */}
                    {item.split(" - ").map((part, pIndex) =>
                      pIndex === 0 ? (
                        <strong
                          key={pIndex}
                          className={`text-[${EMPHASIS_TEXT_COLOR}]`}
                        >
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Final Callout (Responsible Gambling) */}
        <div className="mt-12 p-8 bg-[#376553] rounded-xl text-center shadow-xl border-t-4 border-[#f57cff]">
          <h3 className="text-3xl font-bold text-[#f57cff] mb-3">
            Gamble Responsibly
          </h3>
          <p className="text-[#efefef] text-lg leading-relaxed">
            If you feel you may have a gambling problem, please seek help at{" "}
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#18ffc8] hover:text-[#fea92a] font-bold transition-colors underline underline-offset-4"
            >
              BeGambleAware.org
            </a>{" "}
            (UK) or local support services. The Platform accepts no
            responsibility for losses incurred from gambling decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
