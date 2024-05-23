import { parseEther } from "ethers";
import { useState } from "react";

const TransferFrom = ({ contract }) => {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState();

  const onClickTransferFrom = async () => {
    try {
      if (!fromAddress || !toAddress || !amount) return;
      const response = await contract.transferFrom(
        fromAddress,
        toAddress,
        parseEther(amount)
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="write-button-style" onClick={onClickTransferFrom}>
        TransferFrom
      </button>
      <input
        className="response-style"
        type="text"
        placeholder="from address"
        value={fromAddress}
        onChange={(e) => setFromAddress(e.target.value)}
      />
      <input
        className="response-style"
        type="text"
        placeholder="to address"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />
      <input
        className="response-style"
        type="text"
        placeholder="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};

export default TransferFrom;
