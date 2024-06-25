import React from "react";

interface HeaderComponentProps {
    string: String;
}

const TextBox: React.FC<HeaderComponentProps> = ({ string }) => {
    return (
    <div className="max-w-5vh w-full items-center justify-between font-mono text-sm lg:flex p-0 pb-5 m-0">
        <p className="fixed w-full mx-auto flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mb-4">
            {string}&nbsp;
        </p>
    </div>
    )
}

export default TextBox;