import { useEffect, useState } from 'react'
import './TerminalContent.css'
const TerminalContent = (props) => {

    const onKeyBtnDown = (event) => {
        if(event.keyCode == 13){
            let inputElement = document.getElementsByTagName('input')
            for(var i=0; i < inputElement.length; i++){
                if(inputElement[i].className.indexOf('terminal__input')>=0){
                    inputElement[i].className += " disable__input";
                }
                
            }
        }

    }

    let mycontents = props.output.map(out=>{
        return Object.keys(out).map((val,i)=> {
           return(
               <div key={val+i} >
                   <div className="results">
                       {out[val]}
                   </div>
                   <div className="terminal__commandArea">
                       <span className="terminal__hostname">Dzons:~ </span> 
                       <input id="terminal__inputId" autoComplete="off" autoCorrect="off" className={`terminal__input`} placeholder="help" onKeyUp={props.onPressed} onChange={props.onChanged} onKeyDown={onKeyBtnDown} autoFocus></input>
                   </div>
               </div>
           )
           }  
        )
    })
    
    useEffect(()=>{
        if(props.toClear){
            document.getElementById('terminal__inputId').value = ''
            document.getElementById('terminal__inputId').focus()
            document.getElementById('terminal__inputId').classList.remove("disable__input")
        }
        
    },[props.toClear])
    

    return (
         <div className="terminal__contents">
            <div className="terminal__commandArea">
                <span className="terminal__hostname">Dzons:~ </span> 
                <input id="terminal__inputId" autoComplete="off" autoCorrect="off" className={`terminal__input`} placeholder="help" onKeyUp={props.onPressed} onChange={props.onChanged} onKeyDown={onKeyBtnDown} autoFocus ></input>
            </div>
             {
                 mycontents
             }
          
        </div>
    )
}

export default TerminalContent