import React from "react";

export const FaqSelector = ({
    isActive,
    children,
    onClick,
}: {
    isActive: boolean;
    children: React.ReactNode;
    onClick: () => void;
}) => (

    <div className="flex bg-gray-50 w-5/6 p-2 gap-5 rounded-md cursor-pointer" onClick={onClick}>
        {children}
    </div>

);