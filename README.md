# webdriverio-browserstack
[WebdriverIO](http://webdriver.io/) FileUpload with BrowserStack

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src = "https://webdriver.io/img/webdriverio.png" height = "100">

## Description
The repo is to test the file upload scenario. The repo dynamically uploads the file to BrowserStack from a local file path. The path can be updated in line 14 of conf/upload-media.js file. The repo uses onPrepare hook method to run the fileUpload function before the test starts. To emulate the repo, users can copy the onPrepare hook part from the conf/upload.conf.js and the actual upload function in conf/upload-media.js

## Setup
* Clone the repo
* Install dependencies `npm install`
* You can setup environment variables for all sample repos

## Running your tests
- To run tests, run `npm run test`



 
## Notes
* You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)
* You can export the environment variables for the Username and Access Key of your BrowserStack account
  
  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
## Additional Resources
* [Documentation for FielUpload](https://www.browserstack.com/docs/automate/selenium/test-file-upload#Test_with_your_files)
