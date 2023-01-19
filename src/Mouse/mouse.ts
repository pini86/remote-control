//import robot from 'robotjs';
import { down, left, mouse, right, up } from "@nut-tree/nut-js";
import { Commands } from "../Constants/constants";

export const getMousePos = async () => {
  //const mouse = robot.getMousePos();
  const mousePoint = await mouse.getPosition();
  console.log("x=", mousePoint.x, " y=", mousePoint.y);
  return `${Commands.MOUSE_POSITION} ${mousePoint.x},${mousePoint.y}`;
};

const mouseMove = async (dx: number, dy: number) => {
  //const { x, y } = robot.getMousePos();
  //robot.moveMouse(x + dx, y + dy);
  const { x, y } = await mouse.getPosition();

  mouse.setPosition({ x: x + dx, y: y + dy });
};

export const moveLeft = async ([dx, ...rest]: number[]) => {
  //await mouseMove(-dx, 0);
  await mouse.move(left(dx));
  return Commands.LEFT;
};

export const moveRight = async ([dx, ...rest]: number[]) => {
  //await mouseMove(dx, 0);
  await mouse.move(right(dx));
  return Commands.RIGHT;
};

export const moveUp = async ([dy, ...rest]: number[]) => {
  //await mouseMove(0, -dy);
  await mouse.move(up(dy));
  return Commands.UP;
};

export const moveDown = async ([dy, ...rest]: number[]) => {
  //await mouseMove(0, dy);
  await mouse.move(down(dy));
  return Commands.DOWN;
};
