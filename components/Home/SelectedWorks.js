import Card from "../Card"

export default function SelectedWorks({ projects }) {
  return (
    <div className="mt-8 py-8 px-4 sm:px-8 sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      <div>
        <h2 className="text-2xl lg:text-3xl">Selected Works</h2>
      </div>
      <ul className="mt-12 sm:px-4 grid sm:max-w-7xl lg:gap-x-4 xl:gap-x-12 sm:gap-y-4 lg:grid-cols-2">
        {projects &&
          projects.map((item) => <Card key={item._id} item={item} />)}
      </ul>
    </div>
  );
}
