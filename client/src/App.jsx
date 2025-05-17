import ThemeToggle from './components/ToggleTheme';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import Header from './components/Header';

function App() {
  return (
    <>  

      {/* Main Page Sections */}
      <ThemeToggle />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </>
  );
}

export default App;
