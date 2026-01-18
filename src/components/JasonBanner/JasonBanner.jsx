// styles
import "./JasonBanner.scss";

// data
import { jasonImages } from "../../data/jasonImages";

// functions
import { shuffleArray } from "../../lib/shuffleArray";

const JasonBanner = () => {
  const shuffledJasons = shuffleArray(jasonImages).slice(0, 5);
  return (
    <div className="jasonlist">
      {shuffledJasons.map((jason, index) => (
        <img
          key={`${jason.alt}-${index}`}
          src={jason.src}
          alt={jason.alt}
          className="jasonlist__pic"
        />
      ))}
    </div>
  );
};

export default JasonBanner;
