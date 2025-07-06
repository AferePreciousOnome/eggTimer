import { useState } from "react";
import EggTimer from "./components/EggTimer/EggTimer.jsx";
import SelectionScreen from "./components/SelectionScreen/SelectionScreen.jsx";
import styles from "./App.module.css";

function App() {
  const [selectedEgg, setSelectedEgg] = useState(null);

  return (
    <div className={styles.appContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Egg Timer</h1>

        {!selectedEgg ? (
          <SelectionScreen onSelect={setSelectedEgg} />
        ) : (
          <EggTimer
            eggType={selectedEgg}
            onReset={() => setSelectedEgg(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
