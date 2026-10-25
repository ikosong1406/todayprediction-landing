// src/components/FAQ.jsx

import { useState } from "react";

import {
  FaChevronDown,
  FaQuestionCircle,
  FaShieldAlt,
  FaFutbol,
  FaBasketballBall,
  FaClock,
  FaHistory,
  FaCreditCard,
  FaCalendarAlt,
  FaHeadset,
  FaExclamationCircle,
} from "react-icons/fa";

const faqCategories = [
  {
    title: "Predictions & Coverage",
    icon: FaFutbol,
    questions: [
      {
        question: "Are predictions guaranteed?",
        answer:
          "No. Sports predictions are based on analysis, statistics, team form, and other available information, but no prediction is guaranteed to win. Unexpected events, injuries, red cards, and changes in team performance can affect outcomes. We encourage responsible betting and recommend never staking money you cannot afford to lose.",
      },
      {
        question:
          "Which football leagues and NBA markets are covered?",
        answer:
          "Our football coverage focuses on major competitions, including the English Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and selected European competitions. NBA coverage may include match winners, point spreads, totals (over/under), and selected player or team markets, depending on availability. The competitions and markets available for each prediction will be displayed alongside the relevant selection.",
      },
      {
        question: "When are predictions published?",
        answer:
          "Predictions are published according to the match schedule and our analysis process. Publication times may vary depending on the competition, available team news, and the market being assessed. Check the predictions dashboard for the latest published selections and their timestamps. Any specific daily publication schedule will be displayed on the platform once confirmed.",
      },
    ],
  },
  {
    title: "Results & Performance",
    icon: FaHistory,
    questions: [
      {
        question: "How can I view previous results?",
        answer:
          "Visit the historical results or settled betting slips section of the website. You can review available booking references, individual match selections, prediction markets, odds, final scores, settlement statuses, and timestamps. Previous records should remain available after settlement so users can assess performance over time.",
      },
    ],
  },
  {
    title: "Payments & Membership",
    icon: FaCreditCard,
    questions: [
      {
        question: "Which currencies and payment methods are supported?",
        answer:
          "Available currencies and payment methods depend on the payment options enabled for your account and region. Visit the membership or checkout page to see the currencies, cards, bank transfers, and other payment methods actually supported before making a payment. Only advertise a payment option as supported when it is available at checkout.",
      },
      {
        question: "How do renewals and cancellations work?",
        answer:
          "Your membership page should explain the billing period, renewal date, renewal price, and cancellation process before you subscribe. If a plan renews automatically, you should be able to find its renewal terms and cancellation instructions in your account or membership settings. Check the terms associated with your specific plan to understand when cancellation takes effect and whether any refund is available.",
      },
    ],
  },
  {
    title: "Match Updates & Support",
    icon: FaHeadset,
    questions: [
      {
        question: "What happens if a match is postponed?",
        answer:
          "A postponed, abandoned, or cancelled match may be settled differently depending on the competition, the applicable bookmaker's rules, and the market involved. If a selection is marked void, it should be reflected accurately in the historical results. Where a prediction's status is still uncertain, check the match updates and the relevant settlement rules rather than assuming the selection is a win or a loss.",
      },
      {
        question: "How can I contact support?",
        answer:
          "You can contact our support team using the contact details or support form provided on the website. For faster assistance, include your registered account email, membership plan if applicable, and a clear description of your issue. Never send your password, full card details, or other sensitive payment credentials through a support message.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Predictions & Coverage"
  );

  const [openQuestion, setOpenQuestion] = useState(0);

  const selectedCategory = faqCategories.find(
    (category) => category.title === activeCategory
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenQuestion(0);
  };

  const handleQuestionToggle = (index) => {
    setOpenQuestion((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="overflow-hidden bg-[#09100d] py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-4xl">
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Everything you need to know about our predictions,
            sports coverage, historical results, memberships,
            payments, and support.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">

          {/* Category Navigation */}
          <aside className="rounded-2xl border border-[#855391] bg-[#162821] p-3 sm:p-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {faqCategories.map((category) => {
                const Icon = category.icon;

                const isActive =
                  activeCategory === category.title;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(category.title)
                    }
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#18ffc8] text-[#07110f] shadow-lg shadow-[#18ffc8]/10"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className="shrink-0 text-lg" />

                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Support Card */}
            {/* <div className="mt-4 rounded-xl border border-white/5 bg-[#0d1913] p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fea92a]/10">
                <FaHeadset className="text-lg text-[#fea92a]" />
              </div>

              <h3 className="font-bold text-white">
                Still have questions?
              </h3>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#18ffc8] transition-colors hover:text-white"
              >
                Contact Support
                <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </aside>

          {/* Questions */}
          <div className="min-w-0">

            {/* Accordion */}
            <div className="space-y-3">
              {selectedCategory.questions.map(
                (item, index) => {
                  const isOpen = openQuestion === index;

                  return (
                    <div
                      key={item.question}
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-[#855391] bg-[#162821]"
                          : "border-[#855391] bg-[#101b15] hover:border-[#18ffc8]/20"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleQuestionToggle(index)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                      >
                        <span className="text-sm font-bold leading-6 text-white sm:text-base">
                          {item.question}
                        </span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 bg-[#fea92a] text-[#07110f]"
                              : "bg-[#fea92a] text-[#07110f] hover:bg-opacity-90"
                          }`}
                        >
                          <FaChevronDown size={12} />
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-white/5 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                            <p className="text-sm leading-7 text-gray-400 sm:text-base">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;