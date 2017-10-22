import React, { Component } from 'react';
import axios from 'axios';
import PhysicalEvaluationsItem from './PhysicalEvaluationsItem'

class PhysicalEvaluation extends Component {
    constructor(){
        super();
        this.state = {
            physicalEvaluations: []
        }
    }

    componentWillMount(){
        this.getPhysicalEvaluations();
    }

    getPhysicalEvaluations(){
        axios.get('http://localhost:8100/api/PhysicalEvaluations')
        .then(response => {
          this.setState({physicalEvaluations: response.data}, () => {
            console.log(this.state);
          })
      })
      .catch(err => console.log(err));
    }

    render() {
        const physicalEvaluationsItems = this.state.physicalEvaluations.map((ps, i) => {
            return(
                <PhysicalEvaluationsItem key={ps.id} item={ps}/>
            )
        })
        return (
            <div>
                <h1>Physical Evaluation</h1>
                <ul className="collection">{physicalEvaluationsItems}</ul>
            </div>
        )
    }
}

export default PhysicalEvaluation;