import { useEffect } from "react";

import ModalWithForm from "./ModalWithForm.jsx"
import { useForm } from "../hooks/useForm.js"

const LoginModal = ({ isOpen, onLogin, closeModal }) => {
    const defaultValues = { email: "", password: ""}
    const {values, handleChange, setValues} = useForm(defaultValues)
    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin(values)
    }

    useEffect(() => {
      setValues(defaultValues)
    }, [isOpen])
    
  return (
    <ModalWithForm
          buttonText="Log In"
          title="Log In"
          closeModal={closeModal}
          isOpen={isOpen}
          onSubmit={handleSubmit}
        >
          <label htmlFor="login-email" className="modal__label">
            Email {""}
            <input
              type="email"
              name="email"
              className="modal__input"
              id="login-email"
              placeholder="Email"
              required
              value={values.email}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor="password" className="modal__label">
            Password {""}
            <input
              type="password"
              name="password"
              className="modal__input"
              id="password"
              placeholder="Password"
              required
              value={values.password}
              onChange={handleChange}
            ></input>
          </label>
        </ModalWithForm>
  );
};

export default LoginModal;