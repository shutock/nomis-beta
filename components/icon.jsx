export default function Icon({
  icon = "dashboard",
  size = 24,
  active = false,
}) {
  const style = {
    fontSize: size / 16 + "rem",
    width: size / 16 + "rem",
    height: size / 16 + "rem",
  };

  return (
    <div className={`icon${active ? " filled" : ""}`} style={style}>
      <div className="outline">{icon}</div>
      <div className="fill">{icon}</div>
    </div>
  );
}
