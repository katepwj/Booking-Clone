import {
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from './pages/register/Register'

console.log("approuter.js")

function AppRouter() {

  useEffect(() => {

    return () => {

    }
  }
    , [])
  return (

    < Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/hotels" component={List} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />


      <Route path="/hotels/:id" component={Hotel} />
    </Switch>

  );
}

export default AppRouter;
