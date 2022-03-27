import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [darkText, setDarkText] = useState("Enable 🌙");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setDarkText("Enable 🌞");
      document.body.style.backgroundColor = "#1b1b1b";
      document.body.style.color = "#fff";
    } else {
      setMode("light");
      setDarkText("Enable 🌙");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#1b1b1b";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        text={darkText}
        toggleMode={toggleMode}
      />
      <div className="container my-2">
        <Alert alert={alert} />
      </div>
      <div className="container mt-5">
        <TextForm
          mode={mode}
          showAlert={showAlert}
          heading="Enter the text to Analyze"
        />
      </div>
    </>
  );
}

export default App;
