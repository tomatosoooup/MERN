import React, { useState } from "react";

interface TextCensorProps {
  initialText: string;
  badWords: string[];
}

export const TextCensor: React.FC<TextCensorProps> = ({
  initialText,
  badWords,
}) => {
  const censorWord = (word: string) => "*".repeat(word.length);

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (word: string, index: number) => {
    // Консоль додана для розуміння яке слово було натиснуто за індексом
    console.log(`'${word}' with index: ${index} was clicked`);
    setClickedIndex(index);
  };

  const censoredText = initialText
    .split(" ")
    .map((elem: string, index: number) => {
      const isBadWord = badWords.includes(elem);
      return (
        <span
          key={index}
          onClick={() => isBadWord && handleClick(elem, index)}
          //   Стилі я додав для того, щоб можна було відрузнити яке слово було розкоментовано
          style={{
            cursor: isBadWord ? "pointer" : "auto",
            color: clickedIndex === index ? "red" : "black",
          }}
        >
          {isBadWord && clickedIndex === index
            ? initialText.split(" ")[index]
            : isBadWord
            ? censorWord(elem)
            : elem}
          {index !== initialText.split(" ").length - 1 && " "}
        </span>
      );
    });

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <p className="mb-2">Оригінальний текст:</p>
      <div className="border border-gray-300 rounded-md p-3 mb-4">
        {initialText}
      </div>

      <div className="mt-6">
        <p className="mb-2">Зацензурений текст:</p>
        <div className="border border-gray-300 rounded-md p-3">
          {censoredText}
        </div>
      </div>
    </div>
  );
};
