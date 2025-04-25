import { notFound } from "next/navigation"
import { sdk } from "@/lib/medusa"
import { ProductCard } from "@/components/product-card"

export default async function ProductPage({
  params: { handle, countryCode },
}: {
  params: { handle: string; countryCode: string }
}) {
  const { products } = await sdk.store.product.list({
    handle,
    fields: "*variants.calculated_price",
  })

  const product = products[0]

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.thumbnail || "/placeholder.png"}
            alt={product.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-8">
            {product.variants?.[0]?.calculated_price?.calculated_amount
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(
                  product.variants[0].calculated_price.calculated_amount
                )
              : "Price not available"}
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  )
} 