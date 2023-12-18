import { useState } from "react";
import AWS from "aws-sdk";

const useUploadFile = () => {
  const [progress, setProgress] = useState(0);

  const S3_BUCKET = "apk-pilot";
  const REGION = "api-south-1";

  AWS.config.update({
    accessKeyId: "AKIA253RMDAAZY56Y7XU",
    secretAccessKey: "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",
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: "tefst",
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  return [uploadFile,progress]
};

export default useUploadFile;
