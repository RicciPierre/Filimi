import "./App.css";
import LoginButton from "./components/LoginBtn";
import LogoutButton from "./components/LogoutBtn";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <LoginButton />,
      <LogoutButton />
    </div>
  );
}

export default App;
