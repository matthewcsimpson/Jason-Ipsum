// styles
import "./styles/styles.scss";

// data
import quotefile from "./data/jason.json";

// components
import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteForm from "./components/SiteForm/SiteForm";
import JasonText from "./components/JasonText/JasonText";
import SiteFooter from "./components/SiteFooter/SiteFooter";

// libraries
import { useState } from "react";

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
    const randomNumLines = Math.floor(Math.random() * (8 - 5 + 1) + 5);
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
      <div className="siteWrapper">
        <SiteHeader />
        <SiteForm handleFormSubmit={handleFormSubmit} />
        <JasonText jasonParagraph={jasonParagraph} />
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
