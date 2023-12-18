import AWS from 'aws-sdk';


const uploadFile = async (file) => {
    const S3_BUCKET = "apk-pilot";
    const REGION = "api-south-1";

    AWS.config.update({
      accessKeyId: "",
      secretAccessKey: "",
    });

    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      alert("File uploaded successfully.");
      console.log("data",data)
    });
  };

  export {uploadFile}
