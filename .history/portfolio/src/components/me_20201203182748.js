import { Component  } from "react";

class Me extends Component{
    state = {
        name: "Charles Pelton",
        moto: "Continually work on the human in the mirror.",
        career: "Operations Supervisor, DHL Supply Chain",
        aspiration: "Full stack web developer / Software Engineer"
    }
    render(){
        return(
            <div id="me">
                {this.state.name}<br />
                <img src='../images/summer2020.jpg' alt='Me'></img><br />
                {this.state.moto}<br />
                {this.state.career}<br />
                {this.state.aspiration}
            </div>
        )
    }
};

export default Me;