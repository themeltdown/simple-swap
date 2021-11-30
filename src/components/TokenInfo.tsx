import React from "react";

interface ITokenInfoProps {
  address: string;
}

export const TokenInfo = ({ address }: ITokenInfoProps) => {
  return <div className="">{address}</div>;
};
