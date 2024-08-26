import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Layout from './components/Layout';
import College from './pages/College';
import Department from './pages/Department';
import Year from './pages/Year';


function App() {
  return (
    <>

    <Router>

      <Layout>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/college/:id" element={<College/>} />
        <Route path="/college/:id/department/:deptId" element={<Department />} />
        <Route path="/college/:id/department/:deptId/year/:yearId" element={<Year/>} />
      </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;