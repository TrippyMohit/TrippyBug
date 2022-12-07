import classNames from "classnames";
import React from "react";

export const ButtonTabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={classNames("mr-8 group inline-flex items-center py-4 border-b-2 font-semibold text-sm leading-5 cursor-pointer whitespace-nowrap rounded-xl px-10 ",
    {
       "bg-orange-500 text-white focus:outline-none focus:text-white focus:bg-orange-500":isActive,
        "border-transparent text-gray-500 hover:text-white hover:bg-orange-500 ":!isActive
    })}
    onClick={onClick}
  >
    {children}
  </button>
);