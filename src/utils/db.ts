import { connect, connection, set } from "mongoose";

// tslint:disable-next-line: align
export const connectDatabase = async (uri: string) => {
    set("debug", true);
    connection.on("error", (err) => { console.error("%s", err); })
        .on("close", () => console.log("Database connection closed."));
    await connect(uri, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return console.log("DB connected");
};
