import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Packages from './components/Packages/Packages';
import Login from './components/Login/Login';
import About from './components/About/About';
import AuthProvider from './context/AuthProvider';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Purchase from './components/Purchase/Purchase';
import PackageDetails from './components/PackageDetails/PackageDetails';
import Footer from './components/Shared/Footer/Footer';
import AddPackage from './components/AddPackage/AddPackage';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import UpdateOrder from './components/UpdateOrder/UpdateOrder';
import Error from './components/Error/Error';




function App() {
  return (
    <div className="">

      <AuthProvider>


        <BrowserRouter>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/packages">
              <Packages></Packages>
            </Route>

            <PrivateRouter exact path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRouter>

            <PrivateRouter exact path="/packages/:id">
              <PackageDetails></PackageDetails>
            </PrivateRouter>



            <PrivateRouter exact path="/purchase">
              <Purchase></Purchase>
            </PrivateRouter>

            <PrivateRouter exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRouter>

            <PrivateRouter exact path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRouter>



            <PrivateRouter exact path="/updateOrder/:id">
              <UpdateOrder></UpdateOrder>
            </PrivateRouter>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>


            <Route path="*">
              <Error></Error>
            </Route>

          </Switch>


          <Footer></Footer>

        </BrowserRouter>

      </AuthProvider>











    </div>
  );
}

export default App;
