"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inert_1 = __importDefault(require("@hapi/inert"));
const vision_1 = __importDefault(require("@hapi/vision"));
const hapi_swagger_1 = __importDefault(require("hapi-swagger"));
exports.plugins = {
    name: "swagger-plugin",
    // tslint:disable-next-line: no-shadowed-variable
    async register(server) {
        const swaggerOptions = {
            info: {
                title: "API 1.0",
                version: "v1",
            },
        };
        await server.register([
            inert_1.default,
            vision_1.default,
            {
                options: swaggerOptions,
                plugin: hapi_swagger_1.default,
            },
        ]);
    },
};
//# sourceMappingURL=plugins.js.map