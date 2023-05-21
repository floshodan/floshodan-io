// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import readingTime from "reading-time";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/(\d{4})-(\d{2})-(\d{2})-/g, "")
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/(\d{4})-(\d{2})-(\d{2})-/g, "").split("/").slice(1).join("/")
  },
  url: {
    type: "string",
    resolve: (post) => `/posts/${post._raw.flattenedPath}`
  },
  slugs: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    },
    featured: {
      type: "string"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          // theme: "github-dark",
          //theme: JSON.parse(readFileSync(themePath, "utf-8")),
          theme: "one-dark-pro",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HDPFYPBI.mjs.map
