import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./components/RootLayout";
import HomePage from "./routes/HomePage";
import ProductPage from "./routes/ProductPage";
import NotFoundPage from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
