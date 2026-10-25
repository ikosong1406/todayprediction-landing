import background from "../assets/background.gif";

const Sports = () => {
  const images = [
    "https://i.pinimg.com/1200x/01/41/de/0141de9993f9fd4fdf7828d0555d3167.jpg",
    "https://i.pinimg.com/736x/6b/55/4a/6b554ac4d1ec1f3cadee0b1c231199ef.jpg",
    "https://i.pinimg.com/736x/3e/c8/f4/3ec8f490fded0bd06cc4d9a1d1dcf39c.jpg",
    "https://i.pinimg.com/1200x/a7/7f/d7/a77fd70a8689c37c0a8696dc2e2d7ca1.jpg",
    "https://i.pinimg.com/1200x/98/b4/7e/98b47ec7996bc3d60299fc875969f952.jpg",
    "https://i.pinimg.com/736x/a1/2b/9d/a12b9daea6ec1097989a7f423463b1d0.jpg",
    "https://i.pinimg.com/1200x/ff/fa/a2/fffaa22a80debb6ce84fa1b1b9cd5cc5.jpg",
    "https://i.pinimg.com/736x/d9/44/23/d944236e7b7abf2611ad06a163da40fb.jpg",
  ];

  return (
    <section id="sports" className="relative overflow-hidden py-10">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={background} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...images, ...images].map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="h-[190px] w-[calc((100vw-3rem)/2)] shrink-0 overflow-hidden rounded-xl border border-[#376553] bg-[#09100d] sm:h-[170px] sm:w-[calc((100vw-5rem)/4)] lg:h-[190px] lg:w-[calc((100vw-7.5rem)/7)]"
              >
                <img
                  src={image}
                  alt={`Game ${(index % images.length) + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
