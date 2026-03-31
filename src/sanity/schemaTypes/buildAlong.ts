import { defineField, defineType } from "sanity";

export const buildAlong = defineType({
  name: "buildAlong",
  title: "Build Along",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subTitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
      name: "paragraphOne",
      title: "Paragraph One",
      type: "text",
    }),

    defineField({
      name: "paragraphTwo",
      title: "Paragraph Two",
      type: "text",
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "components",
      title: "Components",
      type: "array",
      of: [{ type: "component" }],
    }),

    defineField({
      name: "appsPlatforms",
      title: "Apps & Platforms",
      type: "array",
      of: [{ type: "appPlatform" }],
    }),

    defineField({
      name: "codesSetup",
      title: "Codes & Setup",
      type: "array",
      of: [{ type: "codeSetup" }],
    }),
  ],
});
