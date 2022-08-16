import logo from "../assets/svgs/logo.svg";
import Button from "../components/Button";

const Header = (): JSX.Element => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-items">
        <h3>Become a vender</h3>
        <Button>login</Button>
      </div>
    </div>
  );
};
export default Header;
