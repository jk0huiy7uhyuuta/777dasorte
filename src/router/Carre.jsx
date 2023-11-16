import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const pix = async () => {
    try {
      await navigator.clipboard.writeText('b32f416a-2a34-4a6e-b871-ecfac60061b6');
      toast.success('pix copiado!');
    } catch (err) {
      toast.error("falha!");
    }
  };

function Carre() {
  const [loadingText, setLoadingText] = useState('Carregando');
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === 'Carregando....') {
          return 'Carregando';
        }
        return prevText + '.';
      });
    }, 500);

    const timeoutId = setTimeout(() => {
      setShowLogin(false);
    }, 6000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // 100% da altura da tela
    width: '100%',   // 100% da largura da tela
    backgroundColor: 'purple', // Cor de fundo roxa
  };

  const loadingBoxStyle = {
    width: '80%',
    height: '30%',
    border: '1px solid black', // Borda preta
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Cor de fundo preta
  };

  const loadingTextStyle = {
    color: 'purple', // Cor do texto roxa
  };

  return (
    
    <div>
      <style>
        {`
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background-color: #2f215b;
            color: #ffffff;
            font-family: Arial, sans-serif;
          }

          .navbar {
            text-align: center;
            padding: 20px;
            background-color: #1a1032;
          }

          .navbar h1 {
            font-size: 36px;
            color: #ffffff;
          }

          .input-box {
            text-align: center;
            padding: 20px;
            border: 1px solid #553555;
            border-radius: 10px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 70%;
            margin: 10px auto 0;
            max-width: 400px;
            background-color: #4a3066;
          }

          p {
            margin-bottom: 4px;
          }

          input {
            width: 90%;
            height: 50px;
          }

          .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  color: #aaa;
  background-color: #1a1032;
}

          .footer p {
            margin: 5px 0;
            font-size: 14px;
          }

          .footer a {
            color: #fff;
            text-decoration: none;
          }

          .button-container {
            text-align: center;
            margin-top: 10px;
          }

          .button {
            width: 85%;
            height: 47.5px;
            background-color: #703d91;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }
        `}
      </style>
      <div className="navbar">
        <ToastContainer/>
        <h1>777 da Sorte</h1>
      </div>
      <div className="input-box">
        <p>Min: R$ 1.00 / Max: R$ 50,000.00 | Tempo médio do processo: Imediato</p>
        <input type="text" placeholder="valor do depósito" />
        
          <div className="button-container">
          <button onClick={pix} type="pix">Finalizar transação</button>
        </div>
      </div>
      <div className="footer">
        <p>©777dasorte</p>
        <p>Endereço: Rua Exemplo, 123</p>
        <p>regras Sportbook</p>
        <p>help</p>
      </div>
    </div>
  

  );
}

export default Carre;

