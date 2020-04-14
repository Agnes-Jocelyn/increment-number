import React, { Component } from 'react';


class Increment extends Component {
    state ={
        count: 0,
    }
            addIncrement = () => {
                this.setState({
                    count: this.state.count + 1,
                })
            } 
            
            addDecrement = () => {
            if(this.count < 0) {
            this.setState({
                    count: this.state.count - 1,
                })
            } else {
                window.alert('Angka tidak bisa minus')
            }
        }
            addReset = () => {
                this.setState({
                    count: this.state.count = 0,
                })
            } 

            render (){
            return(
                <>
                <div>
                    <button style={buttonstyle} onClick={this.addIncrement} >+</button>
                    <input style={labelstyle} value={this.state.count} />
                    <button style={buttonstyle} onClick={this.addDecrement}>-</button>
                </div>
                 <div>
                    <button onClick={this.addReset} style={buttonstylereset}>Reset</button>
                </div>
                </>
                )
            };   
}

export default Increment;

const buttonstyle = {
    backgroundColor: "palevioletred",
    width:"70px",
    borderColor: "palevioletred",
    marginLeft: "10px",
    marginRight: "10px"
}

const labelstyle = {
    color: "black",
    borderColor: "#FFB6C1",
    borderStyle: "solid",
    width : "50px",
    paddingRight: "20px",
    paddingLeft:"60px"
}

const buttonstylereset = {
    width : "130px",
    backgroundColor: "palevioletred",
    borderColor: "palevioletred",
    marginTop: "5px"
}