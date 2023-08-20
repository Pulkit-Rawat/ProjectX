import {BiChevronLeft} from "react-icons/bi"

const Categories = () => {
  return (
    <div className='category filter'>
      <p className='category-title'>CATEGORIES</p>
      <p className='category-label'><BiChevronLeft size={18} />Mobile & Accessories</p>
      <p className='category-label'><BiChevronLeft size={18} />Tablets</p>
    </div>
  )
}

export default Categories