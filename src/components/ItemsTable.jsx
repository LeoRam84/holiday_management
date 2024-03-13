import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
  const { items } = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Event Name</th>
          <th>Number of people</th>
          <th>Date</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity} people.</td>
            <td>{item.date}</td>
            <td>{item.category}</td>
            <td>
              <Link to={`/items/${item.id}`} className="button is-success is-small">
                Show 
              </Link>
              <Link to={`/items/${item.id}/update`} className="button is-primary is-small">
                Update
              </Link>
              <DeleteButton itemId={item.id} itemName={item.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}