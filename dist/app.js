(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@capacitor/core/dist/index.js
  var ExceptionCode, CapacitorException, getPlatformId, createCapacitor, initCapacitorGlobal, Capacitor, registerPlugin, WebPlugin, encode, decode, CapacitorCookiesPluginWeb, CapacitorCookies, readBlobAsBase64, normalizeHttpHeaders, buildUrlParams, buildRequestInit, CapacitorHttpPluginWeb, CapacitorHttp, SystemBarsStyle, SystemBarType, SystemBarsPluginWeb, SystemBars;
  var init_dist = __esm({
    "node_modules/@capacitor/core/dist/index.js"() {
      (function(ExceptionCode2) {
        ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
        ExceptionCode2["Unavailable"] = "UNAVAILABLE";
      })(ExceptionCode || (ExceptionCode = {}));
      CapacitorException = class extends Error {
        constructor(message, code, data) {
          super(message);
          this.message = message;
          this.code = code;
          this.data = data;
        }
      };
      getPlatformId = (win) => {
        var _a, _b;
        if (win === null || win === void 0 ? void 0 : win.androidBridge) {
          return "android";
        } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
          return "ios";
        } else {
          return "web";
        }
      };
      createCapacitor = (win) => {
        const capCustomPlatform = win.CapacitorCustomPlatform || null;
        const cap = win.Capacitor || {};
        const Plugins = cap.Plugins = cap.Plugins || {};
        const getPlatform = () => {
          return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
        };
        const isNativePlatform = () => getPlatform() !== "web";
        const isPluginAvailable = (pluginName) => {
          const plugin = registeredPlugins.get(pluginName);
          if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            return true;
          }
          if (getPluginHeader(pluginName)) {
            return true;
          }
          return false;
        };
        const getPluginHeader = (pluginName) => {
          var _a;
          return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find((h) => h.name === pluginName);
        };
        const handleError = (err) => win.console.error(err);
        const registeredPlugins = /* @__PURE__ */ new Map();
        const registerPlugin2 = (pluginName, jsImplementations = {}) => {
          const registeredPlugin = registeredPlugins.get(pluginName);
          if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
          }
          const platform = getPlatform();
          const pluginHeader = getPluginHeader(pluginName);
          let jsImplementation;
          const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
              jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = await jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
            } else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) {
              jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = await jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
            }
            return jsImplementation;
          };
          const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
              const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m) => prop === m.name);
              if (methodHeader) {
                if (methodHeader.rtype === "promise") {
                  return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                } else {
                  return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                }
              } else if (impl) {
                return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
              }
            } else if (impl) {
              return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
              throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
          };
          const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
              const p = loadPluginImplementation().then((impl) => {
                const fn = createPluginMethod(impl, prop);
                if (fn) {
                  const p2 = fn(...args);
                  remove = p2 === null || p2 === void 0 ? void 0 : p2.remove;
                  return p2;
                } else {
                  throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                }
              });
              if (prop === "addListener") {
                p.remove = async () => remove();
              }
              return p;
            };
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, "name", {
              value: prop,
              writable: false,
              configurable: false
            });
            return wrapper;
          };
          const addListener = createPluginMethodWrapper("addListener");
          const removeListener = createPluginMethodWrapper("removeListener");
          const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
              const callbackId = await call;
              removeListener({
                eventName,
                callbackId
              }, callback);
            };
            const p = new Promise((resolve) => call.then(() => resolve({ remove })));
            p.remove = async () => {
              console.warn(`Using addListener() without 'await' is deprecated.`);
              await remove();
            };
            return p;
          };
          const proxy = new Proxy({}, {
            get(_, prop) {
              switch (prop) {
                // https://github.com/facebook/react/issues/20030
                case "$$typeof":
                  return void 0;
                case "toJSON":
                  return () => ({});
                case "addListener":
                  return pluginHeader ? addListenerNative : addListener;
                case "removeListener":
                  return removeListener;
                default:
                  return createPluginMethodWrapper(prop);
              }
            }
          });
          Plugins[pluginName] = proxy;
          registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: /* @__PURE__ */ new Set([...Object.keys(jsImplementations), ...pluginHeader ? [platform] : []])
          });
          return proxy;
        };
        if (!cap.convertFileSrc) {
          cap.convertFileSrc = (filePath) => filePath;
        }
        cap.getPlatform = getPlatform;
        cap.handleError = handleError;
        cap.isNativePlatform = isNativePlatform;
        cap.isPluginAvailable = isPluginAvailable;
        cap.registerPlugin = registerPlugin2;
        cap.Exception = CapacitorException;
        cap.DEBUG = !!cap.DEBUG;
        cap.isLoggingEnabled = !!cap.isLoggingEnabled;
        return cap;
      };
      initCapacitorGlobal = (win) => win.Capacitor = createCapacitor(win);
      Capacitor = /* @__PURE__ */ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      registerPlugin = Capacitor.registerPlugin;
      WebPlugin = class {
        constructor() {
          this.listeners = {};
          this.retainedEventArguments = {};
          this.windowListeners = {};
        }
        addListener(eventName, listenerFunc) {
          let firstListener = false;
          const listeners = this.listeners[eventName];
          if (!listeners) {
            this.listeners[eventName] = [];
            firstListener = true;
          }
          this.listeners[eventName].push(listenerFunc);
          const windowListener = this.windowListeners[eventName];
          if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
          }
          if (firstListener) {
            this.sendRetainedArgumentsForEvent(eventName);
          }
          const remove = async () => this.removeListener(eventName, listenerFunc);
          const p = Promise.resolve({ remove });
          return p;
        }
        async removeAllListeners() {
          this.listeners = {};
          for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
          }
          this.windowListeners = {};
        }
        notifyListeners(eventName, data, retainUntilConsumed) {
          const listeners = this.listeners[eventName];
          if (!listeners) {
            if (retainUntilConsumed) {
              let args = this.retainedEventArguments[eventName];
              if (!args) {
                args = [];
              }
              args.push(data);
              this.retainedEventArguments[eventName] = args;
            }
            return;
          }
          listeners.forEach((listener) => listener(data));
        }
        hasListeners(eventName) {
          var _a;
          return !!((_a = this.listeners[eventName]) === null || _a === void 0 ? void 0 : _a.length);
        }
        registerWindowListener(windowEventName, pluginEventName) {
          this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: (event) => {
              this.notifyListeners(pluginEventName, event);
            }
          };
        }
        unimplemented(msg = "not implemented") {
          return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
        }
        unavailable(msg = "not available") {
          return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
        }
        async removeListener(eventName, listenerFunc) {
          const listeners = this.listeners[eventName];
          if (!listeners) {
            return;
          }
          const index = listeners.indexOf(listenerFunc);
          if (index !== -1) {
            this.listeners[eventName].splice(index, 1);
          }
          if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
          }
        }
        addWindowListener(handle) {
          window.addEventListener(handle.windowEventName, handle.handler);
          handle.registered = true;
        }
        removeWindowListener(handle) {
          if (!handle) {
            return;
          }
          window.removeEventListener(handle.windowEventName, handle.handler);
          handle.registered = false;
        }
        sendRetainedArgumentsForEvent(eventName) {
          const args = this.retainedEventArguments[eventName];
          if (!args) {
            return;
          }
          delete this.retainedEventArguments[eventName];
          args.forEach((arg) => {
            this.notifyListeners(eventName, arg);
          });
        }
      };
      encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
      CapacitorCookiesPluginWeb = class extends WebPlugin {
        async getCookies() {
          const cookies = document.cookie;
          const cookieMap = {};
          cookies.split(";").forEach((cookie) => {
            if (cookie.length <= 0)
              return;
            let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
            key = decode(key).trim();
            value = decode(value).trim();
            cookieMap[key] = value;
          });
          return cookieMap;
        }
        async setCookie(options) {
          try {
            const encodedKey = encode(options.key);
            const encodedValue = encode(options.value);
            const expires = options.expires ? `; expires=${options.expires.replace("expires=", "")}` : "";
            const path = (options.path || "/").replace("path=", "");
            const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
            document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
          } catch (error) {
            return Promise.reject(error);
          }
        }
        async deleteCookie(options) {
          try {
            document.cookie = `${options.key}=; Max-Age=0`;
          } catch (error) {
            return Promise.reject(error);
          }
        }
        async clearCookies() {
          try {
            const cookies = document.cookie.split(";") || [];
            for (const cookie of cookies) {
              document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
            }
          } catch (error) {
            return Promise.reject(error);
          }
        }
        async clearAllCookies() {
          try {
            await this.clearCookies();
          } catch (error) {
            return Promise.reject(error);
          }
        }
      };
      CapacitorCookies = registerPlugin("CapacitorCookies", {
        web: () => new CapacitorCookiesPluginWeb()
      });
      readBlobAsBase64 = async (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result;
          resolve(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(blob);
      });
      normalizeHttpHeaders = (headers = {}) => {
        const originalKeys = Object.keys(headers);
        const loweredKeys = Object.keys(headers).map((k) => k.toLocaleLowerCase());
        const normalized = loweredKeys.reduce((acc, key, index) => {
          acc[key] = headers[originalKeys[index]];
          return acc;
        }, {});
        return normalized;
      };
      buildUrlParams = (params, shouldEncode = true) => {
        if (!params)
          return null;
        const output = Object.entries(params).reduce((accumulator, entry) => {
          const [key, value] = entry;
          let encodedValue;
          let item;
          if (Array.isArray(value)) {
            item = "";
            value.forEach((str) => {
              encodedValue = shouldEncode ? encodeURIComponent(str) : str;
              item += `${key}=${encodedValue}&`;
            });
            item.slice(0, -1);
          } else {
            encodedValue = shouldEncode ? encodeURIComponent(value) : value;
            item = `${key}=${encodedValue}`;
          }
          return `${accumulator}&${item}`;
        }, "");
        return output.substr(1);
      };
      buildRequestInit = (options, extra = {}) => {
        const output = Object.assign({ method: options.method || "GET", headers: options.headers }, extra);
        const headers = normalizeHttpHeaders(options.headers);
        const type = headers["content-type"] || "";
        if (typeof options.data === "string") {
          output.body = options.data;
        } else if (type.includes("application/x-www-form-urlencoded")) {
          const params = new URLSearchParams();
          for (const [key, value] of Object.entries(options.data || {})) {
            params.set(key, value);
          }
          output.body = params.toString();
        } else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
          const form = new FormData();
          if (options.data instanceof FormData) {
            options.data.forEach((value, key) => {
              form.append(key, value);
            });
          } else {
            for (const key of Object.keys(options.data)) {
              form.append(key, options.data[key]);
            }
          }
          output.body = form;
          const headers2 = new Headers(output.headers);
          headers2.delete("content-type");
          output.headers = headers2;
        } else if (type.includes("application/json") || typeof options.data === "object") {
          output.body = JSON.stringify(options.data);
        }
        return output;
      };
      CapacitorHttpPluginWeb = class extends WebPlugin {
        /**
         * Perform an Http request given a set of options
         * @param options Options to build the HTTP request
         */
        async request(options) {
          const requestInit = buildRequestInit(options, options.webFetchExtra);
          const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
          const url = urlParams ? `${options.url}?${urlParams}` : options.url;
          const response = await fetch(url, requestInit);
          const contentType = response.headers.get("content-type") || "";
          let { responseType = "text" } = response.ok ? options : {};
          if (contentType.includes("application/json")) {
            responseType = "json";
          }
          let data;
          let blob;
          switch (responseType) {
            case "arraybuffer":
            case "blob":
              blob = await response.blob();
              data = await readBlobAsBase64(blob);
              break;
            case "json":
              data = await response.json();
              break;
            case "document":
            case "text":
            default:
              data = await response.text();
          }
          const headers = {};
          response.headers.forEach((value, key) => {
            headers[key] = value;
          });
          return {
            data,
            headers,
            status: response.status,
            url: response.url
          };
        }
        /**
         * Perform an Http GET request given a set of options
         * @param options Options to build the HTTP request
         */
        async get(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "GET" }));
        }
        /**
         * Perform an Http POST request given a set of options
         * @param options Options to build the HTTP request
         */
        async post(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "POST" }));
        }
        /**
         * Perform an Http PUT request given a set of options
         * @param options Options to build the HTTP request
         */
        async put(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "PUT" }));
        }
        /**
         * Perform an Http PATCH request given a set of options
         * @param options Options to build the HTTP request
         */
        async patch(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "PATCH" }));
        }
        /**
         * Perform an Http DELETE request given a set of options
         * @param options Options to build the HTTP request
         */
        async delete(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "DELETE" }));
        }
      };
      CapacitorHttp = registerPlugin("CapacitorHttp", {
        web: () => new CapacitorHttpPluginWeb()
      });
      (function(SystemBarsStyle2) {
        SystemBarsStyle2["Dark"] = "DARK";
        SystemBarsStyle2["Light"] = "LIGHT";
        SystemBarsStyle2["Default"] = "DEFAULT";
      })(SystemBarsStyle || (SystemBarsStyle = {}));
      (function(SystemBarType2) {
        SystemBarType2["StatusBar"] = "StatusBar";
        SystemBarType2["NavigationBar"] = "NavigationBar";
      })(SystemBarType || (SystemBarType = {}));
      SystemBarsPluginWeb = class extends WebPlugin {
        async setStyle() {
          this.unavailable("not available for web");
        }
        async setAnimation() {
          this.unavailable("not available for web");
        }
        async show() {
          this.unavailable("not available for web");
        }
        async hide() {
          this.unavailable("not available for web");
        }
      };
      SystemBars = registerPlugin("SystemBars", {
        web: () => new SystemBarsPluginWeb()
      });
    }
  });

  // node_modules/@capacitor-community/speech-recognition/dist/esm/web.js
  var web_exports = {};
  __export(web_exports, {
    SpeechRecognition: () => SpeechRecognition,
    SpeechRecognitionWeb: () => SpeechRecognitionWeb
  });
  var SpeechRecognitionWeb, SpeechRecognition;
  var init_web = __esm({
    "node_modules/@capacitor-community/speech-recognition/dist/esm/web.js"() {
      init_dist();
      SpeechRecognitionWeb = class extends WebPlugin {
        available() {
          throw this.unimplemented("Method not implemented on web.");
        }
        start(_options) {
          throw this.unimplemented("Method not implemented on web.");
        }
        stop() {
          throw this.unimplemented("Method not implemented on web.");
        }
        getSupportedLanguages() {
          throw this.unimplemented("Method not implemented on web.");
        }
        hasPermission() {
          throw this.unimplemented("Method not implemented on web.");
        }
        isListening() {
          throw this.unimplemented("Method not implemented on web.");
        }
        requestPermission() {
          throw this.unimplemented("Method not implemented on web.");
        }
        checkPermissions() {
          throw this.unimplemented("Method not implemented on web.");
        }
        requestPermissions() {
          throw this.unimplemented("Method not implemented on web.");
        }
      };
      SpeechRecognition = new SpeechRecognitionWeb();
    }
  });

  // node_modules/@capacitor-community/text-to-speech/dist/esm/web.js
  var web_exports2 = {};
  __export(web_exports2, {
    TextToSpeechWeb: () => TextToSpeechWeb
  });
  var TextToSpeechWeb;
  var init_web2 = __esm({
    "node_modules/@capacitor-community/text-to-speech/dist/esm/web.js"() {
      init_dist();
      TextToSpeechWeb = class extends WebPlugin {
        constructor() {
          super();
          this.speechSynthesis = null;
          if ("speechSynthesis" in window) {
            this.speechSynthesis = window.speechSynthesis;
            window.addEventListener("beforeunload", () => {
              this.stop();
            });
          }
        }
        async speak(options) {
          if (!this.speechSynthesis) {
            this.throwUnsupportedError();
          }
          await this.stop();
          const speechSynthesis = this.speechSynthesis;
          const utterance = this.createSpeechSynthesisUtterance(options);
          return new Promise((resolve, reject) => {
            utterance.onend = () => {
              resolve();
            };
            utterance.onerror = (event) => {
              reject(event);
            };
            speechSynthesis.speak(utterance);
          });
        }
        async stop() {
          if (!this.speechSynthesis) {
            this.throwUnsupportedError();
          }
          this.speechSynthesis.cancel();
        }
        async getSupportedLanguages() {
          const voices = this.getSpeechSynthesisVoices();
          const languages = voices.map((voice) => voice.lang);
          const filteredLanguages = languages.filter((v, i, a) => a.indexOf(v) == i);
          return { languages: filteredLanguages };
        }
        async getSupportedVoices() {
          const voices = this.getSpeechSynthesisVoices();
          return { voices };
        }
        async isLanguageSupported(options) {
          const result = await this.getSupportedLanguages();
          const isLanguageSupported = result.languages.includes(options.lang);
          return { supported: isLanguageSupported };
        }
        async openInstall() {
          this.throwUnimplementedError();
        }
        createSpeechSynthesisUtterance(options) {
          const voices = this.getSpeechSynthesisVoices();
          const utterance = new SpeechSynthesisUtterance();
          const { text, lang, rate, pitch, volume, voice } = options;
          if (voice !== void 0) {
            utterance.voice = voices[voice];
          }
          if (volume !== void 0) {
            utterance.volume = volume >= 0 && volume <= 1 ? volume : 1;
          }
          if (rate !== void 0) {
            utterance.rate = rate >= 0.1 && rate <= 10 ? rate : 1;
          }
          if (pitch !== void 0) {
            utterance.pitch = pitch >= 0 && pitch <= 2 ? pitch : 2;
          }
          if (lang) {
            utterance.lang = lang;
          }
          utterance.text = text;
          return utterance;
        }
        getSpeechSynthesisVoices() {
          if (!this.speechSynthesis) {
            this.throwUnsupportedError();
          }
          if (!this.supportedVoices || this.supportedVoices.length < 1) {
            this.supportedVoices = this.speechSynthesis.getVoices();
          }
          return this.supportedVoices;
        }
        throwUnsupportedError() {
          throw this.unavailable("SpeechSynthesis API not available in this browser.");
        }
        throwUnimplementedError() {
          throw this.unimplemented("Not implemented on web.");
        }
      };
    }
  });

  // node_modules/@capacitor/browser/dist/esm/web.js
  var web_exports3 = {};
  __export(web_exports3, {
    Browser: () => Browser,
    BrowserWeb: () => BrowserWeb
  });
  var BrowserWeb, Browser;
  var init_web3 = __esm({
    "node_modules/@capacitor/browser/dist/esm/web.js"() {
      init_dist();
      BrowserWeb = class extends WebPlugin {
        constructor() {
          super();
          this._lastWindow = null;
        }
        async open(options) {
          this._lastWindow = window.open(options.url, options.windowName || "_blank");
        }
        async close() {
          return new Promise((resolve, reject) => {
            if (this._lastWindow != null) {
              this._lastWindow.close();
              this._lastWindow = null;
              resolve();
            } else {
              reject("No active window to close!");
            }
          });
        }
      };
      Browser = new BrowserWeb();
    }
  });

  // src/app.js
  init_dist();

  // node_modules/@capacitor-community/speech-recognition/dist/esm/index.js
  init_dist();
  var SpeechRecognition2 = registerPlugin("SpeechRecognition", {
    web: () => Promise.resolve().then(() => (init_web(), web_exports)).then((m) => new m.SpeechRecognitionWeb())
  });

  // node_modules/@capacitor-community/text-to-speech/dist/esm/index.js
  init_dist();

  // node_modules/@capacitor-community/text-to-speech/dist/esm/definitions.js
  var QueueStrategy;
  (function(QueueStrategy2) {
    QueueStrategy2[QueueStrategy2["Flush"] = 0] = "Flush";
    QueueStrategy2[QueueStrategy2["Add"] = 1] = "Add";
  })(QueueStrategy || (QueueStrategy = {}));

  // node_modules/@capacitor-community/text-to-speech/dist/esm/index.js
  var TextToSpeech = registerPlugin("TextToSpeech", {
    web: () => Promise.resolve().then(() => (init_web2(), web_exports2)).then((m) => new m.TextToSpeechWeb())
  });
  if ("speechSynthesis" in window) {
    window.speechSynthesis;
  }

  // node_modules/@capacitor/browser/dist/esm/index.js
  init_dist();
  var Browser2 = registerPlugin("Browser", {
    web: () => Promise.resolve().then(() => (init_web3(), web_exports3)).then((m) => new m.BrowserWeb())
  });

  // src/app.js
  var app = document.getElementById("jarvis-app");
  var clockEl = document.getElementById("clock");
  var dateEl = document.getElementById("date");
  var greetingPrefix = document.getElementById("greeting-prefix");
  var sublineEl = document.getElementById("subline");
  var hintEl = document.getElementById("hint");
  var logList = document.getElementById("log-list");
  var logCount = document.getElementById("log-count");
  var logStatus = document.getElementById("log-status");
  var voiceStatus = document.getElementById("voice-status");
  var recognitionState = document.getElementById("recognition-state");
  var micState = document.getElementById("mic-state");
  var uptimeEl = document.getElementById("uptime");
  var coreMeter = document.getElementById("core-meter");
  var reactor = document.getElementById("reactor");
  var micButton = document.getElementById("mic-button");
  var micLabel = document.getElementById("mic-label");
  var commandForm = document.getElementById("command-form");
  var commandInput = document.getElementById("command-input");
  var restartButton = document.getElementById("restart-button");
  var shutdownEl = document.getElementById("shutdown");
  var synth = "speechSynthesis" in window ? window.speechSynthesis : null;
  var WebSpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var isNative = Capacitor.isNativePlatform();
  var startedAt = Date.now();
  var recognition = null;
  var recognitionReady = false;
  var listening = false;
  var searchMode = false;
  var spokenCount = 0;
  var totalEntries = 0;
  var logSequence = 0;
  function formatTime(date = /* @__PURE__ */ new Date()) {
    return date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }
  function pad(value) {
    return String(value).padStart(2, "0");
  }
  function formatUptime(ms) {
    const total = Math.floor(ms / 1e3);
    return `${pad(Math.floor(total / 3600))}:${pad(Math.floor(total / 60) % 60)}:${pad(total % 60)}`;
  }
  function updateClock() {
    const now = /* @__PURE__ */ new Date();
    clockEl.textContent = formatTime(now);
    dateEl.textContent = now.toLocaleDateString("ru-RU", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    uptimeEl.textContent = formatUptime(Date.now() - startedAt);
  }
  function greetingFor(hour) {
    if (hour < 6) return "\u0414\u043E\u0431\u0440\u043E\u0439 \u043D\u043E\u0447\u0438,";
    if (hour < 12) return "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E,";
    if (hour < 18) return "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C,";
    return "\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440,";
  }
  function addLog(message, kind = "info", time = formatTime()) {
    logSequence += 1;
    totalEntries += 1;
    const entry = document.createElement("li");
    entry.className = `log-entry log-entry--${kind}`;
    entry.style.animationDelay = `${Math.min(logSequence * 30, 180)}ms`;
    const stamp = document.createElement("time");
    stamp.textContent = time;
    const text = document.createElement("p");
    text.textContent = message;
    entry.append(stamp, text);
    logList.prepend(entry);
    while (logList.children.length > 9) logList.lastElementChild.remove();
    logCount.textContent = pad(Math.min(totalEntries, 99));
    return entry;
  }
  function setSubline(text) {
    sublineEl.textContent = text;
  }
  function setHint(text) {
    hintEl.textContent = text;
  }
  function setMicState(text, tone = "idle") {
    micState.textContent = text;
    micState.className = `system-state ${tone === "ok" ? "is-ok" : tone === "live" ? "is-live" : tone === "off" ? "is-off" : "is-idle"}`;
  }
  function setRecognitionState(text, tone = "ok") {
    recognitionState.textContent = text;
    recognitionState.className = `system-state ${tone === "ok" ? "is-ok" : tone === "live" ? "is-live" : "is-off"}`;
  }
  function selectRussianVoice() {
    if (!synth) return null;
    const voices = synth.getVoices();
    return voices.find((voice) => /^ru/i.test(voice.lang)) || voices.find((voice) => /russian|русск/i.test(voice.name)) || null;
  }
  function speak(text) {
    spokenCount += 1;
    addLog(`\u0414\u0436\u0430\u0440\u0432\u0438\u0441: ${text}`, "voice");
    setSubline(text);
    if (isNative) {
      voiceStatus.textContent = "\u0421\u0418\u041D\u0422\u0415\u0417 \xB7 ANDROID TTS";
      TextToSpeech.stop().catch(() => {
      });
      TextToSpeech.speak({ text, lang: "ru-RU", rate: 0.95, pitch: 0.9, volume: 1 }).catch(() => {
        voiceStatus.textContent = "\u0421\u0418\u041D\u0422\u0415\u0417 \xB7 \u041E\u0428\u0418\u0411\u041A\u0410";
      });
      return;
    }
    if (!synth) {
      voiceStatus.textContent = "\u0421\u0418\u041D\u0422\u0415\u0417 \xB7 \u041D\u0415\u0414\u041E\u0421\u0422\u0423\u041F\u0415\u041D";
      return;
    }
    try {
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ru-RU";
      utterance.rate = 1;
      utterance.pitch = 0.9;
      const voice = selectRussianVoice();
      if (voice) utterance.voice = voice;
      synth.speak(utterance);
    } catch {
      voiceStatus.textContent = "\u0421\u0418\u041D\u0422\u0415\u0417 \xB7 \u041E\u0428\u0418\u0411\u041A\u0410";
    }
  }
  function resetSearchMode() {
    searchMode = false;
    commandInput.placeholder = "\u0418\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443, \u0441\u044D\u0440...";
    setHint("\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443. \u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0439 \u0432\u0432\u043E\u0434 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 Chromium.");
  }
  function clearSublineAfter(text, delay = 4200) {
    window.setTimeout(() => {
      if (sublineEl.textContent === text) setSubline("\u0421\u0438\u0441\u0442\u0435\u043C\u044B \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0427\u0435\u043C \u044F \u043C\u043E\u0433\u0443 \u043F\u043E\u043C\u043E\u0447\u044C?");
    }, delay);
  }
  async function openExternal(url) {
    if (isNative) {
      try {
        await Browser2.open({ url });
        return;
      } catch (error) {
        addLog(`\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443: ${error?.message || error}`, "warn");
      }
    }
    window.open(url, "_blank", "noopener");
  }
  function runSearch(query) {
    resetSearchMode();
    if (!query) {
      speak("\u041F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043F\u0443\u0441\u0442, \u0441\u044D\u0440.");
      return;
    }
    addLog(`\u041F\u043E\u0438\u0441\u043A: ${query}`, "action");
    speak(`\u0418\u0449\u0443 ${query}`);
    openExternal(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    clearSublineAfter(`\u0418\u0449\u0443 ${query}`);
  }
  function shutdown() {
    speak("\u041E\u0442\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C. \u0425\u043E\u0440\u043E\u0448\u0435\u0433\u043E \u0434\u043D\u044F, \u0441\u044D\u0440.");
    if (listening) {
      if (isNative) {
        SpeechRecognition2.stop().catch(() => {
        });
      } else if (recognition) {
        try {
          recognition.stop();
        } catch {
          listening = false;
        }
      }
    }
    setMicState("\u041E\u0422\u041A\u041B\u042E\u0427\u0415\u041D", "off");
    setRecognitionState("\u041E\u0424\u041B\u0410\u0419\u041D", "off");
    logStatus.textContent = "\u0421\u0415\u0410\u041D\u0421 \u0417\u0410\u0412\u0415\u0420\u0428\u0401\u041D";
    window.setTimeout(() => {
      shutdownEl.hidden = false;
      restartButton.focus();
    }, 850);
  }
  function processCommand(raw) {
    const query = String(raw || "").trim().replace(/\s+/g, " ");
    if (!query) return;
    addLog(`\u0412\u044B: ${query}`, "user");
    commandInput.value = "";
    const lower = query.toLowerCase();
    if (lower.includes("\u043E\u0442\u0431\u043E\u0439") || lower.includes("\u0432\u044B\u0445\u043E\u0434") || lower === "\u0441\u0442\u043E\u043F") {
      shutdown();
      return;
    }
    if (searchMode) {
      if (["\u043E\u0442\u043C\u0435\u043D\u0430", "\u043D\u0430\u0437\u0430\u0434", "\u043D\u0435 \u043D\u0430\u0434\u043E"].includes(lower)) {
        resetSearchMode();
        speak("\u041F\u043E\u0438\u0441\u043A \u043E\u0442\u043C\u0435\u043D\u0451\u043D, \u0441\u044D\u0440.");
        return;
      }
      runSearch(query);
      return;
    }
    if (lower.includes("\u0432\u0440\u0435\u043C\u044F") || lower.includes("\u0447\u0430\u0441")) {
      const time = (/* @__PURE__ */ new Date()).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
      speak(`\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: ${time}`);
      clearSublineAfter(`\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: ${time}`);
      return;
    }
    if (lower.includes("youtube") || lower.includes("\u044E\u0442\u0443\u0431")) {
      speak("\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u044E YouTube");
      addLog("\u0417\u0430\u043F\u0443\u0441\u043A: youtube.com", "action");
      openExternal("https://www.youtube.com");
      clearSublineAfter("\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u044E YouTube");
      return;
    }
    if (lower.includes("\u0431\u0440\u0430\u0443\u0437\u0435\u0440") || lower.includes("\u0433\u0443\u0433\u043B") || lower.includes("google")) {
      speak("\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u044E Google");
      addLog("\u0417\u0430\u043F\u0443\u0441\u043A: google.com", "action");
      openExternal("https://www.google.com");
      clearSublineAfter("\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u044E Google");
      return;
    }
    if (lower.includes("\u043F\u043E\u0438\u0441\u043A") || lower.includes("\u043D\u0430\u0439\u0434\u0438") || lower.includes("\u043D\u0430\u0439\u0442\u0438")) {
      searchMode = true;
      commandInput.placeholder = "\u0427\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435?";
      setHint("\u0420\u0435\u0436\u0438\u043C \u043F\u043E\u0438\u0441\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u0435\u043D. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441 \u0438\u043B\u0438 \u043F\u0440\u043E\u0438\u0437\u043D\u0435\u0441\u0438\u0442\u0435 \u0435\u0433\u043E \u2014 \xAB\u043E\u0442\u043C\u0435\u043D\u0430\xBB \u0441\u0431\u0440\u043E\u0441\u0438\u0442 \u0440\u0435\u0436\u0438\u043C.");
      speak("\u0427\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435?");
      commandInput.focus();
      return;
    }
    const reply = "\u041D\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043B \u043A\u043E\u043C\u0430\u043D\u0434\u0443, \u0441\u044D\u0440. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435: \u0432\u0440\u0435\u043C\u044F, \u043E\u0442\u043A\u0440\u043E\u0439 YouTube, \u043F\u043E\u0438\u0441\u043A \u0438\u043B\u0438 \u043E\u0442\u0431\u043E\u0439.";
    speak(reply);
    clearSublineAfter(reply);
  }
  function setListening(value) {
    listening = value;
    reactor.dataset.state = value ? "listening" : "idle";
    micButton.classList.toggle("is-listening", value);
    micLabel.textContent = value ? "\u0421\u041B\u0423\u0428\u0410\u042E..." : "\u0421\u041A\u0410\u0417\u0410\u0422\u042C \u041A\u041E\u041C\u0410\u041D\u0414\u0423";
    setMicState(value ? "\u0410\u041A\u0422\u0418\u0412\u0415\u041D" : "\u041E\u0416\u0418\u0414\u0410\u041D\u0418\u0415", value ? "live" : "idle");
    setRecognitionState(value ? "\u0421\u041B\u0423\u0428\u0410\u042E" : "\u0413\u041E\u0422\u041E\u0412\u041E", value ? "live" : "ok");
  }
  async function setupNativeRecognition() {
    try {
      const { available } = await SpeechRecognition2.available();
      if (!available) {
        voiceStatus.textContent = "\u0422\u0415\u041A\u0421\u0422\u041E\u0412\u042B\u0419 \u0420\u0415\u0416\u0418\u041C";
        setRecognitionState("\u041D\u0415\u0414\u041E\u0421\u0422\u0423\u041F\u041D\u041E", "off");
        setMicState("\u0422\u0415\u041A\u0421\u0422", "idle");
        setHint("\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0447\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432 \u043F\u043E\u043B\u0435 \u043D\u0438\u0436\u0435.");
        return;
      }
    } catch {
      voiceStatus.textContent = "\u0422\u0415\u041A\u0421\u0422\u041E\u0412\u042B\u0419 \u0420\u0415\u0416\u0418\u041C";
      setRecognitionState("\u041D\u0415\u0414\u041E\u0421\u0422\u0423\u041F\u041D\u041E", "off");
      setMicState("\u0422\u0415\u041A\u0421\u0422", "idle");
      setHint("\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0447\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432 \u043F\u043E\u043B\u0435 \u043D\u0438\u0436\u0435.");
      return;
    }
    recognitionReady = true;
    SpeechRecognition2.addListener("listeningState", ({ status }) => {
      setListening(status === "started");
    });
    SpeechRecognition2.addListener("partialResults", ({ matches }) => {
      const transcript = matches?.[0];
      if (!transcript) return;
      SpeechRecognition2.stop().catch(() => {
      });
      setListening(false);
      processCommand(transcript);
    });
  }
  async function startNativeListening() {
    try {
      let permission = await SpeechRecognition2.checkPermissions();
      if (permission.speechRecognition !== "granted") {
        permission = await SpeechRecognition2.requestPermissions();
      }
      if (permission.speechRecognition !== "granted") {
        setRecognitionState("\u041D\u0415\u0422 \u0414\u041E\u0421\u0422\u0423\u041F\u0410", "off");
        setMicState("\u0422\u0415\u041A\u0421\u0422", "idle");
        setHint("\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D\u0443 \u0437\u0430\u043F\u0440\u0435\u0449\u0451\u043D. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0435\u0433\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443.");
        addLog("\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D: \u043D\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F.", "warn");
        return;
      }
      setListening(true);
      setHint("\u0421\u043B\u0443\u0448\u0430\u044E \u0432\u0430\u0441, \u0441\u044D\u0440...");
      const result = await SpeechRecognition2.start({
        language: "ru-RU",
        maxResults: 1,
        prompt: "\u0421\u043B\u0443\u0448\u0430\u044E \u0432\u0430\u0441, \u0441\u044D\u0440...",
        partialResults: false,
        popup: false
      });
      setListening(false);
      const transcript = result?.matches?.[0];
      if (transcript) {
        processCommand(transcript);
      } else {
        addLog("\u0420\u0435\u0447\u044C \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.", "warn");
        setHint("\u0420\u0435\u0447\u044C \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.");
      }
    } catch (error) {
      setListening(false);
      addLog(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u044F: ${error?.message || error}`, "warn");
      setHint("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u0440\u0435\u0447\u044C. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432 \u043F\u043E\u043B\u0435 \u043D\u0438\u0436\u0435.");
    }
  }
  function setupRecognition() {
    if (isNative) {
      setupNativeRecognition();
      return;
    }
    if (!WebSpeechRecognition) {
      voiceStatus.textContent = "\u0422\u0415\u041A\u0421\u0422\u041E\u0412\u042B\u0419 \u0420\u0415\u0416\u0418\u041C";
      setRecognitionState("\u041D\u0415\u0414\u041E\u0421\u0422\u0423\u041F\u041D\u041E", "off");
      setMicState("\u0422\u0415\u041A\u0421\u0422", "idle");
      setHint("\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0439 \u0432\u0432\u043E\u0434 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432 \u043F\u043E\u043B\u0435 \u043D\u0438\u0436\u0435.");
      return;
    }
    recognition = new WebSpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => {
      setListening(true);
      setHint("\u0421\u043B\u0443\u0448\u0430\u044E \u0432\u0430\u0441, \u0441\u044D\u0440...");
    };
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";
      setListening(false);
      setHint("\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443. \u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0439 \u0432\u0432\u043E\u0434 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 Chromium.");
      if (transcript) processCommand(transcript);
    };
    recognition.onerror = (event) => {
      setListening(false);
      const reason = event.error || "unknown";
      if (reason === "not-allowed" || reason === "service-not-allowed") {
        setRecognitionState("\u041D\u0415\u0422 \u0414\u041E\u0421\u0422\u0423\u041F\u0410", "off");
        setHint("\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D\u0443 \u0437\u0430\u043F\u0440\u0435\u0449\u0451\u043D. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0435\u0433\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443.");
        addLog("\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D: \u043D\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F.", "warn");
      } else if (reason === "no-speech") {
        addLog("\u0420\u0435\u0447\u044C \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.", "warn");
        setHint("\u0420\u0435\u0447\u044C \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.");
      } else if (reason === "network") {
        setRecognitionState("\u0421\u0415\u0422\u042C", "off");
        addLog("\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E: \u0441\u0435\u0442\u0435\u0432\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430.", "warn");
        setHint("\u0421\u0435\u0440\u0432\u0438\u0441 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0435 \u043F\u043E\u043B\u0435.");
      } else if (reason !== "aborted") {
        addLog(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u044F: ${reason}`, "warn");
      }
    };
    recognition.onend = () => setListening(false);
    recognitionReady = true;
  }
  function toggleListening() {
    if (isNative) {
      if (!recognitionReady) {
        commandInput.focus();
        setHint("\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0439 \u0432\u0432\u043E\u0434 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432 \u043F\u043E\u043B\u0435 \u043D\u0438\u0436\u0435.");
        return;
      }
      if (listening) {
        SpeechRecognition2.stop().catch(() => {
        });
        setListening(false);
        return;
      }
      startNativeListening();
      return;
    }
    if (!recognitionReady) {
      commandInput.focus();
      setHint("\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0439 \u0432\u0432\u043E\u0434 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432 \u043F\u043E\u043B\u0435 \u043D\u0438\u0436\u0435.");
      return;
    }
    if (listening) {
      try {
        recognition.stop();
      } catch {
        setListening(false);
      }
      return;
    }
    try {
      recognition.start();
    } catch {
      setListening(false);
    }
  }
  function seedLog() {
    const now = Date.now();
    addLog("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u044F\u0434\u0440\u0430 J.A.R.V.I.S. \xB7 MARK II", "ok", formatTime(new Date(now - 14e3)));
    addLog(isNative ? "\u0421\u0438\u043D\u0442\u0435\u0437 \u0440\u0435\u0447\u0438: Android TTS \xB7 ru-RU" : "\u0421\u0438\u043D\u0442\u0435\u0437 \u0440\u0435\u0447\u0438: Web Speech API \xB7 ru-RU", "info", formatTime(new Date(now - 9e3)));
    addLog("\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043D \u0432 \u0440\u0435\u0436\u0438\u043C \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F", "info", formatTime(new Date(now - 5e3)));
    addLog("\u0421\u0438\u0441\u0442\u0435\u043C\u044B \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0427\u0435\u043C \u044F \u043C\u043E\u0433\u0443 \u043F\u043E\u043C\u043E\u0447\u044C?", "voice", formatTime(new Date(now - 1e3)));
  }
  function init() {
    greetingPrefix.textContent = greetingFor((/* @__PURE__ */ new Date()).getHours());
    updateClock();
    window.setInterval(updateClock, 1e3);
    seedLog();
    setupRecognition();
    if (isNative) {
      document.getElementById("tts-detail").textContent = "Android TTS \xB7 ru-RU";
      document.getElementById("stt-detail").textContent = "Android SpeechRecognizer";
      document.getElementById("mic-detail").textContent = "RECORD_AUDIO";
      voiceStatus.textContent = "\u0421\u0418\u041D\u0422\u0415\u0417 \xB7 ANDROID TTS";
      setHint("\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443.");
    }
    if (!isNative && !synth) voiceStatus.textContent = "\u0421\u0418\u041D\u0422\u0415\u0417 \xB7 \u041D\u0415\u0414\u041E\u0421\u0422\u0423\u041F\u0415\u041D";
    if (!isNative && synth) synth.addEventListener?.("voiceschanged", () => selectRussianVoice());
    micButton.addEventListener("click", toggleListening);
    commandForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = commandInput.value.trim();
      if (!value) return;
      processCommand(value);
    });
    document.getElementById("chips").addEventListener("click", (event) => {
      const button = event.target.closest("button[data-command]");
      if (button) processCommand(button.dataset.command);
    });
    restartButton.addEventListener("click", () => window.location.reload());
    coreMeter.addEventListener("animationiteration", () => {
      coreMeter.style.opacity = "1";
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        app.dataset.ready = "true";
      });
    });
  }
  init();
})();
/*! Bundled license information:

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)
*/
