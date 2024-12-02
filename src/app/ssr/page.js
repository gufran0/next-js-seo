export async function generateMetadata({ params }) {
    return {
      title: `Item ${params.id}`,
      description: `Details about item ${params.id}.`,
    };
  }
  
  export async function getServerSideProps({ params }) {
    const data = await fetch(`https://api.example.com/item/${params.id}`).then((res) => res.json());
  
    return {
      props: { data },
    };
  }
  
  export default function Page({ data }) {
    return <div>{data.title}</div>;
  }
  