import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

function Header() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-1/4 py-6">
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Header;
