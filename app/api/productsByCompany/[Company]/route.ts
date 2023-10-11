import { NextResponse } from "next/server";
import prisma from "@/prisma/connection/connection";

export  async function GET(request:Request,{params}:{params:{Company:string}}){
    try {
      
        let data2;
            // if (Search) {
            //     if (params.Company === 'WESTPOINT' || params.Company === "ANEX") {
            //       data = data.filter((newData) => newData.Series.trim().toLowerCase() === Search?.trim().toLowerCase());
            //     } else if (Search) {
            //       data = data.filter((newData) => newData.ItemType.trim().toLowerCase() == Search?.trim().toLowerCase());
            //     }
            //   }
      
              data2 = await prisma.post.findMany({where:{CompanyName:params.Company}})
              return NextResponse.json({data:data2})
            
     
          
           
        
      
    } catch (error) {
        return NextResponse.json({error:error})
    }
}