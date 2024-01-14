import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainindex from './Components/mainindex';
import Center from './Components/maincenter1';
import Bookslot from './Components/bookslot';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Mainindex />} />
        <Route path="/center" element={<Center />} />
        <Route path="/center/bookslot" element={<Bookslot />} />

        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;
