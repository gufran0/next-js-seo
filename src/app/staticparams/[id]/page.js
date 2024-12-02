// app/[id]/page.jsx

// // Step 1: Use generateStaticParams for static generation
// export async function generateStaticParams() {
//     const data = await fetch('https://api.example.com/items').then((res) => res.json());
    
//     // Return an array of params for static generation
//     return data.map((item) => ({ id: item.id.toString() }));
//   }
  
//   // Step 2: Fetch the data dynamically in the server component
//   export default async function Page({ params }) {
//     // Fetch the item data using the dynamic route parameter
//     const data = await fetch(`https://api.example.com/item/${params.id}`).then((res) => res.json());
  
//     // Render the page with the fetched data
//     return <div>{data.title}</div>;
//   }
  