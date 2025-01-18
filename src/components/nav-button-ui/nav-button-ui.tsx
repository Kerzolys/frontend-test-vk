import classNames from "classnames";

type NavButtonUIProps = {
  buttonText: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const NavButtonUI: React.FC<NavButtonUIProps> = ({
  buttonText,
  onClick,
  isActive,
}) => {
  console.log(isActive)
  return (
    <button
      className={classNames(
        "font-sans text-sm h-[100%] px-[15px] py-[20px] text-white bg-transparent outline-none border-none hover:bg-buttonActive active:border-none focus:outline-none focus:ring-0 focus:border-0",
        { "bg-buttonActive": isActive } 
      )}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};
