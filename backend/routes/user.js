import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey its user route");
});

export default router;