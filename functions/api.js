import express, { Router } from "express";
import serverlessHttp from "serverless-http";
import { app } from "../server"

const handler = serverlessHttp(app)

module.exports.handler = async(event, context)=>{
  const result = await handler(event, context);
  result.headers.set("Access-Control-Allow-Origin", "*")
  return result;
}