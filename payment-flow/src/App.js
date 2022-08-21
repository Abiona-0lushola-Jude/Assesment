import { BrowserRouter } from "react-router-dom";
import Main from './Components/Main'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main />
      </BrowserRouter>
      <div className='backCard'></div>
    </div>
  );
}

export default App;
