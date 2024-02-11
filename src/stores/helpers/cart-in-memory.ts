import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => id === newProduct.id);

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, { ...newProduct, quantity: 1 }];
}

export function remove(products: ProductCartProps[], product: ProductProps) {
  const existingProduct = products.find(({ id }) => id === product.id);

  if (existingProduct && existingProduct.quantity > 1) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
  } else {
    return products.filter(({ id }) => id !== product.id);
  }
}
