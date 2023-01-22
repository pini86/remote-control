import { down, left, mouse, right, up } from "@nut-tree/nut-js";
import { Commands } from "../Constants/constants";

const getMousePos = async () => {
  const mousePoint = await mouse.getPosition();
  return `${Commands.MOUSE_POSITION} ${mousePoint.x},${mousePoint.y}`;
};

const mouseMove = async (dx: number, dy: number) => {
  const { x, y } = await mouse.getPosition();
  mouse.setPosition({ x: x + dx, y: y + dy });
};

const moveLeft = async ([dx, ...rest]: number[]) => {
  await mouse.move(left(dx));
  return Commands.LEFT;
};

const moveRight = async ([dx, ...rest]: number[]) => {
  await mouse.move(right(dx));
  return Commands.RIGHT;
};

const moveUp = async ([dy, ...rest]: number[]) => {
  await mouse.move(up(dy));
  return Commands.UP;
};

const moveDown = async ([dy, ...rest]: number[]) => {
  await mouse.move(down(dy));
  return Commands.DOWN;
};

export { getMousePos, mouseMove, moveLeft, moveRight, moveUp, moveDown };
