import React from "react";
import Chip from "@mui/material/Chip";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { IconColorEnum } from "../shared-resources/enums/utitlity.enums";

interface IUiHeaderChip {
  children?: React.ReactElement | string;
  clasName?: string;
  classRoot?: string;
  showSideBullets?: boolean;
  bulletsColor?: keyof typeof IconColorEnum;
}

const UiHeaderChip: React.FC<IUiHeaderChip> = ({
  children,
  showSideBullets = true,
  classRoot,
  clasName,
  bulletsColor = "primary",
}) => {
  const getSideBullet = () => {
    return (
      <div className="flex gap-2 items-center">
        <FiberManualRecordIcon color={bulletsColor} fontSize="small" />
        {children}
        <FiberManualRecordIcon color={bulletsColor} fontSize="small" />
      </div>
    );
  };
  return (
    <div
      className={`ui-header-chip p-[.5rem] bg-white w-fit rounded-full drop-shadow-md drop-shadow-xl ${clasName}`}>
      {showSideBullets ? getSideBullet() : children}
    </div>
  );
};

export default UiHeaderChip;
