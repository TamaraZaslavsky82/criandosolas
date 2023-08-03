import React from "react";
import style from "./Register.module.css";

export default function Register() {
  const handleSubmit = () => {};
  return (
    <div className={style.fixPosition}>
      <div className={style.container}>
        <form className={style.direction} onSubmit={handleSubmit}>
          <input className={style.input} type="text" placeholder="Nombre de Usuaria" />
          <input className={style.input} type="email" placeholder="Email" />
          <input className={style.input} type="password" placeholder="Contraseña" />
          <button className={style.button} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
