#!/usr/bin/env node

const rimraf = require("rimraf");

const filesToDelete = [
  "./src/hooks/include",
  "./src/lib/include",
  "./src/screen/include",
  "./src/navigators/include",
];

filesToDelete.forEach((toDelete) => {
  rimraf(toDelete, (error) => {
    if (error) throw error;
  });
});
