describe("Simple Test for multiple remote", () => {
    it("should try valid example for all browsers", async () => {
      // wdio testrunner example
      await browser.url("https://www.whatismybrowser.com");
      const result = await $(".string-major").getText();
      console.log("RESULT 0: ", result[0]);
      console.log("RESULT 1: ", result[1]);
      //
      const myChromeBrowser = await multiremotebrowser.getInstance("myChromeBrowser");
      await myChromeBrowser.$("//a[contains(text(),'How to update Chrome')]").click();
      await myChromeBrowser.pause(2000);
      await browser.pause(2000);
    });
  });
  