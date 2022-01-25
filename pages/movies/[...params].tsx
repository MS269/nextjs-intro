import Seo from "../../components/Seo";

export default function Detail({ params }: { params: [string, number] }) {
  const [title, id]: [string, number] | [] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>{" "}
    </div>
  );
}

export function getServerSideProps({
  params: { params },
}: {
  params: { params: [string, number] };
}) {
  return {
    props: {
      params,
    },
  };
}
