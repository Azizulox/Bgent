

import express from "express";
import action from "../db/action.mjs";
import comediya from "../db/comediya.mjs";
import multik from "../db/multik.mjs";
import popularMovies from "../db/popular-movies.mjs";
import warMovies from "../db/war-movies.mjs";
import ServerlessHttp from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello wolrd");
});
app.get("/multik", (req, res) => {
  res.json(multik);
});
app.get("/action", (req, res) => {
  res.json(action);

});
app.get("/comediya", (req, res) => {
  res.json(comediya);
});
app.get("/popularMovies", (req, res) => {
  res.json(popularMovies);
});
app.get("/war-movis", (req, res) => {
  res.json(warMovies);
});

export const handler2 = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
