import bannerImg from "../assets/running.jpg";

function Hero() {
  return (
    <section
      className="text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg h-[620px] md:h-[650px]">
        <div className="mt-36 md:mt-16">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            Welcome to RunFest 2025
          </h1>
          <h2 className="text-3xl md:text-8xl font-bold text-orange-300 mt-2">
            Join the Ultimate Running Experience!
          </h2>
          <p className="mt-2 md:mt-6 text-lg md:text-xl text-white">
            Challenge yourself and be part of the biggest running event of the
            year.
          </p>
          <button className="mt-4 px-6 py-3 bg-orange-600 text-white md:text-lg rounded-lg hover:bg-orange-700">
            Join Event
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
