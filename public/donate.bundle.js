/*! For license information please see donate.bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "loadCustomScript": () => (/* binding */ loadCustomScript),\n/* harmony export */   "loadScript": () => (/* binding */ loadScript),\n/* harmony export */   "version": () => (/* binding */ version)\n/* harmony export */ });\n/*!\n * paypal-js v5.1.4 (2022-11-29T23:08:21.847Z)\n * Copyright 2020-present, PayPal, Inc. All rights reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nfunction findScript(url, attributes) {\n    var currentScript = document.querySelector("script[src=\\"".concat(url, "\\"]"));\n    if (currentScript === null)\n        return null;\n    var nextScript = createScriptElement(url, attributes);\n    // ignore the data-uid-auto attribute that gets auto-assigned to every script tag\n    var currentScriptClone = currentScript.cloneNode();\n    delete currentScriptClone.dataset.uidAuto;\n    // check if the new script has the same number of data attributes\n    if (Object.keys(currentScriptClone.dataset).length !==\n        Object.keys(nextScript.dataset).length) {\n        return null;\n    }\n    var isExactMatch = true;\n    // check if the data attribute values are the same\n    Object.keys(currentScriptClone.dataset).forEach(function (key) {\n        if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {\n            isExactMatch = false;\n        }\n    });\n    return isExactMatch ? currentScript : null;\n}\nfunction insertScriptElement(_a) {\n    var url = _a.url, attributes = _a.attributes, onSuccess = _a.onSuccess, onError = _a.onError;\n    var newScript = createScriptElement(url, attributes);\n    newScript.onerror = onError;\n    newScript.onload = onSuccess;\n    document.head.insertBefore(newScript, document.head.firstElementChild);\n}\nfunction processOptions(options) {\n    var sdkBaseURL = "https://www.paypal.com/sdk/js";\n    if (options.sdkBaseURL) {\n        sdkBaseURL = options.sdkBaseURL;\n        delete options.sdkBaseURL;\n    }\n    processMerchantID(options);\n    var _a = Object.keys(options)\n        .filter(function (key) {\n        return (typeof options[key] !== "undefined" &&\n            options[key] !== null &&\n            options[key] !== "");\n    })\n        .reduce(function (accumulator, key) {\n        var value = options[key].toString();\n        if (key.substring(0, 5) === "data-") {\n            accumulator.dataAttributes[key] = value;\n        }\n        else {\n            accumulator.queryParams[key] = value;\n        }\n        return accumulator;\n    }, {\n        queryParams: {},\n        dataAttributes: {},\n    }), queryParams = _a.queryParams, dataAttributes = _a.dataAttributes;\n    return {\n        url: "".concat(sdkBaseURL, "?").concat(objectToQueryString(queryParams)),\n        dataAttributes: dataAttributes,\n    };\n}\nfunction objectToQueryString(params) {\n    var queryString = "";\n    Object.keys(params).forEach(function (key) {\n        if (queryString.length !== 0)\n            queryString += "&";\n        queryString += key + "=" + params[key];\n    });\n    return queryString;\n}\n/**\n * Parse the error message code received from the server during the script load.\n * This function search for the occurrence of this specific string "/* Original Error:".\n *\n * @param message the received error response from the server\n * @returns the content of the message if the string string was found.\n *          The whole message otherwise\n */\nfunction parseErrorMessage(message) {\n    var originalErrorText = message.split("/* Original Error:")[1];\n    return originalErrorText\n        ? originalErrorText.replace(/\\n/g, "").replace("*/", "").trim()\n        : message;\n}\nfunction createScriptElement(url, attributes) {\n    if (attributes === void 0) { attributes = {}; }\n    var newScript = document.createElement("script");\n    newScript.src = url;\n    Object.keys(attributes).forEach(function (key) {\n        newScript.setAttribute(key, attributes[key]);\n        if (key === "data-csp-nonce") {\n            newScript.setAttribute("nonce", attributes["data-csp-nonce"]);\n        }\n    });\n    return newScript;\n}\nfunction processMerchantID(options) {\n    var merchantID = options["merchant-id"], dataMerchantID = options["data-merchant-id"];\n    var newMerchantID = "";\n    var newDataMerchantID = "";\n    if (Array.isArray(merchantID)) {\n        if (merchantID.length > 1) {\n            newMerchantID = "*";\n            newDataMerchantID = merchantID.toString();\n        }\n        else {\n            newMerchantID = merchantID.toString();\n        }\n    }\n    else if (typeof merchantID === "string" && merchantID.length > 0) {\n        newMerchantID = merchantID;\n    }\n    else if (typeof dataMerchantID === "string" &&\n        dataMerchantID.length > 0) {\n        newMerchantID = "*";\n        newDataMerchantID = dataMerchantID;\n    }\n    options["merchant-id"] = newMerchantID;\n    options["data-merchant-id"] = newDataMerchantID;\n    return options;\n}\n\n/**\n * Load the Paypal JS SDK script asynchronously.\n *\n * @param {Object} options - used to configure query parameters and data attributes for the JS SDK.\n * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.\n * @return {Promise<Object>} paypalObject - reference to the global window PayPal object.\n */\nfunction loadScript(options, PromisePonyfill) {\n    if (PromisePonyfill === void 0) { PromisePonyfill = getDefaultPromiseImplementation(); }\n    validateArguments(options, PromisePonyfill);\n    // resolve with null when running in Node\n    if (typeof window === "undefined")\n        return PromisePonyfill.resolve(null);\n    var _a = processOptions(options), url = _a.url, dataAttributes = _a.dataAttributes;\n    var namespace = dataAttributes["data-namespace"] || "paypal";\n    var existingWindowNamespace = getPayPalWindowNamespace(namespace);\n    // resolve with the existing global paypal namespace when a script with the same params already exists\n    if (findScript(url, dataAttributes) && existingWindowNamespace) {\n        return PromisePonyfill.resolve(existingWindowNamespace);\n    }\n    return loadCustomScript({\n        url: url,\n        attributes: dataAttributes,\n    }, PromisePonyfill).then(function () {\n        var newWindowNamespace = getPayPalWindowNamespace(namespace);\n        if (newWindowNamespace) {\n            return newWindowNamespace;\n        }\n        throw new Error("The window.".concat(namespace, " global variable is not available."));\n    });\n}\n/**\n * Load a custom script asynchronously.\n *\n * @param {Object} options - used to set the script url and attributes.\n * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.\n * @return {Promise<void>} returns a promise to indicate if the script was successfully loaded.\n */\nfunction loadCustomScript(options, PromisePonyfill) {\n    if (PromisePonyfill === void 0) { PromisePonyfill = getDefaultPromiseImplementation(); }\n    validateArguments(options, PromisePonyfill);\n    var url = options.url, attributes = options.attributes;\n    if (typeof url !== "string" || url.length === 0) {\n        throw new Error("Invalid url.");\n    }\n    if (typeof attributes !== "undefined" && typeof attributes !== "object") {\n        throw new Error("Expected attributes to be an object.");\n    }\n    return new PromisePonyfill(function (resolve, reject) {\n        // resolve with undefined when running in Node\n        if (typeof window === "undefined")\n            return resolve();\n        insertScriptElement({\n            url: url,\n            attributes: attributes,\n            onSuccess: function () { return resolve(); },\n            onError: function () {\n                var defaultError = new Error("The script \\"".concat(url, "\\" failed to load."));\n                if (!window.fetch) {\n                    return reject(defaultError);\n                }\n                // Fetch the error reason from the response body for validation errors\n                return fetch(url)\n                    .then(function (response) {\n                    if (response.status === 200) {\n                        reject(defaultError);\n                    }\n                    return response.text();\n                })\n                    .then(function (message) {\n                    var parseMessage = parseErrorMessage(message);\n                    reject(new Error(parseMessage));\n                })\n                    .catch(function (err) {\n                    reject(err);\n                });\n            },\n        });\n    });\n}\nfunction getDefaultPromiseImplementation() {\n    if (typeof Promise === "undefined") {\n        throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");\n    }\n    return Promise;\n}\nfunction getPayPalWindowNamespace(namespace) {\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    return window[namespace];\n}\nfunction validateArguments(options, PromisePonyfill) {\n    if (typeof options !== "object" || options === null) {\n        throw new Error("Expected an options object.");\n    }\n    if (typeof PromisePonyfill !== "undefined" &&\n        typeof PromisePonyfill !== "function") {\n        throw new Error("Expected PromisePonyfill to be a function.");\n    }\n}\n\n// replaced with the package.json version at build time\nvar version = "5.1.4";\n\n\n\n\n//# sourceURL=webpack://heart4kids/./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js?')},"./src/js/donate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paypal_paypal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @paypal/paypal-js */ "./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js");\n\r\n\r\n(0,_paypal_paypal_js__WEBPACK_IMPORTED_MODULE_0__.loadScript)({ "client-id": ATEDkn0Zmga8XCTxr6gADgstinRBnvFY2cOSIHJScSosQTfeDUTbgJitg3UGvSM8TYV3vazr13bvi0mA })\r\n    .then((paypal) => {\r\n        components = paypal.Buttons({\r\n            style: {\r\n                layout: "vertical",\r\n                color: "gold",\r\n                shape: "pill",\r\n                label: "paypal the mbuzi",\r\n            }\r\n        }.render("#paypal-button-container"));\r\n        intent = "CAPTURE";\r\n    })\r\n    .catch(err => {});\n\n//# sourceURL=webpack://heart4kids/./src/js/donate.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/donate.js")})();