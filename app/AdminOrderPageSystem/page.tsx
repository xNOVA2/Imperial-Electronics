'use client'
import axios from "axios";
import { useRouter } from "next/navigation"; // Change 'next/navigation' to 'next/router'
import { useEffect, useState } from "react"; // Import 'useState' for managing state

export default function OrderPage() {
    const router = useRouter();
  const [orders, setOrders] = useState([]); // State to hold fetched orders

  useEffect(() => {
    router.refresh()
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/GetOrders");
      setOrders(response.data.data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {/* Your navigation and header code here */}
      
      {/* Order Code */}
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Orders</h1>
      </div>
      
      {orders.map((order:any, index:number) => (
        <div key={index} className="p-5">
          <p>{`Order by ${order.Name}`}</p>
          <br />
          <p>{`Address: ${order.Address}`}</p>
          <br />
          <p>{`Phone Number: ${order.PhoneNumber}`}</p>
  
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
