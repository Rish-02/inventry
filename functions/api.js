import ServerlessHttp from "serverless-http";
import { app } from "../server";

const handler = ServerlessHttp(app)

module.exports.handler = async(event, context)=>{
  const result = await handler(event, context);
  return result;
}