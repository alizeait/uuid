import { v4 } from "../src/node/index.node";
const isUUID = require("is-uuid");
describe("uuidv4", () => {
  test("should create a uuid", () => {
    expect(v4()).toBeTruthy();
    expect(typeof v4()).toBe("string");
  });
  test("should create a RFC valid version 4 uuid", () => {
    expect(isUUID.v4(v4())).toBeFalsy();
  });
  test("should create multiple unique v4 uuids", () => {
    const uuids = [...Array(1000)].map(() => v4());
    expect(new Set(uuids).size).toBe(uuids.length);
    uuids.forEach((uuid) => expect(isUUID.v4(uuid)).toBeTruthy());
  });
});
