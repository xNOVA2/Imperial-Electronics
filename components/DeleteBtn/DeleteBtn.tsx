'use client'
import { getBaseUrl } from "../Categories";
import { Button } from "../ui/button";
import { useState } from "react";
export default function DeleteBtn({ id }: { id: number }) {
  const [text, setText] = useState('')

  const handleDelete = async () => {
    try {
      const url = getBaseUrl();
      const response = await fetch(`${url}/api/DeleteProduct/${id}`, {
        method: "DELETE", // Assuming DELETE is the correct HTTP method for deletion
 
      });
          
      if (!response.ok) {
        // Handle non-successful response (e.g., show an error message)
        console.error("Failed to delete product");
      } else {
        console.log("Product deleted successfully");
        setText("Product deleted successfully")
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred while deleting the product", error);
    }
  };

  return (
    <div>
      <Button onClick={handleDelete}>Delete</Button>
      <p>{text}</p> 
    </div>
  );
}
