import Hero from "./_components/hero";
import Navbar from "./_components/navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <Navbar />
      <Hero />
    </div>
  );
};