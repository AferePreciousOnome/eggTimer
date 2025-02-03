import { useState } from "react";
import EggTimer from "./EggTimer";
import SelectionScreen from "./SelectionScreen";
import { TimerContainer, Header, WrapperDiv } from "./styles";

function App() {
  const [selectedEgg, setSelectedEgg] = useState(null);
  return (
    <>
      <TimerContainer>
        <WrapperDiv>
          <Header>Egg Timer</Header>

          {!selectedEgg ? (
            <SelectionScreen onSelect={setSelectedEgg} />
          ) : (
            <EggTimer
              eggType={selectedEgg}
              onReset={() => setSelectedEgg(null)}
            />
          )}
        </WrapperDiv>
      </TimerContainer>
    </>
  );
}

export default App;
