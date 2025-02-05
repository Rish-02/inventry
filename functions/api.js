import serverlessHttp from "serverless-http";
import { app } from "../app"

const handler = serverlessHttp(app)

module.exports.handler = async(event, context)=>{
  const result = await handler(event, context);
  return result;
}