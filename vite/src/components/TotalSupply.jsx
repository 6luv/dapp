import { useState } from "react";
import { formatEther } from "ethers";

const TotalSupply = ({ contract }) => {
  const [totalSupply, setTotalSupply] = useState();

  const onClickTotalSupply = async () => {
    try {
      const response = await contract.totalSupply();
      setTotalSupply(formatEther(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="view-button-style" onClick={onClickTotalSupply}>
        totalSupply
      </button>
      {totalSupply ? (
        <div className="response-style">{totalSupply}</div>
      ) : (
        <div className="response-style text-gray-400">totalSupply</div>
      )}
    </div>
  );
};

export default TotalSupply;
