import React from 'react';

const Menu = ({title,listObject}) => {
    
    return (
        
        <div className="menuContainer">
        <p>{title}</p>
  
        <ul>
          {listObject &&
            listObject.map((li) => (
              <li key={li.id}>
                <a href="#">
                  <i>{li.icon}</i>
                  <span> {li.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    );
};

export default Menu;