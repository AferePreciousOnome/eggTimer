// SelectionScreen.js
import PropTypes from "prop-types";
import styles from "./SelectionScreen.module.css";

const eggs = [
  {
    eggNames: "Soft Boiled",
    time: 300,
    pictures: "/photos/softBoiled.jpeg",
    recipe:
      "Boil for 5 minutes, peel gently, and serve with toast soldiers for a runny yolk.",
  },
  {
    eggNames: "Fried Egg",
    time: 180,
    pictures: "/photos/fried.jpeg",
    recipe:
      "Heat oil in a pan, crack the egg, cook sunny side up or flip for over easy.",
  },
  {
    eggNames: "Scrambled Egg",
    time: 300,
    pictures: "/photos/scrambled.jpeg",
    recipe:
      "Beat eggs with salt and pepper. Cook on low heat, stirring gently until soft and fluffy.",
  },
  {
    eggNames: "Hard Boiled",
    time: 600,
    pictures: "/photos/hardBoiled.jpeg",
    recipe:
      "Boil for 10-12 minutes, cool in ice water, peel, and enjoy as a snack or in salads.",
  },
];

function SelectionScreen({ onSelect }) {
  return (
    <div className={styles.imageBtn}>
      <h3 className={styles.description}>What are you making today?</h3>
      <div className={styles.imageGrid}>
        {eggs.map((egg, index) => (
          <button
            key={index}
            onClick={() => onSelect(egg)}
            className={styles.eggButton}
          >
            <span className={styles.eggName}>{egg.eggNames}</span>
            <img
              src={egg.pictures}
              alt={`Picture of ${egg.eggNames}`}
              width="120"
              height="120"
            />
            <p className={styles.recipe}>{egg.recipe}</p>{" "}
          </button>
        ))}
      </div>
      <div className={styles.footerContainer}>
        <footer>Made by Afere Precious Onome</footer>
        <p className={styles.footerP}>Inspired by Nashallery on Instagram</p>
      </div>
    </div>
  );
}

export default SelectionScreen;

SelectionScreen.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
