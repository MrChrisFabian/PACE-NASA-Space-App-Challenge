import { Link } from "react-router-dom";

const LandingPage = () => {
  const handleLogoError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.log(event.currentTarget.src);
    event.currentTarget.src = "/PACE-NASA-Space-App-Challenge/arandu-logo.webp";
  };
  const handleIconError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.log(event.currentTarget.src);
    event.currentTarget.src =
      "/PACE-NASA-Space-App-Challenge/arandu-pace-icon.png";
  };
  return (
    <main>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#7dc9aa_100%)]"></div>

      <section className="flex flex-col items-center justify-center gap-y-10 px-8 xl:px-0 my-auto h-screen">
        <img
          src="./arandu-pace-icon.png"
          alt="arandu pace icon"
          onError={handleIconError}
        />

        <div className="flex flex-col items-center gap-y-2">
          <img
            src="./arandu-logo.webp"
            alt="Arandu logo"
            onError={handleLogoError}
          />

          <p className="font-normal">
            Arandu means <i>the wisdom rooted in nature</i>
          </p>
        </div>

        {/* <img src="./pace-space.webp" alt="A picture of the pace spacecraft" className='rounded-lg w-full  lg:w-1/3 xl:w-1/3' /> */}

        <Link
          to="/app"
          className="start-learning-link bg-zinc-950 border border-green-950 text-white rounded-md w-full lg:w-1/3 xl:w-1/3 text-center py-2 hover:brightness-150 transition-all ease-in-out duration-300"
        >
          ✨ Start Learning
        </Link>

        <p className="text-center text-green-900 text-sm font-normal max-w-lg mt-4">
          Unlock the power of scientific knowledge through the PACE
          mission—understanding the ocean and atmosphere to sustain life on
          Earth.
        </p>

        <p className="text-sm text-center">
          Open Source project presented at the
          <a
            className="underline"
            href="https://www.spaceappschallenge.org/nasa-space-apps-2024/"
          >
            International Space Apps Challenge 2024
          </a>
          <br />
        </p>
      </section>
    </main>
  );
};

export default LandingPage;
