import connection from "../../db";
import { Request, Response } from "express";
const uuid = require("uuid");
const hash = require("password-hash");
const jwt = require("jsonwebtoken");

//insert data into table language
export const postRegistration = (req: Request, res: Response) => {
  const accountName = req.body.accountName;
  const email = req.body.email;
  const password = hash.generate(req.body.password);
  // const password = req.body.password;
  const fullName = req.body.fullName;
  const handphone = req.body.handphone;
  const identity = req.body.identity;
  const address = req.body.address;
  const city = req.body.city;
  const userid = uuid();

  connection.query(
    `INSERT INTO profiles VALUES (NULL, '${email}', '${userid}', '${handphone}', '${identity}', NULL, '${accountName}', '', NULL, NULL, '${fullName}', '${password}', '${address}', '', '${city}', '', '', '', '', NULL, NULL,NULL, NOW(), NULL, '', '', '')`,
    (err: any, data: any) => {
      if (err) {
        if (err.errno) {
          if (err.errno === 1062) {
            res.status(422).send({
              message: "Duplicate Entry",
              success: "0"
            });
          }
        } else {
            res.status(422).send({
              message: "Registration Failed",
              success: "0"
            });
        }
      } else {
        const token: any = jwt.sign(
          {
            userId: data.id
          },
          "my-secret-key",
          {
            expiresIn: 60 * 60
          }
        );
        res.status(201).send({
          id: data.insertId,
          token,
          success: "1"
        });
      }
    }
  );
};
