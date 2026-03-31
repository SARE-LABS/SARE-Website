import type { ThemeInput } from "shiki";

export const sareDarkTheme: ThemeInput = {
  name: "sare-dark",
  type: "dark",

  fg: "#000000", // default text
  bg: "#5ba7ce",
  
  settings: [
    {
      scope: ["comment"],
      settings: {
        foreground: "#6B7280",
        fontStyle: "italic",
      },
    },

    // Keywords
    {
      scope: ["keyword", "storage", "constant.language"],
      settings: {
        foreground: "#67b5dc",
      },
    },

    // Strings
    {
      scope: ["string"],
      settings: {
        foreground: "#A5D6FF",
      },
    },

    // Numbers
    {
      scope: ["constant.numeric"],
      settings: {
        foreground: "#F59E0B",
      },
    },

    // Functions
    {
      scope: ["entity.name.function"],
      settings: {
        foreground: "#ef4444",
      },
    },

    // Variables
    {
      scope: ["variable"],
      settings: {
        foreground: "#1f2937",
      },
    },

    // Types
    {
      scope: ["type", "entity.name.type"],
      settings: {
        foreground: "#4ADE80",
      },
    },

    // Punctuation
    {
      scope: ["punctuation"],
      settings: {
        foreground: "#1f2937",
      },
    },

    {
      scope: ["entity.name.tag"],
      settings: {
        foreground: "#67b5dc", // tags <div>
      },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "#F59E0B", // class, id
      },
    },
    {
      scope: ["punctuation.definition.tag"],
      settings: {
        foreground: "#1f2937", // < >
      },
    },

    {
      scope: ["support.type.property-name"],
      settings: {
        foreground: "#67b5dc", // color, margin
      },
    },
    {
      scope: ["constant.other.color"],
      settings: {
        foreground: "#ef4444", // #fff
      },
    },
    {
      scope: ["support.constant.property-value"],
      settings: {
        foreground: "#A5D6FF", // values like flex
      },
    },
  ],
};
