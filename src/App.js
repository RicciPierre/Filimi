import HomeScreen from "./screens/HomeScreen";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <button onClick={() => setUser(true)}>Log in</button>
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
