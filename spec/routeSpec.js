import router from "../src/router";

describe("ESToolbox", () => {

  it("is defined", () => {

    expect(router).not.toBe(undefined);
  });

  it("is instantiated", () => {

    expect(router.constructor.name).toBe("Router");
  });

  it("accepts a simple /about route and callback", () => {
    let foundError = false;

    try {
      router.when("/about", (request) => {
      });

    } catch (error) {
      foundError = true;
    }

    expect(foundError).toBe(false);
  });

  it("has a start method", () => {
    expect(router.when).not.toBe(undefined);
  });
});
