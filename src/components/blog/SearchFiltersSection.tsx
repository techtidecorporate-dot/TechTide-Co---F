// import { Search } from "lucide-react";
// import { ChangeEvent } from "react";

// interface SearchFiltersSectionProps {
//   searchQuery: string;
//   onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   categories: string[];
//   selectedCategory: string;
//   onCategoryChange: (category: string) => void;
// }

// export function SearchFiltersSection({
//   searchQuery,
//   onSearchChange,
//   categories,
//   selectedCategory,
//   onCategoryChange,
// }: SearchFiltersSectionProps) {
//   return (
//     <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16">
//       <div className="glass p-5 md:p-4 rounded-[2.5rem] md:rounded-3xl flex flex-col lg:flex-row gap-6 items-center justify-between shadow-sm">
//         <div className="relative w-full lg:w-96 group">
//           <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280] group-focus-within:text-[#453abc] transition-colors" />
//           <input
//             type="text"
//             placeholder="Search articles..."
//             value={searchQuery}
//             onChange={onSearchChange}
//             className="w-full pl-14 pr-6 py-4 bg-[#f8f9fa] border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#453abc]/20 transition-all"
//           />
//         </div>

//         <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar w-full lg:w-auto">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => onCategoryChange(category)}
//               className={`px-6 py-3 rounded-2xl  text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
//                 selectedCategory === category
//                   ? "bg-[#191a23] text-white shadow-lg"
//                   : "bg-white text-[#6b7280] hover:bg-[#f8f9fa] border border-gray-200"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

