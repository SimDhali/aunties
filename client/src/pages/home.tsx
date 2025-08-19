import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesBanner from "@/components/features-banner";
import FlavoursSection from "@/components/flavours-section";
import IngredientsSection from "@/components/ingredients-section";
import AboutSection from "@/components/about-section";
import RecipesSection from "@/components/recipes-section";
import StoreLocator from "@/components/store-locator";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesBanner />
      <FlavoursSection />
      <IngredientsSection />
      <AboutSection />
      <RecipesSection />
      <StoreLocator />
      <Newsletter />
      <Footer />
    </div>
  );
}
