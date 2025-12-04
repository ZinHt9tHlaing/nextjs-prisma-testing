export const revalidate = 5; // revalidate every 5 seconds
// export const dynamic = "force-dynamic"; 

export default async function Home() {
  return (
    <main>
      <h2 className="text-red-600 font-bold">{Date.now()}</h2>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident
        temporibus corrupti dolores velit libero voluptatibus soluta doloribus.
        Temporibus quia recusandae nostrum, fugit ad deserunt minus commodi qui
        assumenda sint.
      </p>
    </main>
  );
}
