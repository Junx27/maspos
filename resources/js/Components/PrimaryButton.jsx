export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-[#1963D2] px-8 py-3 text-sm font-bold capitalize tracking-widest text-white transition duration-150 ease-in-out hover:bg-[#5297fe] focus:bg-[#1963D2] focus:outline-none focus:ring-2 focus:ring-[#1963D2] focus:ring-offset-2 active:bg-[#1963D2] ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
