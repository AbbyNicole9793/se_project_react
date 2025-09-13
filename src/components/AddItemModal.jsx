import ModalWithForm from "./ModalWithForm.jsx"
import { useForm } from "../hooks/useForm.js"

const AddItemModal = ({ isOpen, onAddItem, closeModal }) => {
    const defaultValues = { name: "", link: "", weather: ""}
    const {values, handleChange, setValues} = useForm(defaultValues)
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddItem(values)
        setValues(defaultValues)
    }
    
  return (
    <ModalWithForm
          buttonText="Add garment"
          title="New garment"
          closeModal={closeModal}
          isOpen={isOpen}
          onAddItem={handleSubmit}
        >
          <label htmlFor="name" className="modal__label">
            Name {""}
            <input
              type="text"
              name="name"
              className="modal__input"
              id="name"
              placeholder="Name"
              required
              minLength="1"
              maxLength="30"
              value={values.name}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image {""}
            <input
              type="url"
              name="link"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
              required
              value={values.link}
              onChange={handleChange}
            ></input>
          </label>
          <fieldset className="modal__radio-button">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="hot"
                name="weather"
                value="hot"
                type="radio"
                checked={values.weather === "hot"}
                className="modal__input-radio"
                onChange={handleChange}
              ></input>
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="warm"
                name="weather"
                value="warm"
                type="radio"
                checked={values.weather === "warm"}
                className="modal__input-radio"
                onChange={handleChange}
              ></input>
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="cold"
                name="weather"
                value="cold"
                type="radio"
                checked={values.weather === "cold"}
                className="modal__input-radio"
                onChange={handleChange}
              ></input>
              Cold  
            </label>
          </fieldset>
        </ModalWithForm>
  );
};

export default AddItemModal;