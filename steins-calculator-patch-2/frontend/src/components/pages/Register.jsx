import { useState } from "react";
import InputField from "../forms/InputField";
import {
  validateConfirmPassword,
  validatePassword,
} from "../functions/Validate";

function Register({ onRegister, registerError }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username, password);

    if (!validatePassword(password)) {
      setPasswordError(
        "A senha deve ter pelo menos 8 caracteres e conter pelo menos um número."
      );
      return;
    } else {
      setPasswordError("");
    }

    // Validação da confirmação da senha
    if (!validateConfirmPassword(password, confirmPassword)) {
      setConfirmPasswordError(
        "A confirmação da senha não coincide com a senha digitada."
      );
      return;
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Digite seu úsuario:"
          type="text"
          name="úsuario"
          placeholder="Digite seu úsuario"
          text={usernameError ? usernameError : ""}
          onChange={(e) => setUsername(e.target.value)}
        ></InputField>

        <InputField
          label="Senha:"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          text={passwordError ? passwordError : ""}
          onChange={(e) => setPassword(e.target.value)}
        ></InputField>

        <InputField
          label="Confirme a Senha:"
          type="password"
          name="confirmPassword"
          placeholder="Digite sua senha novamente"
          text={confirmPasswordError ? confirmPasswordError : ""}
          onChange={(e) => {
            const newPassword = e.target.value;
            const isPasswordValid = validateConfirmPassword(
              password,
              newPassword
            );
            console.log(isPasswordValid);
            setConfirmPassword(newPassword);
          }}
        />

        {registerError && <div className="error">{registerError}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
