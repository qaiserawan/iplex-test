import React, { useState ,useEffect } from 'react'
import { useLocation } from 'react-router'
import styles from './details.module.css'
import  '../App.css'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}
const Details = () => {
    
    let query = useQuery();
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters/' + query.get("id"))
        .then((response) => response.json())
        .then((data) => setDetails(data))
    }, [query])
    return (
        <div>
            <h2>Details page</h2>
            <div>
                <img src={details.imageUrl} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <td>{query.get('id')}</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{details.firstName}</td>
                    </tr>
                    <tr>    
                        <th>Last Name</th>
                        <td>{details.lastName}</td>
                    </tr>
                    <tr>
                        <th>Full Name</th>
                        <td>{details.fullName}</td>

                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>{details.title}</td>

                    </tr>
                    <tr>
                        <th>Family</th>
                        <td>{details.family}</td>

                    </tr>
                    <tr>
                        <th>Image URL</th>
                        <td>{details.image}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Details
