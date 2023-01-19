import {
  getMousePos,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from "../Mouse/mouse";

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
};

export { Commands, commandsMouse };
