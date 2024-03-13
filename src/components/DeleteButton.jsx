import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"
import PropTypes from "prop-types"

DeleteButton.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired
}

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock()
  const navigate = useNavigate()

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete? ${itemName}?`)) {
      deleteItem(itemId)
      navigate("/items")
    }
  }

  return (
    <button
    className="button is-danger is-small"
    onClick={handleDelete}
  >
    Delete
  </button>
  )
}