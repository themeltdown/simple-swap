import React from "react";
import { TokenInfo } from "./TokenInfo";

interface AccountInputProps {
  label: string;
}

export const AccountInput = ({ label }: AccountInputProps) => {
  return (
    <form className="flex flex-wrap gap-2">
      <div className="w-full py-2 border-b-2 border-gray-400 flex justify-between gap-3">
        <input
          type="email"
          className="outline-none text-md flex-1 px-4 py-3 bg-transparent"
          placeholder={label}
        />
      </div>
      <label className="w-full flex gap-1 font-semibold text-md justify-center">
        <span>account info</span>
      </label>
    </form>
  );
};
