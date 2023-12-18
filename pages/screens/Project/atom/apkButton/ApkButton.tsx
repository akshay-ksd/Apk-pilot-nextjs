import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import AWS from "aws-sdk";
import { IoIosAdd, IoIosDocument, IoIosTrash } from "react-icons/io";
import Loader from "../../../../components/molecules/loader/Loader";
const usedIds = new Set(); // To keep track of used IDs

function generateUnique6DigitId() {
  let randomId;

  do {
    randomId = Math.floor(Math.random() * 900000) + 100000; // Generates a random 6-digit number
  } while (usedIds.has(randomId)); // Keep generating until a unique ID is found

  usedIds.add(randomId); // Add the generated ID to the set of used IDs
  return randomId;
}
interface buttonSchema {
  text: String;
  filleUrl: (text: String, url: String) => void;
  keyP: String;
  value: string;
  isUpdate: Boolean;
}
const ApkButton: FC<buttonSchema> = (
  { text, filleUrl, keyP, value, isUpdate },
  ref
) => {
  const hiddenFileInput = useRef(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [loader, setLoader] = useState(false);

  const S3_BUCKET = "apk-pilot";
  const REGION = "api-south-1";
  const fileName = useRef("");
  const deleteFileName = useRef([]);

  AWS.config.update({
    accessKeyId: "AKIA253RMDAAZY56Y7XU",
    secretAccessKey: "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",
  });

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  useEffect(() => {
    if (isUpdate) {
      setFileUrl(value);
      if (value && value?.length) {
        // Use regular expression to match the last 6 digits
        const match = value.match(/\d{6}$/);
        fileName.current = match ? match[0] : null;
      }
    }
  }, [value]);

  useImperativeHandle(ref, () => ({
    deleteFile: () => {
      if (deleteFileName.current.length) {
        deleteFileName.current.forEach((x) => {
          setTimeout(() => {
            deleteDataInS3(x);
          }, 50);
        });
      }
    },
  }));

  const handleChange = (event) => {
    if (event.target.files) {
      const i = event.target.files[0];
      uploadFile(i);
      hiddenFileInput.current.value = null;
    }
  };

  const uploadFile = async (file) => {
    setFileUrl(null);
    fileName.current = generateUnique6DigitId();
    setUploading(true);

    const params = {
      Bucket: S3_BUCKET,
      Key: fileName.current.toString(),
      Body: file,
    };

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        let p = parseInt((evt.loaded * 100) / evt.total);
        setProgress(p);
      })
      .promise();

    await upload.then((data) => {
      setUploading(false);
      const url = `https://apk-pilot.s3.ap-south-1.amazonaws.com/${fileName.current}`;
      setFileUrl(url);
      filleUrl(keyP, url);
    });
  };

  const handleClick = (event) => {
    if (fileUrl) {
      removeApk();
      return;
    }
    hiddenFileInput.current.click();
  };

  const removeApk = () => {
    if (isUpdate) {
      setFileUrl(null);
      setProgress(0);
      deleteFileName.current.push(fileName.current);
      filleUrl(keyP, "");
    } else {
      deleteDataInS3(fileName.current);
    }
  };

  const deleteDataInS3 = async (file) => {
    var params = {
      Bucket: S3_BUCKET,
      Key: file.toString(),
    };
    s3.deleteObject(params, function (err, data) {
      setLoader(false);
      if (err) console.log(err, err.stack); // an error occurred
      else {
        setFileUrl(null);
        setProgress(0);
      } // successful response
    });
  };

  return (
    <button
      className="w-[70px] h-[70px] rounded-md flex items-center justify-center bg-lightGray shadow-sm flex-col"
      onClick={handleClick}
    >
      {!uploading && !fileUrl && <IoIosAdd size={25} color="#228B22" />}
      {fileUrl && <IoIosDocument size={25} color="#228B22" />}
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        accept="file/*"
        style={{ display: "none" }}
      />

      <p className="text-[8px] text-primaryText mt-1 font-primary">{text}</p>
      {uploading && (
        <>
          <ProgressBar
            maxCompleted={100}
            completed={progress}
            height="3px"
            width="40px"
            customLabel="APK"
            bgColor="#228B22"
          />
          <p className="text-[8px] text-primaryText mt-1 font-primary">
            {progress}%
          </p>
        </>
      )}
      {fileUrl && (
        <div className=" bg-white items-center justify-center rounded-full p-1 shadow-md">
          {loader ? (
            <Loader height={8} width={8} color="71357B" />
          ) : (
            <IoIosTrash size={13} color="#e11d48" />
          )}
        </div>
      )}
    </button>
  );
};

export default forwardRef(ApkButton);
