import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainindex from './Components/mainindex';
import Center from './Components/maincenter1';
import Bookslot from './Components/bookslot';
import CenterForm from './Components/centerform'; // Import the CenterForm component
import Login from './Components/Login';
import Admin from './Components/Admin';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Result from './Components/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/adminlogin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainindex" element={<Mainindex />} />
        <Route path="/center/:id" element={<Center />} />
        <Route path="/:centerId/bookslot/:id/:date" element={<Bookslot />} />
        <Route path="/centerform" element={<CenterForm />} /> {/* Add this line for the centerform route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/result" element={<Result />} />

        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;
