import { useEffect, useState } from "react";

import "./Exercise.scss";
import Loading from "../loading/Loading";

const Exercise = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => {
      clearTimeout(setTimeoutId);
    };
  }, []);

  function generateText(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "a" || text[i] === "A") {
        newText += `c${text[i]}c`;
      } else {
        newText += text[i];
      }
    }
    return newText;
  }

  return (
    <div className="exercise">
      {loading ? (
        <Loading />
      ) : (
        <div className="exercise-inner">
          <input
            type="text"
            className="exercise-inner-input"
            placeholder="Write something..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className="exercise-inner-result">
            {generateText(value)
              ? generateText(value)
              : "Here will be some text with 'c' character after and before character 'a'."}
          </div>
          <p>Aren Matinyan 019</p>
        </div>
      )}
    </div>
  );
};

export default Exercise;
