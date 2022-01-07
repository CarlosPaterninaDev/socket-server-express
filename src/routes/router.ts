import { Router, Request, Response } from "express";

export const router = Router();

router.get("/mensajes", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "Ok",
  });
});

router.post("/mensajes", (req: Request, res: Response) => {
  const body = req.body;

  res.json({
    ok: true,
    mensaje: "Ok",
    body,
  });
});

router.post("/mensajes/:id", (req: Request, res: Response) => {
  const body = req.body;
  const id = req.params.id;

  res.json({
    ok: true,
    mensaje: "Ok",
    body,
    id,
  });
});
