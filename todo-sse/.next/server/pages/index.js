/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Todos.js":
/*!*****************************!*\
  !*** ./components/Todos.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var eventsource_lib_eventsource_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! eventsource/lib/eventsource-polyfill */ \"eventsource/lib/eventsource-polyfill\");\n/* harmony import */ var eventsource_lib_eventsource_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eventsource_lib_eventsource_polyfill__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/hiroto/git/handson_nodejs/todo-sse/components/Todos.js\";\n// 外部のモジュールで公開されたものを利用するためのimport文\n\n\n\n\n // 各ページに関する情報の定義\n\nconst pages = {\n  index: {\n    title: 'すべてのTodo',\n    fetchQuery: ''\n  },\n  active: {\n    title: '未完了のTodo',\n    completed: false\n  },\n  completed: {\n    title: '完了したTodo',\n    completed: true\n  }\n}; // CSRでページを切り替えるためのリンク\n\nconst pageLinks = Object.keys(pages).map((page, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n  href: `/${page === 'index' ? '' : page}`,\n  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n    style: {\n      marginRight: 10\n    },\n    children: pages[page].title\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined)\n}, index, false, {\n  fileName: _jsxFileName,\n  lineNumber: 17,\n  columnNumber: 3\n}, undefined)); // Reactコンポーネントを実装し、外部のモジュールで利用可能なようexport文で公開\n\nfunction Todos(props) {\n  const {\n    title,\n    completed\n  } = pages[props.page]; // コンポーネントの状態の初期化と、propsの値に応じた更新\n\n  const {\n    0: todos,\n    1: setTodos\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    // fetchによるToDo取得の実装を削除\n    // fetch(`/api/todos${fetchQuery}`)\n    //   .then(async res => res.ok\n    //     ? setTodos(await res.json())\n    //     : alert(await res.text())\n    //   )\n    // EventSourceを使った実装に書き換え\n    const eventSource = new EventSource('/api/todos/events'); // SSE受信時の処理\n\n    eventSource.addEventListener('message', e => {\n      const todos = JSON.parse(e.data);\n      setTodos(typeof completed === 'undefined' ? todos : todos.filter(todo => todo.completed === completed));\n    }); // エラーハンドリング\n\n    eventSource.addEventListener('error', e => console.log('SSEエラー', e)); // useEffectで関数を返すと副作用のクリーンアップとして実行される\n\n    return () => eventSource.close();\n  }, [props.page]); // このコンポーネントが描画するUIをJSX構文で記述して返す\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: todos.map(({\n        id,\n        title,\n        completed\n      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          style: completed ? {\n            textDecoration: 'line-through'\n          } : {},\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, this)\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: pageLinks\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXNzZS8uL2NvbXBvbmVudHMvVG9kb3MuanM/ZDUyNSJdLCJuYW1lcyI6WyJwYWdlcyIsImluZGV4IiwidGl0bGUiLCJmZXRjaFF1ZXJ5IiwiYWN0aXZlIiwiY29tcGxldGVkIiwicGFnZUxpbmtzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInBhZ2UiLCJtYXJnaW5SaWdodCIsIlRvZG9zIiwicHJvcHMiLCJ0b2RvcyIsInNldFRvZG9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldmVudFNvdXJjZSIsIkV2ZW50U291cmNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiZmlsdGVyIiwidG9kbyIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsImlkIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHO0FBQ1pDLE9BQUssRUFBRTtBQUFFQyxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsY0FBVSxFQUFFO0FBQWpDLEdBREs7QUFFWkMsUUFBTSxFQUFFO0FBQUVGLFNBQUssRUFBRSxVQUFUO0FBQXFCRyxhQUFTLEVBQUU7QUFBaEMsR0FGSTtBQUdaQSxXQUFTLEVBQUU7QUFBRUgsU0FBSyxFQUFFLFVBQVQ7QUFBcUJHLGFBQVMsRUFBRTtBQUFoQztBQUhDLENBQWQsQyxDQU1BOztBQUNBLE1BQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlSLEtBQVosRUFBbUJTLEdBQW5CLENBQXVCLENBQUNDLElBQUQsRUFBT1QsS0FBUCxrQkFDdkMsOERBQUMsa0RBQUQ7QUFBTSxNQUFJLEVBQUcsSUFBR1MsSUFBSSxLQUFLLE9BQVQsR0FBbUIsRUFBbkIsR0FBd0JBLElBQUssRUFBN0M7QUFBQSx5QkFDRTtBQUFHLFNBQUssRUFBRTtBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FBVjtBQUFBLGNBQWdDWCxLQUFLLENBQUNVLElBQUQsQ0FBTCxDQUFZUjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsR0FBcURELEtBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZ0IsQ0FBbEIsQyxDQU1BOztBQUNlLFNBQVNXLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNuQyxRQUFNO0FBQUVYLFNBQUY7QUFBU0c7QUFBVCxNQUF1QkwsS0FBSyxDQUFDYSxLQUFLLENBQUNILElBQVAsQ0FBbEMsQ0FEbUMsQ0FHbkM7O0FBQ0EsUUFBTTtBQUFBLE9BQUNJLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxVQUFNQyxXQUFXLEdBQUcsSUFBSUMsV0FBSixDQUFnQixtQkFBaEIsQ0FBcEIsQ0FUYyxDQVdkOztBQUNBRCxlQUFXLENBQUNFLGdCQUFaLENBQTZCLFNBQTdCLEVBQXdDQyxDQUFDLElBQUk7QUFDM0MsWUFBTVAsS0FBSyxHQUFHUSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsQ0FBQyxDQUFDRyxJQUFiLENBQWQ7QUFDQVQsY0FBUSxDQUNOLE9BQU9WLFNBQVAsS0FBcUIsV0FBckIsR0FDRVMsS0FERixHQUVFQSxLQUFLLENBQUNXLE1BQU4sQ0FBYUMsSUFBSSxJQUFJQSxJQUFJLENBQUNyQixTQUFMLEtBQW1CQSxTQUF4QyxDQUhJLENBQVI7QUFLRCxLQVBELEVBWmMsQ0FxQmQ7O0FBQ0FhLGVBQVcsQ0FBQ0UsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0NDLENBQUMsSUFBSU0sT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlAsQ0FBdEIsQ0FBM0MsRUF0QmMsQ0F3QmQ7O0FBQ0EsV0FBTyxNQUFNSCxXQUFXLENBQUNXLEtBQVosRUFBYjtBQUNELEdBMUJRLEVBMEJOLENBQUNoQixLQUFLLENBQUNILElBQVAsQ0ExQk0sQ0FBVCxDQUxtQyxDQWlDbkM7O0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQVFSO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsZ0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBTUU7QUFBQSxnQkFDR1ksS0FBSyxDQUFDTCxHQUFOLENBQVUsQ0FBQztBQUFFcUIsVUFBRjtBQUFNNUIsYUFBTjtBQUFhRztBQUFiLE9BQUQsa0JBQ1Q7QUFBQSwrQkFDRTtBQUFNLGVBQUssRUFBRUEsU0FBUyxHQUFHO0FBQUUwQiwwQkFBYyxFQUFFO0FBQWxCLFdBQUgsR0FBd0MsRUFBOUQ7QUFBQSxvQkFDRzdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVM0QixFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQWVFO0FBQUEsZ0JBQU14QjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBLGtCQURGO0FBbUJEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub2Rvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWklumDqOOBruODouOCuOODpeODvOODq+OBp+WFrOmWi+OBleOCjOOBn+OCguOBruOCkuWIqeeUqOOBmeOCi+OBn+OCgeOBrmltcG9ydOaWh1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0ICdldmVudHNvdXJjZS9saWIvZXZlbnRzb3VyY2UtcG9seWZpbGwnO1xuXG4vLyDlkITjg5rjg7zjgrjjgavplqLjgZnjgovmg4XloLHjga7lrprnvqlcbmNvbnN0IHBhZ2VzID0ge1xuICBpbmRleDogeyB0aXRsZTogJ+OBmeOBueOBpuOBrlRvZG8nLCBmZXRjaFF1ZXJ5OiAnJyB9LFxuICBhY3RpdmU6IHsgdGl0bGU6ICfmnKrlrozkuobjga5Ub2RvJywgY29tcGxldGVkOiBmYWxzZSB9LFxuICBjb21wbGV0ZWQ6IHsgdGl0bGU6ICflrozkuobjgZfjgZ9Ub2RvJywgY29tcGxldGVkOiB0cnVlIH0sXG59O1xuXG4vLyBDU1Ljgafjg5rjg7zjgrjjgpLliIfjgormm7/jgYjjgovjgZ/jgoHjga7jg6rjg7Pjgq9cbmNvbnN0IHBhZ2VMaW5rcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5tYXAoKHBhZ2UsIGluZGV4KSA9PlxuICA8TGluayBocmVmPXtgLyR7cGFnZSA9PT0gJ2luZGV4JyA/ICcnIDogcGFnZX1gfSBrZXk9e2luZGV4fT5cbiAgICA8YSBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+e3BhZ2VzW3BhZ2VdLnRpdGxlfTwvYT5cbiAgPC9MaW5rPlxuKTtcblxuLy8gUmVhY3TjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgpLlrp/oo4XjgZfjgIHlpJbpg6jjga7jg6Ljgrjjg6Xjg7zjg6vjgafliKnnlKjlj6/og73jgarjgojjgYZleHBvcnTmlofjgaflhazplotcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGNvbXBsZXRlZCB9ID0gcGFnZXNbcHJvcHMucGFnZV07XG5cbiAgLy8g44Kz44Oz44Od44O844ON44Oz44OI44Gu54q25oWL44Gu5Yid5pyf5YyW44Go44CBcHJvcHPjga7lgKTjgavlv5zjgZjjgZ/mm7TmlrBcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZmV0Y2jjgavjgojjgotUb0Rv5Y+W5b6X44Gu5a6f6KOF44KS5YmK6ZmkXG4gICAgLy8gZmV0Y2goYC9hcGkvdG9kb3Mke2ZldGNoUXVlcnl9YClcbiAgICAvLyAgIC50aGVuKGFzeW5jIHJlcyA9PiByZXMub2tcbiAgICAvLyAgICAgPyBzZXRUb2Rvcyhhd2FpdCByZXMuanNvbigpKVxuICAgIC8vICAgICA6IGFsZXJ0KGF3YWl0IHJlcy50ZXh0KCkpXG4gICAgLy8gICApXG5cbiAgICAvLyBFdmVudFNvdXJjZeOCkuS9v+OBo+OBn+Wun+ijheOBq+abuOOBjeaPm+OBiFxuICAgIGNvbnN0IGV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvYXBpL3RvZG9zL2V2ZW50cycpO1xuXG4gICAgLy8gU1NF5Y+X5L+h5pmC44Gu5Yem55CGXG4gICAgZXZlbnRTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGUgPT4ge1xuICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICBzZXRUb2RvcyhcbiAgICAgICAgdHlwZW9mIGNvbXBsZXRlZCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0b2Rvc1xuICAgICAgICA6IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkID09PSBjb21wbGV0ZWQpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8g44Ko44Op44O844OP44Oz44OJ44Oq44Oz44KwXG4gICAgZXZlbnRTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IGNvbnNvbGUubG9nKCdTU0Xjgqjjg6njg7wnLCBlKSk7XG5cbiAgICAvLyB1c2VFZmZlY3TjgafplqLmlbDjgpLov5TjgZnjgajlia/kvZznlKjjga7jgq/jg6rjg7zjg7PjgqLjg4Pjg5fjgajjgZfjgablrp/ooYzjgZXjgozjgotcbiAgICByZXR1cm4gKCkgPT4gZXZlbnRTb3VyY2UuY2xvc2UoKTtcbiAgfSwgW3Byb3BzLnBhZ2VdKTtcblxuICAvLyDjgZPjga7jgrPjg7Pjg53jg7zjg43jg7Pjg4jjgYzmj4/nlLvjgZnjgotVSeOCkkpTWOani+aWh+OBp+iomOi/sOOBl+OBpui/lOOBmVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgey8qIFRvZG/kuIDopqfjga7ooajnpLogKi99XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHsgaWQsIHRpdGxlLCBjb21wbGV0ZWQgfSkgPT5cbiAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17Y29tcGxldGVkID8geyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSA6IHt9fT5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdj57cGFnZUxpbmtzfTwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Todos.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Todos */ \"./components/Todos.js\");\n\nvar _jsxFileName = \"/home/hiroto/git/handson_nodejs/todo-sse/pages/index.js\";\n\nfunction Index() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todos__WEBPACK_IMPORTED_MODULE_1__.default, {\n    page: \"index\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXNzZS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixzQkFBTyw4REFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kb3MgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2Rvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPFRvZG9zIHBhZ2U9XCJpbmRleFwiLz5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "eventsource/lib/eventsource-polyfill":
/*!*******************************************************!*\
  !*** external "eventsource/lib/eventsource-polyfill" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("eventsource/lib/eventsource-polyfill");;

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("isomorphic-fetch");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();