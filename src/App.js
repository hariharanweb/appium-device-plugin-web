import logo from './logo.svg';
import './App.css';
import deviceList from './sample.json'
import Devices from './Devices'

const App = () => <Devices devices={deviceList} />
export default App;
