import Application from "../app";
import config from "../config/environment";
import { setApplication } from "@ember/test-helpers";
import { start } from "ember-qunit";
import { setEnvironment } from "discourse-common/config/environment";

setEnvironment("testing");

document.addEventListener("discourse-booted", () => {
  let setupTests = require("discourse/tests/setup-tests").default;
  Ember.ENV.LOG_STACKTRACE_ON_DEPRECATION = false;

  let app = Application.create(
    Object.assign({}, config.APP, {
      autoboot: false,
    })
  );

  setApplication(app);
  setupTests(app, app.__registry__.container());
  start();
});
