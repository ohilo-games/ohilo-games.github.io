import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route } from "react-tiger-transition";

import Intro from './screens/Intro'
import Home from './screens/Home';

function App() {
  document.getElementById("root").style.height = "100vh";

  return (
    <Navigation>
      <Route exact path="/">
        <Intro />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/goldenthrow">
        <Home />
      </Route>
    </Navigation> 
  );
}

export default App;
