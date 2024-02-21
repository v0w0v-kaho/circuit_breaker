import { FC, MouseEventHandler } from "react";

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    buttonLabel: string;
};

const Button: FC<ButtonProps> = ({ onClick, buttonLabel }) => {

    return (
        <>
            <button
                className="group rounded-lg bg-Primary10 border-2 border-transparent hover:bg-Primary20 active:bg-Primary30 focus-visible:border-black disabled:bg-Primary50"
                onClick={onClick}
            >
                <div className="rounded-lg px-18 py-4 border border-transparent group-focus-visible:border-white">
                    <span className="text-Button text-white">{buttonLabel}</span>
                </div>
            </button>
        </>
    );
};

export default Button;