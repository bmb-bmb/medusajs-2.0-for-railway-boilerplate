"use client"

import { useQuery } from "@tanstack/react-query"
import { Category } from "@/types"
import { sdk } from "@/lib/medusa"

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { product_categories } = await sdk.store.productCategories.list()
      return product_categories as Category[]
    },
  })
} 