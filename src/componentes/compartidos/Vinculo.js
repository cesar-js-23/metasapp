

function Vinculo( {children, texto, href} ) {
    return (
        <a href={href} className="flex items-center px-6 h-xl hover:bg-gray-200">
            {children}
            <span className="ml-2 text-sm font-semibold text-gray-900">{texto}</span>
        </a>
    );
}

export default Vinculo;