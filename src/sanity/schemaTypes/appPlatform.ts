// /sanity/schemas/appPlatform.ts

import { defineField, defineType } from "sanity";

export const appPlatform = defineType({
  name: "appPlatform",
  title: "App / Platform",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
    }),

    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "desc",
      title: "Description",
      type: "text",
    }),
  ],
});
