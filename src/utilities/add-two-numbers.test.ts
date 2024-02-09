import { addTwoNumbers } from "./add-two-number";

import { expect, test } from "vitest";

test("addTwoNumbers", () => {
  expect(addTwoNumbers(1, 2)).toBe(3);
});
