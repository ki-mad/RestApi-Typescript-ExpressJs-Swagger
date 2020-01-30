import connection from "../../db";
import { Request, Response } from "express";
const hash = require("password-hash");
const jwt = require('jsonwebtoken');

export const postLogin = (req: Request, res: Response) => {
    const email = req.body.email;

    connection.query(
        `SELECT email, password FROM profiles where email='${email}'`,
        (err: any, data: any) => {
            if(err) {
                res.status(422).send({
                    err
                })
            } 
            console.log(data.length)
            if(data.length < 1 ) {
                res.status(400).send({
                    message: 'Username or Password Incorrect',
                    success: 0
                })
            } else {
                const password = data[0].password
                const verifyPassword = hash.verify(req.body.password, password);
                if ( verifyPassword === true) {
                    const token = jwt.sign(
                        {
                            userId: data[0].id
                        },
                        "my-secret-key"
                    );
                    res.status(200).send({
                        message: "Login Success",
                        token,
                        success: 1
                    })
                } else {
                    res.status(422).send({
                        message: 'Username or Password Incorrect',
                        success: 0
                    })
                }
            }
        }
    );
}