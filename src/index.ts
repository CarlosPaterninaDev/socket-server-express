import { Server } from "./class/server";
import { router } from "./routes/router";
import cors from "cors";
import express from "express";

const server = new Server();

// bodyparse
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

// cors
server.app.use(cors({ origin: true, credentials: true }));

// router
server.app.use("/", router);

// Init server
server.start(() => {
  console.log(`Servidor activo`);
});
