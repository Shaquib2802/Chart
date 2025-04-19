import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Get_Graph } from '../Service/Get_Graph';


const Graph = () => {
    const {data: Graph} = useQuery({
      queryKey: ["graph"],
      queryFn: Get_Graph,
    })
    console.log("Graph Data: ", Graph)
  return (

    <div>
      
    </div>
  )
}

export default Graph
