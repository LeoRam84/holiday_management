import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
  const { items } = useStock();

  return (
    <>
      {/* Tabela para telas maiores */}
      <div className="table-container"> 
        <table className="table is-fullwidth is-striped is-hoverable is-responsive">
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
      </div>
      
      {/* Contêineres independentes para telas menores */}
      <div className="items-container"> 
        {items.map((item) => (
          <div key={item.id} className="item">
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Event Name:</strong> {item.name}</p>
            <p><strong>Number of people:</strong> {item.quantity} people.</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Location:</strong> {item.category}</p>
            <div className="actions">
              <Link to={`/items/${item.id}`} className="button is-success is-small">
                Show
              </Link>
              <Link to={`/items/${item.id}/update`} className="button is-primary is-small">
                Update
              </Link>
              <DeleteButton itemId={item.id} itemName={item.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}