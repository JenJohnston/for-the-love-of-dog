// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document import

import blog from "./documents/blog.js";
import category from "./documents/category";
import author from "./documents/author.js";
import featured from "./documents/featured.js";
import blogFeatured from "./documents/blogFeatured.js";
import services from "./documents/services.js";

// object import

import customImage from "./objects/customImage";
import normalText from "./objects/normalText";
import richText from "./objects/richText.js";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    // document schemas

    featured,
    blog,
    blogFeatured,
    author,
    category,
    services,

    // object schemas

    customImage,
    normalText,
    richText,
  ]),
});
