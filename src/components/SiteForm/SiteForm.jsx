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
            <option value="1">One Paragraph</option>
            <option value="2">Two Paragraphs</option>
            <option value="3">Three Paragraphs</option>
            <option value="4">Four Paragraphs</option>
            <option value="5">Five Paragraphs</option>
            <option value="6">Six Paragraphs</option>
            <option value="7">Seven Paragraphs</option>
            <option value="8">Eight Paragraphs</option>
            <option value="9">Nine Paragraphs</option>
            <option value="10">Ten Paragraphs</option>
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
