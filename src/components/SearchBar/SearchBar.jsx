import { useId } from "react"


const SearchBar = ({ filter, handleChange }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Find contact</label>
      <input type="text" id={id} name="search" value={filter} onChange={(e)=>handleChange(e.target.value)} />
    </div>
  );
};

export default SearchBar
