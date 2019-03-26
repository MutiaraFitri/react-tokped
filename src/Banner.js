import React, { Component }  from 'react'
import './bootstrap.css'

class Banner extends Component {
    render(){
        return (
            <div className="Banner">
                <div className="row">
                <img src={this.props.sumber}></img>
                </div>
            </div>
        )
    }
}

export default Banner;