import "./css/App.css";
import LoginButton from "./components/LoginBtn";
import LogoutButton from "./components/LogoutBtn";

function App() {
  return (
    <div className="App">
      <LoginButton />,
      <LogoutButton />
    </div>
  );
}

export default App;
