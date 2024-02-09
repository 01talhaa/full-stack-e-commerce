// import React, { useContext } from 'react';
// import { ShopContext } from '../Context/ShopContext'
// const Shop = () => {
//   const { all_product, loading, error } = useContext(ShopContext);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       {/* Render your components using the fetched data */}
//       <Hero />
//       <Popular />
//       <Offers />
//       <NewCollection />
//       <NewsLetter />
//     </div>
//   );
// };

// export default Shop;



import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers></Offers>
      <NewCollection></NewCollection>
      <NewsLetter></NewsLetter>
    </div>
  );
}

export default Shop;
