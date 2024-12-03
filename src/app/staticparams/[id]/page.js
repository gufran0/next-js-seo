

// export async function generateStaticParams() {
//     const data = await fetch('https://api.example.com/items').then((res) => res.json());

//     // Return an array of params for static generation
//     return data.map((item) => ({ id: item.id.toString() }));
//   }

//   export default async function Page({ params }) {
//     // Fetch the item data using the dynamic route parameter
//     const data = await fetch(`https://api.example.com/item/${params.id}`).then((res) => res.json());

//     return <div>{data.title}</div>;
//   }
