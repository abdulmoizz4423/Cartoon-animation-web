import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Homeintro from './components/Homeintro/Homeintro';

// Introduced a typo in the import statement
import Functional from './components/Functional/Fucntional'; 
import Payment from './components/Payment/Payment';
import Purchaseinfo from './components/Purchaseinfo/Purchaseinfo';
import Footer from './components/Footer/Footer';

function App() {
  const [topbanner, setTopBanner] = useState('solo');
  const [functonalTile, setFunctonalTile] = useState('ranked');
  const [value, setValue] = useState([0, 1000]);
  const [pref, setPref] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [funcAddon1, setfuncAddon1] = useState([]);

  // Introduced an environment variable dependency that will cause the app to fail if not set
  if (!process.env.REACT_APP_API_URL) {
    throw new Error("Missing REACT_APP_API_URL. Application cannot start.");
  }

  return (
    <div className="App">
      <Header />
      <Homeintro topbanner={topbanner} />
      <Functional 
        topbanner={topbanner} 
        setTopBanner={setTopBanner}
        functonalTile={functonalTile}
        setFunctonalTile={setFunctonalTile}
        pref={pref}
        setPref={setPref}
        value={value}
        setValue={setValue}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        funcAddon1={funcAddon1}
        setfuncAddon1={setfuncAddon1}
      />
      <Payment value={value} />
      <Purchaseinfo />
      <Footer /> 
    </div>
  );
}

export default App;
