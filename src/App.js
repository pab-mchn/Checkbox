import DataProvider from './components/context/DataContext';
import Checkbox from './components/Checkbox/Checkbox';
import Header from "./components/Header/Header"
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header/>
        <Checkbox/>
      </div>
    </DataProvider>
  );
}

export default App;
