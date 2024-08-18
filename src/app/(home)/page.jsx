import Image from "next/image";
import Itemcard from "./Components/Itemcard";

export default async function Home() {
  let items=[]
  try {
    const response = await fetch(`${process.env.API_URL}/products`);
      if (response.ok) {
        items = await response.json();
      }
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while fetching the products');
    
  }


  return (
    <div>

   <div className="grid md:p-5 p-2 md:grid-cols-3 grid-cols-1 gap-4 ">
    {items.map((item) =>{
      return (<Itemcard id={item.id} key={item.id} title={item.title} price={item.price} description={item.description}  category={item.category} image={item.image} rating={item.rating.rate} />)
    })}
   </div>
    </div>
  );
}
