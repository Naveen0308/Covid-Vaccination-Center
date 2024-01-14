import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainindex from './Components/mainindex';
import Center from './Components/maincenter1';
import Bookslot from './Components/bookslot';
import CenterForm from './Components/centerform'; // Import the CenterForm component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainindex />} />
        <Route path="/center" element={<Center />} />
        <Route path="/center/bookslot" element={<Bookslot />} />
        <Route path="/centerform" element={<CenterForm />} /> {/* Add this line for the centerform route */}

        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;
