// styles
import "./SiteHeader.scss";

// images
import drogo from "../../assets/drogo.png";
import momoa from "../../assets/momoa.png";
import idaho from "../../assets/idaho.png";
import aquaman from "../../assets/aquaman.png";
import voss from "../../assets/voss.png";
import conan from "../../assets/conan.png";

function SiteHeader() {
  return (
    <>
      <header className="siteheader">
        <div className="siteheader__top">
          <h1 className="siteheader__heading">Jason Ipsum</h1>
          <p className="siteheader__text">
            Placeholder text made up of lines from your favourite Jason Momoa
            Characters!
          </p>
        </div>
        <div className="siteheader__jasonlist">
          <img
            className="siteheader__jasonpic siteheader__jasonpic--conan"
            src={conan}
            alt="conan the barbarian"
          ></img>
          <img
            className="siteheader__jasonpic siteheader__jasonpic--aquaman"
            src={aquaman}
            alt="aquaman"
          ></img>

          <img
            className="siteheader__jasonpic siteheader__jasonpic--momoa"
            src={momoa}
            alt="jason momoa"
          ></img>
          <img
            className="siteheader__jasonpic siteheader__jasonpic--drogo"
            src={drogo}
            alt="khal drogo"
          ></img>
          <img
            className="siteheader__jasonpic siteheader__jasonpic--idaho"
            src={idaho}
            alt="duncan idaho"
          ></img>
          <img
            className="siteheader__jasonpic siteheader__jasonpic--voss"
            src={voss}
            alt="baba voss"
          ></img>
        </div>
      </header>
    </>
  );
}

export default SiteHeader;
