import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">The Daily Star</span>
      </div>
      <img
        className="headerImg"
        src="https://www.thelocal.se/wp-content/uploads/2017/11/4f67fba8b470cc126334d84d44a4d35533cd7d633a2c5295f9531d93512635c8.jpg"
        alt=""
      />
    </div>
  );
}