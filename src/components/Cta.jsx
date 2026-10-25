// src/components/CTA.jsx
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#855391] to-[#fea92a]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-white mb-6">
         Your Next Level of Sports Analysis Starts Here.
        </h2>
        <p className="text-sm text-white mb-10 max-w-3xl mx-auto">
          Explore our research, review our performance and choose the membership that fits the sports you follow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            className="bg-[#09100d] text-[#efefef] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
            href="https://app.todayprediction365.com/register"
          >
            Join Membership
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
