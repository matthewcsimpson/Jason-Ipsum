// styles
import "./styles/styles.scss";

// data
import quotefile from "./data/jason.json";
import SiteHeader from "./components/SiteHeader/SiteHeader";

// libraries
import { useState } from "react";
import SiteForm from "./components/SiteForm/SiteForm";

function App() {
  const [jasonParagraph, setJasonParagraph] = useState([]);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setJasonParagraph(genParagraphs(evt.target.paragraphs.value));
  };

  /**
   * Make a single paragraph of text.
   * @param {array} quotes
   * @returns string
   */
  const makeParagraph = (quotes) => {
    let para = [];
    const randomNumLines = Math.floor(Math.random() * (5 - 3 + 1) + 3);
    for (let i = 0; i < randomNumLines; i++) {
      const randomLine = Math.floor(Math.random() * quotes.length);
      para.push(quotes[randomLine].quote);
    }
    return para.join(" ");
  };

  /**
   * Generate 'num' number of paragraphs.
   * @param {Number} num
   */
  const genParagraphs = (num) => {
    let temp = [];
    for (let i = 0; i < num; i++) {
      temp.push(makeParagraph(quotefile));
    }
    return temp;
  };

  return (
    <>
      <SiteHeader />
      <SiteForm handleFormSubmit={handleFormSubmit} />
      <div className="jasontext">
        {jasonParagraph.length > 0 &&
          jasonParagraph.map((para) => {
            return <p>{para}</p>;
          })}
      </div>
    </>
  );
}

export default App;
