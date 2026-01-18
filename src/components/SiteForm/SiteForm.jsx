// styles
import "./SiteForm.scss";

const SiteForm = ({ handleFormSubmit }) => {
  const options = [
    { value: 1, label: "One Paragraph" },
    { value: 2, label: "Two Paragraphs" },
    { value: 3, label: "Three Paragraphs" },
    { value: 4, label: "Four Paragraphs" },
    { value: 5, label: "Five Paragraphs" },
    { value: 6, label: "Six Paragraphs" },
  ];
  return (
    <div className="paragraphselector">
      <form className="paragraphselector__form" onSubmit={handleFormSubmit}>
        <label className="paragraphselector__label" htmlFor="paragraphs">
          How much Momoa can you handle?
        </label>
        <div className="paragraphselector__radio-group">
          {options.map((opt) => (
            <label key={opt.value} className="paragraphselector__radio-label">
              <input
                type="radio"
                name="paragraphs"
                value={opt.value}
                className="paragraphselector__radio"
                defaultChecked={opt.value === 1}
              />
              <span className="paragraphselector__radio-text">{opt.value}</span>
            </label>
          ))}
        </div>
        <button className="paragraphselector__button" type="submit">
          Generate!
        </button>
      </form>
    </div>
  );
};

export default SiteForm;
