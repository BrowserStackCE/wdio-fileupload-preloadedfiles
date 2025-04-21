const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
let data = new FormData();
let uploadAPI = 'https://api-cloud.browserstack.com/automate/upload-media';
let getFilesAPI = 'https://api-cloud.browserstack.com/automate/recent_media_files';
const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;

const auth = Buffer.from(`${username}:${accessKey}`).toString('base64');


module.exports = async function getMediaUrl() {
  data.append('file', fs.createReadStream('tests/data/sample_test_cases.csv'));
  

  let getFilesconfig = {
    method: 'get',    
    url: getFilesAPI,
    headers: {
      'Authorization': 'Basic ' + auth,      
    }
  };


  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: uploadAPI,
    headers: {
      'Authorization': 'Basic ' + auth,
      ...data.getHeaders()
    },
    data: data
  };


  let numberOfFiles;

  
  await axios.request(getFilesconfig)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      numberOfFiles = response.data.length;
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("Number of files", numberOfFiles);

  if (numberOfFiles >= 5) {
    console.log("A user account can upload only 5 files. Number of files exceeded. Please delete some of the old files using the delete api in this link https://www.browserstack.com/docs/automate/api-reference/selenium/media#list-uploaded-media-files")
    process.exit(1);
  }

  try {
    const response = await axios.request(config);
    console.log('Uploaded media URL:', response.data.media_url);
    return response.data.media_url;
  } catch (error) {
    console.error('Media upload failed:', error);
    throw error;
  }


};