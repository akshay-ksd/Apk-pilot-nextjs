import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import MainHeader from "./molecules/mainHeader/MainHeader";
import NewVersionForm from "./organizer/newVersionForm/NewVersionForm";
import VersionList from "./template/versionList/VersionList";
import Build from "./template/build/Build";
const Project: FC<any> = ({ closeModel,selectedP }, ref) => {
  const [newVersionModel, setNewVersionModel] = useState(false);
  const [version, setVersion] = useState("v-1.0.0");
  const [pData, setData] = useState();


  const headerRef = useRef();
  const versionListRef = useRef();
  const buildRef = useRef()

  useImperativeHandle(ref, () => ({
    loadData: (data) => {
      setData(data);
      setVersion(
        data?.versions?.length
          ? data?.versions[data?.versions.length - 1].version_number
          : "v-1.0.0"
      );
      versionListRef.current.loadData(data?.versions);
      headerRef.current.loadData(data);
    },
  }));

  const newVersion = () => {
    setNewVersionModel(true);
  };

  const closeVersionModel = (version) => {
    setNewVersionModel(false);
    if (version) {
      versionListRef.current.addNewVersion(version?.updatedProject?.versions);
    }
  };

  const selectVersion =(data:versionType)=>{

    buildRef.current.selectVersion(data)
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 w-full bg-black p-5 ">
      <div className="bg-white w-full h-full rounded-md">
        <MainHeader
          closeModel={() => closeModel()}
          ref={headerRef}
          newVersion={newVersion}
        />
        <div className="w-full h-[850px] flex">
          <VersionList ref={versionListRef} selectVersion={selectVersion}/>
          <Build ref={buildRef} selectedP={selectedP}/>
        </div>
      </div>
      {newVersionModel && (
        <NewVersionForm
          closeModel={closeVersionModel}
          lastVersion={version}
          pData={pData}
        />
      )}
    </div>
  );
};

export default forwardRef(Project);
