import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PhysicalEvaluationsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount() {
        this.getPhysicalEvaluation();
    }

    getPhysicalEvaluation() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8100/api/PhysicalEvaluations/${id}`)
            .then(response => {
                this.setState({ details: response.data }, () => {
                    console.log(this.state);
                })
            })
            .catch(err => console.log(err));
    }
    
    onDelete(){
        const id = this.state.details.id;
        axios.delete(`http://localhost:8100/api/PhysicalEvaluations/${id}`)
          .then(response => {
            this.props.history.push('/');
          }).catch(err => console.log(err));
      }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className="collection">
                    <li className="collection-item">Age: {this.state.details.age}</li>
                    <li className="collection-item">Height: {this.state.details.height}</li>
                    <li className="collection-item">Weight: {this.state.details.weight}</li>
                    <li className="collection-item">Waist: {this.state.details.waist}</li>
                </ul>
                <Link className="btn" to={`/physicalEvaluations/edit/${this.state.details.id}`}> Edit</Link>

                <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
            </div>
        )
    }
}

export default PhysicalEvaluationsItem;