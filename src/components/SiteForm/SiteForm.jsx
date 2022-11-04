function SiteForm({ handleFormSubmit }) {
  return (
    <>
      <div className="paragraphselector">
        <form className="paragraphseelctor__form" onSubmit={handleFormSubmit}>
          <label htmlFor="paragraphs">How much Momoa can you handle?</label>
          <select id="paragraphs" name="paragraphs">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
            <option value="9">Nine</option>
            <option value="10">Ten</option>
          </select>
          <button type="submit">Generate!</button>
        </form>
      </div>
    </>
  );
}

export default SiteForm;
