import { useState } from "react";
import { formatEther } from "ethers";

const BalanceOf = ({ contract }) => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState();

  const onClickBalanceOf = async () => {
    try {
      if (!address) return;

      const response = await contract.balanceOf(address);
      setBalance(formatEther(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="view-button-style" onClick={onClickBalanceOf}>
        balanceOf
      </button>
      {balance ? (
        <div className="response-style">{balance}</div>
      ) : (
        <input
          className="response-style"
          placeholder="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      )}
    </div>
  );
};

export default BalanceOf;
