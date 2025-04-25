import { StoreProduct } from "@medusajs/types"

export type Product = StoreProduct

export interface Category {
  id: string
  name: string
  description: string | null
  parent_category_id: string | null
  created_at: string
  updated_at: string
}

export interface ProductFilters {
  categoryId?: string
  search?: string
  page?: number
  limit?: number
  regionId?: string
} 