import HeroSection from '../components/HeroSection';
import AboutChef from '../components/AboutChef';
import FeaturedCreations from '../components/FeaturedCreations';
import FlavorPalette from '../components/FlavorPalette';
import RecipeFeedPreview from '../components/RecipeFeedPreview';
import HighlightsMenu from '../components/HighlightsMenu';
import RecipeCategories from '../components/RecipeCategories';
import ReelGallery from '../components/ReelGallery';
import Collaborations from '../components/Collaborations';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutChef />
      <HighlightsMenu />
      <RecipeCategories />
      <FeaturedCreations />
      <FlavorPalette />
      <RecipeFeedPreview />
      <ReelGallery />
      <Testimonials />
      <Collaborations />
    </>
  );
}
