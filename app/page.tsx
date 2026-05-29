"use client"

import Link from "next/link"
import { useState } from "react"

type Product = {
  id: number
  name: string
  size: string
  price: string
  image: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([
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
  ])

  const [name, setName] = useState("")
  const [size, setSize] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const addProduct = () => {
    if (!name || !size || !price || !image) return

    const newProduct: Product = {
      id: Date.now(),
      name,
      size,
      price,
      image,
    }

    setProducts([newProduct, ...products])

    setName("")
    setSize("")
    setPrice("")
    setImage("")
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold">
            RESLL
          </h1>

          <button className="bg-white text-black px-5 py-3 rounded-2xl font-semibold">
            Login
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Add Product
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-800 p-4 rounded-2xl outline-none"
            />

            <input
              type="text"
              placeholder="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="bg-zinc-800 p-4 rounded-2xl outline-none"
            />

            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-zinc-800 p-4 rounded-2xl outline-none"
            />

            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="bg-zinc-800 p-4 rounded-2xl outline-none"
            />

          </div>

          <button
            onClick={addProduct}
            className="mt-6 bg-white text-black px-6 py-3 rounded-2xl font-bold"
          >
            Add Product
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="block"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 duration-300">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 mt-2">
                    Size {product.size}
                  </p>

                  <div className="flex justify-between items-center mt-6">

                    <span className="text-2xl font-bold">
                      {product.price}
                    </span>

                    <button
                      type="button"
                      className="bg-white text-black px-4 py-2 rounded-xl font-semibold"
                    >
                      Buy
                    </button>

                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  )
}