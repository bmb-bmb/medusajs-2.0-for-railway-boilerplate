"use client"

import { useQueryState } from "nuqs"
import { useProducts } from "@/hooks/use-products"
import { useRegion } from "@/hooks/use-region"
import { ProductCard } from "@/components/product-card"

interface ProductGridProps {
  countryCode: string
  categoryId?: string
}

export function ProductGrid({ countryCode, categoryId }: ProductGridProps) {
  const [selectedCategory] = useQueryState("category")
  const [search] = useQueryState("search")
  const { data: region } = useRegion()
  const { data, isLoading } = useProducts({
    categoryId: categoryId || selectedCategory || undefined,
    search: search || undefined,
    regionId: region?.id,
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 bg-muted animate-pulse rounded-lg"
          />
        ))}
      </div>
    )
  }

  if (!data?.products?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No products found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
} 