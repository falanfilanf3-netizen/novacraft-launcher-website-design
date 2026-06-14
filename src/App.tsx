import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Versions from "@/components/Versions";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-charcoal-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Versions />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
