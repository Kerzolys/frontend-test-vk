import { NavButtonUI } from "../nav-button-ui/nav-button-ui"

type  HeaderProps = {
    onClick: (page: 'all' | 'favourites') => void;
    isActive: 'all' | 'favourites';
}

export const Header: React.FC<HeaderProps> = ({onClick, isActive}) => {
    console.log(isActive)
    return (
        <header className="w-full h-[64px] flex flex-start items-center px-[62px] bg-primary mb-[36px] shadow-[0_4px_4px_0_#0000003D]">
            <nav>
                <NavButtonUI isActive={isActive === 'all'} buttonText="Все котики" onClick={() => onClick('all')} />
                <NavButtonUI isActive={isActive === 'favourites'} buttonText="Любимые котики" onClick={() => onClick('favourites')}/>
            </nav>
        </header>
    )
}