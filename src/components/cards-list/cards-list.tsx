import { saveFavorites, useCatImage } from "../../api/fetcher";
import { TCatImage } from "../../services/types";
import { CatCardUI } from "../cat-card-ui/cat-card-ui";

export const CardsList = () => {
  const {data, isLoading, error} = useCatImage(15);

  const handleAddFavorites = async (cat: TCatImage) => {
    await saveFavorites(cat.id);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  return (
    <div className="flex flex-wrap gap-[48px] px-[62px]">
      {data &&
        data.map((cat: TCatImage) => {
          return (
            <CatCardUI cat={cat} key={cat.id} onClick={() => handleAddFavorites(cat)} />
          );
        })}
    </div>
  );
};
