import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { HotelsPage } from "./HotelsPage";
import { ResultsPage } from "./ResultsPage";
import { Homepage } from "./Homepage";
import { MatterhornPopup } from "./MatterhornPopup";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/results-page":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HotelsPage />} />

      <Route path="/results-page" element={<ResultsPage />} />

      <Route path="/homepage" element={<Homepage />} />

      <Route path="/" element={<MatterhornPopup />} />
    </Routes>
  );
}
export default App;
