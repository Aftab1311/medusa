const BigButton = ({ content }: { content: string }) => {
        return (
            <button
                className="font-[700] w-[100%] text-Poppins text-[15px] bg-[#FF7119] text-white px-4 py-2 rounded-r-2xl rounded-bl-2xl max-sm:text-[12px]"
            >
                {content}
            </button>
        );
    };
    export default BigButton;
  