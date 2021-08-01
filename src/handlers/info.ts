import { Handler } from "express";

const infoHandler: Handler = (_, res) => {
    res.send({
        name: "Catalog",
    });
};

export {
    infoHandler
}
