import React, { useState } from 'react'

const TravelForm = () => {
  // State variables to store the form data
  const [type, setType] = useState("")
  const [companions, setCompanions] = useState("")
  const [budget, setBudget] = useState("")
  const [duration, setDuration] = useState("")
  const [availability, setAvailability] = useState("")
  const [departure, setDeparture] = useState("")

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Code to submit the form data to an API or process the data
    console.log(`Type: ${type}`)
    console.log(`Companions: ${companions}`)
    console.log(`Budget: ${budget}`)
    console.log(`Duration: ${duration}`)
    console.log(`Availability: ${availability}`)
    console.log(`Departure: ${departure}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type of travel:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="urban">Urban</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain/Adventure</option>
        </select>
      </label>
      <br />
      <label>
        Traveling with:
        <select value={companions} onChange={(e) => setCompanions(e.target.value)}>
          <option value="alone">Alone</option>
          <option value="couple">Couple</option>
          <option value="friends">Friends</option>
        </select>
      </label>
      <br />
      <label>
        Available budget:
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </label>
      <br />
      <label>
        Duration of stay:
        <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      </label>
      <br />
      <label>
        Availability:
        <input
          type="month"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        />
      </label>
      <br />
      <label>
        City of departure:
        <input
          type="text"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

