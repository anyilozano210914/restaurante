(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservas.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reservas.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      reservas: [],
      headers: [{
        text: 'id',
        value: 'id'
      }, {
        text: 'nombre',
        value: 'client'
      }, {
        text: 'documento',
        value: 'documento'
      }, {
        text: 'fecha',
        value: 'fecha'
      }, {
        text: 'hora',
        value: 'hora'
      }, {
        text: 'Acciones',
        value: 'action'
      }],
      notification: false,
      message: '',
      color: '',
      timeout: 6000,
      fab: false
    };
  },
  created: function created() {
    this.getReservas();
  },
  methods: {
    getReservas: function getReservas() {
      var _this = this;

      axios.get('/api/reservas/getReservas').then(function (res) {
        _this.reservas = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    goToCreateReservas: function goToCreateReservas() {
      this.$router.push('/CreateReserva');
    },
    deleteReservas: function deleteReservas(item) {
      var _this2 = this;

      axios["delete"]('/api/reservas/deleteReservas/' + item.id).then(function (res) {
        _this2.notification = true;
        _this2.message = res.data;
        _this2.color = 'success';

        _this2.getReservas();
      })["catch"](function (err) {
        _this2.notification = true;
        _this2.message = 'Ocurrio un error al momento de eliminar las reservas.';
        _this2.color = 'error';
      });
    },
    goToEdit: function goToEdit(item) {
      this.$router.push('/editReservas/' + item.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservas.vue?vue&type=template&id=5c2a6ab4&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reservas.vue?vue&type=template&id=5c2a6ab4& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-container",
        [
          _c(
            "v-btn",
            { attrs: { color: "pink" }, on: { click: _vm.goToCreateReservas } },
            [_vm._v("crear")]
          ),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.reservas,
              "items-per-page": 5
            },
            scopedSlots: _vm._u([
              {
                key: "item.action",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          {
                            attrs: { color: "primary", "x-small": "" },
                            on: {
                              click: function($event) {
                                return _vm.goToEdit(item)
                              }
                            }
                          },
                          "v-btn",
                          _vm.attrs,
                          false
                        ),
                        _vm.on
                      ),
                      [_vm._v("Modificar Reserva")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "blue", "x-small": "" },
                        on: {
                          click: function($event) {
                            return _vm.deleteReservas(item)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    eliminar\n                "
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: { timeout: _vm.timeout, top: true, right: true },
              scopedSlots: _vm._u([
                {
                  key: "action",
                  fn: function(ref) {
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._b(
                          {
                            attrs: { color: "blue", text: "" },
                            on: {
                              click: function($event) {
                                _vm.notification = false
                              }
                            }
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        [_vm._v("\n                x\n            ")]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.notification,
                callback: function($$v) {
                  _vm.notification = $$v
                },
                expression: "notification"
              }
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.message) + "\n\n            "
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Reservas.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Reservas.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservas_vue_vue_type_template_id_5c2a6ab4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservas.vue?vue&type=template&id=5c2a6ab4& */ "./resources/js/components/Reservas.vue?vue&type=template&id=5c2a6ab4&");
/* harmony import */ var _Reservas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservas.vue?vue&type=script&lang=js& */ "./resources/js/components/Reservas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservas_vue_vue_type_template_id_5c2a6ab4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservas_vue_vue_type_template_id_5c2a6ab4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reservas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reservas.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Reservas.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Reservas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reservas.vue?vue&type=template&id=5c2a6ab4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Reservas.vue?vue&type=template&id=5c2a6ab4& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservas_vue_vue_type_template_id_5c2a6ab4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Reservas.vue?vue&type=template&id=5c2a6ab4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservas.vue?vue&type=template&id=5c2a6ab4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservas_vue_vue_type_template_id_5c2a6ab4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservas_vue_vue_type_template_id_5c2a6ab4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);