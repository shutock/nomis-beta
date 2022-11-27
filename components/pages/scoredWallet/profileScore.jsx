import { useSelector } from "react-redux";

export default function ProfileScore({ score }) {
  const percent = score > 0 ? Math.round(((score - 350) / 450) * 100) / 100 : 0;
  const style = {
    background: `hsl(${120 * percent}, 80%, 70%)`,
    color: `hsl(${120 * percent}, 80%, 30%)`,
  };

  return (
    <div className="row profileScore" style={style}>
      {score}
    </div>
  );
}
