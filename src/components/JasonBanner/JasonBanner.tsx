import "./JasonBanner.scss";

// images
import drogo from "../../assets/drogo.png";
import momoa from "../../assets/momoa.png";
import idaho from "../../assets/idaho.png";
import aquaman from "../../assets/aquaman.png";
import voss from "../../assets/voss.png";
import conan from "../../assets/conan.png";

const JasonBanner = () => {
  return (
    <div className="jasonlist">
      <img className="jasonlist__pic" src={aquaman} alt="aquaman" />
      <img className="jasonlist__pic" src={drogo} alt="khal drogo" />
      <img className="jasonlist__pic" src={momoa} alt="jason momoa" />
      <img className="jasonlist__pic" src={conan} alt="conan the barbarian" />
      <img className="jasonlist__pic" src={voss} alt="baba voss" />
      <img className="jasonlist__pic" src={idaho} alt="duncan idaho" />
    </div>
  );
};

export default JasonBanner;
