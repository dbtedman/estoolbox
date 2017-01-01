import {Carousel} from "../src/js/main";

describe("Carousel", () => {

  it("is defined", () => {

    expect(Carousel).not.toBe(undefined);
  });

  it("can be instantiated", () => {

    expect(new Carousel().constructor.name).toBe("Carousel");
  });

  it("has run() method", () => {

    expect(Carousel.run).not.toBeUndefined();
  });
});
