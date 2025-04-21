describe("Test-uploadMedia", () => {
  it("tests Test-uploadMedia", async () => {
    await browser.url("https://www.fileconvoy.com/")
    await expect(browser).toHaveUrl("https://www.fileconvoy.com/")

    await browser.$("#upfile_0").setValue('C:\\Users\\hello\\Documents\\documents\\sample_test_cases.csv')
    await browser.$("#readTermsOfUse").click();
    const isEnabled = await browser.$('#upload_button').isEnabled();
    if (isEnabled) {
      await browser.$('#upload_button').click();
    } else {
      console.log("Upload button not enabled");
    }

    const uploadMsg = await browser.$("#TopMessage");
    await expect(uploadMsg).toHaveText('Your file(s) have been successfully uploaded.');

  });
});
