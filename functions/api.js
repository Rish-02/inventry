import express, { Router } from "express";
import serverless from "serverless-http";
import { app } from "../server"

export const handler = serverless(app);

exports.handler = async (event, context) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://rish-inventoryapp.netlify.app/"
      },
      body: JSON.stringify({ message: "Inventory application" })
    };
    return response;
  };