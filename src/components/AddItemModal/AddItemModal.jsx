import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const defaultValues = { name: "", imageUrl: "", weather: "" };

  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      name="add-garments"
      title="New Garment"
      buttonText="Add Garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name-input" className="modal__label">
        Name
        <input
          name="name"
          id="name-input"
          type="text"
          className="modal__input"
          placeholder="Name"
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="clothing-imageUrl" className="modal__label">
        Image
        <input
          name="imageUrl"
          id="clothing-imageUrl"
          type="url"
          className="modal__input"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot-selection" className="modal__label_type_radio">
          <input
            name="weatherType"
            type="radio"
            className="modal__radio-input"
            id="hot-selection"
            value="hot"
            onChange={handleChange}
          />
          Hot
        </label>
        <label htmlFor="warm-selection" className="modal__label_type_radio">
          <input
            name="weatherType"
            type="radio"
            className="modal__radio-input"
            id="warm-selection"
            value="warm"
            onChange={handleChange}
          />
          Warm
        </label>
        <label htmlFor="cold-selection" className="modal__label_type_radio">
          <input
            name="weatherType"
            type="radio"
            className="modal__radio-input"
            id="cold-selection"
            value="cold"
            onChange={handleChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
