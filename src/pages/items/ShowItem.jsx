import { Link, useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import DeleteButton from "../../components/DeleteButton"
import PrintPdfButton from "../../components/PrintButton"

export default function ShowItem() {
  const { getItem } = useStock()
  const { id } = useParams()

  const item = getItem(id)

  return (
    <div className="item">
      <div className="dashboard-card">
        <h2>Event Name: {item.name}</h2>
        <Link to={`/items/${item.id}/update`} className="button is-primary is-small">Update</Link>
        <DeleteButton itemId={item.id} itemName={item.name} />
        <PrintPdfButton itemId={item.id}></PrintPdfButton>
      </div>
      <div className="row">
        <span>Location: {item.category}</span>
        <span>Number of people: {item.quantity}</span>
        <span>Date:  {item.date}</span>
      </div>
      <div className="dashboard-card">
        Event Description: <textarea style={{ fontSize: "1rem" }} rows={4}>{item.description}</textarea>
      </div>
      <div className="row">
        <span>Created at: {item.createdAt.toDateString()}</span>
        <span>Updated at: {item.updatedAt.toDateString()}</span>
      </div>
    </div>
  )
}