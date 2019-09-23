import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import HapiSwagger from "hapi-swagger";

export let plugins = {
    name: "swagger-plugin",
    // tslint:disable-next-line: no-shadowed-variable
    async register(server: any) {
        const swaggerOptions = {
            info: {
                title: "API 1.0",
                version: "v1",
            },
        };
        await server.register([
            Inert,
            Vision,
            {
                options: swaggerOptions,
                plugin: HapiSwagger,
            },
        ]);
    },
};
