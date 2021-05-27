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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/hiroto/git/handson_nodejs/todo-socket-io/components/Todos.js\";\n\n\n\n // 各ページに関する情報の定義\n\nconst pages = {\n  index: {\n    title: 'すべてのToDo'\n  },\n  active: {\n    title: '未完了のToDo',\n    completed: false\n  },\n  completed: {\n    title: '完了したToDo',\n    completed: true\n  }\n}; // CSRでページを切り替えるためのリンク\n\nconst pageLinks = Object.keys(pages).map((page, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n  href: `/${page === 'index' ? '' : page}`,\n  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n    style: {\n      marginRight: 10\n    },\n    children: pages[page].title\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, undefined)\n}, index, false, {\n  fileName: _jsxFileName,\n  lineNumber: 15,\n  columnNumber: 3\n}, undefined));\nfunction Todos(props) {\n  const {\n    title,\n    completed\n  } = pages[props.page];\n  const {\n    0: todos,\n    1: setTodos\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // socketをstateとして保持\n\n  const {\n    0: socket,\n    1: setSocket\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    // socketの生成\n    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()('/todos');\n    socket.on('todos', todos => {\n      setTodos(typeof completed === 'undefined' ? todos : todos.filter(todo => todo.completed === completed));\n    });\n    setSocket(socket); // コンポーネントのクリーンアップ時にsocketをクローズ\n\n    return () => socket.close();\n  }, [props.page]); // JSX\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      children: [\"\\u65B0\\u3057\\u3044ToDo\\u3092\\u5165\\u529B\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        onKeyPress: e => {\n          // Enterキーが押されたらToDoを登録する\n          const title = e.target.value;\n\n          if (e.key !== 'Enter' || !title) {\n            return;\n          }\n\n          e.target.value = '';\n          socket.emit('createTodo', title);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: todos.map(({\n        id,\n        title,\n        completed\n      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          style: completed ? {\n            textDecoration: 'line-through'\n          } : {},\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"checkbox\",\n            checked: completed,\n            onChange: e => socket.emit('updateCompleted', id, e.target.checked)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, this), title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: () => socket.emit('deleteTodo', id),\n          children: \"\\u524A\\u9664\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, this)]\n      }, id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: pageLinks\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXNvY2tldC1pby8uL2NvbXBvbmVudHMvVG9kb3MuanM/ZDUyNSJdLCJuYW1lcyI6WyJwYWdlcyIsImluZGV4IiwidGl0bGUiLCJhY3RpdmUiLCJjb21wbGV0ZWQiLCJwYWdlTGlua3MiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGFnZSIsIm1hcmdpblJpZ2h0IiwiVG9kb3MiLCJwcm9wcyIsInRvZG9zIiwic2V0VG9kb3MiLCJ1c2VTdGF0ZSIsInNvY2tldCIsInNldFNvY2tldCIsInVzZUVmZmVjdCIsImlvIiwib24iLCJmaWx0ZXIiLCJ0b2RvIiwiY2xvc2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJrZXkiLCJlbWl0IiwiaWQiLCJ0ZXh0RGVjb3JhdGlvbiIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHO0FBQ1pDLE9BQUssRUFBRTtBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQURLO0FBRVpDLFFBQU0sRUFBRTtBQUFFRCxTQUFLLEVBQUUsVUFBVDtBQUFxQkUsYUFBUyxFQUFFO0FBQWhDLEdBRkk7QUFHWkEsV0FBUyxFQUFFO0FBQUVGLFNBQUssRUFBRSxVQUFUO0FBQXFCRSxhQUFTLEVBQUU7QUFBaEM7QUFIQyxDQUFkLEMsQ0FNQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxLQUFaLEVBQW1CUSxHQUFuQixDQUF1QixDQUFDQyxJQUFELEVBQU9SLEtBQVAsa0JBQ3ZDLDhEQUFDLGtEQUFEO0FBQU0sTUFBSSxFQUFHLElBQUdRLElBQUksS0FBSyxPQUFULEdBQW1CLEVBQW5CLEdBQXdCQSxJQUFLLEVBQTdDO0FBQUEseUJBQ0U7QUFBRyxTQUFLLEVBQUU7QUFBRUMsaUJBQVcsRUFBRTtBQUFmLEtBQVY7QUFBQSxjQUFnQ1YsS0FBSyxDQUFDUyxJQUFELENBQUwsQ0FBWVA7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEdBQXFERCxLQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGdCLENBQWxCO0FBTWUsU0FBU1UsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ25DLFFBQU07QUFBRVYsU0FBRjtBQUFTRTtBQUFULE1BQXVCSixLQUFLLENBQUNZLEtBQUssQ0FBQ0gsSUFBUCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDSSxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxFQUFELENBQWxDLENBRm1DLENBSW5DOztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsK0NBQVEsRUFBcEM7QUFFQUcsa0RBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxVQUFNRixNQUFNLEdBQUdHLHVEQUFFLENBQUMsUUFBRCxDQUFqQjtBQUNBSCxVQUFNLENBQUNJLEVBQVAsQ0FBVSxPQUFWLEVBQW1CUCxLQUFLLElBQUk7QUFDMUJDLGNBQVEsQ0FDTixPQUFPVixTQUFQLEtBQXFCLFdBQXJCLEdBQ0lTLEtBREosR0FFSUEsS0FBSyxDQUFDUSxNQUFOLENBQWFDLElBQUksSUFBSUEsSUFBSSxDQUFDbEIsU0FBTCxLQUFtQkEsU0FBeEMsQ0FIRSxDQUFSO0FBS0QsS0FORDtBQU9BYSxhQUFTLENBQUNELE1BQUQsQ0FBVCxDQVZjLENBV2Q7O0FBQ0EsV0FBTyxNQUFNQSxNQUFNLENBQUNPLEtBQVAsRUFBYjtBQUNELEdBYlEsRUFhTixDQUFDWCxLQUFLLENBQUNILElBQVAsQ0FiTSxDQUFULENBUG1DLENBc0JuQzs7QUFDQSxzQkFDRTtBQUFBLDRCQUVFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUVA7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBS0U7QUFBQSxnQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBLDBFQUVFO0FBQU8sa0JBQVUsRUFBRXNCLENBQUMsSUFBSTtBQUN0QjtBQUNBLGdCQUFNdEIsS0FBSyxHQUFHc0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXZCOztBQUNBLGNBQUlGLENBQUMsQ0FBQ0csR0FBRixLQUFVLE9BQVYsSUFBcUIsQ0FBQ3pCLEtBQTFCLEVBQWlDO0FBQy9CO0FBQ0Q7O0FBQ0RzQixXQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxHQUFpQixFQUFqQjtBQUNBVixnQkFBTSxDQUFDWSxJQUFQLENBQVksWUFBWixFQUEwQjFCLEtBQTFCO0FBQ0Q7QUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFtQkU7QUFBQSxnQkFDR1csS0FBSyxDQUFDTCxHQUFOLENBQVUsQ0FBQztBQUFFcUIsVUFBRjtBQUFNM0IsYUFBTjtBQUFhRTtBQUFiLE9BQUQsa0JBQ1Q7QUFBQSxnQ0FDRTtBQUFPLGVBQUssRUFBRUEsU0FBUyxHQUFHO0FBQUUwQiwwQkFBYyxFQUFFO0FBQWxCLFdBQUgsR0FBd0MsRUFBL0Q7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLG1CQUFPLEVBQUUxQixTQUZYO0FBR0Usb0JBQVEsRUFBRW9CLENBQUMsSUFDVFIsTUFBTSxDQUFDWSxJQUFQLENBQVksaUJBQVosRUFBK0JDLEVBQS9CLEVBQW1DTCxDQUFDLENBQUNDLE1BQUYsQ0FBU00sT0FBNUM7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBUUc3QixLQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVdFO0FBQVEsaUJBQU8sRUFBRSxNQUFNYyxNQUFNLENBQUNZLElBQVAsQ0FBWSxZQUFaLEVBQTBCQyxFQUExQixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBLFNBQVNBLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRixlQW9DRTtBQUFBLGdCQUFNeEI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENGO0FBQUEsa0JBREY7QUF3Q0Q7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9kb3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbi8vIOWQhOODmuODvOOCuOOBq+mWouOBmeOCi+aDheWgseOBruWumue+qVxuY29uc3QgcGFnZXMgPSB7XG4gIGluZGV4OiB7IHRpdGxlOiAn44GZ44G544Gm44GuVG9EbycgfSxcbiAgYWN0aXZlOiB7IHRpdGxlOiAn5pyq5a6M5LqG44GuVG9EbycsIGNvbXBsZXRlZDogZmFsc2UgfSxcbiAgY29tcGxldGVkOiB7IHRpdGxlOiAn5a6M5LqG44GX44GfVG9EbycsIGNvbXBsZXRlZDogdHJ1ZSB9XG59O1xuXG4vLyBDU1Ljgafjg5rjg7zjgrjjgpLliIfjgormm7/jgYjjgovjgZ/jgoHjga7jg6rjg7Pjgq9cbmNvbnN0IHBhZ2VMaW5rcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5tYXAoKHBhZ2UsIGluZGV4KSA9PlxuICA8TGluayBocmVmPXtgLyR7cGFnZSA9PT0gJ2luZGV4JyA/ICcnIDogcGFnZX1gfSBrZXk9e2luZGV4fT5cbiAgICA8YSBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+e3BhZ2VzW3BhZ2VdLnRpdGxlfTwvYT5cbiAgPC9MaW5rPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb3MocHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgY29tcGxldGVkIH0gPSBwYWdlc1twcm9wcy5wYWdlXTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gc29ja2V044KSc3RhdGXjgajjgZfjgabkv53mjIFcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzb2NrZXTjga7nlJ/miJBcbiAgICBjb25zdCBzb2NrZXQgPSBpbygnL3RvZG9zJyk7XG4gICAgc29ja2V0Lm9uKCd0b2RvcycsIHRvZG9zID0+IHtcbiAgICAgIHNldFRvZG9zKFxuICAgICAgICB0eXBlb2YgY29tcGxldGVkID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgID8gdG9kb3NcbiAgICAgICAgICA6IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkID09PSBjb21wbGV0ZWQpXG4gICAgICApO1xuICAgIH0pO1xuICAgIHNldFNvY2tldChzb2NrZXQpO1xuICAgIC8vIOOCs+ODs+ODneODvOODjeODs+ODiOOBruOCr+ODquODvOODs+OCouODg+ODl+aZguOBq3NvY2tldOOCkuOCr+ODreODvOOCulxuICAgIHJldHVybiAoKSA9PiBzb2NrZXQuY2xvc2UoKTtcbiAgfSwgW3Byb3BzLnBhZ2VdKTtcblxuICAvLyBKU1hcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIC4uLiAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIOaWsOOBl+OBhFRvRG/jgpLlhaXliptcbiAgICAgICAgPGlucHV0IG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgIC8vIEVudGVy44Kt44O844GM5oq844GV44KM44Gf44KJVG9Eb+OCkueZu+mMsuOBmeOCi1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgaWYgKGUua2V5ICE9PSAnRW50ZXInIHx8ICF0aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICAgIHNvY2tldC5lbWl0KCdjcmVhdGVUb2RvJywgdGl0bGUpO1xuICAgICAgICB9fS8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgey8qIFRvRG/kuIDopqcgKi99XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHsgaWQsIHRpdGxlLCBjb21wbGV0ZWQgfSkgPT5cbiAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2NvbXBsZXRlZCA/IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0gOiB7fX0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5cbiAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCd1cGRhdGVDb21wbGV0ZWQnLCBpZCwgZS50YXJnZXQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNvY2tldC5lbWl0KCdkZWxldGVUb2RvJywgaWQpfT7liYrpmaQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXY+e3BhZ2VMaW5rc308L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Todos.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Todos */ \"./components/Todos.js\");\n\nvar _jsxFileName = \"/home/hiroto/git/handson_nodejs/todo-socket-io/pages/index.js\";\n\nfunction Index() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todos__WEBPACK_IMPORTED_MODULE_1__.default, {\n    page: \"index\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXNvY2tldC1pby8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixzQkFBTyw4REFBQyxzREFBRDtBQUFPLFFBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kb3MgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2Rvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPFRvZG9zIHBhZ2U9XCJpbmRleFwiLz5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

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