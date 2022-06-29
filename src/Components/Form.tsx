import React, { Component } from 'react';


class Form extends Component<any, any> {
    constructor(props: any){
        super(props)
        this.state = {
            object: this.props
        };
        this.readAllProps(this.state.object);
    }
    render() {
      return (
        <div>Look in the console.</div>
      );
    }

    readAllProps(obj: any){
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                console.log(`key: ${prop}  value${obj[prop]}`);
            }
        }
    }
  }
  
  export default Form;