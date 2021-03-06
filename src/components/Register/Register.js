import "./Register.css";
import Logo from "../generic/Logo/Logo";
import Form from "../generic/Form/Form";
import Title from "../generic/Title/Title";
import InputAuth from "../generic/inputs/InputAuth/InputAuth";
import Button from "../generic/Button/Button";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import useForm from "../../hooks/useForm";

function Register({ onSubmit, apiError }) {
  const { values, errors, isValid, handleChange } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <main className="register">
      <Form modType="auth" onSubmit={handleSubmit} noValidate={true}>
        <Logo logo={logo} mix="register__logo" />
        <Title title="Добро пожаловать!" mix="register__title" />
        <InputAuth
          type="text"
          name="name"
          value={values.name || ""}
          error={errors.name || ""}
          onChange={handleChange}
          fieldName="Имя"
          mix="register__input"
          required={true}
          minLength="2"
          maxLength="30"
          pattern="[A-Za-zА-Яа-яЁё]{1}[A-Za-zА-Яа-яЁё\s-]*"
        />
        <InputAuth
          type="email"
          name="email"
          value={values.email || ""}
          error={errors.email || ""}
          onChange={handleChange}
          fieldName="E-mail"
          mix="register__input"
          required={true}
        />
        <InputAuth
          type="password"
          name="password"
          value={values.password || ""}
          error={errors.password || ""}
          onChange={handleChange}
          fieldName="Пароль"
          required={true}
          minLength="5"
        />
        <div className="register__click">
          <Button
            type="submit"
            value="Зарегистрироваться"
            modType="auth"
            mix="register__btn"
            disabled={!isValid}
          />
          <span className="register__error">{apiError}</span>
          <Link to="/signin" className="register__link">
            Уже зарегистрированы?
            <span className="register__link-word">Войти</span>
          </Link>
        </div>
      </Form>
    </main>
  );
}

export default Register;
