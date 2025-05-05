import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learnpage from "./Learnpage";
import Practice from "./Practice";

const LearningApp = () => {
  const urduAlphabets = ["ا", "ب", "پ", "ت", "ٹ", "ث", "ج", "چ", "ح", "خ"]; // Add more if needed

  // Track unlocked alphabets
  const [unlockedAlphabets, setUnlockedAlphabets] = useState(
    [true, ...Array(urduAlphabets.length - 1).fill(false)]
  );

  // Store the last practice result
  const [practiceResult, setPracticeResult] = useState(null);

  // Function to unlock the next alphabet
  const unlockNextAlphabet = (index, result) => {
    setPracticeResult(result); // Store the result

    if (result === "correct" && index + 1 < urduAlphabets.length) {
      setUnlockedAlphabets((prev) => {
        const newUnlocked = [...prev];
        newUnlocked[index + 1] = true;
        return newUnlocked;
      });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/learn"
          element={
            <Learnpage
              urduAlphabets={urduAlphabets}
              unlockedAlphabets={unlockedAlphabets}
              practiceResult={practiceResult} // Passing result as a prop
            />
          }
        />
        <Route
          path="/practice"
          element={
            <Practice unlockNextAlphabet={unlockNextAlphabet} />
          }
        />
      </Routes>
    </Router>
  );
};

export default LearningApp;
