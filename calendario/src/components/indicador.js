import {useState} from 'react'
import './styles.css'
import Fecha from './fecha';

function Botonera() {
    const [step,setStep] =useState(0);
    const [steps,setSteps] =useState(0);

    function nexNro(){
        setStep(step +1)
    }
    function backNro(){
        setStep(step -1)
    }
    function saltNro(){
        setSteps(steps + step)
    }
    function saltBackNro(){
        setSteps(steps - step)
    }
    return (
    <>
        <div className='indicador-container'>
            <div className='indicador-base'>
                <button className='boton' onClick={backNro}>↤</button>
                <br></br>
                <span>{step}</span>
                <button className='boton' onClick={nexNro}>↦</button>
                <br></br>
            </div>
            <div className='indicador-actual'>
                <button className='boton' onClick={saltBackNro}>⇇</button>
                <br></br>
                <span>{steps}</span>
                <button className='boton' onClick={saltNro}>⇉</button>
                <br></br>
            </div>
        </div>
        <Fecha dias={steps}/>
    </>
    );
}

export default Botonera;
