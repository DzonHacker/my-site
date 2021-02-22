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
                            <div className="content__elements">
                                <p>getname </p> 
                                <span>Get Full Name Of the Owner</span>
                            </div>
                            <div className="content__elements">
                                <p>getaddress</p> 
                                <span>Get Address/Phone Of the Owner</span>
                            </div>
                            <div className="content__elements">
                                <p>getinfo </p>
                                <span>Get Info in Brief</span>
                            </div>
                            <div className="content__elements">
                                <p>viewcv </p>
                                <span>View CV</span>
                            </div>
                            <div className="content__elements">
                                <p>linktree </p>
                                <span>Get Social Site Links</span>
                            </div>
                            <div className="content__elements">
                                <p>clear </p>
                                <span>Clear Terminal</span>
                            </div>
                            
                        </div>
                    )
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"help":showContent}])
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
                            <p>+977 9860176702</p>
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
                case 'viewcv':
                    showContent = (<div><span>wget </span><a className="cv__a" href="#">https://mycv.com</a></div>)
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"getname":showContent}])
                    setClear(false)
                    break
                case 'linktree':
                    showContent = (
                        <div>
                            <p>====== Links ======</p>
                            <p style={{marginBottom : "20px"}}>== Click To Redirect ==</p>
                            <ul className="linktree">
                                <li className="linktree__list"><a className="linktree__list_a" target="__blank" href="https://johnsherchan.com.np">Website</a></li>                   
                                <li className="linktree__list"><a className="linktree__list_a" target="__blank" href="https://www.instagram.com/0x447a6f6e/">instagram  - @0x447a6f6e</a></li>
                                <li className="linktree__list"><a className="linktree__list_a" target="__blank" href="https://www.instagram.com/cyber._.mancer/">instagram  - @cyber._.mancer</a></li>
                                <li className="linktree__list"><a className="linktree__list_a" target="__blank" href="https://www.facebook.com/john.sherchan.9/">facebook</a></li>
                                <li className="linktree__list"><a className="linktree__list_a" target="__blank" href="https://www.linkedin.com/in/john-sherchan-b4a0a2147/">linkedin</a></li>
                                <li className="linktree__list"><a className="linktree__list_a" target="__blank" href="https://github.com/DzonHacker">github</a></li>
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
                            <div className="content__elements">
                                <p>getname </p> 
                                <span>Get Full Name Of the Owner</span>
                            </div>
                            <div className="content__elements">
                                <p>getaddress</p> 
                                <span>Get Address Of the Owner</span>
                            </div>
                            <div className="content__elements">
                                <p>getinfo </p>
                                <span>Get Info in Brief</span>
                            </div>
                            <div className="content__elements">
                                <p>viewcv </p>
                                <span>View CV</span>
                            </div>
                            <div className="content__elements">
                                <p>linktree </p>
                                <span>Get Social Site Links</span>
                            </div>
                            <div className="content__elements">
                                <p>clear </p>
                                <span>Clear Terminal</span>
                            </div>
                            
                        </div>
                    )
                    oldCmdOutput = [...cmdOutput]
                    setcmdOutput([...cmdOutput,{"help":showContent}])
                    setClear(false)
            }
        }
    }


    const onInputValueChanged = (event) =>{
        let cmd = event.target.value.toString().toLowerCase()
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