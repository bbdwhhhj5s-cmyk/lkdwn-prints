import { notFound } from "next/navigation";
import Link from "next/link";

import { productList } from "@/data/products";

import ProductInfo from "@/components/product/ProductInfo";
import PurchasePanel from "@/components/product/PurchasePanel";
import ProductGallery from "@/components/product/ProductGallery";

export async function generateStaticParams() {
  return productList.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = productList.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | LKDWN Prints`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = productList.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = productList.filter(
    (item) =>
      item.collection === product.collection &&
      item.slug !== product.slug
  );

  return (
    <main className="bg-[#090D12] text-white">

      <section className="mx-auto max-w-7xl px-8 py-20">

        <Link
          href={`/collections/${product.collection.toLowerCase()}`}
          className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]"
        >
          ← Back to Collection
        </Link>

      </section>

      <section className="mx-auto grid max-w-7xl gap-20 px-8 pb-32 lg:grid-cols-[1.3fr_0.7fr]">

        <div className="space-y-20">

        <ProductGallery
    images={product.gallery}
    title={product.title}
/>

          <ProductInfo
            title={product.title}
            location={product.location}
            description={product.description}
          />

        </div>

        <PurchasePanel product={product} />

      </section>

      {relatedProducts.length > 0 && (

        <section className="border-t border-white/10">

          <div className="mx-auto max-w-7xl px-8 py-24">

            <p className="mb-12 text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
              More From This Collection
            </p>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/product/${item.slug}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-2xl">

                    <img
                      src={item.gallery[0]}
                      alt={item.title}
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                  </div>

                  <h3 className="mt-6 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    {item.location}
                  </p>

                </Link>
              ))}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}