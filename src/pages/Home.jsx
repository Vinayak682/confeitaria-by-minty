import HeroSection from '../components/HeroSection';
import BehindTheScenes from '../components/BehindTheScenes';
import AboutChef from '../components/AboutChef';
import FlavorPalette from '../components/FlavorPalette';
import HighlightsMenu from '../components/HighlightsMenu';
import RecipeCategories from '../components/RecipeCategories';
import ReelGallery from '../components/ReelGallery';
import FeaturedSection from '../components/FeaturedSection';
import Collaborations from '../components/Collaborations';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BehindTheScenes />
      <AboutChef />
      <HighlightsMenu />
      <RecipeCategories />
      <FlavorPalette />
      <ReelGallery />
      <FeaturedSection />
      <Testimonials />
      <Collaborations />
      <Newsletter />
    </>
  );
}
