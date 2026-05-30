const products = [
  {
    id: 1,
    name: "Nike Dunk Low",
    brand: "Nike",
    size: "270",
    price: "₩320,000",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Stussy Hoodie",
    brand: "Stussy",
    size: "L",
    price: "₩180,000",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
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
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Product not found
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT IMAGE */}
          <div>

            <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <img
                src={product.image}
                className="w-full h-[650px] object-cover"
              />
            </div>

          </div>

          {/* RIGHT INFO */}
          <div>

            {/* BRAND */}
            <p className="text-zinc-500 text-sm uppercase tracking-widest">
              {product.brand}
            </p>

            {/* NAME */}
            <h1 className="text-4xl font-bold mt-2 leading-tight">
              {product.name}
            </h1>

            {/* PRICE BOX */}
            <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <p className="text-zinc-500 text-sm">
                Last Sale
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {product.price}
              </h2>

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-zinc-800 rounded-xl p-4">
                  <p className="text-zinc-500 text-sm">
                    Highest Bid
                  </p>

                  <p className="text-lg font-semibold mt-1">
                    ₩300,000
                  </p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-4">
                  <p className="text-zinc-500 text-sm">
                    Lowest Ask
                  </p>

                  <p className="text-lg font-semibold mt-1">
                    ₩340,000
                  </p>
                </div>

              </div>

            </div>

            {/* SIZE SELECT */}
            <div className="mt-8">

              <h3 className="text-lg font-semibold mb-4">
                Select Size
              </h3>

              <div className="grid grid-cols-3 gap-3">

                {["250", "255", "260", "265", "270", "275"].map((size) => (
                  <button
                    key={size}
                    className="border border-zinc-700 rounded-xl py-4 hover:border-white transition"
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              <button className="bg-white text-black py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition">
                Buy Now
              </button>

              <button className="border border-zinc-700 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-900 transition">
                Sell
              </button>

            </div>

            {/* PRODUCT INFO */}
            <div className="mt-10 border-t border-zinc-800 pt-8 space-y-6">

              <div>
                <h4 className="font-semibold mb-2">
                  Product Details
                </h4>

                <p className="text-zinc-400 leading-relaxed">
                  Premium authenticated resale product.
                  Carefully inspected for quality and condition.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  Shipping
                </h4>

                <p className="text-zinc-400">
                  Ships within 1–3 business days.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  Authenticity
                </h4>

                <p className="text-zinc-400">
                  All products are verified before shipment.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  )
}