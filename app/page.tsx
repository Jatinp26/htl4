import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-custom-image ">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-2 h-full">
        <p className="text-white text-[10px] sm:text-xs lg:text-sm px-3 py-px bg-opacity-10 bg-white rounded-full">✨ Prepare to Build Beyond, Coming Soon!</p>
        <div className="flex flex-col">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl text-center" style={{ fontFamily: 'JUSTICE_LEAGUE' }}>
            HACK THE LEAGUE
          </h1>
          <h2 className="bg-gradient-text-1 bg-clip-text text-transparent text-6xl sm:text-8xl lg:text-9xl -mt-3 lg:-mt-4" style={{ fontFamily: 'JUSTICE_LEAGUE' }}>BUILD BEYOND</h2>
        </div>
        <div className="flex gap-2 sm:gap-4 lg:gap-5">
          <Button label="Pre-Register" small />
          <Button label="Join Discord" outline link="https://discord.com/invite/fxP5t2w2b9" small />
        </div>

      </div>
    </div>
  );
}
