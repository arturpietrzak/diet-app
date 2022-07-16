import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

const useDeviceType = (): string => {
  const { width } = useWindowSize();

  if (width === 0) {
    return "undefined";
  } else if (width < 576) {
    return "phone";
  } else if (width < 1024) {
    return "tablet";
  }

  return "desktop";
};

export default useDeviceType;
