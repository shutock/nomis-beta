export default function StatsTable({ wallet }) {
  const descriptions = wallet.stats.statsDescriptions;

  const stats = [];
  let i = 0;

  for (var key in wallet.stats) {
    if (
      key != "noData" &&
      key != "turnoverIntervals" &&
      key != "statsDescriptions"
    ) {
      stats[i] = {
        title: key,
        value: wallet.stats[key],
      };
      for (var key1 in descriptions) {
        if (key.toLowerCase() === key1.toLowerCase()) {
          stats[i].label = descriptions[key1].label;
          stats[i].description = descriptions[key1].description;
          stats[i].units = descriptions[key1].units;
        }
      }
      i++;
    }
  }
  return (
    <div className="col statsTable">
      <div className="row header">
        <div className="label">Label</div>
        <div className="value">Value</div>
        <div className="description">Description</div>
      </div>
      <div className="col body">
        {stats.map((stat, id) => {
          return (
            <div className="row stat" key={stat.label}>
              <div className="label">{stat.label}</div>
              <div className="value">{Math.round(stat.value * 100) / 100}</div>
              <div className="col description">
                {stat.description}
                <div className="span units">
                  {stat.units.charAt(0).toUpperCase() + stat.units.slice(1)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
