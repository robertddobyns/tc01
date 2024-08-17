import "./App.css";
import Description from "./components/description/Description";

import MainHeader from "./components/main-header/MainHeader";
import MobileFooter from "./components/main-header/MobileFooter";

function App() {
  return (
    <main className="main">
      <MainHeader />
      <Description />
      <MobileFooter />
    </main>
  );
}

export default App;
