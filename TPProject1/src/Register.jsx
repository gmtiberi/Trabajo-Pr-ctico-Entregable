import React from 'react';
import './styles.css';

const Register = () => {
  return (
    <div className="container">
      <h2>Registro</h2>
      <form>
        <input type="text" placeholder="Nombre" className="input-field" />
        <input type="text" placeholder="Apellido" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="tel" placeholder="Teléfono" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="password" placeholder="Confirmar Password" className="input-field" />
        <button type="submit" className="button">Registrar</button>
      </form>
    </div>
  );
};

export default Register;