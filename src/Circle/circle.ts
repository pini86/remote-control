import { mouse, Button, straightTo } from "@nut-tree/nut-js";
import { Commands } from "../Constants/constants";

const drawCircle = async ([radius, ...rest]: number[]) => {
  const { x, y } = await mouse.getPosition();
  mouse.setPosition({ x: x + radius, y });

  //await mouse.pressButton(Button.LEFT);

  for (let degree = 0; degree <= 360; degree += 5) {
    const dx = Math.cos((degree * Math.PI) / 180) * radius;
    const dy = Math.sin((degree * Math.PI) / 180) * radius;

    await mouse.move(straightTo({ x: x + dx, y: y - dy }));
    //await mouse.move([{ x: x + dx, y: y - dy }]);
    //await mouse.move(straightTo({ x, y }));
    await mouse.drag(straightTo({ x: x + dx, y: y - dy }));
  }

  //await mouse.releaseButton(Button.LEFT);
  //await mouse.move([{ x, y }]);
  
  return Commands.DRAW_CIRCLE;
};

export { drawCircle };
