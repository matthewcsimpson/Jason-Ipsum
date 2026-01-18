// styles
import "./SiteFooter.scss";

function SiteFooter() {
  return (
    <>
      <div className="sitefooter">
        <p className="sitefooter__text">
          A very silly thing made by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://matthewcsimpson.dev"
            className="sitefooter__link"
          >
            Matthew Simpson
          </a>
        </p>
        <p className="sitefooter__text sitefooter__text--small">
          If you can read this you don't need glasses
        </p>
      </div>
    </>
  );
}

export default SiteFooter;
