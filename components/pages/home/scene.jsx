import Spline from "@splinetool/react-spline";

const atomScene =
  "https://prod.spline.design/1s7zQQpgAI6Jxzls/scene.splinecode";
const objectsScene =
  "https://prod.spline.design/A-CAELRxlfHFcrWL/scene.splinecode";

export default function Scene({ url = objectsScene }) {
  return (
    <div className="scene">
      <Spline scene={url} />
    </div>
  );
}
