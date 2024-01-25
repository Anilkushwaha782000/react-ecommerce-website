import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Singleproduct from './Singleproduct'
import Products from './Products';
import Error from './Error';
import Contact from './Contact';
import GlobalStyle  from './Globalstyle';
import { ThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import Productstore from './Productstore';
import './index.css'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const theme = {
    color: {
      bg: '#FFFF00', 
      heading:"#FFFF00",
    },
  };
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/productstore" element={<Productstore/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
