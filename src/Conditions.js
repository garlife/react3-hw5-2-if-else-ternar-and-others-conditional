import React, { useState } from 'react';
import './style.css';

export default function Conditions() {
  const [selected, setSelected] = useState('none');

  function handleChange(event) {
    setSelected(event.target.value);
    console.log(selected);
    return selected;
  }

  return (
    <div className="container">
    <div className={selected}
    
    >
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
        <div className="season">
          { 
          selected === "none" ? "" :
          selected === "winter" ? "Зима" :
          selected === "spring" ? "Весна" :
          selected === "summer" ? "Лето" : "Осень"
         }
        </div>
    </div>
    </div>
  );
}
