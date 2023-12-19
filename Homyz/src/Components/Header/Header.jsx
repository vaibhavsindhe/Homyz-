import { useState } from "react";
import "./Header.css";
import OutsideClickHandler from 'react-outside-click-handler';
import { FaBarsProgress } from "react-icons/fa6";
export default function Header(){
    const [menuOpened,setMenuOpened]=useState(false);
    const getMenuStyles=(menuOpened)=>{
        if(document.documentElement.clientWidth<=768){
            return {right:!menuOpened && "-100%"}
        }
    }
    return(
        <section className="h-wraper">
            <div className="flexRow  innerWidth h-container">
                <img src="/logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
                    <div className="h-menu flexCenter"
                    style={getMenuStyles(menuOpened)}
                    >
                        <a href="">Residencies</a>
                        <a href="">Contact Us</a>
                        <a href="">Our value</a>
                        <a href="">Get started</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                    <FaBarsProgress size={30}/>
                </div>
            </div>
            
        </section>
    )
}