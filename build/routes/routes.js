"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
exports.test = [{
        method: "POST",
        path: "/crud",
        // tslint:disable-next-line: object-literal-sort-keys
        config: {
            tags: ["api"],
        },
        handler: async (request, h) => {
            let data = await model_1.UserData.create(request.payload);
            let response = {
                success: "true",
                statusCode: 200,
                data
            };
            return response;
        }
    },
    {
        method: "PUT",
        path: "/crud/{id}",
        // tslint:disable-next-line: object-literal-sort-keys
        config: {
            tags: ["api"],
        },
        handler: async (request, h) => {
            let data = await model_1.UserData.findByIdAndUpdate(request.params.id, request.payload);
            let response = {
                success: "true",
                statusCode: 200,
                data
            };
            return response;
        },
    },
    {
        method: "GET",
        path: "/crud",
        // tslint:disable-next-line: object-literal-sort-keys
        config: {
            tags: ["api"],
        },
        handler: async (request, h) => {
            let data = await model_1.UserData.find();
            let response = {
                success: "true",
                statusCode: 200,
                data
            };
            return response;
        }
    },
    {
        method: "DELETE",
        path: "/crud/{id}",
        // tslint:disable-next-line: object-literal-sort-keys
        config: {
            tags: ["api"],
        },
        handler: async (request, h) => {
            let data = await model_1.UserData.findByIdAndDelete(request.params.id);
            let response = {
                success: "true",
                statusCode: 200,
                data
            };
            return response;
        }
    },
];
//# sourceMappingURL=routes.js.map