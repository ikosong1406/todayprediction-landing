import { useEffect, useState } from "react";
import {
  FaCookieBite,
  FaShieldAlt,
  FaTimes,
  FaCheck,
  FaSlidersH,
  FaLock,
} from "react-icons/fa";

const CONSENT_KEY = "website_cookie_consent";

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function CookieConsent() {
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem(CONSENT_KEY);

      if (!savedConsent) {
        setShowModal(true);
      } else {
        const parsed = JSON.parse(savedConsent);

        setPreferences({
          ...defaultPreferences,
          ...parsed,
          necessary: true,
        });
      }
    } catch {
      setShowModal(true);
    }
  }, []);

  const saveConsent = (selectedPreferences) => {
    const consent = {
      necessary: true,
      analytics: selectedPreferences.analytics,
      marketing: selectedPreferences.marketing,
      savedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    } catch (error) {
      console.error("Unable to save cookie preferences:", error);
    }

    setPreferences(consent);
    setShowModal(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectOptional = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const togglePreference = (type) => {
    if (type === "necessary") return;

    setPreferences((previous) => ({
      ...previous,
      [type]: !previous[type],
    }));
  };

  // Allow visitors to reopen cookie settings from the footer.
  useEffect(() => {
    const openSettings = () => {
      try {
        const savedConsent = localStorage.getItem(CONSENT_KEY);

        if (savedConsent) {
          const parsed = JSON.parse(savedConsent);

          setPreferences({
            ...defaultPreferences,
            ...parsed,
            necessary: true,
          });
        }
      } catch {
        setPreferences(defaultPreferences);
      }

      setShowSettings(true);
      setShowModal(true);
    };

    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  if (!showModal) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[9999] w-[calc(100%-2rem)] max-w-[500px] sm:bottom-6 sm:right-6">
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
        className="pointer-events-auto relative max-h-[75dvh] overflow-y-auto rounded-2xl border border-[#fea92a]/50 bg-[#0b1512]/95 p-3 text-white shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-5"
      >

        <h2
          id="cookie-title"
          className="mb-2 pr-5 text-lg font-extrabold leading-tight"
        >
          {showSettings
            ? "Cookie preferences"
            : "We value your privacy"}
        </h2>

        <p
          id="cookie-description"
          className="text-xs leading-6 text-gray-400"
        >
          We use cookies to keep our website working, understand visitor
          activity, and improve your experience. Choose which optional
          cookies you want to allow.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          
              <button
                type="button"
                onClick={acceptAll}
                className="flex min-h-7 items-center justify-center gap-2 rounded-lg bg-[#18ffc8] px-3 py-2 text-xs font-extrabold text-[#04110c] transition hover:bg-[#5bffda]"
              >
                <FaCheck />
                Accept All
              </button>

              <button
                type="button"
                onClick={rejectOptional}
                className="min-h-7 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-gray-200 transition hover:bg-white/10"
              >
                Reject Optional
            </button>
        </div>
      </div>
    </div>
  );
}

function Preference({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] p-3 last:border-b-0">
      <div className="min-w-0 flex-1">
        <h3 className="text-xs font-bold text-white">{title}</h3>

        <p className="mt-1 text-[11px] leading-5 text-gray-400">
          {description}
        </p>

        {disabled && (
          <span className="mt-1 inline-block text-[9px] font-bold uppercase tracking-wider text-[#18ffc8]">
            Always active
          </span>
        )}
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full p-[3px] transition ${
          checked ? "bg-[#18ffc8]" : "bg-gray-700"
        } ${
          disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
        }`}
      >
        <span
          className={`block h-[18px] w-[18px] rounded-full bg-white transition-transform ${
            checked ? "translate-x-[18px]" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export default CookieConsent;