import { Link } from 'react-router-dom';

function Vinculo( {children, texto, href} ) {
    return (
        <Link to={href} className="flex items-center px-6 h-xl hover:bg-gray-200"> 
            {children}
            <span className="ml-2 text-sm font-semibold text-gray-900">{texto}</span>
        </Link>
    );
}

export default Vinculo;