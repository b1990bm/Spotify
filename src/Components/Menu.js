import React,{ useEffect } from 'react';

const Menu = ({title,listObject}) => {
    
  useEffect(() => {
    const allLi=document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");

      function changeMenuActive(){
        allLi.forEach((n)=>n.classList.remove("active"))
        this.classList.add("active")
      }

      allLi.forEach((n)=>n.addEventListener('click', changeMenuActive))
  },[])
    return (
        
        <div className="menuContainer">
        <p className="title">{title}</p>
  
        <ul>
          {listObject &&
            listObject.map((menu) => (
              <li key={menu.id}>
                {" "}
                <a href="#">
                  <i>{menu.icon}</i>
                  <span> {menu.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    );
};

export default Menu;