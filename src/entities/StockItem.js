export const CATEGORIES = [
  "Beach",
  "Mountains",
  "Countryside",
  "Shopping Mall",
  "Park",
  "Ski Resort",
  "Theme Park",
  "Historic Site",
  "Lakeside",
  "City Tour",
  "Home",
  "Family Home",
  "Relaxing at Home",
  "Domestic Travel",
  "International Travel"
]

export default class StockItem {
  constructor({ name, description, quantity, date, category }) {
    this.id = Math.floor(Math.random() * 10000000)
    this.name = name
    this.description = description
    this.quantity = +quantity
    this.date = date
    this.category = category
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.#validate()
  }

  #validate() {
    const validName = typeof this.name === "string"
    const validDescription = typeof this.description === "string"
    const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity)
    const validDate = this.date instanceof Date || typeof this.date === 'string' && !isNaN(Date.parse(this.date))
    const validCategory = CATEGORIES.includes(this.category)
    if (!(
      validName &&
      validDescription &&
      validQuantity &&
      validDate &&
      validCategory
    )) {
      throw new Error("Invalid item!")
    }
  }
}