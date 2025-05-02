const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-16 w-full h-[80vh] flex justify-center items-center
">
      <div className=" container mx-auto text-center px-4">
        <h1 className="text-4xl md::text-5xl font-bold text-blue-700 mb-4">Welcome to My Company</h1>
        <p className="text-lg text-grey-600 mb-6">
          We provide modern web solutions for your business. Fast, responsive,
          and beautiful.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
