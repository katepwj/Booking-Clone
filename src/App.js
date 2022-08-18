import {
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";


function App() {
  return (

    < Switch>
      <Route path="/" component={Home} />
      <Route path="/hotels" component={List} />
      <Route path="/hotels/:id" component={Hotel} />
    </Switch>

  );
}

export default App;
