
import './App.css';
import LeftMenu from "./components/LeftMenu";
import MiddleMenu from "./components/MiddleMenu";
import RightMenu from "./components/RightMenu";

function App() {
  return (
    <div className="App">
        <div className="page">
          <div className="page__content"> 

      <LeftMenu/>
      <MiddleMenu/>
      <RightMenu/>


          </div>
        </div>
    </div>
  );
}

export default App;
