// libraries
import { useEffect, useRef, useState } from "react";

// styles
import "./SiteForm.scss";

// constants
const BUTTON_TIMEOUT = 2000;

const SiteForm = ({ handleFormSubmit, paragraphs = [] }) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const copiedTimeoutRef = useRef(null);
  const errorTimeoutRef = useRef(null);

  const options = [
    { value: 1, label: "One Paragraph" },
    { value: 2, label: "Two Paragraphs" },
    { value: 3, label: "Three Paragraphs" },
    { value: 4, label: "Four Paragraphs" },
    { value: 5, label: "Five Paragraphs" },
    { value: 6, label: "Six Paragraphs" },
    { value: 7, label: "Seven Paragraphs" },
    { value: 8, label: "Eight Paragraphs" },
  ];

  const hasText = Array.isArray(paragraphs) && paragraphs.length > 0;

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
    };
  }, []);

  /**
   * Handle copying generated text to clipboard
   */
  const handleCopy = async () => {
    if (!hasText) return;

    const text = paragraphs.join("\n\n");

    try {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }

      await navigator.clipboard.writeText(text);

      setCopyError(false);
      setCopied(true);

      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = setTimeout(
        () => setCopied(false),
        BUTTON_TIMEOUT,
      );
    } catch (err) {
      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }

      console.log("Failed to copy text: " + (err?.message ?? String(err)));

      setCopied(false);
      setCopyError(true);

      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
      errorTimeoutRef.current = setTimeout(
        () => setCopyError(false),
        BUTTON_TIMEOUT,
      );
    }
  };

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

        <button
          disabled={!hasText}
          className={`paragraphselector__button paragraphselector__button--secondary ${copyError ? "paragraphselector__button--error" : ""} ${!hasText ? "paragraphselector__button--disabled" : ""}`}
          type="button"
          onClick={handleCopy}
        >
          {copyError
            ? "Failed to copy"
            : copied
              ? "Copied!"
              : "Copy to Clipboard"}
        </button>
      </form>
    </div>
  );
};

export default SiteForm;
