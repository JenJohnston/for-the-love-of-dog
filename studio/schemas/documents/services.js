import { GrBusinessService } from "react-icons/gi";

export default {
  title: "Services",
  name: "services",
  type: "document",
  icon: GrBusinessService,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Sub Title",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "customImage",
    },
    {
      title: "Services excerpt",
      name: "excerpt",
      type: "richText",
      description: "A short description of the service",
    },
    {
      title: "Services Content",
      name: "body",
      type: "richText",
      description: "A full description of the service goes here",
    },
    {
      title: "Services Price",
      name: "price",
      type: "number",
      description: "The price of the service goes here",
    },
  ],
  preview: {
    select: {
      image: "coverImage",
      title: "title",
      subtitle: "subtitle",
      price: "price",
      excerpt: "excerpt",
    },
    prepare({ image, title, excerpt }) {
      return {
        title,
        media: image,
        subtitle: excerpt,
      };
    },
  },
};
