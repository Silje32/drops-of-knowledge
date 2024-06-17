import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleDetail from "./pages/SingleDetail";
import NaturalFibre from "./pages/NaturalFibre";
import NaturalDetail from "./pages/NaturalDetail";
import SemiSyntheticFibre from "./pages/SemiSyntheticFibre";
import SemiSyntheticDetail from "./pages/SemiSyntheticDetail";
import SyntheticFibre from "./pages/SyntheticFibre";
import SyntheticDetail from "./pages/SyntheticDetail";
import Sources from "./pages/Sources";
import Layout from "./components/layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";

  
  function App() {
  
    return (
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/home/:id" element={<SingleDetail />} />
            <Route path="natural" element={<NaturalFibre />} />
            <Route path="/natural/:id" element={<NaturalDetail />} />
            <Route path="semi" element={<SemiSyntheticFibre />} />
            <Route path="/semi/:id" element={<SemiSyntheticDetail />} />
            <Route path="synthetic" element={<SyntheticFibre/>} />
            <Route path="/synthetic/:id" element={<SyntheticDetail/>} />
            <Route path="sources" element={<Sources />} />
          </Route>
        </Routes>
      </>
    );
  }
  
  export default App;
