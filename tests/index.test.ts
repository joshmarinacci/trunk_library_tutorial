import { describe, expect, it } from "vitest";
import { square } from "../src/index";

describe("main functions", () => {
  it("should square", () => {
    const answer = square(5);
    expect(answer).toEqual(25);
  });
});
