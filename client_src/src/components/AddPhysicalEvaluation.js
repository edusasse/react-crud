import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddPhysicalEvaluation extends Component{
    AddPhysicalEvaluation(newPhysicalEvaluation){
    axios.request({
      method:'post',
      url:'http://localhost:8100/api/PhysicalEvaluations',
      data: newPhysicalEvaluation
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newPhysicalEvaluation = {
      name: this.refs.name.value,
      age: this.refs.age.value,
      height: this.refs.height.value,
      weight: this.refs.weight.value,
      waist: this.refs.waist.value
    }
    this.AddPhysicalEvaluation(newPhysicalEvaluation);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Add Physical Evaluation</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="age" ref="age" />
            <label htmlFor="age">Age</label>
          </div>
          <div className="input-field">
            <input type="text" name="height" ref="height" />
            <label htmlFor="height">Height</label>
          </div>
          <div className="input-field">
            <input type="text" name="weight" ref="weight" />
            <label htmlFor="weight">Weight</label>
          </div>
          <div className="input-field">
            <input type="text" name="waist" ref="waist" />
            <label htmlFor="waist">Waist</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddPhysicalEvaluation;