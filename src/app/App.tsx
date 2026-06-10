import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

const DESIGN_WIDTH = 1920;

function ViewportScaler() {
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;

    const update = () => {
      if (window.innerWidth < 768) {
        root.style.width = '100%';
        root.style.zoom = '1';
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.overflowX = 'hidden';
        document.body.style.margin = '0';
        return;
      }
      const scale = window.innerWidth / DESIGN_WIDTH;
      root.style.width = `${DESIGN_WIDTH}px`;
      root.style.zoom = String(scale);
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
      document.body.style.margin = '0';
    };

    update();
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      root.style.width = '';
      root.style.zoom = '';
    };
  }, []);

  return null;
}
import FigmaLandingPage from '/src/imports/1landingpage/1';
import CMSPage from './components/CMSPage';
import Page2 from '/src/imports/2/2';
import Menu from '/src/imports/3/3';
import About from '/src/imports/31/31';
import Contact from '/src/imports/32/32';
import InteriorKitchen from '/src/imports/33/33';
import Interior from '/src/imports/34/34';
import InteriorPrice1 from '/src/imports/341/341';
import InteriorPrice2 from '/src/imports/342/342';
import Sink from '/src/imports/35/35';
import SinkPrice1 from '/src/imports/351/351';
import SinkPrice2 from '/src/imports/352/352';
import ProjectDetail from '/src/imports/21/21';
import ProjectDetail1 from '/src/imports/22/22';
import ProjectDetail2 from '/src/imports/23/23';
import ProjectDetail3 from '/src/imports/12/12';
import CmsAdmin from '/src/imports/Cms/Cms';
import WebsitePage from '/src/imports/11website/11website';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ViewportScaler />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<FigmaLandingPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/cms" element={<CMSPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interior-kitchen" element={<InteriorKitchen />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/interior-price-1" element={<InteriorPrice1 />} />
        <Route path="/interior-price-2" element={<InteriorPrice2 />} />
        <Route path="/sink" element={<Sink />} />
        <Route path="/sink-price-1" element={<SinkPrice1 />} />
        <Route path="/sink-price-2" element={<SinkPrice2 />} />
        <Route path="/projects/Cammeo" element={<ProjectDetail />} />
        <Route path="/project/Capraia" element={<ProjectDetail1 />} />
        <Route path="/project/TITLIS-WHITE" element={<ProjectDetail2 />} />
        <Route path="/project/twenty-resina" element={<ProjectDetail3 />} />
        <Route path="/cms-admin" element={<CmsAdmin />} />
        <Route path="/website" element={<WebsitePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
