import React from 'react';
import WardenItems from "./WardenItems";

const Dropdown = ({ submenus, dropdown, depthLevel}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <WardenItems 
            items={submenu} 
            key={index} 
            depthLevel={depthLevel} 
          />
        ))}
      </ul>
    );
  };
  
  export default Dropdown;