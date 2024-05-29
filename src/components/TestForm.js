import React, { useState } from "react";
import StartPage from "./StartPage";
import TestStep from "./TestStep";
import ResultPage from "./ResultPage";
import questions from "../config/questions";

const TestForm = () => {
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleStart = () => {
    setStep(1);
  };

  const handleNext = (selectedOptions) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[step - 1] = selectedOptions;
    setSelectedAnswers(newSelectedAnswers);
    setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step === 2) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setSelectedAnswers([]);
  };

  const handleFinalSubmit = () => {
    alert(JSON.stringify(selectedAnswers, null, 2));
  };

  const calculateResults = () => {
    const results = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

    selectedAnswers.forEach((answer) => {
      if (!Array.isArray(answer)) {
        answer = [answer];
      }
      answer.forEach((option) => {
        const type = option.type;
        results[type] += 1;
      });
    });

    return results;
  };

  if (step === 0) {
    return <StartPage onStart={handleStart} />;
  }

  if (step > questions.length) {
    const results = calculateResults();
    return <ResultPage results={results} onRestart={handleRestart} />;
  }

  return (
    <TestStep
      questionData={questions[step - 1]}
      onNext={handleNext}
      onPrevious={handlePrevious}
      step={step - 2}
      totalSteps={questions.length}
      selectedAnswer={selectedAnswers[step - 1]}
    />
  );
};

export default TestForm;
