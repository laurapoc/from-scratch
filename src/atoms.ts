import { atom } from "recoil";

export const repos = atom({
    key: "repos",
    default: [],
  });
  
  export const view = atom({
    key: "view",
    default: "2018-12-01T09:07:21.20-07:00",
  });