import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generador from "./Pages/Generador";
import { FacturaProvider } from "./context/FormContext";
function App() {
  return (
    <FacturaProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Generador />}></Route>
        </Routes>
      </BrowserRouter>
    </FacturaProvider>
  );
}
export default App;
