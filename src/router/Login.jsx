
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const Login = () => {
  const [username, setUsername] = useState('');                                                   
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

 //formatacao
  const handleCpfChange = (event) => {
    const formattedCpf = event.target.value.replace(/\D/g, '');

    const cpfWithMask = formattedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setCpf(cpfWithMask);
  };
  //verificador 
  const notif = async event => {
    if (password == "" || cpf == "" || username == "" || email == "") {
      toast.error('preencha os campos');
}else {
    toast.success("cadastro concluido")
    await delay(4000);
     navigate('Carre')
}
    
  }       

  return (
    <div className="login-container">
    <ToastContainer/>
      <h1>Tela de Login</h1>
      <form>
        <div className="form-group">
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CPF:</label>
          <input
            /*type="text"                                                                                     
	          value={cpf}
	          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            placeholder="123.456.789-01"
            required
            onChange={(handleCpfChange) => setCpf(e.target.value)}
          */
        type="text"
        id="cpf"
        value={cpf}
        onChange={handleCpfChange}
        placeholder="123.456.789.00"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={notif}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
