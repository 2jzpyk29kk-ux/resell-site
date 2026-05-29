const products = [
  {
    id: 1,
    name: "Nike Dunk Low",
    size: "270",
    price: "₩320,000",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },

  {
    id: 2,
    name: "Stussy Hoodie",
    size: "L",
    price: "₩180,000",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
  },

  {
    id: 3,
    name: "Vintage Jacket",
    size: "M",
    price: "₩410,000",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
  },
]

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">

        <img
          src={product.image}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        <div className="mt-8">
          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="text-zinc-400 text-2xl mt-4">
            Size {product.size}
          </p>

          <p className="text-4xl font-bold mt-8">
            {product.price}
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg">
            Purchase
          </button>
        </div>

      </div>
    </main>
  )
}