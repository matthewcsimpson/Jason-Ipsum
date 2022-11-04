import "./SiteForm.scss";

function SiteForm({ handleFormSubmit }) {
  return (
    <>
      <div className="paragraphselector">
        <form className="paragraphselector__form" onSubmit={handleFormSubmit}>
          <label className="paragraphselector__label" htmlFor="paragraphs">
            How much Momoa can you handle?
          </label>
          <select
            className="paragraphselector__select"
            id="paragraphs"
            name="paragraphs"
          >
            <option className="paragraphselector__option" value="1">
              One Paragraph
            </option>
            <option className="paragraphselector__option" value="2">
              Two Paragraphs
            </option>
            <option className="paragraphselector__option" value="3">
              Three Paragraphs
            </option>
            <option className="paragraphselector__option" value="4">
              Four Paragraphs
            </option>
            <option className="paragraphselector__option" value="5">
              Five Paragraphs
            </option>
            <option className="paragraphselector__option" value="6">
              Six Paragraphs
            </option>
            <option className="paragraphselector__option" value="7">
              Seven Paragraphs
            </option>
            <option className="paragraphselector__option" value="8">
              Eight Paragraphs
            </option>
            <option className="paragraphselector__option" value="10">
              Ten Paragraphs
            </option>
            <option className="paragraphselector__option" value="9">
              Nine Paragraphs
            </option>
          </select>
          <button className="paragraphselector__button" type="submit">
            Generate!
          </button>
        </form>
      </div>
    </>
  );
}

export default SiteForm;
