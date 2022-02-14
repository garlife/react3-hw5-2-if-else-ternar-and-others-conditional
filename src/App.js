import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Выберите время года</h1>
      <p><select>
      <option value="0">Выберите сезон</option>
      <option value="1">Зима</option>
      <option value="2">Весна</option>
      <option value="3">Лето</option>
      <option value="4">Осень</option>
      </select></p>
    </div>

  );
}
