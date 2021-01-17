import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.css'


const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className={classes.Modal}>
            {/* <span className={classes.Close}>×</span> */}
            <div onClick={(e) => e.stopPropagation()} className={classes.ModalContent}>
                <div className={classes.Container}>
                
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                
                <div className={classes.Clearfix}>
                   {props.action}
                </div>
                </div>
            </div>
        </div>, 
    document.querySelector('#modal')
    )
}

export default Modal
