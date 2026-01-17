import "./JasonBanner.scss";

const jasons = [
  { src: "/jasons/aquaman.png", alt: "aquaman" },
  { src: "/jasons/drogo.png", alt: "khal drogo" },
  { src: "/jasons/voss.png", alt: "baba voss" },
  { src: "/jasons/garrett.png", alt: "garrett" },
  { src: "/jasons/idaho.png", alt: "duncan idaho" },
  { src: "/jasons/dante.png", alt: "dante" },
  { src: "/jasons/conan.png", alt: "conan the barbarian" },
  { src: "/jasons/kaiana.png", alt: "kaiana" },
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const JasonBanner = () => {
  const shuffledJasons = shuffleArray(jasons);
  return (
    <div className="jasonlist">
      {shuffledJasons.map((jason, index) => (
        <img
          key={`${jason.alt}-${index}`}
          src={jason.src}
          alt={jason.alt}
          className="jasonlist__pic"
        />
      ))}
    </div>
  );
};

export default JasonBanner;
