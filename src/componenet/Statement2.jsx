import * as React from "react"

class stateexample2 extends React.Component {
    state={
        first:false,
        second:true,
        text:"Initial value",
    };
    constructor(){
        super();
        setTimeout(() => {
            this.setState({first:false,second:true,text:"update value"});
        }, 4000);
    }
    
    render() {
        const {first, second} = this.state
        return(
            <div>
                <button disabled={first}>button1</button>
                <button disabled={second}>button2</button>
            </div>
        )
    }
}

export default stateexample2