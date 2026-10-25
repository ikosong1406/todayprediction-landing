import React, { useEffect } from "react";
import {
  FaLock,           // Information We Collect, How We Use
  FaUserShield,     // Your Rights
  FaRegEnvelope,    // Contact Us
  FaShareAlt,       // Sharing of Information
  FaShieldAlt,      // Data Security
  FaRecycle,        // Data Retention
  FaCookieBite,     // Cookies
  FaGlobe,          // International Transfers
  FaBaby,           // Children's Privacy
  FaScroll,         // Changes to This Policy
} from "react-icons/fa";

const Privacy = () => {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  // Define the consistent color for high-contrast emphasis
  const EMPHASIS_TEXT_COLOR = "#efefef"; // White (improves readability over purple)

  const privacyData = [
    {
      icon: FaLock,
      title: "1. Information We Collect",
      content: [
        "Personal Information – your name, email address, date of birth, payment details, and account credentials.",
        "Usage Data – device information, IP address, browser type, and activity on the Platform.",
        "Content Data – tips, messages, and other material you upload or share on the Platform.",
      ],
    },
    {
      icon: FaLock,
      title: "2. How We Use Your Information",
      content: [
        "To provide and manage your account on the Platform.",
        "To process payments and subscriptions.",
        "To communicate with you about updates, promotions, or support.",
        "To improve and personalize user experience.",
        "To comply with legal and regulatory obligations.",
      ],
    },
    {
      icon: FaShareAlt,
      title: "3. Sharing of Information",
      content: [
        "We do not sell your personal data to third parties.",
        "We may share information with trusted service providers (e.g., payment processors, hosting providers).",
        "We may disclose information if required by law, regulation, or legal process.",
        "Punters’ profile information may be publicly visible to subscribers for transparency purposes.",
      ],
    },
    {
      icon: FaRecycle,
      title: "4. Data Retention",
      content: [
        "We retain personal data only as long as necessary to provide services and comply with legal obligations.",
        "You may request deletion of your account and associated personal data at any time, subject to legal retention requirements.",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "5. Data Security",
      content: [
        "We implement technical and organizational measures to safeguard your data.",
        "However, no system is 100% secure, and we cannot guarantee absolute protection of your information.",
      ],
    },
    {
      icon: FaCookieBite,
      title: "6. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar technologies to enhance user experience, analyze traffic, and deliver targeted content.",
        "You can control cookies through your browser settings, but some features of the Platform may not function properly without them.",
      ],
    },
    {
      icon: FaUserShield,
      title: "7. Your Rights (GDPR and Applicable Laws)",
      content: [
        "You have the right to access, correct, or delete your personal data.",
        "You have the right to restrict or object to data processing in certain circumstances.",
        "You have the right to data portability (to obtain a copy of your data in a structured format).",
        "To exercise your rights, contact us at support@todayprediction365.com.",
      ],
    },
    {
      icon: FaGlobe,
      title: "8. International Data Transfers",
      content: [
        "If you access the Platform outside Nigeria, your information may be transferred to and processed in countries that may not provide the same data protection standards.",
      ],
    },
    {
      icon: FaBaby,
      title: "9. Children's Privacy",
      content: [
        "The Platform is intended for users aged 18 and older.",
        "We do not knowingly collect personal data from minors. If we learn that we have inadvertently collected data from a minor, we will delete it promptly.",
      ],
    },
    {
      icon: FaScroll,
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time.",
        "We will notify users of material changes via the Platform or email.",
        "Continued use of the Platform after changes constitutes acceptance of the updated Policy.",
      ],
    },
    {
      icon: FaRegEnvelope,
      title: "11. Contact Us",
      content: [
        "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
        "Email: support@todayprediction365.com.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#09100d] text-[#efefef] py-16 px-4 sm:px-6 lg:px-8 pt-30">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 border-b-2 border-[#376553] pb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#18ffc8] mb-2 tracking-tight">
            Privacy Policy
          </h1>
          {/* Date Highlight using Orange */}
          <p className="text-lg text-[#efefef] font-medium">
            Last Updated:{" "}
            <span className="text-[#fea92a]">August 24, 2026</span>
          </p>
          {/* Introductory paragraph uses white for excellent readability */}
          <p className={`mt-4 text-[${EMPHASIS_TEXT_COLOR}] leading-relaxed italic text-opacity-90`}>
            TodayPrediction365 (“the Platform”, “we”, “us”, “our”) is committed to
            protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our
            services. By using the Platform, you consent to the practices
            described in this policy.
          </p>
        </header>

        {/* Main Privacy Sections */}
        <div className="space-y-8">
          {privacyData.map((section, index) => (
            <section
              key={index}
              // Gray background with a subtle shadow and blue border accent
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
                    {/* Policy subject is bolded and highlighted with the white variable */}
                    {item.split(" – ").map((part, pIndex) =>
                      pIndex === 0 ? (
                        <strong
                          key={pIndex}
                          className={`text-[${EMPHASIS_TEXT_COLOR}]`}
                        >
                          {part}
                        </strong>
                      ) : (
                        ` – ${part}`
                      )
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Final Callout (Contact Info) */}
        <div className="mt-12 p-8 bg-[#376553] rounded-xl text-center shadow-xl border-t-4 border-[#f57cff]">
          <h3 className="text-3xl font-bold text-[#f57cff] mb-3">
            Questions? We're Here to Help.
          </h3>
          <p className="text-[#efefef] text-lg leading-relaxed">
            If you have any questions or concerns regarding your privacy or data
            practices, please reach out to us directly at:
          </p>
          <p className="text-2xl mt-3">
            <a
              href="mailto:support@todayprediction365.com"
              className="text-[#18ffc8] hover:text-[#fea92a] font-bold transition-colors underline underline-offset-4"
            >
              support@todayprediction365.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;