
import './App.css';
import LeftMenu from "./components/LeftMenu";
import CenterMenu from "./components/CenterMenu";
import RightMenu from "./components/RightMenu";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
       
          <Main />

      <LeftMenu/>
      <CenterMenu/>
      <RightMenu/>


          </div>
        
  );
}

export default App;
