import { useEffect, useState } from "react";
import Login from "./components/Login";
import BalanceOf from "./components/BalanceOf";
import Name from "./components/Name";
import Symbol from "./components/Symbol";
import TotalSupply from "./components/TotalSupply";
import Allowance from "./components/Allowance";
import Approve from "./components/Approve";
import Transfer from "./components/Transfer";
import TransferFrom from "./components/TransferFrom";
import BurnToken from "./components/BurnToken";

const App = () => {
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();
  const [symbol, setSymbol] = useState();

  const getSymbol = async () => {
    try {
      const response = await contract.symbol();
      setSymbol(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!contract) return;
    getSymbol();
  }, [contract]);

  return (
    <div className="bg-[#232336] min-h-screen flex flex-col justify-start items-center py-16">
      <Login
        signer={signer}
        setSigner={setSigner}
        contract={contract}
        setContract={setContract}
      />
      {signer && (
        <div className="flex flex-col mt-8 gap-6">
          <Allowance contract={contract} />
          <BalanceOf contract={contract} symbol={symbol} />
          <Name contract={contract} />
          <Symbol symbol={symbol} />
          <TotalSupply contract={contract} symbol={symbol} />
          <Approve contract={contract} />
          <BurnToken contract={contract} />
          <Transfer contract={contract} />
          <TransferFrom contract={contract} />
        </div>
      )}
    </div>
  );
};

export default App;
