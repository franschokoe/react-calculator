
import React , {useState} from "react";
import './calculator.css'

function Calculator(){
    const [number , setNumber] = useState('20 + 10 ');

    const multiply = ()=>{

    }

    const divide = ()=>{

    }

    const add = ()=>{

    }

    const subtract = ()=>{

    }

    const answer = ()=>{

    }

    const clear = () =>{

    }


    return(
        <div className="Main-Container">
            <div className="sec-container">
                <div>
                    <h2 className="Headername">CHOKOE SCI CALCULATOR</h2>
                </div>
                <div className="display">
                    <input type="text" readOnly value={number} ></input>
                </div>
                <div className="Buttons">
                    <div className="group0">
                        <button className="operators1">AC</button>
                        <button className="operators" onClick={clear()}>C</button>
                        <button className="operators2" onClick={divide()}>/</button>
                    </div>
                    <div className="group1">
                        <button>9</button>
                        <button>8</button>
                        <button>7</button>
                        <button className="operators2" onClick={multiply()}>x</button>
                    </div>
                    <div className="group2">
                        <button>6</button>
                        <button>5</button>
                        <button>4</button>
                        <button className="operators2" onClick={subtract()}>-</button>
                    </div>
                    <div className="group3">
                        <button>3</button>
                        <button>2</button>
                        <button>1</button>
                        <button className="operators2" onClick={add()}>+</button>
                    </div>
                    <div className="group4">
                        <button>0</button>
                        <button className="operators2" onClick={answer()}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calculator