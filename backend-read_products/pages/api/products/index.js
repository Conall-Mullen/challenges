import dbConnect from "@/db/connect";
import fish from "@/db/models";

export default async function handler(request, response) {
  return await response.status(200).json(fish);
}
