import { mouse, Button, down, left, right, up } from "@nut-tree/nut-js";
import { Commands } from "../Constants/constants";

const drawRectangle = async ([sizeX, sizeY, ...rest]: number[]) => {
  await mouse.pressButton(Button.LEFT);

  await mouse.move(right(sizeX));
  await mouse.move(up(sizeY));
  await mouse.move(left(sizeX));
  await mouse.move(down(sizeY));

  await mouse.releaseButton(Button.LEFT);

  return Commands.DRAW_RECTANGLE;
};

const drawSquare = async ([size, ...rest]: number[]) => {
  await drawRectangle([size, size]);
  return Commands.DRAW_SQUARE;
};

export { drawRectangle, drawSquare };
