
import TopBar from "./Components/TopBar/TopBar";
import SideBar from "./Components/sideBar/SideBar";
import './app.css';
import ProductList from './Components/Pages/ProductList/ProductList';
import NewUser from "./Components/Pages/NewUser/NewUser";
import UserList from "./Components/Pages/UserList/UserList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import User from "./Components/Pages/User/User";
import NewProduct from "./Components/Pages/NewProduct/NewProduct";
function App() {
  return (
    <Router>
    <TopBar/>
    <div className="container">
    <SideBar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/users">
      <UserList/>
    </Route>
    <Route path="/user/:userid">
      <User/>
    </Route>
    <Route path="/newuser">
      <NewUser/>
    </Route>
    <Route path="/products">
      <ProductList/>
    </Route>
    <Route path="/product/:userid">
      <NewProduct/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
