import logo from '../assets/logo.svg';
import { navLinks } from '../data';
import NavItem from './NavItem';
function Header() {
  return (
    <header className="flex items-center gap-10 py-6">
      <img src={logo} alt="Shortify Logo" className="h-6" />
      <nav>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <NavItem key={link.id} {...link} />
          ))}
        </ul>
      </nav>
      <div className="hidden lg:flex gap-6 items-center ml-auto">
        <a className="nav-item" href="/login">
          Login
        </a>
        <button className="btn btn-sm btn-primary rounded-full">Sign Up</button>
      </div>
      <button className="flex flex-col gap-1 lg:hidden ml-auto">
        <span className="h-1 w-6 rounded bg-secondary-300"></span>
        <span className="h-1 w-6 rounded bg-secondary-300"></span>
        <span className="h-1 w-6 rounded bg-secondary-300"></span>
      </button>
    </header>
  );
}

export default Header;
