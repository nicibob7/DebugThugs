import React, {useState, useEffect} from 'react'
import "./style.css"

const InputForm = ({ times, setInputActive, dates, cell}) => {
    const [content, setContent] = useState("")
    const [entries, setEntries] = useState([])

    // const [hours,setHours] = useState([...Array(24).keys()])
    // const [minutes,setMinutes] = useState([...Array(60).keys()])

    const handleInput = (text) => {
        setContent(text.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = new FormData(e.target)

        const options = {
            method: "POST",
            body: JSON.stringify({
                weekNum: cell.weekNum,
                day: cell.day,
                time: cell.time.split(" - ")[0],
                content: form.get("content")
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }

        console.log(cell.day,cell.weekNum,cell.time,form.get("content"))

        const resp = await fetch("https://debugthugsapi.onrender.com/timetable",options)
        if(resp.status === 201){
            setContent("")
            setInputActive(false)
        }else{
            console.log("IDK")
        }

    }

    const resolveDay = () => {
        switch (cell.day) {
            case "Monday": 
                return 0
            case "Tuesday":
                return 1
            case "Wednesday":
                return 2
            case "Thursday":
                return 3
            case "Friday":
                return 4
            case "Saturday":
                return 5
            case "Sunday":
                return 6
            default:
                return 0
        }
    }

    const getEntries = async () => {
        const entries = await fetch("https://debugthugsapi.onrender.com/timetable")
        const resp = await entries.json()
    }

    useEffect(() => {
        getEntries()
    },[])

  return (
    <>
    <div id="overlay">
        <button id='close' onClick={() => setInputActive(false)}>X</button>
        <div id="overlay-content">
            <span id="date">{dates[resolveDay()]}</span>
            <p className="prompt"> Add a new entry: </p>
            <form onSubmit={handleSubmit} data-testid="form">
                <input type="text" id="input" name="content" value={content} onChange={handleInput} placeholder="Sample text" />
                {/* <div className="time-slot">
                <select name="times" id="hour-dropdown">
                    <option value={times[0]}>{times[0]}</option>
                    <option value={times[1]}>{times[1]}</option>
                    <option value={times[2]}>{times[2]}</option>
                    <option value={times[3]}>{times[3]}</option>
                    <option value={times[4]}>{times[4]}</option>
                    <option value={times[5]}>{times[5]}</option>
                    <option value={times[6]}>{times[6]}</option>
                    <option value={times[7]}>{times[7]}</option>
                    <option value={times[8]}>{times[8]}</option>
                    <option value={times[9]}>{times[9]}</option>
                    <option value={times[10]}>{times[10]}</option>
                    <option value={times[11]}>{times[11]}</option>
                </select>
                <select name="minute" id="minute-dropdown">

                </select>
                </div> */}

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </>
    
  )
}

export default InputForm
