import "./App.css";
import Description from "./components/description/Description";


import MainHeader from "./components/main-header/MainHeader";
import MobileFooter from "./components/main-footer/MobileFooter";
import PackageContainer from "./components/main-body/package-container/PackageContainer";

function App() {
  return (
    <main className="main">
      <MainHeader />
      <Description />
      <PackageContainer />
      <MobileFooter />
    </main>
  );
}

export default App;
