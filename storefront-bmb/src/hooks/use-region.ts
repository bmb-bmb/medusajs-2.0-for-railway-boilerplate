"use client"

import { useQuery } from "@tanstack/react-query"
import { sdk } from "@/lib/medusa"

export function useRegion() {
  return useQuery({
    queryKey: ["region"],
    queryFn: async () => {
      const { regions } = await sdk.store.region.list()
      // Default to first region for now
      return regions[0]
    },
  })
} 