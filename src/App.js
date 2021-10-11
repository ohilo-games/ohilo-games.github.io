import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, glide } from "react-tiger-transition";

import Intro from './screens/Intro'
import Home from './screens/Home';

// inject glide styles
glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'bottom',
  duration:1000,
});

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
    </Navigation> 
  );
}

export default App;
