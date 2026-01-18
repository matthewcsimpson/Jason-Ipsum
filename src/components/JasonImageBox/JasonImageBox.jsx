// styles
import "./JasonImageBox.scss";

const JasonImageBox = ({
  currentImage,
  nextImage,
  isFading,
  onFadeComplete,
}) => {
  /**
   * Handle transition end event for the next image
   * @param {*} evt
   * @returns
   */
  const handleTransitionEnd = (evt) => {
    if (evt.propertyName !== "opacity") {
      return;
    }
    if (!evt.target.classList.contains("jasonimagebox__next")) {
      return;
    }
    if (!isFading) {
      return;
    }
    onFadeComplete();
  };

  return (
    <div className={`jasonimagebox ${isFading ? "is-fading" : ""}`}>
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className="jasonimagebox__layer jasonimagebox__current"
        draggable="false"
      />

      <img
        src={(nextImage ?? currentImage).src}
        alt={(nextImage ?? currentImage).alt}
        className="jasonimagebox__layer jasonimagebox__next"
        onTransitionEnd={handleTransitionEnd}
        draggable="false"
      />
    </div>
  );
};

export default JasonImageBox;
