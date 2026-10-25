// src/components/Footer.jsx
import logo from "../assets/logo3.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#09100d] py-12 border-t border-[#162821]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8" />
              <h2 className="text-lg font-bold text-[#efefef] ml-1">
                TodayPrediction365
              </h2>
            </a>
            <p className="text-[#efefef] mb-4 text-sm">
              The premier platform for tatical insight.
            </p>
          </div>

          <div>
            <h4 className="text-[#efefef] font-bold mb-4">For Users</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://app.todayprediction365.com/register"
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Join Membership
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sports")}
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Sports
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#efefef] font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#162821] text-center">
          <p className="text-[#efefef]">
            © {new Date().getFullYear()} TodayPrediction365. All rights
            reserved. Gambling involves risk. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
