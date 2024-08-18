import Itemcard from '@/app/(home)/Components/Itemcard';
import React, { Suspense } from 'react'

async function page({params}) {
  let items=[]
  try {
    const response = await fetch(`${process.env.API_URL}/products/category/${params.category}`);
      if (response.ok) {
        items = await response.json();
      }
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while fetching the products');
    
  }
  return (
    <div>
    <Suspense fallback="Loading . .  .">

    <div className="grid md:p-5 p-2 md:grid-cols-3 grid-cols-1 gap-4 ">
    {items.map((item) =>{
      return (<Itemcard item={item} id={item.id} key={item.id} title={item.title} price={item.price} description={item.description}  category={item.category} image={item.image} rating={item.rating.rate} />)
    })}
   </div>
    </Suspense>
    </div>
  )
}

export default page