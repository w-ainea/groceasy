import { createSelector } from "reselect";

const userSelector = (state) => state.user;

export const appUserSelector = createSelector(userSelector, (user) => user);
