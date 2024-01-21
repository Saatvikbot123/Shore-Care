import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { STATISTICS } from "../data3";


export default function Statistics() {
    const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{STATISTICS[selectedTopic].title}</h3>
        <p>{STATISTICS[selectedTopic].description}</p>
      </div>
    );
  }

    return (
      <Section title="Statistics" id="statistics">
        <Tabs
          buttonsContainer="menu"
          buttons=
          {
            <>
              <TabButton
                isSelected={selectedTopic === "testing"}
                onClick={() => handleSelect("testing")}
              >
                Plastic
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
        <menu></menu>
      </Section>

      
    );

}