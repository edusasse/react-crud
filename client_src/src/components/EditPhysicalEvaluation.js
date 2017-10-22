import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditPhysicalEvaluation extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      age:'',
      height:'',
      weight: '',
      waist: ''

    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getPhysicalEvaluations();
  }

  getPhysicalEvaluations(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8100/api/PhysicalEvaluations/${id}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        age: response.data.age,
        height: response.data.height,
        weight: response.data.weight,
        waist: response.data.waist
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editPhysicalEvaluation(newPhysicalEvaluation){
    axios.request({
      method:'put',
      url:`http://localhost:8100/api/PhysicalEvaluations/${this.state.id}`,
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
    this.editPhysicalEvaluation(newPhysicalEvaluation);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Edit Physical Evaluation</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="age" ref="age" value={this.state.age} onChange={this.handleInputChange} />
            <label htmlFor="age">Age</label>
          </div>
          <div className="input-field">
            <input type="text" name="height" ref="height" value={this.state.height} onChange={this.handleInputChange} />
            <label htmlFor="height">Height</label>
          </div>
          <div className="input-field">
            <input type="text" name="weight" ref="weight" value={this.state.weight} onChange={this.handleInputChange} />
            <label htmlFor="weight">weight</label>
          </div>
          <div className="input-field">
            <input type="text" name="waist" ref="waist" value={this.state.waist} onChange={this.handleInputChange} />
            <label htmlFor="waist">Waist</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditPhysicalEvaluation;