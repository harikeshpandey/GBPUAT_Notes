import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => (
  <nav className="text-sm mb-4">
    <ol className="list-none p-0 inline-flex">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-500">/</span>}
          {item.link ? (
            <Link to={item.link} className="text-blue-500 hover:text-blue-700">{item.label}</Link>
          ) : (
            <span className="text-gray-700">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;