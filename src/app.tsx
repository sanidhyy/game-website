import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Navbar } from "@/components/navbar";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};
export default App;
