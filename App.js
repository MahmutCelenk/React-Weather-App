import './App.css';
import {WeatherProvider} from './context/WeatherContext';
import Select from './components/Select';
import Detail from './components/Detail';

function App() {
  return (
    <WeatherProvider>
      <div className='App'>
        <Select/>
        <Detail/>
      </div>
    </WeatherProvider>
  );
}

export default App;
