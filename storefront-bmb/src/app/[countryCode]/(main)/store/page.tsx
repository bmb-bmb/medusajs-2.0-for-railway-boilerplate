import { Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { CategoryList } from "@/components/category-list"
import { SearchBar } from "@/components/search-bar"

export default function StorePage({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to BMB Store</h1>
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchBar />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <Suspense fallback={<div>Loading categories...</div>}>
            <CategoryList />
          </Suspense>
        </aside>

        <div className="md:col-span-3">
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid countryCode={countryCode} />
          </Suspense>
        </div>
      </div>
    </main>
  )
} 