import React, {useState, useEffect} from 'react'
import "./style.css"

const InputForm = () => {
    const [content, setContent] = useState("")
    const [entries, setEntries] = useState([])

    const handleInput = (text) => {
        setContent(text.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(content)
    }

    async function getEntries() {
        try {
            const response = await fetch("http://localhost:3000/timetable")
            const data = await response.json()
            const arr = data.entry
            setEntries(arr)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getEntries()
    }, [])
    
  return (
    <>
    <div id="overlay">
        <div id="overlay-content">
            <p className="prompt"> Add a new entry: </p>
            <form onSubmit={handleSubmit}>
                <input type="text" id="input" value={content} onChange={handleInput} placeholder="Sample text" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    <div>
            {entries.map(e => {
                return console.log(e.weekNum, e.day, e.time, e.content)
            })}
        </div>
    </>
    
  )
}

export default InputForm
