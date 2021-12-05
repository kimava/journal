import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Journal", content: "Yes!" },
  { id: "2", title: "Second Journal", content: "Hello" },
];

const journalsSlice = createSlice({
  name: "journals",
  initialState,
  reducers: {},
});

export default journalsSlice.reducer;
