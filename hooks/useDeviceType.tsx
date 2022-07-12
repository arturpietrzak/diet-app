import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

const useDeviceType = (): string => {
  const { width } = useWindowSize();

  if (width < 576) {
    return "phone";
  } else if (width < 768) {
    return "tablet";
  }

  return "desktop";
};

export default useDeviceType;
