import React, {useState, useEffect} from 'react'
import { useAuth } from '../../Contexts';

import "./style.css"

const InputForm = ({ times, setInputActive, dates, cell}) => {
    const [content, setContent] = useState("")
    const [entries, setEntries] = useState([])
    const { user } = useAuth();


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
                name: user.name,
                day: cell.day,
                time: cell.time.split(" - ")[0],
                content: form.get("content")
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }

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
            <p className="prompt"> Add a new entry: </p>
            <form onSubmit={handleSubmit} data-testid="form">
                <div id="identifiers">
                <span id="date">{dates[resolveDay()]}<br></br>{cell.time}</span>

                </div>
                <input type="text" id="input" name="content" value={content} onChange={handleInput} placeholder="Add to your timetable" required/>
                <button type="submit">Submit</button>
            </form>

        </div>
    </div>
    </>
    
  )
}

export default InputForm
