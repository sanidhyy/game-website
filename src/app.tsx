import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";
import { Story } from "@/components/story";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
export default App;
