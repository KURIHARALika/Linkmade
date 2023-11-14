import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です。</h1>
      {/* 同じページが出るけど、渡してるパラメーターは違う */}
      <Link to="/page2/999">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
