import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "./style.css";

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();
  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      user.name.value = onEdit.name;
      user.email.value = onEdit.email;
      user.phone.value = onEdit.phone;
    }
  }, 
  [onEdit]);

  useEffect(() => {
    const phone = document.getElementById("phone");
    phone.addEventListener("input", handlePhoneInput);
    return () => phone.removeEventListener("input", handlePhoneInput);
  }, []);

  const handlePhoneInput = () => {
    const phone = document.getElementById("phone");
    var limparValor = phone.value.replace(/\D/g, "").substring(0, 11);
    var numerosArray = limparValor.split("");
    var numeroFormatado = "";

    if (numerosArray.length > 0) {
      numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }
    if (numerosArray.length > 2) {
      numeroFormatado += ` ${numerosArray.slice(2, 7).join("")}`;
    }
    if (numerosArray.length > 7) {
      numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }
    phone.value = numeroFormatado;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;
    if (
      !user.name.value || 
      !user.email.value || 
      !user.phone.value
    ) {
      return toast.warn("Erro: Preencha todos os campos.");
    }
    const userData = {
      name: user.name.value,
      email: user.email.value,
      phone: user.phone.value,
    };

    if (onEdit) {
      await axios
        .put(`http://localhost:3000/${onEdit.id}`, userData)
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3000", userData)
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    user.name.value = "";
    user.email.value = "";
    user.phone.value = "";
    setOnEdit(null);
    getUsers();
  };

  return (
    <div className="card">
      <span className="title">Cadastro</span>
      <form ref={ref} onSubmit={handleSubmit} className="form">
        <div className="group">
          <input name="name" placeholder="" type="text" required />
          <label htmlFor="name">Nome</label>
        </div>
        <div className="group">
          <input name="email" placeholder="" type="email" id="email" required />
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="group">
          <input name="phone" placeholder="" type="tel" id="phone"/>
          <label htmlFor="phone">Telefone</label>
        </div>
        <button type="submit">SALVAR</button>
      </form>
    </div>
  );
};

export default Form;