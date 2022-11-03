// styles
import "./styles/styles.scss";

// data
import quotefile from "./data/jason.json";
import SiteHeader from "./components/SiteHeader/SiteHeader";

// images

function App() {
  console.log(quotefile);
  return (
    <>
      <SiteHeader />
      <main className="sitemain"></main>
    </>
  );
}

export default App;
