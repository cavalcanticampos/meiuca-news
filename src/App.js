import './index.css';
import { Notices } from "./pages"

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "32px",
      height: "100vh",
    }}>
      <Notices />
    </div>
  );
}

export default App;
