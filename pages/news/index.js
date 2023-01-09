import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return {
    props: { rony: data },
  };
};
const Products = ({ rony }) => {
  return (
    <div>
      {rony.map((ron) => (
        <Link key={ron.id} href={`Product/${ron.id}`}>
          <h4>{ron.title}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Products;
