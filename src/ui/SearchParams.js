// import React, { useState, useEffect, useContext } from "react";
//
// const SearchParams = () => {
//   const [ingredient, updateIngredient] = useState("bacon");
//   const [component, setDishComponent] = useState("baseLayer");
//   const [baseLayer, updateBaseLayer] = useState([]);
//   const [shell, updateShell] = useState([]);
//   const [mixin, updateMixin] = useState([]);
//   const [condiments, updateCondiments] = useState([]);
//   const [seasoning, updateSeasoning] = useState([]);
//
//   useEffect(() => {
//     async function updateDish() {
//       const result = await fetch(
//         "https://taco-randomizer.herokuapp.com/contributors/base_layers"
//       );
//       const taco = await result.json();
//     }
//     // async function
//     updateDish();
//   }, [component]);
//
//   return (
//     <div className="search-params">
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           requestTaco();
//         }}
//       >
//         <label htmlFor="ingredient">
//           Ingredient
//           <input
//             id="ingredient"
//             value={ingredient}
//             placeholder="Location"
//             onChange={e => updateLocation(e.target.value)}
//           />
//         </label>
//         <BaseLayerDropdown />
//         <MixinsDropdown />
//
//         <button style={{ backgroundColor: theme }}>Submit</button>
//       </form>
//       <Results pets={pets} />
//     </div>
//   );
// };
//
// export default SearchParams;
