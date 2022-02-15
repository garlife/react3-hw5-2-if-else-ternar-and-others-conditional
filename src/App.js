import React, { useState } from 'react';
import './style.css';
import TernJsxConditions, {
  IfElseConditions,
  SwitchConditions,
  DoubleAmpersand
} from './Conditions';

export default function App() {
  const [selected, setSelected] = useState('none');
  function handleChange(event) {
    setSelected(event.target.value);
    console.log(selected);
    return selected;
  }

  return (
    <div className="container">
      <div className={selected} style={{width: "25%"}}>
        <h1>Выберите время года</h1>
        <p>
          <select value={selected} onChange={handleChange}>
            <option value="none">Не выбрано</option>
            <option value="winter">Зима</option>
            <option value="spring">Весна</option>
            <option value="summer">Лето</option>
            <option value="autumn">Осень</option>
          </select>
        </p>
        <TernJsxConditions selected={selected} />
      </div>
      <div style={{width: "25%"}}>
        <IfElseConditions selected={selected} />
      </div>
      <div style={{width: "25%"}}>
        <SwitchConditions selected={selected} />
      </div>
      <div style={{width: "25%"}}>
        <DoubleAmpersand selected={selected} />
      </div>
    </div>
  );
}
