import React from "react";

type Props = {
  onClick: () => void;
};

const ConnectWallet: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center mt-2">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Connect to Metamask
      </button>
    </div>
  );
};

export default ConnectWallet;
