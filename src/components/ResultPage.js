import React, {useState} from "react";
import "../styles/ResultPage.css";
import HighlightedProgressBar from "./HighlightedProgressBar";
import Modal from "./Modal";
import explanations from "../config/explanations";

const ResultPage = ({results, onRestart}) => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const descriptions = {
        R: "Реалістичний: R",
        I: "Дослідницький: I",
        A: "Артистичний: A",
        S: "Соціальний: S",
        E: "Підприємницький: E",
        C: "Традиційний: C"
    };

    const maxScoreType = Object.keys(results).reduce((a, b) => (results[a] > results[b] ? a : b));

    const handleProgressBarClick = (type) => {
        setModalContent(explanations[type]);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="result-container">
            <h2>Результат теста</h2>
            <div className="result-wrapper">
                <div className="result-labels">
                    {Object.entries(descriptions).map(([type, description]) => (
                        <div key={type} className="result-label">
                            <span>{description}</span>
                        </div>
                    ))}
                </div>
                <div className="result-bars">
                    {Object.entries(results).map(([type, score]) => (
                        type === maxScoreType ? (
                            <HighlightedProgressBar
                                key={type}
                                type={type}
                                score={score}
                                maxScore={14}
                                onClick={() => handleProgressBarClick(type)}
                            />
                        ) : (
                            <div
                                key={type}
                                className="result-item"
                                onClick={() => handleProgressBarClick(type)}
                            >
                                <div className="result-bar-container">
                                    <div
                                        className="result-bar"
                                        style={{
                                            width: `${(score / 14) * 100}%`, // Рассчитываем процент от максимального балла 14
                                        }}
                                    ></div>
                                </div>
                                <div className="result-score">
                                    <span>{score}</span>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <h3>Ваш код Голланда: {Object.keys(results)
                .sort((a, b) => results[b] - results[a])
                .slice(0, 3)
                .join("")}</h3>
            <button onClick={onRestart}>Restart Test</button>
            {showModal && <Modal content={modalContent} onClose={handleCloseModal}/>}
        </div>
    );
};

export default ResultPage;
