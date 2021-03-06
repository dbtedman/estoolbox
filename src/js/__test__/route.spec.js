import {Router} from "../main";

describe("Router", () => {

  it("is defined", () => {

    expect(Router).not.toBeUndefined();
  });

  it("has when() method", () => {

    expect(Router.when).not.toBeUndefined();
  });

  it("has when() method that accepts a route string and function callback that gets called when a" +
    " matching hash is found after a future hash change", (done) => {

    Router.when("/about", () => {
      done();
    });

    // Hash updated after Router.when is called.
    window.location.hash = "/about";
  });

  it("has when() method that accepts a route string and function callback that gets called when a" +
    " matching hash is found in the current URL hash", (done) => {

    // Hash updated before Router.when is called.
    window.location.hash = "/support";

    // Have a short timeout to ensure that the hash is changed before the when method is called.
    window.setTimeout(() => {
      Router.when("/support", () => {
        done();
      });
    }, 10);
  });

  it("has when() method that matches named parameters", (done) => {

    Router.when("/about/:name/:age", (route) => {
      expect(route.variables.name).toBe("example");
      expect(route.variables.age).toBe("23");

      done();
    });

    // Hash updated after Router.when is called.
    window.location.hash = "/about/example/23";
  });
});
