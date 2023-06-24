import "./App.css";
import DashboardPage from "./Components/DashboardPage";
import Page from "./Components/Page";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const storedData = JSON.parse(localStorage.getItem("user"));

  return (
    <GoogleOAuthProvider clientId="961554645576-13lc9ns68qctjf5tbs4m1bqqcosna90t.apps.googleusercontent.com">
      {storedData === null && <Page />}
      {storedData !== null ? <DashboardPage /> : console.log("Hello")}
    </GoogleOAuthProvider>
  );
}

export default App;
