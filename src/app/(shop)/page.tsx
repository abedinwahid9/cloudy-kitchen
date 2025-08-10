import HeroSection from "@/components/HeroSection/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Cloudie Kitchen bd",
  description:
    "Cloudie Kitchen BD offers crispy chicken, juicy momos, and smoky tandoori dishes. Order now for hot, delicious meals delivered fast to your door!",
};

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
