"use client"

import { useQuery } from "@tanstack/react-query"
import { Product, ProductFilters } from "@/types"
import { sdk } from "@/lib/medusa"

export function useProducts(filters: ProductFilters = {}) {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      const { products, count } = await sdk.client.fetch<{
        products: Product[]
        count: number
      }>("/store/products", {
        method: "GET",
        query: {
          limit: filters.limit || 12,
          offset: filters.page ? (filters.page - 1) * (filters.limit || 12) : 0,
          region_id: filters.regionId,
          fields: "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
          ...(filters.categoryId && { category_id: filters.categoryId }),
          ...(filters.search && { q: filters.search }),
        },
        cache: "force-cache",
      })

      return { products, count }
    },
  })
} 