// // Step 1: Fetch data directly in the server component
// export default async function Page() {
//   const data = await fetch('https://api.example.com/data', {
//     next: { revalidate: 60 }, // Revalidate every 60 seconds
//   }).then((res) => res.json());

//   return <div>{data.title}</div>;
// }