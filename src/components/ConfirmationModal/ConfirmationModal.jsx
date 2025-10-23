import { useState } from "react";
import "./ConfirmationModal.css";
import close from "../../images/close-icon.svg";

function ConfirmationModal({ isOpen, onClose, name, handleDeleteItem, card }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onConfirmDelete = async () => {
    setIsLoading(true);
    setError("");

    try {
      await handleDeleteItem(card._id);
      onClose();
    } catch (err) {
      setError("Failed to delete item. Please try again.");
      console.error("Delete failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content_type-confirmation" name={name}>
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type-confirmation"
          disabled={isLoading}
        >
          <img src={close} alt="Close Icon" className="modal__close-icon" />
        </button>

        <div>
          <h2 className="modal__caption_type-confirmation">
            Are you sure you want to delete this item?
            <br />
            This action is irreversible.
          </h2>

          {error && <p className="modal__error-message">{error}</p>}

          <button
            className="modal__delete-item-button_type-confirmation"
            onClick={onConfirmDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Yes, delete item"}
          </button>

          <br />

          <button
            className="modal__button_type-cancel"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
