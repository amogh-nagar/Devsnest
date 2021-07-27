import {configureStore} from "@reduxjs/toolkit";
import inputslicreducer from "./input";

const slice = configureStore({
  reducer: {
    input: inputslicreducer,
  },
});

export default slice;
