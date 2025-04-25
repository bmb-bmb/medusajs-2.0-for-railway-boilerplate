"use client"

import { useSearchParams } from "next/navigation"
import { useQueryState } from "nuqs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  const [search, setSearch] = useQueryState("search")
  const searchParams = useSearchParams()

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search products..."
        className="pl-9"
        value={search ?? ""}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
} 