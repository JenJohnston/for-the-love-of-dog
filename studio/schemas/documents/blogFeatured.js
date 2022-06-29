import { FaMicroblog } from "react-icons/fa";

export default {
  name: "featuredBlog",
  title: "Featured Blog",
  type: "document",
  icon: FaMicroblog,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "blogs",
      title: "Featured Blogs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blog" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
    },
  ],
};