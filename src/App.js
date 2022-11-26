import Slider from './components/Slider.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Slider/>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Label htmlFor="inputPassword5">Random</Form.Label>
      <Form.Control
        placeholder='Введите число рандомных ошибок'
        type="text"
      />
      <Button>Random</Button>
    </div>
  );
}

export default App;
