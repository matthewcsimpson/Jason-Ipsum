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
    { value: 7, label: "Seven Paragraphs" },
    { value: 8, label: "Eight Paragraphs" },
    { value: 9, label: "Nine Paragraphs" },
    { value: 10, label: "Ten Paragraphs" },
  ];
  return (
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
          {options.map((opt) => (
            <option
              className="paragraphselector__option"
              value={opt.value}
              key={opt.value}
            >
              {opt.label}
            </option>
          ))}
        </select>
        <button className="paragraphselector__button" type="submit">
          Generate!
        </button>
      </form>
    </div>
  );
};

export default SiteForm;
