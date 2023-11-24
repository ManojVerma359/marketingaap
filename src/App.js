import './App.css';

import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Featured from './Components/Featured '
import Satisfied from './Components/Satisfied'
import Marketing from './Components/Marketing';
import Start from './Components/Start';
import Actual from './Components/Actual';
import Partner from './Components/Partner';
import Goals from './Components/Goals';
import FormsLearn from './Components/FormsLearn';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';
import MyPreloader from './Components/MyPreloader';

function App() {
  return (
 <div className='overflow-hidden'>
  <MyPreloader/>
  <BackToTop/>
 <Header/>
 <Featured/>
 <Satisfied/>
 <Marketing/>
 <Start/>
 <Partner/>
 <Actual/>
<FormsLearn/>
 <Goals/>
 <Footer/>
 </div>
  );
};

export default App;
