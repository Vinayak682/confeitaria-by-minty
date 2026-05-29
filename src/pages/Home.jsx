import HeroSection from '../components/HeroSection';
import AboutChef from '../components/AboutChef';
import FlavorPalette from '../components/FlavorPalette';
import HighlightsMenu from '../components/HighlightsMenu';
import RecipeCategories from '../components/RecipeCategories';
import ReelGallery from '../components/ReelGallery';
import Collaborations from '../components/Collaborations';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutChef />
      <HighlightsMenu />
      <RecipeCategories />
      <FlavorPalette />
      <ReelGallery />
      <Testimonials />
      <Collaborations />
      <Newsletter />
    </>
  );
}
