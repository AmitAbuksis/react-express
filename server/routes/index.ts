import { Router } from "express";
import AppController from "../controller/app.controller";

const router = Router();

router.get("/dock-dock", AppController.getDataByQuery);
router.post("/dock-dock", AppController.getQueryHistory);

export default router;

