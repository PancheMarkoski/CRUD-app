import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createStream} from '../../../actions'
import StreamForm from '../StreamForm/StreamForm'


class StreamCreate extends Component {

    
 
    

    onSubmit = (formValue) => {
        this.props.createStream(formValue)
    }

    render() {
        
        return (
            <div>
                <h1>Create Stream</h1>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}




export default connect(null, {createStream})(StreamCreate)