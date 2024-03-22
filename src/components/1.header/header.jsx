import { useEffect, useState } from 'react';
import './header.css';
const Header =()=>{
    const [showmodal,setshowmodal]=useState(false);
    const [theme,settheme]=useState("dark");
    useEffect(()=>{
        if(theme==="light"){
         document.body.classList.remove("dark")

        document.body.classList.add("light")}
        else{
            document.body.classList.remove("light")
            document.body.classList.add("dark")}

    },[theme])

return (
    <header className=" flex">
                <button onClick={()=>{setshowmodal(true)}} className='menu'><i class="fa-solid fa-bars"></i>

</button>

        <div/>
        <nav>
            <ul className="flex"><li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
            </ul>
        </nav>
       
       
        <button onClick={() => {
localStorage.setItem("currentmode",theme==="dark"? "light":"dark")
settheme(localStorage.getItem("currentmode"))
            
        }} className='mode flex'>{theme==="dark" ? (<i class="fa-regular fa-moon"></i>):(<i class="fa-regular fa-sun"></i>
        )}

</button>




{showmodal && (<div className='fixed'>
    <ul className='modal  '>
        <li><button on onClick={()=>{setshowmodal(false)}}><i class="fa-solid fa-x"></i>
</button></li>
    <li ><a href="">About</a></li>
    <li><a href="">Articles</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="">Speaking</a></li>
    <li><a href="">Uses</a></li>
    </ul>
</div>)}
    </header>
);
}
export default Header;