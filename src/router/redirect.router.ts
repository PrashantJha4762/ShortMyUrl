import express from "express";
import { redirectHandler } from "../controllers/redirect.controller";

const redirectRouter = express.Router();

redirectRouter.get("/:shortUrl", redirectHandler);

export default redirectRouter;