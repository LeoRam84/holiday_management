import PropTypes from "prop-types"
import StockItem, { CATEGORIES } from "../entities/StockItem"
import { useRef, useState } from "react"
import useStock from "../hooks/useStock"
// import { format } from 'date-fns-tz';

ItemForm.propTypes = {
  itemToUpdate: PropTypes.object
}

// const brazilTime = format(new Date(), "yyyy-MM-dd'T'HH:mm", { timeZone: 'America/Sao_Paulo' });

export default function ItemForm({ itemToUpdate }) {
  const defaultItem = {
    name: "",
    description: "",
    quantity: 0,
    date: "", 
    category: ""
  }

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
  const { addItem, updateItem } = useStock()
  const inputRef = useRef(null)

  //currentState
  const handleChange = (ev) => {
    setItem((current) => ({ ...current, [ev.target.name]: ev.target.value }))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    try {
      if (itemToUpdate) {
        updateItem(itemToUpdate.id, item)
        alert("Event updated successfully!")
      } else {
        const validItem = new StockItem(item)
        addItem(validItem)
        setItem(defaultItem)
        alert("Event registered successfully!")
      }
    } catch (err) {
      console.log(err.message)
      alert("There was an error!")
    } finally {
      inputRef.current.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            ref={inputRef}
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Number of people:</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            required
            min={1}
            step={1}
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date and Hour:</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            required
            min="2024-01-01T00:00"
            max="2024-12-31T23:59"
            step={"60"}
            value={item.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Location:</label>
          <select
            name="category"
            id="category"
            required
            value={item.category}
            onChange={handleChange}
          >
            <option disabled value="">Select the Event Location...</option>
            {CATEGORIES.map((category) => (
              <option
                key={category}
                value={category}
                defaultChecked={item.category === category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          required
          rows={6}
          value={item.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="button is-primary is-large">
        Save
      </button>
    </form>
  )
}