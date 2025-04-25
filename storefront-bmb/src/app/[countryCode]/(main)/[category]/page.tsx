import { notFound } from "next/navigation"
import { Suspense } from "react"
import { sdk } from "@/lib/medusa"
import { ProductGrid } from "@/components/product-grid"

export default async function CategoryPage({
  params: { category, countryCode },
}: {
  params: { category: string; countryCode: string }
}) {
  const { product_categories } = await sdk.store.productCategories.list({
    handle: category,
  })

  const categoryData = product_categories[0]

  if (!categoryData) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{categoryData.name}</h1>
      {categoryData.description && (
        <p className="text-muted-foreground mb-8">{categoryData.description}</p>
      )}
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductGrid
          countryCode={countryCode}
          categoryId={categoryData.id}
        />
      </Suspense>
    </main>
  )
} 