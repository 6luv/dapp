import { useEffect } from "react";
import { ethers, Contract } from "ethers";
import abi from "../abi.json";

const Login = ({ signer, setSigner, setContract }) => {
  const onClickLogin = async () => {
    try {
      if (!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);
      setSigner(await provider.getSigner());
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogout = async () => {
    try {
      setSigner(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!signer) return;

    setContract(
      new Contract("0xD3c461a47adEC72FBF437Fe80afA0BeB815A473c", abi, signer)
    );
  }, [signer]);

  return (
    <>
      {signer ? (
        <div className="flex gap-8 items-center">
          <div className="font-semibold text-xl text-white">
            안녕하세요, {signer.address.substring(0, 7)}...
            {signer.address.substring(signer.address.length - 5)}님
          </div>
          <button
            className="font-semibold text-sm rounded-md text-white border-4 border-white px-6"
            onClick={onClickLogout}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <button
          className="font-semibold rounded-md text-white border-4 border-white px-6 py-6"
          onClick={onClickLogin}
        >
          🦊 메타마스크 로그인
        </button>
      )}
    </>
  );
};

export default Login;
