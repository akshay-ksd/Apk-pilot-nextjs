import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ApkButton from "../../atom/apkButton/ApkButton";
import useCreateNewBuild from "../../hook/useCreateNewBuild";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUpdateBuild from "../../hook/useUpdateBuild";
import Loader from "../../../../components/molecules/loader/Loader";

const NewBuildInput: FC<any> = (
  { selectedVersion, data, addBuildData, updateBuildData, clearSelection },
  ref
) => {
  let initialBuildData = {
    project_id: data?._id,
    version_id: selectedVersion?.version_number,
    apk_demo: "",
    apk_live: "",
    abb_live: "",
    demo_url: "",
    live_url: "",
    comments: "",
  };

  const [buildData, setBuildData] = useState(initialBuildData);
  const [create, loading] = useCreateNewBuild();
  const [loadApk, setLoadApk] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);
  const [createLoader, setCreateLoader] = useState(false);

  const [update, load] = useUpdateBuild();

  const apkButtonRef = useRef();
  const apkButtonRef1 = useRef();
  const apkButtonRef2 = useRef();

  const inputRef = useRef();
  useEffect(() => {
    initialBuildData = {
      project_id: data?._id,
      version_id: selectedVersion?.version_number,
      apk_demo: "",
      apk_live: "",
      abb_live: "",
      demo_url: "",
      live_url: "",
      comments: "",
    };
    setBuildData(initialBuildData);
    if (isUpdate) {
      setIsUpdate(false);
      setLoadApk(false);
      setTimeout(() => {
        setLoadApk(true);
      }, 50);
    }
  }, [selectedVersion]);

  useImperativeHandle(ref, () => ({
    updateData: (data) => {
      let initialBuildData = {
        _id: data?._id,
        project_id: data?.project_id,
        version_id: data?.version_id,
        apk_demo: data?.apk_demo,
        apk_live: data?.apk_live,
        abb_live: data?.abb_live,
        demo_url: data?.demo_url,
        live_url: data?.live_url,
        comments: data?.comments,
      };
      setBuildData(initialBuildData);
      setIsUpdate(true);
    },
  }));
  const filleUrl = (key, url) => {
    setBuildData((prevData) => ({
      ...prevData,
      [key]: url,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuildData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createBuild = async () => {
    if (selectedVersion?.version_number) {
      setCreateLoader(true);
      const data = await create(buildData);
      if (data?.data) {
        // Clear the input fields by resetting the state variable
        setBuildData(initialBuildData);
        toast.success(`Successfully ${data?.data?.type} build`);
        addBuildData(data?.data?.data);
        setLoadApk(false);
        setTimeout(() => {
          setLoadApk(true);
          setCreateLoader(false);
          clearSelection();
        }, 50);
      }
    }else{
      toast.error(`Version not selected`);
    }
  };

  const cancelUpdate = () => {
    setBuildData(initialBuildData);
    setTimeout(() => {
      setIsUpdate(false);
      clearSelection();
    }, 50);
  };

  const updateData = async () => {
    setUpdateLoader(true);
    apkButtonRef.current.deleteFile();
    apkButtonRef1.current.deleteFile();
    apkButtonRef2.current.deleteFile();

    const result = await update(buildData);

    if (result?.data) {
      toast.success(`Successfully Build Updated `);
      setIsUpdate(false);
      setLoadApk(false);
      setBuildData(initialBuildData);
      updateBuildData(result?.data);
      setTimeout(() => {
        setLoadApk(true);
        setUpdateLoader(false);
        clearSelection();
      }, 10);
    }
  };

  return (
    <div
      className={`w-full  p-2 ${isUpdate ? "shadow-lg" : null} ${
        isUpdate ? "bg-secondaryBackground" : "bg-white"
      }`}
    >
      <div className="w-full flex items-center justify-center p-2">
        <ToastContainer />
        <p className="text-[14px] font-bold text-primary font-primary">
          {isUpdate
            ? `Update Build`
            : `New Build To ${selectedVersion?.version_number || ""}`}
        </p>
      </div>
      <p className="text-[10px] font-medium text-grayText m-1 font-primary">
        APK and ABB / URL
      </p>
      <div className="w-full flex items-center justify-between p-2 bg-white rounded-md">
        {loadApk && (
          <ApkButton
            text={"APK Demo"}
            filleUrl={filleUrl}
            keyP={"apk_demo"}
            value={buildData?.apk_demo}
            isUpdate={isUpdate}
            ref={apkButtonRef}
          />
        )}
        {loadApk && (
          <ApkButton
            text={"APK Live"}
            filleUrl={filleUrl}
            keyP={"apk_live"}
            value={buildData?.apk_live}
            isUpdate={isUpdate}
            ref={apkButtonRef1}
          />
        )}
        {loadApk && (
          <ApkButton
            text={"ABB Live"}
            filleUrl={filleUrl}
            keyP={"abb_live"}
            value={buildData?.abb_live}
            isUpdate={isUpdate}
            ref={apkButtonRef2}
          />
        )}

        <input
          placeholder="Enter Demo url"
          className="w-1/3 h-[50px] bg-lightGray rounded-md shadow-sm p-2 text-[10px] font-primary"
          onChange={handleChange}
          type="text"
          id="demo_url"
          name="demo_url"
          value={buildData.demo_url} // Bind the value to the state variable
          ref={inputRef}
        />
        <input
          placeholder="Enter Live url"
          className="w-1/3 h-[50px] bg-lightGray rounded-md shadow-sm p-2 text-[10px] font-primary"
          type="text"
          id="live_url"
          name="live_url"
          onChange={handleChange}
          value={buildData.live_url} // Bind the value to the state variable
          ref={inputRef}
        />
      </div>
      <div className="w-full p-2 flex items-center justify-between">
        <textarea
          placeholder="Enter comments here"
          className="text-[12px] w-2/3 bg-lightGray p-2 rounded-md sha max-h-20 font-primary"
          id="comments"
          name="comments"
          onChange={handleChange}
          value={buildData.comments} // Bind the value to the state variable
          ref={inputRef}
        />
        {!isUpdate && (
          <button
            className="p-2 bg-green rounded-md shadow-md flex items-center justify-center px-5"
            onClick={createBuild}
            disabled={createLoader}
          >
            {createLoader ? (
              <Loader width={6} height={6} color="white" />
            ) : (
              <p className="text-white text-[14px] font-bold font-primary">
                Create
              </p>
            )}
          </button>
        )}
        {isUpdate && (
          <button
            className="p-2 bg-white rounded-md shadow-md flex items-center justify-center px-5"
            onClick={cancelUpdate}
          >
            <p className="text-red text-[14px] font-bold font-primary">
              Cancel
            </p>
          </button>
        )}
        {isUpdate && (
          <button
            className="p-2 bg-tertiary rounded-md shadow-md flex items-center justify-center px-5"
            onClick={updateData}
            disabled={updateLoader}
          >
            {updateLoader ? (
              <Loader width={6} height={6} color="white" />
            ) : (
              <p className="text-white text-[14px] font-bold font-primary">
                Update
              </p>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default forwardRef(NewBuildInput);
