"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// tslint:disable-next-line: align
exports.connectDatabase = async (uri) => {
    mongoose_1.set("debug", true);
    mongoose_1.connection.on("error", (err) => { console.error("%s", err); })
        .on("close", () => console.log("Database connection closed."));
    await mongoose_1.connect(uri, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return console.log("DB connected");
};
//# sourceMappingURL=db.js.map