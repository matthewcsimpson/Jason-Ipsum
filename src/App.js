// libraries
import { useState } from "react";

// styles
import "./styles/styles.scss";

// components
import SiteHeader from "./components/SiteHeader/SiteHeader";
import JasonBanner from "./components/JasonBanner/JasonBanner";
import SiteForm from "./components/SiteForm/SiteForm";
import JasonText from "./components/JasonText/JasonText";
import SiteFooter from "./components/SiteFooter/SiteFooter";

// data
import jasonQuotes from "./data/jasonQuotes.js";

// functions
import { genParagraphs } from "./lib/genParagraphs.js";

function App() {
  const [jasonParagraph, setJasonParagraph] = useState([]);

  /**
   * Handle form submission
   * @param {*} evt
   */
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setJasonParagraph(
      genParagraphs(jasonQuotes, Number(evt.target.paragraphs.value)),
    );
  };

  return (
    <>
      <div className="siteWrapper">
        <SiteHeader />
        <JasonBanner />
        <SiteForm handleFormSubmit={handleFormSubmit} />
        <JasonText jasonParagraph={jasonParagraph} />
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
