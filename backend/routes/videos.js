import express from "express";
import { getByRVTag,getTags,getUserVideos,addVideo, addView, getVideoCountByUser ,getBySearch, getByTag, yourvids, getVideo, random, sub, trend, watch } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, addVideo)
router.delete("/:id", verifyToken, addVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub",verifyToken, sub)
router.get("/yourvids",verifyToken, yourvids)
router.get("/watch",verifyToken, watch)
router.get("/rv/tags", getByRVTag)
router.get("/search", getBySearch)
router.get("/getvideo/:userId", verifyToken, getUserVideos);
router.get('/count/:userId', getVideoCountByUser);

router.get("/tags", getTags);
router.get("/tags/:tag", getByTag);

export default router;