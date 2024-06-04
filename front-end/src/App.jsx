import Nav from './Pages/Nav.jsx';
import Footer from './Pages/Footer.jsx';
import SignUp from './Pages/SignUp.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductSection from './Pages/User/ProductSection.jsx';
import Buy_Products from './Pages/User/Buy_Products.jsx';
import Profile from './Pages/User/Profile.jsx';
import PrivateRoute from './Pages/PrivateRoute.jsx';
import Login from './Pages/Login.jsx';

import AddProduct from './Pages/Admin/AddProduct.jsx';
import UpdateProduct from './Pages/Admin/UpdateProduct.jsx';
import DeleteProduct from './Pages/Admin/DeleteProduct.jsx';
import UsersOrder from './Pages/Admin/UsersOrder.jsx';
import Dashboard from './Pages/Admin/Dashboard.jsx';
import Home from './Pages/User/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

function App  ()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={ <PrivateRoute /> }>
                <Route path='/admin' element={ <Dashboard /> }></Route>
                <Route path='/admin/add-product' element={ <AddProduct /> }></Route>
                <Route path='/admin/update-product' element={ <UpdateProduct /> }></Route>
                <Route path='/admin/delete-product' element={ <DeleteProduct /> }></Route>
                <Route path='/admin/orders' element={ <UsersOrder /> }></Route>
                <Route path='/' element={<Home/>  }></Route>
                <Route path='/about' element={ <About/>}></Route>
                <Route path='/profile' element={ <Profile/> }></Route>
                <Route path='/product' element={ <ProductSection /> }></Route>
                <Route path='/contact' element={ <Contact/> }></Route>
                <Route path='/buy-Product' element={ <Buy_Products /> }></Route>
          </Route>

          <Route path='/signup' element={ <SignUp /> }></Route>
          <Route path='/login' element={ <Login /> }></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
