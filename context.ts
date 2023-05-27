import React, { createContext } from "react";
import { WORKS_ITEMS_TYPE, PROFILE_TYPE, EXPERIENCE_TYPE } from "./types";

type DataContextType = {
    works: WORKS_ITEMS_TYPE;
    profile: PROFILE_TYPE;
    experience: EXPERIENCE_TYPE;
};

export const DataContext = createContext<DataContextType>({} as DataContextType);