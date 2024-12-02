export async function getStaticProps() {
    const data = await fetch('https://api.example.com/data').then((res) => res.json());
  
    return {
      props: { data },
      revalidate: 60, // Revalidate every 60 seconds
    };
  }
  
  export default function Page({ data }) {
    return <div>{data.title}</div>;
  }
  