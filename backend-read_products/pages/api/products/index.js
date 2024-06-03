import dbConnect from "../../../db/connect";
import Product from "@/db/models";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id);

    if (!product) {
      console.log("query", request.query);
      return response.status(404).json({ status: "Not Found" });
    }
    // console.log("query", request.query);
    return response.status(200).json(product);
  }
}
