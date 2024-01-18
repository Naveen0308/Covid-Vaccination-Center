import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainindex from './Components/mainindex';
import Center from './Components/maincenter1';
import Bookslot from './Components/bookslot';
import CenterForm from './Components/centerform'; // Import the CenterForm component
import Login from './Components/Login';
import Mainpage from './Components/Mainpage';
import Admin from './Components/Admin';
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/adminlogin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainindex" element={<Mainindex />} />
        <Route path="/center/:id" element={<Center />} />
        <Route path="/center/bookslot/:id" element={<Bookslot />} />
        <Route path="/centerform" element={<CenterForm />} /> {/* Add this line for the centerform route */}
        <Route path="/mainpg" element={<Mainpage />} /> {/* Add this line for the centerform route */}

        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;
