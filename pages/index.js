import { allProjects } from "contentlayer/generated"
import { pick } from "contentlayer/client";
import { Hero, SelectedWorks } from "components/Home";

export default function Home({ featuredProjects }) {
  return (
    <>
      <Hero />
      <SelectedWorks projects={featuredProjects} />
    </>
  );
}

export async function getStaticProps() {
  const featuredProjects = allProjects.map(project => 
    pick(project, ["_id", "url", "title", "description", "featured"])
  ).filter(p => p.featured)

  return {
    props: { featuredProjects }
  }
}
