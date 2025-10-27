import { useEffect } from "react";

import ModalWithForm from "./ModalWithForm.jsx"
import { useForm } from "../hooks/useForm.js"

const RegisterModal = ({ isOpen, onRegister, closeModal }) => {
    const defaultValues = { email: "", password: "", name: "", avatar: ""}
    const {values, handleChange, setValues} = useForm(defaultValues)
    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
          email: values.email,
          password: values.password,
          name: values.name || "Anonymous",
          ...(values.avatar ? { avatar: values.avatar } : {})
        }
        onRegister(userData)
    }

    useEffect(() => {
      setValues(defaultValues)
    }, [isOpen])
    
  return (
    <ModalWithForm
          buttonText="Next"
          title="Sign up"
          closeModal={closeModal}
          isOpen={isOpen}
          onSubmit={handleSubmit}
        >
          <label htmlFor="register-email" className="modal__label">
            Email* {""}
            <input
              type="email"
              name="email"
              className="modal__input"
              id="register-email"
              placeholder="Email"
              required
              value={values.email}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor="password" className="modal__label">
            Password* {""}
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
          <label htmlFor="name" className="modal__label">
            Name {""}
            <input
              type="text"
              name="name"
              className="modal__input"
              id="name"
              placeholder="Name"
              minLength="1"
              maxLength="30"
              value={values.name}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor="avatar" className="modal__label">
            Avatar URL {""}
            <input
              type="url"
              name="avatar"
              className="modal__input"
              id="avatar"
              placeholder="Avatar URL"
              value={values.avatar}
              onChange={handleChange}
            ></input>
          </label>
        </ModalWithForm>
  );
};

export default RegisterModal;