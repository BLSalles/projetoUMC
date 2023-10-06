import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
  email: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  
  const authToken = request.headers.authorization;

  
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
   
    const { sub,email } = verify(
      token,
      "123456"
    ) as IPayload;

   
    console.log(email);
    console.log(sub);

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}