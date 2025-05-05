import Hero from "../components/hero";
import FeatureGrid from "../components/FeatureGrid";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <FeatureGrid />
    </PageLayout>
  );
};

export default HomePage;
