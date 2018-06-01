import { RNDomInstance } from "react-native-dom";

// Path to RN Bundle Entrypoint ================================================
const rnBundlePath = "./entry.bundle?platform=dom&dev=true";

// React Native DOM Runtime Options =============================================
const ReactNativeDomOptions = {
  enableHotReload: false,
  nativeModules: []
};

// App Initialization ============================================================
const app = new RNDomInstance(
  rnBundlePath,
  "react_native_dom_storybook",
  document.body,
  ReactNativeDomOptions
);

app.start();
