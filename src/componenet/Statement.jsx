import * as React from "react"

class stateexample extends React.Component {
    state={
        first:false,
        second:true,
        text:"Initial value",
        clr:"red",
    };
    
    constructor(){
        super();
      setTimeout(() => {
        this.setState({
            first:true,
            second:false,
            text:"Updated value",
            clr:"blue",
        });
    });

    setTimeout(() => {
        this.setState({
            first:false,
            second:true,
            text:"Updated value 2",
            clr:"yellow",
        })
    }, 10000);
    }
    
    render() {
        const {first, second,text,clr} = this.state
        return(
            <div>
                <button disabled={first}>button1</button>
                <button disabled={second}>button2</button>
                <label style={{color:clr}}>{text}</label>
                <input value={text}/>
            </div>
        )
    }
}

export default stateexample