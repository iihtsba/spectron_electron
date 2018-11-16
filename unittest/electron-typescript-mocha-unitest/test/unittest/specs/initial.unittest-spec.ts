import { expect,assert } from "chai";
import {getElementLengthh} from "../../../dist/renderer";

describe("Unit Test test suite", () => {

  before(async () => {
  });

  after(() => {
  });

  it("Check length", async () => {

	const tststr = "somesamplestr";
    const actualLen = await getElementLengthh(tststr);

    expect(actualLen).to.equals(tststr.length);

  });
});
