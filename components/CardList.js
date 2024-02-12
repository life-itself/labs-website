import { allDocuments } from "contentlayer/generated"
import { pick } from "contentlayer/client";
import Card from "./Card"

export default function ({ title, content }) {
  if (!content) return null

  const docs = allDocuments
    .map((doc) =>
      pick(doc, ["_id", "url", "title", "description", "authors", "_raw"])
    )
    .filter((item) => item._raw.sourceFileDir === content);

  return (
    <div className="divide-y-2 divide-neutral-900/70">
      {title ? <h2 className="ml-2">{title}</h2> : <span />}
      <ul className="mt-6 pt-6 grid sm:gap-8 lg:grid-cols-2 lg:gap-4 px-0">
        {docs && docs.map(doc => <Card key={doc._id} item={doc} />)}
      </ul>
    </div>
  );
}