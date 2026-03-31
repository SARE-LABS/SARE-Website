import { defineField, defineType } from "sanity";

export const codeSetup = defineType({
  name: "codeSetup",
  title: "Code & Setup",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Code type",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
      name: "filename",
      title: "Filename",
      type: "string",
    }),

    defineField({
      name: "extension",
      title: "Extension",
      type: "string",
    }),

    defineField({
      name: "code",
      title: "Code",
      type: "text",
    }),
  ],
});
