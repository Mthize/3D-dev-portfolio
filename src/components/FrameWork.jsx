import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWork() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "typescript",
    "git",
    "html5",
    "javascript",
    "linux",
    "react",
    "claude",
    "tailwindcss",
    "vitejs",
    "neovim",
  ]
return (
    <div className="relative flex h-[15rem] w-full lg:w-[90%] flex-col items-end justify-center">
      <OrbitingCircles iconSize={40} cx="100%">
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2} cx="100%">
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);  
