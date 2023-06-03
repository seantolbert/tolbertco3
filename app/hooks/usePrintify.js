export async function getShirts() {
  const res = await fetch(
    `https://api.printify.com/v1/shops/5053058/products.json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRINTIFY_API}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const typedProducts = data.data.map((prod) => ({
    ...prod,
    type: "product",
  }));
  // console.log(data)
  return typedProducts;
}
