import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {fetchStream, editStream} from '../../../actions'
import StreamForm from '../StreamForm/StreamForm'

class StreamEdit extends Component  {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)        
    }

    onSubmit = (initialValues) => {
        console.log(initialValues)
        this.props.editStream(this.props.match.params.id, initialValues)                
    }
        render() {
        console.log(this.props)

        if(!this.props.stream) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
            
        return (    
            <div>
                <h1>Stream Edit</h1>
                <StreamForm 
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
   
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit)
