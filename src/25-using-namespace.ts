// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

import express from "./24-namespace";

express.use(() => {
  console.log("simple function");
});
