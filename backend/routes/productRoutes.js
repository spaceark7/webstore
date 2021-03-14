import express from "express";
import {
  getProductById,
  getProducts,
  deleteProductById,
  createProduct,
  updateProduct,
} from "../controller/productsController.js";

import { Protect, admin } from "../middleWare/userAuthMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(Protect, admin, createProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(Protect, admin, deleteProductById)
  .put(Protect, admin, updateProduct);

export default router;
