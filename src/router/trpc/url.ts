import { urlHandler } from "../../controllers/url.controller";
import {router} from "./context";

export const urlRouter = router(urlHandler)