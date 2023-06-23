import "./App.css";
import DashboardPage from "./Components/DashboardPage";
// import Page from "./Components/Page";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="961554645576-13lc9ns68qctjf5tbs4m1bqqcosna90t.apps.googleusercontent.com">
      {/* <Page /> */}
      <DashboardPage />
    </GoogleOAuthProvider>
  );
}

export default App;
