const languages: Language[] = [
  {
    name: "TypeScript",
    extensions: ["ts", "tsx", "cts", "mts"],
    color: "#3178c6",
  },
  {
    name: "JavaScript",
    extensions: ["js", "jsx", "cjs", "mjs", "frag"],
    color: "#f1e05a",
  },
  {
    name: "HTML",
    extensions: ["html", "htm"],
    color: "#e34c26",
  },
  {
    name: "CSS",
    extensions: ["css"],
    color: "#663399",
  },
  {
    name: "Python",
    extensions: ["py"],
    color: "#3572A5",
  },
  {
    name: "Java",
    extensions: ["java", "jsh", "jsp"],
    color: "#b07219",
  },
  {
    name: "C++",
    extensions: ["cpp", "cc", "cxx", "c++", "hpp", "hh", "hxx"],
    color: "#f34b7d",
  },
  {
    name: "C",
    extensions: ["c", "h"],
    color: "#555555",
  },
  {
    name: "Go",
    extensions: ["go"],
    color: "#00ADD8",
  },
  {
    name: "Shell",
    extensions: ["sh"],
    color: "#89e051",
  },
  {
    name: "Ruby",
    extensions: ["rb", "gemspec", "podspec", "thor", "irb"],
    color: "#701516",
  },
  {
    name: "Rust",
    extensions: ["rs"],
    color: "#dea584",
  },
];

export type Language = {
  name: string;
  extensions: string[];
  color: string;
};

export function getLanguage(extension: string): Language | undefined {
  if (!extension) return;
  return languages.find((lang) => lang.extensions.includes(extension));
}
