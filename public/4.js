(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditReserva.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditReserva.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notification: false,
      message: '',
      color: '',
      timeout: 6000,
      reservas: []
    };
  },
  mounted: function mounted() {
    this.getReservas();
    this.param = this.$route.params.id;
  },
  computed: {
    reserva: function reserva() {
      var _this = this;

      var reservas = {};
      this.reservas.map(function (item) {
        if (item.id == _this.param) {
          reservas = item;
        }
      });
      return reservas;
    }
  },
  methods: {
    getReservas: function getReservas() {
      var _this2 = this;

      axios.get('/api/reservas/getReservas').then(function (res) {
        _this2.reservas = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    goToBack: function goToBack() {
      this.$router.push('/');
    },
    EditReservas: function EditReservas() {
      var _this3 = this;

      if (!this.reserva.client) {
        this.notification = true;
        this.message = 'No has introcido el nombre del cliente';
        this.color = 'error';
      } else if (!this.reserva.documento) {
        this.notification = true;
        this.message = 'No has introcido el docuemento';
        this.color = 'error';
      } else if (!this.reserva.fecha) {
        this.notification = true;
        this.message = 'No has introcido la fecha';
        this.color = 'error';
      } else if (!this.reserva.hora) {
        this.notification = true;
        this.message = 'No has introcido la hora';
        this.color = 'error';
      } else {
        var data = {
          id: this.param,
          client: this.reserva.client,
          documento: this.reserva.documento,
          fecha: this.reserva.fecha,
          hora: this.reserva.hora
        };
        axios.post('/api/reservas/EditReservas', data).then(function (response) {
          _this3.notification = true;
          _this3.message = response.data[0];
          _this3.color = 'success';
          window.location = '/';
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditReserva.vue?vue&type=template&id=2188499a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditReserva.vue?vue&type=template&id=2188499a& ***!
  \**************************************************************************************************************************************************************************************************************/
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
            "v-form",
            { ref: "form", attrs: { "lazy-validation": true } },
            [
              _c("v-text-field", {
                attrs: { label: "Cliente" },
                model: {
                  value: _vm.reserva.client,
                  callback: function($$v) {
                    _vm.$set(_vm.reserva, "client", $$v)
                  },
                  expression: "reserva.client"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Documento" },
                model: {
                  value: _vm.reserva.documento,
                  callback: function($$v) {
                    _vm.$set(_vm.reserva, "documento", $$v)
                  },
                  expression: "reserva.documento"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Fecha" },
                model: {
                  value: _vm.reserva.fecha,
                  callback: function($$v) {
                    _vm.$set(_vm.reserva, "fecha", $$v)
                  },
                  expression: "reserva.fecha"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Hora" },
                model: {
                  value: _vm.reserva.hora,
                  callback: function($$v) {
                    _vm.$set(_vm.reserva, "hora", $$v)
                  },
                  expression: "reserva.hora"
                }
              }),
              _vm._v(" "),
              _c("v-btn", { on: { click: _vm.goToBack } }, [_vm._v("Volver")]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary" },
                  on: { click: _vm.EditReservas }
                },
                [_vm._v("Editar")]
              )
            ],
            1
          ),
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

/***/ "./resources/js/components/EditReserva.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/EditReserva.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditReserva_vue_vue_type_template_id_2188499a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditReserva.vue?vue&type=template&id=2188499a& */ "./resources/js/components/EditReserva.vue?vue&type=template&id=2188499a&");
/* harmony import */ var _EditReserva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditReserva.vue?vue&type=script&lang=js& */ "./resources/js/components/EditReserva.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditReserva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditReserva_vue_vue_type_template_id_2188499a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditReserva_vue_vue_type_template_id_2188499a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditReserva.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditReserva.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/EditReserva.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReserva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditReserva.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditReserva.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReserva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditReserva.vue?vue&type=template&id=2188499a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/EditReserva.vue?vue&type=template&id=2188499a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReserva_vue_vue_type_template_id_2188499a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditReserva.vue?vue&type=template&id=2188499a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditReserva.vue?vue&type=template&id=2188499a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReserva_vue_vue_type_template_id_2188499a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReserva_vue_vue_type_template_id_2188499a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);