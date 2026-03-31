import { createHighlighter } from "shiki";
import { sareDarkTheme } from "./shiki-theme";

let highlighter: Awaited<ReturnType<typeof createHighlighter>>;

export async function getShikiHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: [sareDarkTheme],
      langs: ["cpp", "javascript", "typescript", "html", "css"],
    });
  }

  return highlighter;
}

export async function highlightCode(code: string, lang: string) {
  const highlighter = await getShikiHighlighter();

  return highlighter.codeToHtml(code, {
    lang,
    theme: "sare-dark",
    transformers: [
      {
        pre(node) {
          node.properties.style = "";
          return node;
        },
      },
    ],
  });
}