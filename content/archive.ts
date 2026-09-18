import { independentProjects, type Project } from "@/content/projects";
import { workProjects } from "@/content/work";

export const projects: Project[] = [...workProjects, ...independentProjects];

export function neighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}

export { independentProjects, workProjects };
