import Stock from "../models/stock.js"; // Import the stock model
import { validationResult } from "express-validator";

export const getStock = (req, res) => {
  Stock.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const createStock = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);

  // console.log(errors.type);

  // on cree un nouvelle instance de Stock
  const newStock = new Stock(bodyContent);

  // on sauvegarde la nouvelle instance de Car
  newStock
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};
