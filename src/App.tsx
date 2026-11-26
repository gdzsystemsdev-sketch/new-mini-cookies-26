import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarningsCalculator from './components/EarningsCalculator';
import Testimonials from './components/Testimonials';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import SectionDifference from './components/SectionDifference';
import Section6 from './components/Section6';
import WhatWeDontDo from './components/WhatWeDontDo';
import Section7 from './components/Section7';
import Section9 from './components/Section9';
import ApplicationForm from './components/ApplicationForm';
import ReferModel from './components/ReferModel';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Careers from './components/Careers';
import Referrals from './components/Referrals';
import Leaderboard from './components/Leaderboard';
import CaseStudy1 from './components/CaseStudy1';
import Earnings from './components/Earnings';
import { useCurrency } from './lib/useCurrency';

function App() {
  const [currency, setCurrency] = useCurrency();

  if (window.location.pathname === '/privacy') {
    return <PrivacyPolicy />;
  }

  if (window.location.pathname === '/terms') {
    return <TermsOfService />;
  }

  if (window.location.pathname === '/about') {
    return <AboutUs />;
  }

  if (window.location.pathname === '/how-it-works') {
    return <HowItWorks />;
  }

  if (window.location.pathname === '/careers') {
    return <Careers />;
  }

  if (window.location.pathname === '/referrals') {
    return <Referrals />;
  }

  if (window.location.pathname === '/leaderboard') {
    return <Leaderboard />;
  }

  if (window.location.pathname === '/case-study/sara') {
    return <CaseStudy1 />;
  }

  if (window.location.pathname === '/earnings') {
    return <Earnings />;
  }

  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <Hero />
      <EarningsCalculator currency={currency} onCurrencyChange={setCurrency} />
      <Testimonials />
      <Section1 />
      <Section2 />
      <Section4 />
      <SectionDifference />
      <Section6 />
      <WhatWeDontDo />
      <Section7 />
      <Section9 />
      <ApplicationForm />
      <ReferModel currency={currency} />
      <Footer />
    </div>
  );
}

export default App;
