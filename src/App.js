import { Routes, Route, HashRouter } from "react-router-dom";

import './styles/globalStyles.css';
import ViewManager from "./ViewManager";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<ViewManager />} />
      </Routes>
    </HashRouter>
  )
}