import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Locations from './pages/locations';
import Blank from './pages/blank';


function App() {
  const [isChecked, setIsChecked] = useState(true)

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
  return (
    <Routes>
      <Route path='/' element={<Locations />} />
      <Route path='/blank' element={<Blank />}/>
    </Routes>
  );
}

export default App;
