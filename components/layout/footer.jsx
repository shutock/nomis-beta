import Logo from "../logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrapper">
        <div className="col footer">
          <Logo />
          <div>Made with love by Nomis Team.</div>
          <div>
            {year} / {"(c)"} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
