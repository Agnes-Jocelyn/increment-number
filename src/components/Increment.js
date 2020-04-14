import React, { Component } from 'react';
import "../App.css"
import styled from 'styled-components';

class Increment extends Component {
    state ={
        count: 0,
    }
            addIncrement = () => {
                this.setState({count: this.state.count + 1,})
            } 
            
            addDecrement = () => {
            this.setState({count: this.state.count -1,})
            if( this.state.count <= 0){
                this.setState({count : this.state.count})
                window.alert("Tidak bisa min");
            }}
            
            addReset = () => {this.setState({count: this.state.count = 0,})
            } 

            render (){
                
                const Button = styled.button`
                background-color: #38ACEC;
                border-color: #38ACEC;
                margin-bottom: 1em;
                padding: 10px 40px 10px 40px;
                text-align:center;
                color: white;
                font-size:26px;
                
                `
                const Input = styled.input`
                text-align:center;
                justify-content:space-between;
                height :2em;
                width: 20em;
                margin-left:1em;
                margin-right: 1em;
                font-size: 16px;
                padding: 10px 0px 10px 0px;
                
                `

            return(
                
                <div>
                    <Button onClick={() =>this.addIncrement()}>+</Button>
                    <Input  value={this.state.count}/>
                    <Button  onClick={() => this.addDecrement()}>-</Button>
                    <br/>
                    <Button onClick={() => this.addReset()}>Reset</Button>
                </div>
                
                )
            };   
}

export default Increment;

