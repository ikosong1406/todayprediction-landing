// src/components/CTA.jsx
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#855391] to-[#fea92a]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Results?
        </h2>
        <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
          Join thousands of successful bettors and traders who are already
          profiting from our expert community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            className="bg-[#09100d] text-[#efefef] px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
            href="https://app.thepunterhub.com/register"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
