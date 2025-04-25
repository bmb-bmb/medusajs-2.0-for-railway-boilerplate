"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const price = product.variants?.[0]?.calculated_price?.calculated_amount || 0

  return (
    <Link href={`/products/${product.handle}`}>
      <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
        <div className="aspect-square overflow-hidden rounded-md">
          <Image
            src={product.thumbnail || "/placeholder.png"}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
          <p className="mt-2 font-medium">{formatPrice(price)}</p>
        </div>
      </div>
    </Link>
  )
} 