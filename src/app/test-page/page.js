import qs from "qs";

const testPageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        title: true,
        subtitle: true
      }
    }
  },
  // "blocks.title": true,
  // "blocks.subtitle": true
})

async function getStrapiData(path) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = testPageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// async function getStrapiData(path) {
//   const baseUrl = "http://localhost:1337";
//   try {
//     const response = await fetch(baseUrl + path);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }
const strapiData = await getStrapiData("/api/test");
// console.log(strapiData.data.attributes.blocks)
console.dir(strapiData, {depth: null})

export default function testPage() {


  const { title, subtitle } = strapiData.data.attributes;

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h1 className="text-5xl font-bold">{strapiData.data.attributes.blocks.title}</h1>
      <p className="text-xl mt-4">{subtitle}</p>
    </main>
  );
}