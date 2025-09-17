import "./ModalWithForm.css";
import close from "../../images/close-icon.svg";

function ModalWithForm({ children, buttonText, title, isOpen, onClose, name }) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close icon" className="modal__close-icon" />
        </button>
        <form className="modal__type_add-garment" name={name}>
          {children}
          <button type="button" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
