import {BiChevronLeft} from "react-icons/bi"

const Categories = () => {
  return (
    <div className='price filter'>
      <p className='category-title'>PRICE</p>
      <p className='category-label'><BiChevronLeft size={18} />Mobile & Accessories</p>
      <p className='category-label'><BiChevronLeft size={18} />Tablets</p>
    </div>
  )
}

export default Categories