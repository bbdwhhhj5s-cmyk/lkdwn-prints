import LandscapeProduct from "./LandscapeProduct";
import PortraitProduct from "./PortraitProduct";

export default function ProductPage({ product }) {
  if (product.orientation === "Portrait") {
    return <PortraitProduct product={product} />;
  }

  return <LandscapeProduct product={product} />;
}