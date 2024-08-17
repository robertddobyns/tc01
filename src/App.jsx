import "./App.css";
import Description from "./components/description/Description";

import MainHeader from "./components/main-header/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <Description />
      </span>
    </>
  );
}

export default App;
