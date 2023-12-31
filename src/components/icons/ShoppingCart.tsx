function ShoppingCart({ className, onClick }: { className: string, onClick: any }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 19.25 19.25"
            version="1.1"
            viewBox="0 0 19.25 19.25"
            xmlSpace="preserve"
            className={className}
            onClick={onClick}
        >
            <g fill="#030104">
                <path d="M19.006 2.97a1.003 1.003 0 00-.756-.345H4.431l-.195-1.164A1 1 0 003.25.625H1a1 1 0 100 2h1.403l1.86 11.164c.008.045.031.082.045.124.016.053.029.103.054.151a.982.982 0 00.12.179c.031.039.059.078.095.112a.96.96 0 00.193.13c.038.021.071.049.112.065a.97.97 0 00.367.075H16.25a1 1 0 100-2H6.097l-.166-1H17.25a1 1 0 00.99-.858l1-7a1.002 1.002 0 00-.234-.797zm-1.909 1.655l-.285 2H13.25v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3a.481.481 0 00-.148.03l-.338-2.03H8.25zm-2.986 3H8.25v2H5.597l-.333-2zm7.986 2v-2h3.418l-.285 2H13.25z"></path>
                <circle cx="6.75" cy="17.125" r="1.5"></circle>
                <circle cx="15.75" cy="17.125" r="1.5"></circle>
            </g>
        </svg>
    );
}

export default ShoppingCart;