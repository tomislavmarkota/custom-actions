// https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
// @actions/core
// @actions/github
// @actions/exec
const core = require("@actions/core");
// import github from "@actions/github";
// import exec from "@actions/exec";

function run() {
  core.notice("hello from my custom js action");
}

run();
