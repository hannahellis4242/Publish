import { mkdir } from "fs";

export const init = (title: string) => {
  console.log("TODO");
  mkdir("./test/test", { recursive: true }, (err) => {
    if (err) {
      console.log("error : ", err.message);
    }
  });
};
