import { Routes, Route } from 'react-router-dom';
import { LayoutComponent } from '../Layout/Layout';
import { HeroComponent } from '../Hero/Hero';
import { IntroComponent } from '../Intro/Intro';
import { AboutComponent } from '../About/About';
import { StepsComponent } from '../Steps/Steps';
import { ContactsComponent } from '../Contacts/Contacts';
import { FloatButtonComponent } from '../FloatButton/FloatButton';
import { ProjectsComponent } from '../Projects/Projects';

const MainPage = () => {
  return (
    <>
      <IntroComponent />
      <HeroComponent />
      <AboutComponent />
      <ProjectsComponent />
      <StepsComponent />
      <ContactsComponent />
      <FloatButtonComponent />
    </>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent /> }>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}
