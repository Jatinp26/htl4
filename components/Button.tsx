"use client";

interface ButtonProps {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    link?: string;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    link,
    className,
}) => {
    const buttonStyles = `
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        hover:opacity-80
        transition
        w-fit
        ${outline ? 'bg-none' : 'bg-gradient-2'}
        ${outline ? 'border-violet-500' : 'border-none'}
        ${outline ? 'text-white' : 'text-black'}
        ${small ? 'py-2' : 'py-2'}
        ${small ? 'px-4' : 'px-5'}
        ${small ? 'text-sm' : 'text-base'}
        ${small ? 'font-semibold' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
        ${className} 
    `;

    if (link) {
        return (
            <a href={link} className={buttonStyles} target="_blank" rel="noopener noreferrer">
                {label}
            </a>
        );
    }

    return (
        <button disabled={disabled} className={buttonStyles}>
            {label}
        </button>
    );
}
