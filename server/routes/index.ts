import { Router } from "express";
import AppController from "../controller/app.controller";
import { ROUTES } from "../constants";

const router = Router();

router.get(ROUTES.INITIAL_DATA, AppController.getInitialData);
router.get(ROUTES.GO_DOCK_DOCK, AppController.getDataByQuery);
router.post(ROUTES.GO_DOCK_DOCK, AppController.getQueryHistory);

export default router;

