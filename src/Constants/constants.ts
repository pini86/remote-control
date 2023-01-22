import {
  getMousePos,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from "../Mouse/mouse";
import { drawCircle } from "../Circle/circle";
import { drawRectangle, drawSquare } from "../Square/square";
import { screenshot } from "../Screenshot/screenshot";

enum Commands {
  MOUSE_POSITION = "mouse_position",
  LEFT = "mouse_left",
  RIGHT = "mouse_right",
  UP = "mouse_up",
  DOWN = "mouse_down",
  DRAW_CIRCLE = "draw_circle",
  DRAW_SQUARE = "draw_square",
  DRAW_RECTANGLE = "draw_rectangle",
  PRNT_SCRN = "prnt_scrn",
}

const commandsMouse = {
  [Commands.MOUSE_POSITION]: getMousePos,
  [Commands.LEFT]: moveLeft,
  [Commands.RIGHT]: moveRight,
  [Commands.UP]: moveUp,
  [Commands.DOWN]: moveDown,
  [Commands.DRAW_CIRCLE]: drawCircle,
  [Commands.DRAW_SQUARE]: drawSquare,
  [Commands.DRAW_RECTANGLE]: drawRectangle,
  [Commands.PRNT_SCRN]: screenshot,
};

export { Commands, commandsMouse };
