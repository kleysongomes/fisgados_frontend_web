import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* outras seções */}
        <SectionOne />
        <SectionTwo />
      </main>
      <Footer />
    </div>
  );
}
