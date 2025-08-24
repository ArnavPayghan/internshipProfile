import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* here title, description and image are PROPS */}
            <CoreConcept 
              title="Component" 
              description="Core UI building block." 
              image={componentsImg} />
            <CoreConcept 
              title={CORE_CONCEPTS[1].title} 
              description={CORE_CONCEPTS[1].description} 
              image={CORE_CONCEPTS[1].image} />
            <CoreConcept { ...CORE_CONCEPTS[2] } />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
