const express = require("express");
const router = express.Router();
const {
  upload,
  compressImage,
} = require("../middleware/image-upload/multerConfig");
const postController = require("../controllers/postController");
const authenticateJWT = require("../middleware/authenticateJWT");

// Get all blog posts
router.get("/", postController.getAllPosts);

router.get("/check", (req, res) => {
  res.send({ name: "Hello World" });
});

// Create a new blog post
router.post(
  "/:id",
  authenticateJWT(["admin"]),
  upload.single("image"),
  compressImage,
  postController.createPost
);

// Get a single blog post by ID
router.get("/:postId", postController.getPostById);

// Update a blog post by ID
router.put(
  "/:postId",
  authenticateJWT(["admin"]),
  upload.single("image"),
  compressImage,
  postController.updatePost
);

// Delete a blog post by ID
router.delete(
  "/:postId",
  authenticateJWT(["admin"]),
  postController.deletePost
);

router.post(
  "/posts/:postId/increase-views",
  authenticateJWT(["user"]),
  postController.increaseViewCount
);

module.exports = router;