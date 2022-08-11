import React,  { useState }  from "react";

const Category = () => {
  const [Category, setCategory] = useState();

  const handleChange = event => {
    setCategory(event.target.value);
  };


  return (
    <>
    <select onChange={handleChange} defaultValue={1}>
      <option value={1}>TOTAL</option>
      <option value={2}>RECIPE</option>
      <option value={3}>CAFE INFO</option>
    </select>
    </>

  )
}
export default Category