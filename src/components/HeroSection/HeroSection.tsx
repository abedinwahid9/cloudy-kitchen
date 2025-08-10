import Image from "next/image";
import hero from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <div className="mt-20">
      <Image
        className="w-full h-full"
        src={hero}
        width={0}
        height={0}
        alt="hero"
      />
    </div>
  );
};

export default HeroSection;
