import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...user,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Iniciaste sesión");
  };

  return (
    <>
      <h2 className="text-2xl text-[#5202A1] my-10">Inicio de sesión sólo para usuarias habilitadas</h2>
      <div className="container bg-[#D6BED6] m-auto rounded-xl w-1/4 p-7 border-2 border-purple-600">
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="text-white" htmlFor="email">Nombre de usuario</label>
            <input
              className="p-2 rounded-lg w-full"
              type="text"
              name="username"
              placeholder=""
              value={user.username}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-600 mx-auto">{errors.username}</p>
            )}
          </div>

          <div className="my-5">
            <label className="text-white" htmlFor="password">Contraseña</label>
            <input
              className="p-2 rounded-lg w-full"
              type="password"
              name="password"
              placeholder=""
              value={user.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-600 mx-auto">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              className={
                Object.keys(errors).length === 0
                  ? "primaryButton"
                  : "primaryButton pointer-events-none"
              }
              type="submit"
              value="Save"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const validation = (user) => {
  const errors = {};
  if (user.username === "") {
    errors.username = "Escribí tu usuario";
  }
  if (user.password === "") {
    errors.password = "Escribí tu contraseña";
  }
  return errors;
};

export default Login;