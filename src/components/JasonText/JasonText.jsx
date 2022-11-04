import "./JasonText.scss";

function JasonText({ jasonParagraph }) {
  return (
    <>
      <div className="jasontext">
        {jasonParagraph.length > 0
          ? jasonParagraph.map((para) => {
              return <p>{para}</p>;
            })
          : null}
      </div>
    </>
  );
}

export default JasonText;
