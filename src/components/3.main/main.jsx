
import { useState } from 'react';
import './main.css';
const myprojects=[
{projecttitle:"react project",categorie:"react",imgpath:"a"},
{projecttitle:"css project",categorie:"css",imgpath:"b"},
{projecttitle:"javascript project",categorie:"javascript",imgpath:"c"},
{projecttitle:"node project",categorie:"node",imgpath:"d"},

];
const Main=()=>{
    const [currentActive,setcurrentActive]=useState("All");
    const[arr,setArr]=useState( myprojects);
return (
    <main  className='flex '>
        <section  className='  left-section flex'>
<button  onClick={()=>{setcurrentActive("All")}}  className={currentActive==="All"?"active":null}>All projects</button>
<button onClick={()=>{
        setcurrentActive("css");
const newArr=myprojects.filter (item=>{
    return  item.categorie==="css"
})

        setArr(newArr)}}
         className={currentActive==="css"?"active":null}>HTML & CSS</button>
<button onClick={()=>{
        setcurrentActive("javascript");
const newArr=myprojects.filter (item=>{
    return  item.categorie==="javascript"
})

        setArr(newArr)}}
         className={currentActive==="javascript"?"active":null}>Javascript</button>
<button onClick={()=>{
        setcurrentActive("react");
const newArr=myprojects.filter (item=>{
    return  item.categorie==="react"
})

        setArr(newArr)}}
         className={currentActive==="react"?"active":null}>React & MUI</button>
<button onClick={()=>{
        setcurrentActive("node");
const newArr=myprojects.filter (item=>{
    return  item.categorie==="node"
})

        setArr(newArr)}}
         className={currentActive==="node"?"active":null} > Node & Express</button>
        </section>
        <section   className='   flex right-section'>
{arr.map((item)=>{
    return(
    <article key={item.imgpath} className='card'>
    <img width={244} src={item.imgpath} alt="" />
    <div style={{width:"244px"}} className=' box'>
    <h1 className='title'>{item.projecttitle}</h1>
    <p className='subtitle'>ddddddddddddddddddddd</p>
    <div className="flex icons">
        <div style={{gap:"11px"}} className='flex'>
    <div><i class="fa-solid fa-link"></i></div>
    <div><i class="fa-brands fa-github"></i></div>
    </div>
    <a className='flex link' href="">more <span className='icon-arrow-right'><i class="fa-solid fa-arrow-right"></i>
    </span></a>
    </div>
    </div>
    </article>)
})}
        </section>
    </main>
);
}
export default Main ;