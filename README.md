## Covid Tracker 
Displays the number of `cases`, `deaths` and `recovered`.... patients with Covid 19
The user can specify the country and the number of days.

### How does it work

- React states are used to set the number of days and country
```js
let [country, setCountry] = useState("India")

.........

<input type="text"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
></input>
```

- The application uses `Axios` to fetch the data from a [Novel COVID API](github.com/NovelCOVID/API) 
```js
let [covidData, setCovidData] = useState({ states: [] });

axios.get("https://corona.lmao.ninja/v2/historical/" + country + "?lastdays=" + days).then((res) => {
    setCovidData(res.data);
    console.log(res.data)
    setFirstLoad("completed")
})
```

- The data that is fetched is then filtered and mapped to a table
```js
function createTableCases(key, index) {
    return <tr >
        <td style={{ width: "50%" }}> {key} </td>
        <td> {covidData.timeline.cases[key]}</td>
    </tr>
}

....

<table className="table case">
    <tr> <th>Date</th> <th>Cases</th> </tr>

    {Object.keys(covidData.timeline.cases).map(createTableCases)}

</table>
``` 
### Demo 

<img src = "https://github.com/sameerad2001/covid_tracker/blob/master/public/img/Demo2.jpg" alt = "Website Demo"/>

<img src = "https://github.com/sameerad2001/covid_tracker/blob/master/public/img/Demo1.gif" alt = "Website Demo"/>



---

Sameer Ahmed <br/>
Email : <sameerad2001@gmail.com> <br/>
Linkdin : <https://www.linkedin.com/in/sameer-ahmed-0b7902176/>