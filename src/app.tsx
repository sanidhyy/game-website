import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";
import { Story } from "@/components/story";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Story />
      </main>
    </div>
  );
};
export default App;
