/* eslint-disable @typescript-eslint/ban-ts-comment */
import getMessages from "../messages";
import { ENGLISH, FRANCAIS } from "../redux/language-selector/types";

describe("getMessages", () => {
  describe("when get the messages using ENGLISH id", () => {
    it("should return the english messages", () => {
      const messages = getMessages(ENGLISH);

      expect(messages).not.toBeNull();
      expect(messages).toHaveProperty("signUpNow");
      //@ts-ignore
      expect(messages.signUpNow).toBe("Sign Up Now");
    });
  });

  describe("when get the messages using FRANCAIS id", () => {
    it("should return the français messages", () => {
      const messages = getMessages(FRANCAIS);

      expect(messages).not.toBeNull();
      expect(messages).toHaveProperty("signUpNow");
      //@ts-ignore
      expect(messages.signUpNow).toBe("Inscrivez-vous");
    });
  });

  describe("when get the messages using a invalid id", () => {
    it("should return the english messages", () => {
      const messages = getMessages("INVALID_ID");

      expect(messages).not.toBeNull();
      expect(messages).toHaveProperty("signUpNow");
      //@ts-ignore
      expect(messages.signUpNow).toBe("Sign Up Now");
    });
  });
});
