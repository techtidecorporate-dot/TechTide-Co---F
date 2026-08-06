import SEO from "../components/ui/SEO";
import { Boxes, Workflow, ShieldCheck, LineChart, ArrowUpRight } from "lucide-react";

const products = [
  {
    code: "TT-01",
    icon: Boxes,
    name: "Nimbus Core",
    tagline: "Unified data platform",
    description:
      "Centralize every data source into one governed layer your teams can actually trust and query in seconds.",
    tags: ["Data", "Cloud-native"],
    accent: "from-[#453abc] to-[#6a5cf0]",
  },
  {
    code: "TT-02",
    icon: Workflow,
    name: "FlowStack",
    tagline: "Workflow automation",
    description:
      "Design, run, and monitor multi-step business workflows without writing a single line of glue code.",
    tags: ["Automation", "No-code"],
    accent: "from-[#5b4fd6] to-[#8b6ff2]",
  },
  {
    code: "TT-03",
    icon: ShieldCheck,
    name: "SentinelIQ",
    tagline: "Security & compliance",
    description:
      "Continuous threat detection and audit-ready compliance reporting, built for fast-moving engineering teams.",
    tags: ["Security", "Compliance"],
    accent: "from-[#4643c9] to-[#7a5ff0]",
  },
  {
    code: "TT-04",
    icon: LineChart,
    name: "Pulse Analytics",
    tagline: "Real-time insights",
    description:
      "Turn raw product usage into live dashboards and alerts your whole team can understand at a glance.",
    tags: ["Analytics", "Realtime"],
    accent: "from-[#5a4ee0] to-[#9b7cf5]",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#eef2f7]">
      <SEO
        title="Products"
        description="Explore TechTide Corporate LLP's innovative products."
        keywords="TechTide products, software products"
      />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#453abc] uppercase mb-4 px-3 py-1 rounded-full bg-[#453abc]/10">Our Products</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Built for how modern teams work</h1>
          <p className="text-lg text-gray-600">Four focused products, one connected suite pick what you need, grow into the rest.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.code}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${product.accent} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Code + icon row */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`size-12 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center shadow-md shadow-[#453abc]/20 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="size-6 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 tracking-wider">{product.code}</span>
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm font-medium text-[#453abc] mb-3">{product.tagline}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{product.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#453abc] hover:gap-2.5 transition-all self-start">
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}