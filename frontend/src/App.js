import { BrowserRouter, Routes, Route, Switch, Navigate } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from './pages/home'
import Latest from "./pages/latest";
import NearbyEvent from "./pages/nearbyEvent";
import UpcomingEvent from "./pages/upcomingEvent";
import Header from "./pages/header";
import Detailpage from "./pages/detailpaage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/nearbyevent" element={<NearbyEvent />} />
            <Route path="/upcomingevent" element={< UpcomingEvent />} />
            <Route path="/detailpage" element={<Detailpage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
