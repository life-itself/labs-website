import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

const sharedFields = {
  title: { type: "string" },
  description: { type: "string" },
};

const computedFields = {
  url: {
    type: "string",
    resolve: (post) => post._raw.flattenedPath
  },
};

const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "!*(projects|writing)/**/*.md*",
  contentType: "mdx",
  fields: {
    ...sharedFields,
  },
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.md*",
  contentType: "mdx",
  fields: {
    ...sharedFields,
    featured: { type: "boolean", default: false }
  },
  computedFields,
}));

const Writing = defineDocumentType(() => ({
  name: "Writing",
  filePathPattern: "writing/**/*.md*",
  contentType: "mdx",
  fields: {
    ...sharedFields,
    authors: { type: "string" },
    timeline: { type: "string" }
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page, Project, Writing],
  mdx: {
    remarkPlugins: [ remarkGfm ],
    rehypePlugins: []
  }
});
