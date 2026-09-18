import Image from "next/image";
import { ProjectArt } from "@/components/project-art";
import type { Project } from "@/content/projects";
import { projectCover } from "@/lib/covers";

export function ProjectVisual({
  project,
  sizes,
  priority = false,
  className,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const cover = projectCover(project.slug);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className ?? ""}`}>
      {cover ? (
        <Image
          src={cover}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      ) : (
        <ProjectArt kind={project.art} />
      )}
    </div>
  );
}
