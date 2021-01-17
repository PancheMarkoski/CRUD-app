import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

import classes from './StreamForm.css'

class StreamForm extends Component {

    renderError ({error, touched}) {
        
        if(error && touched) {
            return (
                <div className={classes.Error}>
                    {error}
                </div>
            )
        }
    }
 
    renderInput = ({input, label, meta}) => {
        
        const className = `${meta.error && meta.touched ? classes.InputError : classes.Input}`        
        return (
        <div>
            <label >{label}</label>
            <input className={className} {...input} autoComplete='off' />
            {this.renderError(meta)}
        </div>   
            )
    }

    onSubmit = (formValue) => {
        this.props.onSubmit(formValue)
    }

    render() {
        
        return (
            <form className={classes.Form} onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="title" component={this.renderInput} label={'Enter Title'} />
                <Field name="description"  component={this.renderInput} label={'Enter Description'} />
                <button className={classes.Button} >Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if(!formValues.title) {
        errors.title = "You must enter a title"
    }if(!formValues.description) {
        errors.description = 'You must enter a description'
    }
    return errors;
}

export default reduxForm({
    form: 'StreamFrom',
    validate
})(StreamForm)


