import "./ConfirmationModal.css";
import close from "../../images/close-icon.svg";

function ConfirmationModal({ isOpen, onClose, name, handleDeleteItem, card }) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content_type-confirmation" name={name}>
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type-confirmation"
        >
          <img src={close} alt="Close Icon" className="modal__close-icon" />
        </button>
        <div>
          <h2 className="modal__caption_type-confirmation">
            Are you sure you want to delete this item?
            <br />
            This action is irreversible.
          </h2>
          <button
            className="modal__delete-item-button_type-confirmation"
            onClick={() => {
              handleDeleteItem(card._id);
              onClose();
            }}
          >
            Yes, delete item
          </button>
          <br />
          <button
            className="modal__button_type-cancel"
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
