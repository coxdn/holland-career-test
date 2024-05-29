import React, { useEffect, useState } from "react";
import "../styles/HighlightedProgressBar.css";

const HighlightedProgressBar = ({type, score, maxScore, onClick}) => {
    const [showHighlight, setShowHighlight] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const highlightTimeout = setTimeout(() => {
            setShowHighlight(true);
            setShowTooltip(true);
        }, 2000);

        const tooltipTimeout = setTimeout(() => {
            setFadeOut(true);
        }, 10000);

        const cleanupTimeout = setTimeout(() => {
            setShowTooltip(false);
            setShowHighlight(false);
        }, 10500);

        return () => {
            clearTimeout(highlightTimeout);
            clearTimeout(tooltipTimeout);
            clearTimeout(cleanupTimeout);
        };
    }, []);

    return (
        <div
            className={`result-item ${showHighlight ? "highlight" : ""} ${fadeOut ? "fade-out" : ""}`}
            onClick={onClick}
        >
            <div className="result-bar-container">
                <div
                    className="result-bar"
                    style={{
                        width: `${(score / maxScore) * 100}%`,
                    }}
                ></div>
            </div>
            <div className="result-score">
                <span>{score}</span>
            </div>
            {showTooltip && <div className="tooltip">натисніть тут для подробиць</div>}
            {showHighlight && !fadeOut && <div className="highlight-circle"></div>}
        </div>
    );
};

export default HighlightedProgressBar;
