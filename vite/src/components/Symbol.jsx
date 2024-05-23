import { useState } from "react";

const Symbol = ({ symbol }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickSymbol = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="view-button-style" onClick={onClickSymbol}>
        symbol
      </button>
      <div className={`response-style  ${isClicked ? "" : "text-gray-400"}`}>
        {isClicked ? symbol : "symbol"}
      </div>
    </div>
  );
};

export default Symbol;
