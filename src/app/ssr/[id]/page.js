


export async function generateMetadata({ params }) {
    return {
      title: `Item ${params.id}`,
      description: `Details about item ${params.id}.`,
    };
  }
  

  export default async function Page({ params }) {
    const data = await fetch(`https://api.example.com/item/${params.id}`).then((res) => res.json());
  
    return <div>{data.title}</div>;
  }
  