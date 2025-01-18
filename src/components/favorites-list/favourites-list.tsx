import useSWR, { mutate } from "swr";
import { getFavourites, removeFromFavorites } from "../../api/fetcher";
import { CatCardUI } from "../cat-card-ui/cat-card-ui";
import { TFavouriteCat } from "../../services/types";
import { useEffect, useState } from "react";

const fetchFavourites = async (): Promise<TFavouriteCat[]> => {
  const result = await getFavourites();
  return result;
};

export const FavouritesList = () => {
  const { data, isLoading, error } = useSWR("favorites", fetchFavourites);
  const [favouriteIds, setFavouriteIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (data) {
      setFavouriteIds(new Set(data.map((cat) => cat.image.id)));
    }
  }, [data]);

  const handleRemoveFavourite = async (id: string) => {
    await removeFromFavorites(id);
    setFavouriteIds(new Set([...favouriteIds].filter((fid) => fid!== id)));
    mutate("favorites", (currentData: TFavouriteCat[] | undefined) => {
        return currentData ? currentData.filter((cat) => cat.id !== id) : [];
      }, false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  return (
    <div className="flex flex-wrap gap-[48px] px-[62px]">
      {data &&
        data.map((cat) => {
          return (
            <CatCardUI
              cat={cat.image}
              key={cat.id}
              isFavourite={favouriteIds.has(cat.image.id)}
              onClick={() => handleRemoveFavourite(cat.id)}
            />
          );
        })}
    </div>
  );
};
