"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = __importStar(require("@hapi/hapi"));
const index_1 = require("./routes/index");
const db_1 = require("./utils/db");
const plugins_1 = require("./utils/plugins");
const port = 3000;
const host = "localhost";
const server = new hapi.Server({
    host,
    port,
    routes: {
        cors: { origin: ["*"] },
    },
});
const init = async () => {
    await server.register(plugins_1.plugins);
    server.route(index_1.routes);
    // tslint:disable-next-line: no-unused-expression
    await db_1.connectDatabase("mongodb://localhost:27017/mongo");
    await server.start();
    console.log(`server version -->${server.version} \nserver running on ${server.info.uri}`);
};
init();
//# sourceMappingURL=server.js.map