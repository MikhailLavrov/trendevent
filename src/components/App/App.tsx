import { Routes, Route, useLocation } from 'react-router-dom';
import { LayoutComponent } from '../Layout/Layout';
import { HeroComponent } from '../Hero/Hero';
import { IntroComponent } from '../Intro/Intro';
import { AboutComponent } from '../About/About';
import { StepsComponent } from '../Steps/Steps';
import { ContactsComponent } from '../Contacts/Contacts';
import { FloatButtonComponent } from '../FloatButton/FloatButton';
import { ProjectsComponent } from '../Projects/Projects';
import { PriceComponent } from './../Price/Price';
import { GallerySection } from '../GallerySection/GallerySection';
import { useEffect } from 'react';

const useYandexMetrika = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.hash;
  
    if (typeof window.ym === "function") {
      window.ym(98993106, "hit", path.toString());
    }
  }, [location]);
  
};

const MainPage = () => {
  return (
    <>
      <IntroComponent />
      <HeroComponent />
      <AboutComponent />
      <ProjectsComponent />
      <StepsComponent />
      <PriceComponent />
      <GallerySection />
      <ContactsComponent />
      <FloatButtonComponent />
    </>
  );
}

export const App = () => {
  useYandexMetrika();
  
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent /> }>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}
