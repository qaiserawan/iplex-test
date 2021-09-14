import React, {useState, useEffect} from 'react'
import styles from './data.module.css'
import '../App.css'
import {
    Link
  } from "react-router-dom";

const Data = () => {
    const [detail, setDetail] = useState([]);
    const [search, setSearch] = useState("");
   

    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters')
        .then((response) => response.json())
        .then((data) => setDetail(data))
        // console.log(detail)
    }, [])
    return (
        <div>
            <h2>Main page</h2>
            <input 
            type="text"
            name="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            
            <table>
                <thead>
                    <tr className="f-row">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    detail.map((value, index) => {
                        return(
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.fullName}</td>
                                <td><Link to={`/details?id=${value.id}`}>Details</Link></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Data
