import ESToolbox from "../src/main";

describe("ESToolbox", () => {

  it("is defined", () => {

    expect(ESToolbox).not.toBe(undefined);
  });

  it("can be instantiated", () => {

    expect(new ESToolbox().constructor.name).toBe("ESToolbox");
  });
});
