const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createBlog = async (req, res) => {
  const { title, description, userId } = req.body;
  try {
    const newBlog = await prisma.blog.create({
      data: {
        title,
        description,
        author: { connect: { id: userId } },
      },
    });
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating the blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateBlog = async (req, res) => {
  const { title, description } = req.body;
  const { blogId } = req.params;

  if (!title && !description) {
    return res
      .status(400)
      .json({ error: "Title or description is required for update" });
  }

  try {
    const existingBlog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!existingBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        title,
        description,
      },
    });

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const existingBlog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!existingBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    const Blog = await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });
    res.status(201).json({ message: "blog deleted successfully" });
  } catch (error) {
    console.error("Error creating the blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error creating the blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
