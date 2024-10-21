
import { Route, Routes,useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Tours from './pages/Tours/Tours';
import TourDetails from './pages/Tours/TourDetails';
import Booking from './pages/Booking/Booking';
import Destinations from './pages/Destinations/Destinations';
import Signup from './pages/Register/Signup';
import Login from './pages/Login/Login';
import AdminLogin from './components/AdminPanel/AdminLogin';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Signupdetails from './components/AdminPanel/Signupdetails';
import Details from './components/AdminPanel/Details';
import Dashboard from './components/AdminPanel/Dashboard';
import Contactt from './components/AdminPanel/Contactt';


function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/AdminPanel', '/AdminLogin','/admin/booking-details','/Signupdetails','/Details','/dashboard','/Contactt','/Dashboard'];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  return (
   <>
 {!hideHeaderFooter && <Header />}
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/Home' element={<Home/>} ></Route>

  <Route path='about-us' element={<About />}></Route>
  <Route path='contact-us' element={<Contact />}></Route>
  <Route path='tours' element={<Tours />}></Route>
  <Route path='tour-details' element={<TourDetails />}></Route>
  <Route path='/Booking' element={<Booking />}></Route>
  <Route path='destinations' element={<Destinations />}></Route>
  <Route path='signup' element={<Signup />}></Route>
  <Route path='login' element={<Login  />}></Route>


  <Route path='adminpanel' element={<AdminPanel />}></Route>
  <Route path='Signupdetails' element={<Signupdetails/>}></Route>
  <Route path='/adminlogin' element={<AdminLogin/>}></Route>
  <Route path='/Details' element={<Details/>}></Route>
  <Route path='/Dashboard' element={<Dashboard/>}></Route>
  <Route path='/Contactt' element={<Contactt/>}></Route>
  
 

   


</Routes>
{!hideHeaderFooter && <Footer />}
{/* <AdvanceSearch/>  */}
   </>
  );
}
export default App;
