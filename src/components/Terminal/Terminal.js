import './Terminal.css'
import TerminalContent from '../TerminalContent/TerminalContent'
import { useState, useEffect } from 'react'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
const Terminal = (props) => {

    const [command, setCommand] = useState('')
    const [cmdOutput, setcmdOutput] = useState([])
    const [clear,setClear] = useState(false)
    let showContent = <div></div>
    let oldCmdOutput = []
    const onKeyPressed = (event) => {
        if(event.keyCode == 13){
            
            switch(command){           
                case 'help':
                    showContent = (
                        <div>
                            <p>getname</p>
                            <p>getaddress</p>
                            <p>getinfo</p>
                            <p>getcv</p>
                            <p>linktree</p>
                            <p>clear</p>
                        </div>
                    )
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"hep":showContent}])
                    setClear(false)
                    break
                case 'getname':
                    showContent = (
                        <div>
                            <p>John Sherchan</p>
                        </div>
                    )
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"getname":showContent}])
                    setClear(false)
                    break
                case 'getaddress':
                    showContent = (
                        <div>
                            <p>Dhapasi, Tokha, Kathmandu 44600</p>
                            <p>john.sherchan10@gmail.com</p>
                        </div>
                    )
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"getname":showContent}])
                    setClear(false)
                    break
                case 'getinfo':
                    showContent = (
                        <div>
                            <p>I am Kathmandu-based cyber-security and reverse engineering expert with </p>
                            <p>skillful expertise in security consulting, auditing, testing and compliance</p>
                            <p> and focuses on solving issues of concern to management in regards to cybersecurity.</p>
                        </div>
                    )
                        
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"getname":showContent}])
                    setClear(false)
                    break
                case 'getcv':
                    showContent = (<div><span>wget </span><a href="www.info.com">https</a></div>)
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"getname":showContent}])
                    setClear(false)
                    break
                case 'linktree':
                    showContent = (
                        <div>
                            <ul>
                                <li><a href="#">instagram</a></li>
                                <li><a href="#">facebook</a></li>
                                <li><a href="#">linkedin</a></li>
                                <li><a href="#">github</a></li>
                            </ul>
                        </div>
                    )
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"getname":showContent}])
                    setClear(false)
                    break
                case 'clear':
                    setcmdOutput([{}])
                    setClear(true)
                    break
                default:
                    showContent = (
                        <div>
                            <p>getname</p>
                            <p>getaddress</p>
                            <p>getinfo</p>
                            <p>getcv</p>
                            <p>linktree</p>
                            <p>clear</p>
                        </div>
                    )
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"help":showContent}])
                    setClear(false)
                    break
            }
        }
    }


    const onInputValueChanged = (event) =>{
        let cmd = event.target.value.toString()
        setCommand(cmd)
    }
    return (
        // <Aux>
            <div className="terminal">
                <div className="terminal__bar">
                    <CancelRoundedIcon className="terminal__cancleBtn" />
                </div>
                <div className="terminal__body">
                    <TerminalContent onChanged={onInputValueChanged} onPressed={onKeyPressed} output={cmdOutput} toClear={clear}/>
                    
                </div>
            </div>
        //{/* </Aux> */}
       
    )
}

export default Terminal