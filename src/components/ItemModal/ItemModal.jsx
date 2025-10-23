import "./ItemModal.css";
import close from "../../images/close-icon-white.svg";

function ItemModal({ isOpen, onClose, card, name, handleConfirmationClick }) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content modal__type_preview-image" name={name}>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="Close Icon" className="modal__close-icon" />
        </button>
        <img src={card.imageUrl} alt="Card Image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete-item-button"
            onClick={() => {
              handleConfirmationClick();
              //onClose();
            }}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
