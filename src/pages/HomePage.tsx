import FeatureGrid from "../components/FeatureGrid";
import HeroSection from "../components/HeroSection";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSection />
      <FeatureGrid />
    </PageLayout>
  );
};

export default HomePage;
