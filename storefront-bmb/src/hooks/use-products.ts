"use client"

import { useQuery } from "@tanstack/react-query"
import { Product, ProductFilters } from "@/types"
import { sdk } from "@/lib/medusa"

export function useProducts(filters: ProductFilters = {}) {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      const { products, count } = await sdk.store.product.list({
        category_id: filters.categoryId,
        q: filters.search,
        limit: filters.limit || 12,
        offset: filters.page ? (filters.page - 1) * (filters.limit || 12) : 0,
        fields: "*variants.calculated_price",
        region_id: filters.regionId,
      })
      return { products, count }
    },
  })
} 