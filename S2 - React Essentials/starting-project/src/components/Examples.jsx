import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples( props ) {
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
    setSelectedTopic(selectedButton);
  };

  return (
      <Section title="Examples" id="examples">
        <Tabs 
        // ButtonsContainer="menu" // "" - inbuilt and {} for custom made or dynamic.
        buttons={
          <>
            <TabButton isSelected={selectedTopic==='components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onClick={() => handleSelect('state')}>State</TabButton>
          </>
        }>
          { tabContent }
        </Tabs>
      </Section>
  );
}