
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes


} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert}></Alert>
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About />} />




            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Text Analizer" mode={mode} />} />



          </Routes>



          {/* <About /> */}
        </div>

      </Router>


    </>
  );
}

export default App;

