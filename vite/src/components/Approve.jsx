import { useState } from "react";

const Approve = ({ contract }) => {
  const [spenderAddress, setSpenderAddress] = useState("");
  const [value, setValue] = useState();

  const onClickApprove = async () => {
    try {
      if (!spenderAddress || !value) return;
      const response = await contract.approve(spenderAddress, value);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button className="write-button-style" onClick={onClickApprove}>
        Approve
      </button>
      <input
        className="response-style"
        placeholder="spender address"
        type="text"
        value={spenderAddress}
        onChange={(e) => setSpenderAddress(e.target.value)}
      />
      <input
        className="response-style"
        placeholder="value"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Approve;
