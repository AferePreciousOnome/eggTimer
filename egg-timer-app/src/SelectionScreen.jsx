import PropTypes from "prop-types";
import softBoiled from "./photos/softBoiled.jpeg";
import friedEgg from "./photos/fried.jpeg";
import scrambled from "./photos/scrambled.jpeg";
import hardBoiled from "./photos/hardBoiled.jpeg";

const eggs = [
  {
    eggNames: "Soft Boiled",
    time: 300,
    pictures: softBoiled,
  },
  {
    eggNames: "Fried Egg",
    time: 180,
    pictures: friedEgg,
  },
  {
    eggNames: "Scrambled Egg",
    time: 300,
    pictures: scrambled,
  },
  {
    eggNames: "Hard Boiled",
    time: 600,
    pictures: hardBoiled,
  },
];
function SelectionScreen({ onSelect }) {
  return (
    <div className="image-btn">
      <h3 className="description">What are you making today?</h3>
      <div>
        {eggs.map((egg, index) => (
          <button key={index} onClick={() => onSelect(egg)}>
            {egg.eggNames}

            <img
              src={egg.pictures}
              alt={egg.eggNames}
              width="120"
              height="120"
              style={{ display: "block" }}
            />
          </button>
        ))}
      </div>
      <div className="footer-container">
        <footer>Made by Afere Precious Onome</footer>
        <p className="footer-p">Inspired by Nashallery On Instagram</p>
      </div>
    </div>
  );
}

export default SelectionScreen;
SelectionScreen.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
