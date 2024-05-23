import { useState } from "react";

const BurnToken = ({ contract }) => {
  const [amount, setAmount] = useState();
  const [isBurnToken, setIsBurnToken] = useState(false);

  const onClickBurnToken = async () => {
    try {
      if (!amount) return;
      const response = await contract.burnToken(amount);
      console.log(response);
      setIsBurnToken(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="write-button-style" onClick={onClickBurnToken}>
        BurnToken
      </button>
      {isBurnToken ? (
        <div className="response-style">{amount} Burn!</div>
      ) : (
        <input
          className="response-style"
          placeholder="amount"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      )}
    </div>
  );
};

export default BurnToken;
