// styles
import "./JasonText.scss";

function JasonText({ paragraphs }) {
  return (
    <div className="jasontext">
      {paragraphs.length > 0
        ? paragraphs.map((paragraph, index) => {
            const key = `${paragraph.split(" ")[0]}-${index}`;
            return <p key={key}>{paragraph}</p>;
          })
        : null}
    </div>
  );
}

export default JasonText;
