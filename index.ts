import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import { authMiddleware } from "./middleware/auth";
import { SessionRequest } from "./types/reqType";
const port = process.env.PORT;

const app = express();

if (process.env.SECRET) {
  app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    })
  );
}

app.get("/", (req: Request, res: Response) => {
  res.send("<h2>Hello Express</h2>");
});

app.post("/login", (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (username !== "admin" && password !== 12345) {
    res.status(401).send("Unauthorized");
    return;
  }
  (req as SessionRequest).user = "admin";
});

app.get("/dashboard", authMiddleware, (req: Request, res: Response) => {
  res.send("<h1>Welcome to the dashboard</h1>");
});
app.listen(port, () => {
  console.log(`app is listening in the port ${port}`);
});
