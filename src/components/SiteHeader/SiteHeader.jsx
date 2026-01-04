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
            className="siteheader__jasonpic"
            src={conan}
            alt="conan the barbarian"
          />
          <img className="siteheader__jasonpic" src={voss} alt="baba voss" />
          <img className="siteheader__jasonpic" src={aquaman} alt="aquaman" />
          <img className="siteheader__jasonpic" src={momoa} alt="jason momoa" />
          <img className="siteheader__jasonpic" src={drogo} alt="khal drogo" />
          <img
            className="siteheader__jasonpic"
            src={idaho}
            alt="duncan idaho"
          />
        </div>
      </header>
    </>
  );
}

export default SiteHeader;
