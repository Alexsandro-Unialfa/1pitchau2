import React, { useState } from 'react';
import styled from 'styled-components';

export const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cidade: 'Selecione',
    mensagem: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', formData);
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      cidade: 'Selecione',
      mensagem: ''
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Entre em Contato</h2>
      <p>Este é um site incrível feito pelo professor Chines! Por favor, preencha o formulário abaixo para entrar em contato conosco.</p>
      <FormGroup>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="cidade">Cidade:</label>
        <select id="cidade" name="cidade" value={formData.cidade} onChange={handleInputChange}>
          <option value="Selecione" disabled>Selecione</option>
          <option value="cidade1">Curitiba</option>
          <option value="cidade2">Maringa</option>
          <option value="cidade3">Umuarama</option>
        </select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleInputChange} />
      </FormGroup>
      <SubmitButton type="submit">Enviar</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, select, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    height: 100px;
  }
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
