/**
 * @jest-environment jsdom
 */
import {GameLogic} from "../logic/GameLogic.js";
let checkLogic = new GameLogic();


test('test', () => {
    expect(checkLogic.winLogic("✂", "📝")).toBe("Computer");
});