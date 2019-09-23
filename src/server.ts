"use strict";
import * as hapi from "@hapi/hapi";
import { routes } from "./routes/index";
import { connectDatabase } from "./utils/db";
import { plugins } from "./utils/plugins";

const port = 3000;
const host = "localhost";

const server: hapi.Server = new hapi.Server({
    host,
    port,
    routes: {
        cors:
            { origin: ["*"] },
    },
});

const init = async () => {
    await server.register(plugins);
    server.route(routes);
    // tslint:disable-next-line: no-unused-expression
    await connectDatabase("mongodb://localhost:27017/mongo");
    await server.start();
    console.log(`server version -->${server.version} \nserver running on ${server.info.uri}`);
};

init();
