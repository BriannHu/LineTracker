import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Exercise = (props) => (
    <tr>
      <td>{props.exercise.category}</td>
      <td>{props.exercise.location}</td>
      <td>{props.exercise.radius}</td>
      <td>
        <Link to={"/data/"+props.exercise._id}>data</Link> 
      </td>
    </tr>
  )

export default class ListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/data')
        .then(response => {
            this.setState({ exercises: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    exerciseList() {
      return <Exercise exercise/>
    }

    render() {
        return (
            <div>
            <h3>Logged Data</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Radius</th>
                </tr>
              </thead>
              <tbody>
                { this.exerciseList() }
              </tbody>
            </table>
          </div>
        )
    }
}

