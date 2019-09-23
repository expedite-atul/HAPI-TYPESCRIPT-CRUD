import { Request, ResponseToolkit } from "@hapi/hapi";
import mongoose from "mongoose";
import { UserData } from "../models/model";

export let test = [{
    method: "POST",
    path: "/crud",
    // tslint:disable-next-line: object-literal-sort-keys
    config: {
        tags: ["api"],
    },
    handler: async (request: Request, h: ResponseToolkit) => {
        let data = await UserData.create(request.payload);
        let response = {
            success: "true",
            statusCode: 200,
            data
        }
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
    handler: async (request: Request, h: ResponseToolkit) => {
        let data = await UserData.findByIdAndUpdate(request.params.id, request.payload);
        let response = {
            success: "true",
            statusCode: 200,
            data
        }
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
    handler: async (request: Request, h: ResponseToolkit) => {
        let data = await UserData.find();
        let response = {
            success: "true",
            statusCode: 200,
            data
        }
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
    handler: async (request: Request, h: ResponseToolkit) => {
        let data = await UserData.findByIdAndDelete(request.params.id);
        let response = {
            success: "true",
            statusCode: 200,
            data
        }
        return response;
    }
},
];
