import React from "react";

type Props = {
  account: string;
  balance?: string | any;
  onClick?: () => void;
};

export const AccountInfo: React.FC<Props> = ({ account, balance }) => {
  return (
    <div className="flex flex-col mt-1 gap-1 bg-clip-text">
      <span>Account: </span>
      <span className="font-semibold text-sm">{account}</span>

      <span>Balance: </span>
      <span className="font-semibold">{balance}</span>
    </div>
  );
};
