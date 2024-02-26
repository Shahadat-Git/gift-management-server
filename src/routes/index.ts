import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { productRoutes } from "../modules/prouct/product.route";
import { historyRoutes } from "../modules/history/history.route";
import { couponRoutes } from "../modules/coupon/coupon.route";

const router = Router();

// all routes
const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/product",
    route: productRoutes,
  },
  {
    path: "/sell",
    route: historyRoutes,
  },
  {
    path: "/sell",
    route: couponRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
