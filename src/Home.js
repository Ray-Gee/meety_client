import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "./axios";

export default function Home() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/people");
            // let data = response.data.slice(0, 10)

            console.log(response.data)
            setPeople(response.data);
            // setPeople(data);
            // return response;
        }
        fetchData();
    }, []);
  
    return (
        <div className="App">
        <header className="App-header">
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            {people.map((person => (
                <div key={person.ID}>
                Name: {person.Name}
                Email: {person.Email}
                Age: {person.Age}
                </div>
            )))}
            </a>
        </header>
        </div>
    )
}


