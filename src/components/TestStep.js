import React, { useState, useEffect } from "react";

const TestStep = ({ questionData, onNext, onPrevious, step, totalSteps, selectedAnswer }) => {
  const { question, options, multiSelect } = questionData;
  const [selectedOption, setSelectedOption] = useState(selectedAnswer || null);
  const [selectedOptions, setSelectedOptions] = useState(selectedAnswer || []);

  useEffect(() => {
    if (!multiSelect && selectedAnswer !== null) {
      setSelectedOption(selectedAnswer);
    } else if (multiSelect && selectedAnswer.length > 0) {
      setSelectedOptions(selectedAnswer);
    }
  }, [selectedAnswer, multiSelect]);

  const getOptionAnswer = option => option.answer;

  const handleOptionChange = (option) => {
    if (!multiSelect) {
      setSelectedOption(option);
      onNext(option);
    } else {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.includes(option)
          ? prevSelectedOptions.filter((o) => o !== option)
          : [...prevSelectedOptions, option]
      );
    }
  };

  const handleNext = () => {
    if (!multiSelect && selectedOption !== null) {
      onNext(selectedOption);
    } else if (multiSelect && selectedOptions.length > 0) {
      onNext(selectedOptions);
    } else if (selectedAnswer !== undefined) {
      onNext(selectedAnswer);
    }
  };

  const isNextButtonDisabled = selectedAnswer === undefined;

  return (
    <div>
      <h2>{`${question} (${step + 2} / ${totalSteps})`}</h2>
      <div>
        {options.map((option) => (
          <button
            key={getOptionAnswer(option)}
            onClick={() => handleOptionChange(option)}
            style={{
              backgroundColor:
                (!multiSelect && selectedOption === option) ||
                (multiSelect && selectedOptions.includes(option))
                  ? "lightblue"
                  : "white",
              border: "1px solid black",
              margin: "10px 0",
              padding: "10px",
              cursor: "pointer",
              color: "black",
              width: "100%",
            }}
          >
            {getOptionAnswer(option)}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={onPrevious}>Попереднє</button>
        <button onClick={handleNext} disabled={isNextButtonDisabled}>Наступне</button>
      </div>
    </div>
  );
};

export default TestStep;
