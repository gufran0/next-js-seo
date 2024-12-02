export async function generateStaticParams() {
    const data = await fetch('https://api.example.com/items').then((res) => res.json());
    return data.map((item) => ({ id: item.id }));
  }
  
  export async function getStaticProps({ params }) {
    const data = await fetch(`https://api.example.com/item/${params.id}`).then((res) => res.json());
  
    return {
      props: { data },
    };
  }
  
  export default function Page({ data }) {
    return <div>{data.title}</div>;
  }