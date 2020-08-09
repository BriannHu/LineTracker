import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CreateReqest() {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [radius, setRadius] = useState(0);
    
    /*
    useEffect(() => {
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                setUsername(response.data[0].username)
                setUsers(response.data.map(user => user.username))
            }
        })
    }, []); 
    */

    /*
    const handleSubmit = (e) =>  {
        e.preventDefault();
        const exercise = {username, description, duration, date};
        axios.post("http://localhost:5000/exercises/add", exercise)
        .then(res => console.log(res.data));
    } */

    return (
        <div className="container">
            <br/>
            <h3>Send New Request</h3>
            <form /*onSubmit={handleSubmit}*/>
                <div className="form-group"> 
                <label>Category: </label>
                <select
                    required
                    className="form-control"
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="coffee">Coffee</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="grocery">Grocery</option>
                </select>
                </div>
                <div className="form-group"> 
                <label>Location: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label>Radius (m): </label>
                <input 
                    type="number" 
                    className="form-control"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                    />
                </div>

                <div className="form-group">
                <input type="submit" value="Send Request" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
