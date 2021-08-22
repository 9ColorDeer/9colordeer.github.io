import { Link } from 'umi';

export default function Header() {
  return (
    <header className="text-gray-400 body-font absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white  mb-4 md:mb-0 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">九色鹿传媒</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/case" className="mr-5 text-gray-300 hover:text-indigo-500">
            案例库
          </Link>
          <Link className="mr-5 text-gray-300 hover:text-indigo-500">
            解决方案
          </Link>
          <Link className="mr-5 text-gray-300 hover:text-indigo-500">
            关于我们
          </Link>
          <Link className="mr-5 text-gray-300 hover:text-indigo-500">
            服务流程
          </Link>
        </nav>
      </div>
    </header>
  );
}
