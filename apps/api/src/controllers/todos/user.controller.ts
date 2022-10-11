import { Request,  Response } from "express";
import { IUser} from "../../types/user.type";
import User from '../../models/user.model'
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
import isEmail from "validator/lib/isEmail";
// import isEmail from "validator/lib/isEmail";

const signup = async (req: Request, res: Response): Promise<void> => {
    const {username, email, password}: IUser = req.body 
    //empty body
    if(Object.keys(req.body).length == 0) {
        res.status(400).send({
            message: "Cannot be empty !"
        });
        return; 
    }
    //check validatae email
    if(!isEmail(email)) {
        res.status(400).send({
            statusCode: 400,
            messsage: "This email is invalid"
        });
        return;
    }
    //min: pass 6 digit
    if(password.length < 6) {
        res.status(400).send({
            statusCode: 400,
            message: "Password is required at least 6 digits"
        });
        return;
    }
    //check duplicate email
    try {
      const user = await User.findOne({email: email});
      if(user) {
        res.status(401).send({
            statusCode: 401,
            message: "This email is already exist"
        })
      }
    } catch (error) {
        throw error
    }
    try {
        
        const user: IUser = new User({
            username: username,
            email: email,
            password: bcrypt.hashSync(password),
            // role: role
        })
        const newUser: IUser = await user.save()
        res.status(200).send({
            res: newUser,
            statusCode: 200,
            message: 'User registered'
        })
    } catch (error) {
        throw error
    }
}

const signin = async (req: Request, res: Response): Promise<void>=>{
    const {email, password}: IUser = req.body
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).send({
                res: errors,
                statusCode: 400,
                message: "failed"
            })
        }
        const user = await User.findOne({email: email});
        if(!user){
            res.status(401).send({
                res: user, 
                statusCode: 401, 
                message:"User not found"
            });
        }
        if(user) {
            const isRightPassword = bcrypt.compareSync(password, user.password)
            if(!isRightPassword){
                res.status(401).send({
                    statusCode: 401,
                    message: "Password is incorrect"
                })
            }else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Log in successful"
                })
            }  
        }
    } catch (error) {
        throw error
    }
}

export {signup, signin}