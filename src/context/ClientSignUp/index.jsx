import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const inicialUser = {
  perfil: "",
  interesse: "",
  nomeCompleto: "",
  uf: "",
  cidade: "",
  email: "",
  senha: "",
  senhaConfirmada: "",
};

export const UserContext = createContext({
  usuario: inicialUser,
  savePersonalData: () => null,
  setPerfil: () => null,
  setInteresse: () => null,
  setNomeCompleto: () => null,
  setUf: () => null,
  setCidade: () => null,
  setEmail: () => null,
  setSenha: () => null,
  setSenhaConfirmada: () => null,
  validacaoCadastro: () => null,
});

export const useSignUpUserContext = () => {
  return useContext(UserContext);
};

export const UserSignUpProvider = ({ children }) => {
  const [usuario, setUser] = useState(inicialUser);

  const navigate = useNavigate();

  const setPerfil = (perfil) => {
    setUser((estadoAnterior) => ({ ...estadoAnterior, perfil }));
  };
  const setInteresse = (interesse) => {
    setUser((estadoAnterior) => ({ ...estadoAnterior, interesse }));
  };
  const setNomeCompleto = (nomeCompleto) => {
    setUser((estadoAnterior) => ({ ...estadoAnterior, nomeCompleto }));
  };
  const setUf = (uf) => {
    setUser((estadoAnterior) => ({ ...estadoAnterior, uf }));
  };
  const setCidade = (cidade) => {
    setUser((estadoAnterior) => ({ ...estadoAnterior, cidade }));
  };
  const setEmail = (email) => {
    setUser((estadoAnterior) => ({ ...estadoAnterior, email }));
  };
  const setSenha = (senha) => {
    setUser((estadoAnterior) => ({ ...estadoAnterior, senha }));
  };
  const setSenhaConfirmada = (senhaConfirmada) => {
    setUser((estadoAnterior) => ({ ...estadoAnterior, senhaConfirmada }));
  };
  const savePersonalData = () => {
    console.log(usuario);
    navigate("/signup/complete");
  };

  const validacaoCadastro = () => {
    const booleanString = !!usuario.perfil;
    console.log(booleanString);
    return booleanString;
  };

  const context = {
    usuario,
    setPerfil,
    validacaoCadastro,
    savePersonalData,
    setInteresse,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
