import React, {useState, useEffect} from 'react'
import "./style.css"
const InputForm = ({ setInputActive, dates, cell}) => {
    const [content, setContent] = useState("")
    const [entries, setEntries] = useState([])
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
                time: cell.time,
                content: form.get("content")
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }
        console.log(cell.day,cell.time,cell.weekNum,form.get("content"))
        const resp = await fetch("http://localhost:3000/timetable",options)
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
        const entries = await fetch("http://localhost:3000/timetable")
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
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}
export default InputForm
