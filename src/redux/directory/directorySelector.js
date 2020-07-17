import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectorysections = createSelector(
    [selectDirectory],
    directory => directory.sections
)