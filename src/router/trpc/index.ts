import { router } from "./context";
import { urlRouter } from "./url";

export const trpcRouter = router({
    url: urlRouter // it means all the routes that start with url will be handled by urlRouter,
    //  so for example if we have a route like /url/create then it will be handled by urlRouter
})