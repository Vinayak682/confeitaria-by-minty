import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import FrasersLaunch from './pages/FrasersLaunch';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<FrasersLaunch />} />
        <Route element={<Layout />}>
          <Route path="minty" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="recipes" element={<RecipeList />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          {/* Catch-all: bare hashes like #reels resolve to "/reels" with no
              matching route. Render Home so the page never goes blank — Layout
              then scrolls to the matching section id if one exists. */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
