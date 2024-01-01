import { Request, Response } from "express";
import { allUsers } from "../services/userService";

export const handleGetUsers = async (req: Request, res: Response) => {
    try {
      const limit = Number(req.query.limit) || 100;
    //   let users = typeof req.query.category === "string" ? req.query.category : 'all'
      const products = await allUsers();
      return res.send(products);
    } catch (err) {
        console.error(err);
        throw err;
    }
  };