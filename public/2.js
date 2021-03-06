(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddProduct",
  data: function data() {
    return {
      name: "",
      shortDesc: "",
      longDesc: "",
      categoryId: ""
    };
  },
  props: ["item"],
  validations: {
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    shortDesc: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    longDesc: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(100)
    },
    categoryId: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  },
  created: function created() {
    if (this.$route.params.id) {
      this.initialize();
    }
  },
  computed: {
    getTitle: function getTitle() {
      return this.$route.params.id ? "Edit Product" : "Add Product";
    },
    nameErrors: function nameErrors() {
      var error = [];
      if (!this.$v.name.$dirty) return error;
      !this.$v.name.required && error.push("Name is required");
      return error;
    },
    shortDescErrors: function shortDescErrors() {
      var error = [];
      if (!this.$v.shortDesc.$dirty) return error;
      !this.$v.shortDesc.required && error.push("Short description is required");
      return error;
    },
    longDescErrors: function longDescErrors() {
      var error = [];
      if (!this.$v.longDesc.$dirty) return error;
      !this.$v.longDesc.required && error.push("Long description is required");
      !this.$v.longDesc.maxLength && error.push("Long description is must be less than 100 characters");
      return error;
    },
    categoryIdErrors: function categoryIdErrors() {
      var error = [];
      if (!this.$v.categoryId.$dirty) return error;
      !this.$v.categoryId.required && error.push("Category Id is required");
      return error;
    },
    getCategoryList: function getCategoryList() {
      return this.$store.state.categoryModule.categories;
    }
  },
  methods: {
    goBack: function goBack() {
      this.$router.back();
    },
    initialize: function initialize() {
      var _this = this;

      this.name = this.$props.item.name;
      this.shortDesc = this.$props.item.short_description;
      this.longDesc = this.$props.item.long_description;
      this.categoryId = this.$store.state.categoryModule.categories.find(function (x) {
        return x.id === _this.$props.item.category_id;
      }).id;
    },
    submit: function submit() {
      if (this.$route.params.id) {
        var userInput = {
          id: this.$route.params.id,
          name: this.name,
          short_description: this.shortDesc,
          long_description: this.longDesc,
          category_id: this.categoryId
        };
        this.$store.dispatch("productModule/edit", userInput);
      } else {
        var _userInput = {
          name: this.name,
          short_description: this.shortDesc,
          long_description: this.longDesc,
          category_id: this.categoryId
        };
        this.$store.dispatch("productModule/add", _userInput);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Add.vue?vue&type=template&id=5c07c5e6&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Add.vue?vue&type=template&id=5c07c5e6& ***!
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
    "v-container",
    [
      _c(
        "v-toolbar",
        { attrs: { flat: "" } },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mb-2",
              attrs: { color: "primary", dark: "" },
              on: {
                click: function($event) {
                  return _vm.goBack()
                }
              }
            },
            [_vm._v("\n            Go Back\n        ")]
          ),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "mx-4",
            attrs: { inset: "", vertical: "" }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mb-2",
              attrs: { color: "primary", disabled: this.$v.$invalid },
              on: {
                click: function($event) {
                  return _vm.submit()
                }
              }
            },
            [_vm._v("\n            Save\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "justify-center" },
        [
          _c(
            "v-card-text",
            [
              _c("v-autocomplete", {
                attrs: {
                  label: "Category Id",
                  placeholder: "Category Id",
                  outlined: "",
                  "error-messages": _vm.categoryIdErrors,
                  items: _vm.getCategoryList,
                  "item-text": "name",
                  "item-value": "id"
                },
                on: {
                  input: function($event) {
                    return _vm.$v.categoryId.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.categoryId.$touch()
                  }
                },
                model: {
                  value: _vm.categoryId,
                  callback: function($$v) {
                    _vm.categoryId = $$v
                  },
                  expression: "categoryId"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: "Product name",
                  placeholder: "Product name",
                  outlined: "",
                  "error-messages": _vm.nameErrors
                },
                on: {
                  input: function($event) {
                    return _vm.$v.name.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.name.$touch()
                  }
                },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: "Product short description",
                  placeholder: "Product short description",
                  outlined: "",
                  "error-messages": _vm.shortDescErrors
                },
                on: {
                  input: function($event) {
                    return _vm.$v.shortDesc.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.shortDesc.$touch()
                  }
                },
                model: {
                  value: _vm.shortDesc,
                  callback: function($$v) {
                    _vm.shortDesc = $$v
                  },
                  expression: "shortDesc"
                }
              }),
              _vm._v(" "),
              _c("v-textarea", {
                attrs: {
                  label: "Product long description",
                  placeholder: "Product long description",
                  outlined: "",
                  counter: "100",
                  "error-messages": _vm.longDescErrors
                },
                on: {
                  input: function($event) {
                    return _vm.$v.longDesc.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.longDesc.$touch()
                  }
                },
                model: {
                  value: _vm.longDesc,
                  callback: function($$v) {
                    _vm.longDesc = $$v
                  },
                  expression: "longDesc"
                }
              })
            ],
            1
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

/***/ "./resources/js/components/product/Add.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/product/Add.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_5c07c5e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=5c07c5e6& */ "./resources/js/components/product/Add.vue?vue&type=template&id=5c07c5e6&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/product/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_5c07c5e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_5c07c5e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/product/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/Add.vue?vue&type=template&id=5c07c5e6&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/product/Add.vue?vue&type=template&id=5c07c5e6& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5c07c5e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=5c07c5e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Add.vue?vue&type=template&id=5c07c5e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5c07c5e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5c07c5e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);