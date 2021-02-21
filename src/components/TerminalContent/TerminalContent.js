import { useEffect, useState } from 'react'
import './TerminalContent.css'
const TerminalContent = (props) => {
 
    const [disableInput, setDisableInput] = useState(true)
    //props.disable = false
    
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
        return Object.keys(out).map((val)=> {
           return(
               <div key={val} >
                   {/* <div className="terminal__commandArea">
                       <span className="terminal__hostname">Dzons:~ </span> 
                       <input className="terminal__input" placeholder="help" onKeyUp={props.onPressed} onChange={props.onChanged} ></input>
                   </div> */}

                   <div>
                       {out[val]}
                   </div>
                   <div className="terminal__commandArea">
                       <span className="terminal__hostname">Dzons:~ </span> 
                       <input id="terminal__inputId" className={`terminal__input`} placeholder="help" onKeyUp={props.onPressed} onChange={props.onChanged} onKeyDown={onKeyBtnDown} autoFocus></input>
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
        }
        
    },[props.toClear])
    

    return (
         <div className="terminal__contents">
            <div className="terminal__commandArea">
                <span className="terminal__hostname">Dzons:~ </span> 
                <input id="terminal__inputId" className={`terminal__input`} placeholder="help" onKeyUp={props.onPressed} onChange={props.onChanged} onKeyDown={onKeyBtnDown} autoFocus ></input>
            </div>
             {
                 mycontents
             }
          
        </div>
    )
}

export default TerminalContent