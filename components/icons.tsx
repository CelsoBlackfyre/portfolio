import {
  ArrowLeftIcon as PhosphorArrowLeft,
  ArrowRightIcon as PhosphorArrowRight,
  ArrowUpRightIcon as PhosphorArrowUpRight,
  CheckIcon as PhosphorCheck,
  EnvelopeSimpleIcon as PhosphorEnvelope,
  GithubLogoIcon as PhosphorGithubLogo,
  GitlabLogoIcon as PhosphorGitlabLogo,
  LinkedinLogoIcon as PhosphorLinkedinLogo,
  ListIcon as PhosphorList,
  LockIcon as PhosphorLock,
  MapPinIcon as PhosphorMapPin,
  SparkleIcon as PhosphorSparkle,
  XIcon as PhosphorX,
} from "@phosphor-icons/react/dist/ssr";

type GlyphProps = {
  className?: string;
};

const WEIGHT = "regular";

export function ArrowUpRightIcon({ className }: GlyphProps) {
  return <PhosphorArrowUpRight className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function ArrowRightIcon({ className }: GlyphProps) {
  return <PhosphorArrowRight className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function ArrowLeftIcon({ className }: GlyphProps) {
  return <PhosphorArrowLeft className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function CheckIcon({ className }: GlyphProps) {
  return <PhosphorCheck className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function EnvelopeIcon({ className }: GlyphProps) {
  return <PhosphorEnvelope className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function MenuIcon({ className }: GlyphProps) {
  return <PhosphorList className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function CloseIcon({ className }: GlyphProps) {
  return <PhosphorX className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function MapPinIcon({ className }: GlyphProps) {
  return <PhosphorMapPin className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function LockIcon({ className }: GlyphProps) {
  return <PhosphorLock className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function SparkIcon({ className }: GlyphProps) {
  return <PhosphorSparkle className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function GitHubIcon({ className }: GlyphProps) {
  return <PhosphorGithubLogo className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function LinkedInIcon({ className }: GlyphProps) {
  return <PhosphorLinkedinLogo className={className} weight={WEIGHT} aria-hidden="true" />;
}

export function GitLabIcon({ className }: GlyphProps) {
  return <PhosphorGitlabLogo className={className} weight={WEIGHT} aria-hidden="true" />;
}
