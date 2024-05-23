import { parseEther } from "ethers";
import { useState } from "react";

const Transfer = ({ contract }) => {
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");

  const onClickTransfer = async () => {
    try {
      const response = await contract.transfer(toAddress, parseEther(amount));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="write-button-style" onClick={onClickTransfer}>
        Transfer
      </button>
      <input
        className="response-style"
        placeholder="to address"
        type="text"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />
      <input
        className="response-style"
        placeholder="amount"
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};

export default Transfer;
