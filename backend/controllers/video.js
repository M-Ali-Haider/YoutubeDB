import User from "../models/User.js";
import Video from "../models/Video.js";
import { createError } from "../error.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You can update only your video!"));
    }
  } catch (err) {
    next(err);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("The video has been deleted.");
    } else {
      return next(createError(403, "You can delete only your video!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};


export const yourvids = async (req, res, next) => {
  try {
    const userVideos = await Video.find({ userId: req.user.id });
    const sortedVideos = userVideos.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json(sortedVideos);
  } catch (err) {
    next(err);
  }
};


// videoController.js
export const addView = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });

    if (!video) {
      return res.status(404).json("Video not found");
    }

    res.status(200).json("The view has been increased.");
  } catch (err) {
    next(err);
  }
};


export const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const trend = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map(async (channelId) => {
        return await Video.find({ userId: channelId });
      })
    );

    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

export const watch = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const watchLaterVideos = user.watchLater;
    const videos = await Video.find({ _id: { $in: watchLaterVideos } });
    // const sortedVideos = videos.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};


export const getTags = async (req, res, next) => {
  try {
    const allTags = await Video.distinct("tags");
    res.status(200).json(allTags);
  } catch (err) {
    next(err);
  }
};

// Modify the existing getByTag controller function
export const getByTag = async (req, res, next) => {
  const tag = req.params.tag;
  try {
    const videos = await Video.find({ tags: tag }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
export const getByRVTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const getBySearch = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { tags: { $regex: query, $options: "i" } },
        { desc: { $regex: query, $options: "i" } },
        {
          userId: {
            $in: await User.find({
              name: { $regex: query, $options: "i" },
            }).distinct("_id"),
          },
        },
      ],
    }).limit(40);

    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};



export const getVideoCountByUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const videoCount = await Video.countDocuments({ userId });
    res.status(200).json({ videoCount });
  } catch (err) {
    next(err);
  }
};

export const getUserVideos = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return next(createError(404, "User not found!"));
    }
    const userVideos = await Video.find({ userId });
    const sortedVideos = userVideos.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json(sortedVideos);
  } catch (err) {
    next(err);
  }
};


export const getWatchLaterAndLikedVideos = async (userId) => {
  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Get the user's watch later videos
    const watchLaterVideos = await Video.find({ _id: { $in: user.watchLater } });

    // Get the videos liked by the user
    const likedVideos = await Video.find({ likes: userId });

    // Combine watch later and liked videos and remove duplicates
    const combinedVideos = [...watchLaterVideos, ...likedVideos].reduce((acc, video) => {
      if (!acc.find((v) => v._id.equals(video._id))) {
        acc.push(video);
      }
      return acc;
    }, []);

    return { success: true, videos: combinedVideos };
  } catch (error) {
    return { success: false, message: error.message };
  }
};