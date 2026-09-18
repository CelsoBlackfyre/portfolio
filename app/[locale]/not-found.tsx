import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { Label } from "@/components/primitives";
import { getDictionary } from "@/lib/dictionary";
import { localePath } from "@/lib/locales";

export default function NotFound() {
  const en = getDictionary("en");
  const pt = getDictionary("pt");

  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <Label>Error 404</Label>

        <h1 className="display mt-6 max-w-3xl text-[2.25rem] sm:text-5xl">
          <span className="block">{en.notFound.title}</span>
          <span className="mt-2 block text-faint">{pt.notFound.title}</span>
        </h1>

        <div className="mt-8 max-w-[58ch] space-y-2">
          <p className="lede">{en.notFound.body}</p>
          <p className="text-sm leading-relaxed text-faint">{pt.notFound.body}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            {en.actions.backHome} · {pt.actions.backHome}
          </Link>
          <Link href={localePath("en", "/work")} className="btn btn-ghost">
            <ArrowLeftIcon className="h-4 w-4" />
            {en.nav.work}
          </Link>
        </div>
      </div>
    </section>
  );
}
