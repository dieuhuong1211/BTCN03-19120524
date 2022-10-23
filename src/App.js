import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import womanyellingcat from './womanyellingcat.jpg';
import { display } from '@mui/system';

function App() {
  return (
      <div>
        <Button sx={{ width: 150, padding: 1, margin: 2 }} variant="outlined">Random</Button>
        <div class="pin_container">
          <div class="card card_small">
          <img src={womanyellingcat} alt="Girl"/>
          </div>
          <div class="card card_small">
          <img src={womanyellingcat} alt="Girl"/>
          </div>
          <div class="card card_small">
          <img src={womanyellingcat} alt="Girl"/>
          </div>
          <div class="card card_small">
          <img src={womanyellingcat} alt="Girl"/>
          </div>
          <div class="card card_small">
          <img src={womanyellingcat} alt="Girl"/>
          </div>
          <div class="card card_small">
          <img src={womanyellingcat} alt="Girl"/>
          </div>
        </div>
      </div>
  );
}

export default App;
