import type React from "react";

interface CategoriesPickCategoryProps {
  chosenCategories: string[];
}

const CategoriesPickCategory: React.FC<CategoriesPickCategoryProps> = ({ chosenCategories = [] }) => {
  const categories = [
    "Dýr",
    "Tónlist",
    "Áfengi",
    "Bílpróf",
    "Vinahópur",
    "Útlönd",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#119DBF]">
      <div className="w-64">
        {categories.map((category) => (
          <p
            key={category}
            className={`mb-4 rounded-3xl p-2 text-2xl border-3 shadow-lg shadow-blue-900 ${
              chosenCategories.includes(category) ? "bg-blue-900" : "bg-blue-700"
            }`}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPickCategory;