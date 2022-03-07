import react from "react";
const Header =(props)=>{
return(
    <div className="header">
        <h1>Notes</h1>
        <button className="save" onClick={()=>{props.darkModeHandler((previous)=>!previous)}}>Toggle Mode</button>
    </div>
)
}
export default Header;