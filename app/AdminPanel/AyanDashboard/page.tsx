

import { getBaseUrl } from "@/components/Categories";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function page() {
  const urll = getBaseUrl()
  const data = await fetch(`${urll}/api/Order`,{"cache":"no-store"});
  const result = await data.json();

  
  return (
    <div>
      <nav className="flex justify-between px-4 items-center">
        <h1 className="text-2xl font-bold">
          <Link href={'/AdminPanel/AyanDashboard'}>Admin Dashboard </Link>
        </h1>
        <ul className="flex justify-items-center m-3 gap-4">
          <li>
            <Button variant={"link"} className="text-sm">
              <Link href={'/AdminPanel/AyanDashboard/Update&Delete'} > Update / Delete Products</Link>
            </Button>
          </li>
       
          <li><Button variant={"link"}><Link href={'/AdminPanel/AyanDashboard/AddProduct'}> Add new Product</Link></Button></li>
          
        </ul>
      </nav>

      {/* Order Code */}
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Orders</h1>
      </div>
      {result?.data?.slice().reverse().map((order:any, index:number) => (
        <div key={index} className="p-5">
          <p>{`Order by ${order.Name}`}</p>
          <p>Email Address {order.Email}</p>
          <br />
          <p>{`Address: ${order.Address}`}</p>
          <br />
          <p>{`Phone Number: ${order.PhoneNumber}`}</p>
          <p>City: {order.City}</p>
          <p>Postal Code:  {order.postalCode}</p>
          {/* Display items purchased */}
          <div>
            <h2 className="text-2xl font-semibold mt-4">Items Purchased:</h2>
            <ul>
              {order.orderItems.map((item:any, itemIndex:number) => (
                <li key={itemIndex}>{`${item.modelNumber} by ${item.company}`}</li>
              ))}
            </ul>
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}
