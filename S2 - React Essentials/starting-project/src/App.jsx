import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  let tabContent = <p>Please Select a Topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{ EXAMPLES[selectedTopic].title }</h3>
        <p>{ EXAMPLES[selectedTopic].description }</p>
        <pre>
          <code>
            { EXAMPLES[selectedTopic].code }
          </code>
        </pre>
      </div>
    );
  }

  function handleSelect( selectedButton ) {
    // selectedButton => 'components', 'JSX', 'Props', 'State';
    setSelectedTopic(EXAMPLES[selectedButton]);
  };

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          { tabContent }
        </section>
      </main>
    </div>
  );
}

export default App;
