// styles
import "./SiteHeader.scss";

const SiteHeader = () => {
  return (
    <>
      <header className="siteheader">
        <div className="siteheader__top">
          <h1 className="siteheader__heading">
            <span className="siteheader__heading--jason">Jason</span>{" "}
            <span className="siteheader__heading--ipsum">Ipsum</span>
          </h1>
          <p className="siteheader__text">
            Placeholder text made up of lines from your favourite Jason Momoa
            Characters!
          </p>
        </div>
      </header>
    </>
  );
};

export default SiteHeader;
