import { useEffect } from "react";
import ModalWithForm from "./ModalWithForm.jsx";
import { useForm } from "../hooks/useForm.js";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";

function EditProfileModal({ isOpen, onClose, onEditProfile }) {
  const currentUser = useContext(CurrentUserContext);


  const { values, handleChange, setValues } = useForm({name: "", avatar: "",});

  
  useEffect(() => {
    setValues({
      name: currentUser?.name || "",
      avatar: currentUser?.avatar || "",})
  }, [isOpen, currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile(values);
  };

  return (
    <ModalWithForm
      title="Edit profile"
      buttonText="Save"
      closeModal={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-profile-name" className="modal__label">
        Name {""}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="edit-profile-name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="edit-profile-avatar" className="modal__label">
        Avatar URL {""}
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="edit-profile-avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;