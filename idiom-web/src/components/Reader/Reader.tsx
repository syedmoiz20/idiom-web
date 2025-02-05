import React, { useState } from "react";
import "./Reader.css";

interface ReaderProps {
  text?: string;
  direction?: "ltr" | "rtl";
}

interface WordModalProps {
  word: string;
  isOpen: boolean;
  onClose: () => void;
}

const WordModal = ({ word, isOpen, onClose }: WordModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <h2>Word Details</h2>
        </div>
        <div className="modal-body">
          <p className="word-text">{word}</p>
          {/* Add more word details here */}
        </div>
      </div>
    </div>
  );
};

export const Reader = ({
  text = "يجب عليهم أن يفعلوا هذا فورًا",
  direction = "rtl",
}: ReaderProps) => {
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWord("");
  };

  return (
    <div className="reader-container" dir={direction}>
      <div className="word-container">
        {words.map((word, index) => (
          <button
            key={`${word}-${index}`}
            onClick={() => handleWordClick(word)}
            className="word-button"
          >
            {word}
          </button>
        ))}
      </div>

      <WordModal
        word={selectedWord}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
