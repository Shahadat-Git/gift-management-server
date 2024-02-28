import { Router } from "express";
import { historyControllers } from "./history.controller";

const router = Router();

// get sell history
router.get("/history", historyControllers.getSalesHistory);
router.get("/history/:id", historyControllers.getSingleSaleHistory);

export const historyRoutes = router;
