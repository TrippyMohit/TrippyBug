import classNames from "classnames";
import React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={classNames("mr-8 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap",
    {
       "border-orange-500 text-orange-500 focus:outline-none focus:text-orange-500 focus:border-orange-500":isActive,
        "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300":!isActive
    })}
    onClick={onClick}
  >
    {children}
  </button>
);