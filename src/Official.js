import React from 'react';
import './bootstrap.css';
import './App.css';

class Official extends React.Component{
    render(){
        return(
                <div className= "col-md-2">
                    <div className="gambarkecil">
                        <img src={this.props.gambarkecil}/>
                    </div>
                </div>
            
        )
    }
}
export default Official;