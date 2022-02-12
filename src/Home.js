import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import axios from "./axios";
import axios from "axios";
import { css, cx } from "@emotion/css";
import { Link } from 'react-router-dom';

const styles = {
    headerContainer: css`
        position: relative;
        width: 20vw;
        height: 7vh;
        background-color: #cfcfcf;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 10px 10px;
    `,
    // wrapper: css`
    //     width: 100%;
    // `,
    thumbnail: css`
        width: 20vw;
        border-radius: 10px 10px 0 0;
    `,
    thumbnailBox: css`
        margin-bottom: 2vh;
        margin: 0 1vw 2vh;
        transition: ease-in-out .3s;
        &:hover {
            transform: scale(1.03);
            opacity: 0.8;
        }
    `,
    flexRow: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* justify-content: space-between; */
    `,
    // row: css`
    //     flex-shrink: 1;
    // `,
    colorWhite: css`
        color: white;
    `,
    box: css`
        position: relative;
        width: 300px;
        height: 300px;
    `,
    red: css`
        background-color: rgba(255, 0, 0, 0.5);
    `,
    blue: css`
        background-color: rgba(0, 0, 255, 0.5);
    `,
        pink: css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
        color: white;
        }
    `,
}

export default function Home() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // const response = await axios.get("/people");
            console.log("Home画面")
            let response = ""
            try {
                response = await axios.get("http://localhost:9090/people");
            } catch (e) {
                console.log('エラー発生', e['config']);
                return;
            }
            // let data = response.data.slice(0, 10)

            // console.log("Home画面", response.data)
            setPeople(response.data);
            // setPeople(data);
            // return response;
        }
        fetchData();
    }, []);
  
    return (
        <div className={styles.wrapper}>
            <header className="App-header">
                <ul className={styles.flexRow}>
                    {people.map((person => (
                        <li className={styles.row} key={person.ID}>
                            <div className={styles.thumbnailBox}>
                                <Link to={'/detail/' + person.ID}>
                                    {/* Name: {person.Name}
                                    Email: {person.Email}
                                    Birthday: {person.BirthdayFormatted} */}
                                    <div>
                                        <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/${person.ImagePath}`} alt="test" />
                                    </div>
                                    <div className={cx(styles.headerContainer, styles.colorWhite)}>
                                        <span>Age: {person.Age}</span>
                                        <span>Area: {person.Area}</span>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    )))}
                </ul>
            </header>
        </div>
    )
}


