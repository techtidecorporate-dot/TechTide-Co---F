import SEO from "../components/ui/SEO";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7] flex items-center justify-center">
      <SEO
        title="Products"
        description="Explore TechTide Corporate LLP's innovative products."
        keywords="TechTide products, software products"
      />
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#453abc] mb-6">
          Commming Soon
        </h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          We are working on something amazing. Stay tuned!
        </p>
      </div>
    </main>
  );
}
