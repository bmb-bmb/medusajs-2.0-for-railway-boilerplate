"use client"

import { useQueryState } from "nuqs"
import { useCategories } from "@/hooks/use-categories"
import { cn } from "@/lib/utils"

export function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useQueryState("category")
  const { data: categories, isLoading } = useCategories()

  if (isLoading) {
    return <div>Loading categories...</div>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Categories</h2>
      <ul className="space-y-2">
        {categories?.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md hover:bg-accent",
                selectedCategory === category.id && "bg-accent"
              )}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
} 