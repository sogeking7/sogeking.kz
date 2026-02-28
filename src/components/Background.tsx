import { useEffect, useState } from "react";

const ICONS = [
  // Languages
  "javascript", "typescript", "python", "java", "c", "cplusplus", "csharp",
  "php", "ruby", "swift", "kotlin", "rust", "go", "scala", "r", "perl",
  "lua", "haskell", "erlang", "elixir", "clojure", "dart", "groovy",
  "objectivec", "julia", "bash", "powershell", "coffeescript", "fortran",
  "matlab", "ocaml", "crystal", "nim",
  // Web & Frameworks
  "react", "nextjs", "vuejs", "angularjs", "svelte", "nuxtjs", "gatsby",
  "remix", "astro", "ember", "backbone", "express", "fastapi", "flask",
  "django", "rails", "spring", "laravel", "symfony", "codeigniter",
  "dotnetcore", "flutter", "ionic", "electron",
  // Styling
  "html5", "css3", "sass", "tailwindcss", "bootstrap", "materialui",
  "bulma", "foundation",
  // Databases
  "postgresql", "mongodb", "mysql", "redis", "sqlite", "mariadb",
  "cassandra", "couchdb", "neo4j", "oracle", "microsoftsqlserver",
  "dynamodb", "firebase",
  // DevOps & Cloud
  "docker", "kubernetes", "nginx", "apache", "linux", "ubuntu", "debian",
  "fedora", "centos", "amazonwebservices", "googlecloud", "azure", "heroku",
  "digitalocean", "vercel", "netlify",
  // Tools & Misc
  "git", "github", "gitlab", "bitbucket", "nodejs", "npm", "yarn",
  "webpack", "vite", "babel", "eslint", "jest", "mocha", "gradle",
  "maven", "ansible", "terraform", "vagrant", "jenkins", "circleci",
  "graphql", "redux", "rxjs", "jquery", "d3", "threejs",
  "tensorflow", "pytorch", "pandas", "numpy", "jupyter",
  "vim", "vscode", "figma", "sketch", "xcode", "androidstudio",
  "intellij", "webstorm", "pycharm", "clion", "rider",
];

type Item = {
  name: string;
  x: number;
  y: number;
  rotation: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

export default function Background() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const generated: Item[] = Array.from({ length: 120 }, () => ({
      name: ICONS[Math.floor(Math.random() * ICONS.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 50 - 25,
      size: 18 + Math.random() * 14,
      opacity: 0.07 + Math.random() * 0.08,
      duration: 10 + Math.random() * 16,
      delay: -(Math.random() * 16),
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${item.x}%`,
            top: `${item.y}%`,
            animation: `float ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.name}/${item.name}-original.svg`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.name}/${item.name}-plain.svg`;
            }}
            alt=""
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              opacity: item.opacity,
              transform: `rotate(${item.rotation}deg)`,
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}
