function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 flex flex-col justify-center items-center px-6">

      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 text-center">
        Your AI Mental
        <span className="text-indigo-600"> Wellness Journal</span>
      </h1>

      <p className="mt-8 max-w-3xl text-center text-xl text-gray-600 leading-9">
        Capture your thoughts, understand your emotions,
        and discover meaningful patterns through the power
        of Artificial Intelligence.
      </p>

      <div className="mt-10 flex gap-5">

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
          Start Journaling
        </button>

        <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default Hero;