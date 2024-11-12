import CategoriesPickCategory from "@/components/CategoriesPickCategory";

const CategoryChoose: React.FC = () => {
  const chosenCategories: string[] = []; // Initialize chosenCategories as an empty array

  return (
    <div>
      <CategoriesPickCategory chosenCategories={chosenCategories} />
    </div>
  );
};

export default CategoryChoose;