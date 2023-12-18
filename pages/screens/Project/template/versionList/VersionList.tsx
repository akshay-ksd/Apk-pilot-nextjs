import React, { FC, forwardRef, useImperativeHandle, useState } from "react";
import VersionSingleList from "../../molecules/versionSingleList/VersionSingleList";
const VersionList: FC<any> = (props, ref) => {
  const [versions, setVersions] = useState<versionType[] | undefined[]>([]);
  const [selectedIndex,setSelectedIndex] = useState(0)
  useImperativeHandle(ref, () => ({
    loadData: (data: versionType[]) => {
      setVersions(data.reverse());
      props.selectVersion(data[0])
    },
    addNewVersion: (data: versionType[]) => {
      setVersions(data.reverse());
    },
  }));

  const selectVersion =(data:versionType,index:number)=>{
    props.selectVersion(data)
    setSelectedIndex(index)
  }
  return (
    <div className="w-3/6 h-full p-5 overflow-hidden overflow-y-scroll ">
      {versions &&
        versions.map((data: versionType,index:number) => <VersionSingleList data={data} selectVersion={selectVersion} selectedIndex={selectedIndex} index={index}/>)}
    </div>
  );
};

export default forwardRef(VersionList);
