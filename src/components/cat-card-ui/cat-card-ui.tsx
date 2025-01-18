import { useEffect, useState } from "react";
import { TCatImage } from "../../services/types";
import classNames from "classnames";

type CatCardUIProps = {
  cat: TCatImage;
  onClick?: () => void;
  isFavourite?: boolean;
};

export const CatCardUI: React.FC<CatCardUIProps> = ({ cat, onClick, isFavourite }) => {
  const [isClicked, setIsClicked] = useState(isFavourite);

  useEffect(() => {
    setIsClicked(isFavourite || false);
  }, [isFavourite]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick?.();
  };

  return (
    <div>
      <div className="group w-[225px] aspect-square relative ">
        <img
          className="w-[100%] h-[100%] hover:scale-[1.1] hover:shadow-[0_9px_18px_0_#0000003d] hover:shadow-[0_6px_5px_0_#0000002e] transition-[transform] duration-[0.3s] ease-in-out"
          src={cat.url}
          alt={cat.id}
        />
        <svg
          width="40"
          height="37"
          viewBox="0 0 40 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:opacity-100 opacity-0 absolute bottom-[24px] right-[19px] cursor-pointer transition-[opacity] duration-[0.3s] ease-in-out"
        >
          <path
            d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
            fill="#F24E1E"
          />
        </svg>
      </div>
      <div className="group relative">
        <button
          className={classNames(
            "absolute right-[19px] bottom-[24px] bg-primary text-white p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent border-none active:border-none focus:outline-none focus:ring-0 focus:border-0",
            { "opacity-100": isClicked }
          )}
          onClick={handleClick}
        >
          <svg
            width="40"
            height="37"
            viewBox="0 0 40 37"
            fill={isClicked ? "#FF3A00" : "#F24E1E"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
              fill="#F24E1E"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
