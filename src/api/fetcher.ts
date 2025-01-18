import useSWR from "swr";

const API_KEY: string | undefined =
  "live_OmRGLAoJVQogfQa3aobsYipCVwXw19JXFZ94CyGnnhcG08gRbCX1TX9pU4qtC2pX"; // Замените на ваш API-ключ

if (!API_KEY) {
  throw new Error("API Key is missing!");
}


export const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> =>
  fetch(...args).then((res) => res.json());

export const useCatImage = (limit: number | null) => {
  const { data, error, isLoading } = useSWR(
    limit
      ? `https://api.thecatapi.com/v1/images/search?limit=${limit}`
      : null,
    (url) =>
      fetch(url, {
        headers: {
          "x-api-key": API_KEY as string, // Добавляем API-ключ в заголовки
        },
      }).then((res) => res.json())
  
  );
  return {
    data: data,
    isLoading,
    error,
  };
};

export const saveFavorites = async (id: string) => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "live_OmRGLAoJVQogfQa3aobsYipCVwXw19JXFZ94CyGnnhcG08gRbCX1TX9pU4qtC2pX",
      },
      body: JSON.stringify({ image_id: id }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error adding to favorites:", errorData);
      throw new Error(errorData.message);
    }

    const result = await response.json();
    console.log("Added to favorites:", result);
  } catch (error) {
    console.error("Failed to add to favorites", error);
  }
};

export const getFavourites = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/favourites", {
      headers: {
        "x-api-key": API_KEY,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching favorites:", errorData);
      throw new Error(errorData.message);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch favorites", error);
  }
}

export const removeFromFavorites = async (id: string) => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
      method: "DELETE",
      headers: {
        "x-api-key": API_KEY,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error removing from favorites:", errorData);
      throw new Error(errorData.message);
    }

    const result = await response.json();
    return result 
  } catch (error) {
    console.error("Failed to remove from favorites", error);
  }
}