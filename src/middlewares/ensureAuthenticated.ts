import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    // Receive token
    const authToken = req.headers.authorization;

    // Validate token
    if (!authToken) {
        return res.status(401).end();
    }

    const [,token] = authToken.split(" ");

    // Get user info
    try {
        const { sub } = verify(token, "d2036f7519307b4356826d6010f1fcdb") as IPayload;
        req.user_id = sub;
    } catch (err) {
        return res.status(401).end();
    }
    
    return next();
}
