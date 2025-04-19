import axios from "axios";

export const Get_Graph = async () => {
  console.log("This is Service");
  try {
    const response = await axios.get(
      "https://erpstaging.aaragroups.com/dashboard_graph/leads-by-stage/",
      {
        headers: {
          Authorization: "1f3b587d40a217cec89c8987cbe5e2084d27b89b",
        },
      }
    );
    return response || [];
  } catch (e) {
    console.log(e);
  }
};
