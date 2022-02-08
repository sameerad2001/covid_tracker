import React, { useState } from "react";
import axios from 'axios';

function Display() {

    let [covidData, setCovidData] = useState({ states: [] });

    let [days, setDays] = useState(5)

    let [country, setCountry] = useState("India")

    function fetchData() {

        axios.get("https://corona.lmao.ninja/v2/historical/" + country + "?lastdays=" + days).then((res) => {
            setCovidData(res.data);
            console.log(res.data)
            setFirstLoad("completed")
        })


    }

    function createTableCases(key, index) {
        return <tr >
            <td style={{ width: "50%" }}> {key} </td>
            <td> {covidData.timeline.cases[key]}</td>
        </tr>
    }

    function createTableDeaths(key, index) {
        return <tr >
            <td style={{ width: "50%" }}> {key} </td>
            <td> {covidData.timeline.deaths[key]}</td>
        </tr>
    }

    function createTableRecovered(key, index) {
        return <tr >
            <td style={{ width: "50%" }}> {key} </td>
            <td> {covidData.timeline.recovered[key]}</td>
        </tr>
    }

    function createCard() {

        return <div className="card">
            <div className="card-body">

                <h1 className="card-title">
                    {covidData.country}
                </h1>

                <div className="container input">
                    <h3 className="inline">
                        Country
                    </h3>

                    <input type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    ></input>

                    <br />


                    <h3 className="inline">
                        Number of days
                    </h3>

                    <input type="number"
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                    ></input>

                    <br />

                    <button
                        onClick={fetchData}
                    >
                        Update
                    </button>
                </div>

                <div className="container moreSpace">
                    {/* Cases */}
                    <h4 class="card-subtitle mb-2 text-muted">Cases</h4>
                    <div className="container-fluid">
                        <table className="table case">
                            <tr>
                                <th>Date</th>
                                <th>Cases</th>
                            </tr>

                            {Object.keys(covidData.timeline.cases).map(createTableCases)}

                        </table>
                    </div>


                    {/* Deaths */}
                    <h4 class="card-subtitle mb-2 text-muted">Deaths</h4>
                    <div className="container-fluid">
                        <table className="table death">
                            <tr>
                                <th>Date</th>
                                <th>Deaths</th>
                            </tr>

                            {Object.keys(covidData.timeline.deaths).map(createTableDeaths)}

                        </table>
                    </div>

                    {/* Recovery */}
                    <h4 class="card-subtitle mb-2 text-muted">Recovered</h4>
                    <div className="container-fluid">
                        <table className="table recovered">
                            <tr>
                                <th>Date</th>
                                <th>Recovered</th>
                            </tr>

                            {Object.keys(covidData.timeline.recovered).map(createTableRecovered)}

                        </table>
                    </div>
                </div>

            </div>
        </div >
    }

    let [firstLoad, setFirstLoad] = useState(1)

    if (firstLoad === 1) {
        setFirstLoad(0)
        fetchData()
    }

    return <div className="container">
        <h1 className="bigHead">Covid-19 Tracker</h1>


        {firstLoad === "completed" && createCard()}

    </div>
}

export default Display;