import { useState } from "react";
import { formatEther } from "ethers";

const Allowance = ({ contract }) => {
  const [ownerAddress, setOwnerAddress] = useState("");
  const [spenderAddress, setSpenderAddress] = useState("");
  const [amount, setAmount] = useState();

  const onClickAllowance = async () => {
    try {
      if (!ownerAddress || !spenderAddress) return;
      const response = await contract.allowance(ownerAddress, spenderAddress);

      setAmount(formatEther(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="view-button-style" onClick={onClickAllowance}>
        allowance
      </button>
      {amount ? (
        <div className="response-style">{amount}</div>
      ) : (
        <>
          <input
            className="response-style"
            placeholder="owner address"
            type="text"
            value={ownerAddress}
            onChange={(e) => setOwnerAddress(e.target.value)}
          />
          <input
            className="response-style"
            placeholder="spender address"
            type="text"
            value={spenderAddress}
            onChange={(e) => setSpenderAddress(e.target.value)}
          />
        </>
      )}
    </div>
  );
};

export default Allowance;
