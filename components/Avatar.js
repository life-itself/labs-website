export default function Avatar({ name, image }) {
  return (
    <>
      <img
        src={image}
        alt={name ? `${name} avatar` : "avatar"}
        className="relative w-40 h-40 2xl:w-24 2xl:h-24 shadow"
      />
      {name && <h4>{name}</h4>}
    </>
  );
}
