import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome Repository");
});

export const RepositoryRouters = router;
