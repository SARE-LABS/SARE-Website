// /sanity/schemas/component.ts

import { defineField, defineType } from "sanity";

export const component = defineType({
  name: "component",
  title: "Component",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "componentName",
      title: "Component Name",
      type: "string",
    }),

    defineField({
      name: "code",
      title: "Code",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    }),
  ],
});
