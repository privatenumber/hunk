import {
  __require
} from "./index-0v6na3yp.js";

// src/static/index.ts
var rendererPromise;
function loadRenderer() {
  rendererPromise ??= (async () => {
    const runtime = globalThis;
    const navigatorDescriptor = Object.getOwnPropertyDescriptor(runtime, "navigator");
    if (runtime.navigator === undefined) {
      Object.defineProperty(runtime, "navigator", {
        configurable: true,
        value: {
          maxTouchPoints: 0,
          platform: "",
          userAgent: ""
        }
      });
    }
    try {
      return await import("./staticDiffPager-50j6hr40.js");
    } finally {
      if (navigatorDescriptor) {
        Object.defineProperty(runtime, "navigator", navigatorDescriptor);
      } else {
        Reflect.deleteProperty(runtime, "navigator");
      }
    }
  })();
  return rendererPromise;
}
async function renderStaticDiff(text, options = {}) {
  const { renderStaticDiff: render } = await loadRenderer();
  return render(text, options);
}
export {
  renderStaticDiff
};
