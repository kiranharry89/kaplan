import './Header.css';
import atom from '../../assets/atom.png';

function Header() {
  return (
    <div className="header">
        <img src={atom} alt="atom" />
        atom
    </div>
  );
}

export default Header;
