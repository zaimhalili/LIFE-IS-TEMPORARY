import './index-2.css';
import Header from './Header.jsx';
import QuoteBegin from './QuoteBegin.jsx';
import BegForm from './BegForm.jsx';
import Footer from './Footer.jsx';
import { useEffect, useState } from 'react';
import MemoryWall from './MemoryWall.jsx';

function App() {
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    // Blur background when scrolling beyond 100vh
    const handleScroll = () => {
      const scrolledPast100vh = window.scrollY > window.innerHeight;
      setBlurred(scrolledPast100vh);v
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate elements on scroll with Intersection Observer
    const elements = document.querySelectorAll('.scroll-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`background-react ${blurred ? 'blur' : ''}`} />
      <Header />
      <QuoteBegin />
      <BegForm />
      <MemoryWall />
      <Footer />
    </>
  );
}

export default App;
