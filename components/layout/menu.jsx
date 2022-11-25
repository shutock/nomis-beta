import Link from "next/link";
import { mainMenu } from "../../utilities/menu";
import Icon from "../icon";

import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  return (
    <div className="col menu">
      <div className="col section back">
        <div className="row item" onClick={() => router.back()}>
          <Icon icon="chevron_left" />
          <span>Back</span>
        </div>
      </div>
      <nav className="col">
        <div className="col section navigation">
          {mainMenu.map((e) => {
            if (e.section === "navigation") {
              if (!e.onClick)
                return (
                  <Link key={e.item} className="row item" href={e.link}>
                    <Icon icon={e.icon} />
                    <span>{e.item}</span>
                  </Link>
                );
              else
                return (
                  <div key={e.item} className="row item" onClick={e.onClick}>
                    <Icon icon={e.icon} />
                    <span>{e.item}</span>
                  </div>
                );
            }
          })}
        </div>
        <div className="col section social">
          {mainMenu.map((e) => {
            if (e.section === "social") {
              if (!e.onClick)
                return (
                  <Link key={e.item} className="row item" href={e.link}>
                    <Icon icon={e.icon} />
                    <span>{e.item}</span>
                  </Link>
                );
              else
                return (
                  <div key={e.item} className="row item" onClick={e.onClick}>
                    <Icon icon={e.icon} />
                    <span>{e.item}</span>
                  </div>
                );
            }
          })}
        </div>
        <div className="col section docs">
          {mainMenu.map((e) => {
            if (e.section === "docs") {
              if (!e.onClick)
                return (
                  <Link key={e.item} className="row item" href={e.link}>
                    <Icon icon={e.icon} />
                    <span>{e.item}</span>
                  </Link>
                );
              else
                return (
                  <div key={e.item} className="row item" onClick={e.onClick}>
                    <Icon icon={e.icon} />
                    <span>{e.item}</span>
                  </div>
                );
            }
          })}
        </div>
      </nav>
    </div>
  );
}
