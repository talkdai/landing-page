type Props = {
    name: string;
    isSelected: boolean;
    onClick: () => void;
}

export function MenuItem ({name, isSelected, onClick}: Props) {
    return(
        // <button className="flex items-center gap-3">
        <li className="flex menu-item">
             <button className="flex items-center gap-2 pl-2" onClick={onClick}>
                <span
                    className={`font-semibold ${isSelected ? 'text-primary-purple' : 'text-white'}`}
                    style={{marginRight: 4}}
                >{name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M12.9602 15.7131L18.9702 9.70309L17.5572 8.28809L12.9602 12.8881L8.36419 8.28809L6.9502 9.70209L12.9602 15.7131Z" fill={`${isSelected ? '#9A59FF' : '#fff'}`}/>
                </svg>
            </button>
        </li>
        // </button>
    )
}