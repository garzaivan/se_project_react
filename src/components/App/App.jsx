import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/clothingItems";
import { defaultClothingItems } from "../../utils/clothingItems";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleCardClick = (card) => {
    setActiveModal("preview-image");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garments");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
        />
        <Footer />
      </div>
      <ModalWithForm
        name="add-garments"
        title="New Garment"
        buttonText="Add Garment"
        isOpen={activeModal === "add-garments"}
        onClose={closeActiveModal}
      >
        <label htmlFor="name-input" className="modal__label">
          Name
          <input
            id="name-input"
            type="text"
            className="modal__input"
            placeholder="Name"
            minLength="2"
            maxLength="30"
            required
          />
        </label>
        <label htmlFor="image-input" className="modal__label">
          Image
          <input
            id="image-input"
            type="url"
            className="modal__input"
            placeholder="Image URL"
            required
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot-selection" className="modal__label_type_radio">
            <input
              name="weather"
              value="hot"
              type="radio"
              className="modal__radio-input"
              id="hot-selection"
            />
            Hot
          </label>
          <label htmlFor="warm-selection" className="modal__label_type_radio">
            <input
              name="weather"
              value="warm"
              type="radio"
              className="modal__radio-input"
              id="warm-selection"
            />
            Warm
          </label>
          <label htmlFor="cold-selection" className="modal__label_type_radio">
            <input
              name="weather"
              value="cold"
              type="radio"
              className="modal__radio-input"
              id="cold-selection"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        name="preview-image"
        isOpen={activeModal === "preview-image"}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
