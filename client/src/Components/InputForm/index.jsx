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
    
  return (
    <>
    <div id="overlay">
        <div id="overlay-content">
            <p className="prompt"> Add a new entry: </p>
            <form onSubmit={handleSubmit} data-testid="form">
                <input type="text" id="input" value={content} onChange={handleInput} placeholder="Sample text" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </>
    
  )
}

export default InputForm
