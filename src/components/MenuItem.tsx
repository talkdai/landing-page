"use client";

import { useState } from "react";

type Props = {
    name: string;
    onClick?: () => void;
    subItems?: { name: string }[];
};

export function MenuItem ({name, onClick, subItems}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      setIsSelected(!isSelected);
      if (onClick) onClick();
    };

    const handleClose = () => {
        setIsOpen(false);
      };
    
    return(
        <li className=" menu-item md:flex-row">
             <button className="flex items-center gap-2 pl-2 pr-2 py-2 md:pl-4 md:pr-4 md:py-3 md:max-w-[340px] md:h-[40px] rounded-md" 
             onClick={() => {
                handleToggle();
                if (onClick) onClick();
              }}
            >
                <span
                    className={`font-semibold ${isSelected ? 'text-primary-purple' : 'text-white'} text-base`}
                    style={{marginRight: 4}}
                >{name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M12.9602 15.7131L18.9702 9.70309L17.5572 8.28809L12.9602 12.8881L8.36419 8.28809L6.9502 9.70209L12.9602 15.7131Z" fill={`${isSelected ? '#9A59FF' : '#fff'}`}/>
                </svg>
            </button>
            {isOpen && subItems && (
        <ul className="px-auto md:hidden">
          {subItems.map((subItem, index) => (
            <li key={index} className="flex menu-item">
              <button
                className="flex items-center gap-2 pl-2 pr-2 py-2 md:pl-4 md:pr-4 md:py-3 rounded-md"
                onClick={() => {
                    console.log(`${subItem.name} clicked`);
                    handleClose();
                  }}
                
              >
                <span className="text-white text-base">{subItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
