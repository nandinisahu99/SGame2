import { useRef } from "react";
export default function Begin({setUsername, LevelUp, setLevelUp}) {
    const inputRef = useRef();

    const handleClick=()=>{
        inputRef.current.value && setUsername(inputRef.current.value);
    };
  return (
        <div className="Start">
        <input placeholder ="Enter your RollNumber" className="startInput" ref={inputRef}/>
        <button className="Statbutton" onClick={handleClick}>Start - Level 1</button>
        </div>
  )
}
 

