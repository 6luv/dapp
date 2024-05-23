import { useState } from "react";

const Name = ({ contract }) => {
  const [name, setName] = useState();

  const onClickName = async () => {
    try {
      const response = await contract.name();
      setName(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="view-button-style" onClick={onClickName}>
        name
      </button>
      {name ? (
        <div className="response-style">{name}</div>
      ) : (
        <div className="response-style text-gray-400">name</div>
      )}
    </div>
  );
};

export default Name;
