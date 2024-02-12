export default function Hero() {
  return (
    <div className="relative overflow-hidden max-w-full">
      <img
        src="/img/hero-background.webp"
        alt="hero background"
        className="absolute left-0 bottom-0 min-w-max lg:min-w-0 h-5/6 opacity-70 2xl:left-1/2 2xl:-translate-x-1/2 -z-10"
      />
      <div className="overflow-hidden grid lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 pt-14 px-6 sm:px-12 lg:px-8 sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto min-h-screen 2xl:py-72 2xl:min-h-full">
        <div className="flex items-end lg:items-center sm:max-w-xl">
          <h1 className="flex flex-col font-semibold text-left text-5xl lg:text-6xl xl:text-7xl">
            <span className="">We are</span>
            <span className="">Life Itself</span>
            <span className="font-extrabold">Labs</span>
          </h1>
        </div>
        <div className="flex items-start lg:items-center sm:max-w-3xl lg:max-w-none xl:mx-auto">
          <h4 className="font-light tracking-normal text-2xl xl:text-3xl">
            We innovate <span className="font-bold">systemic</span> solutions
            <br className="hidden sm:block" /> to{" "}
            <span className="font-bold">complex</span> problems in support
            <br className="hidden sm:block" /> of a global{" "}
            <span className="font-bold">transition</span>.
          </h4>
        </div>
      </div>
    </div>
  );
}
