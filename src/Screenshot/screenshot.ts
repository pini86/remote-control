import Jimp from "jimp";
import { mouse, screen, Region } from "@nut-tree/nut-js";
import { Commands } from "../Constants/constants";

const screenshot = async () => {
  const { x, y } = await mouse.getPosition();
  const size = 200;
  const reg = {
    left: x - size / 2,
    top: y - size / 2,
    width: size,
    height: size,
  };
  screen.highlight(reg as Region);
  const rawImage = await screen.grabRegion(reg as Region);

  if (!rawImage.data) {
    throw new Error("screen capture failed");
  }
  const rgbImage = await rawImage.toRGB();
  const image = new Jimp(rgbImage);
  const encodedPicture = (await image.getBufferAsync(Jimp.MIME_PNG)).toString(
    "base64"
  );

  return Commands.PRNT_SCRN + " " + encodedPicture;
};

export { screenshot };
