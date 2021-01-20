(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Table.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Table.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
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
  name: "Table",
  data: function data() {
    return {
      dialog: false,
      dialogDelete: false,
      mdiPencil: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiPencil"],
      mdiDelete: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiDelete"],
      mdiChevronRight: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiChevronRight"],
      mdiChevronLeft: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiChevronLeft"],
      deleteItemId: 0
    };
  },
  props: ["headers", "data", "search", "component", "loading"],
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    getHeaders: function getHeaders() {
      return this.$props.headers;
    },
    getData: function getData() {
      return this.$props.data;
    },
    doSearch: function doSearch() {
      return this.$props.search;
    },
    getLoaderState: function getLoaderState() {
      return this.$props.loading;
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {},
  methods: {
    editItem: function editItem(item) {
      if (this.$props.component === 0) {
        this.$router.push({
          name: 'Edit Category',
          params: {
            id: item.id,
            item: item
          }
        });
      } else if (this.$props.component === 1) {
        this.$router.push({
          name: 'Edit Product',
          params: {
            id: item.id,
            item: item
          }
        });
      }
    },
    deleteItem: function deleteItem(item) {
      this.deleteItemId = item.id;
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      if (this.$props.component === 0) {
        var userInput = {
          id: this.deleteItemId
        };
        this.$store.dispatch("categoryModule/remove", userInput);
      } else if (this.$props.component === 1) {
        var _userInput = {
          id: this.deleteItemId
        };
        this.$store.dispatch("productModule/remove", _userInput);
      }

      this.closeDelete();
    },
    close: function close() {
      this.dialog = false; // this.$nextTick(() => {
      //   this.editedItem = Object.assign({}, this.defaultItem);
      //   this.editedIndex = -1;
      // });
    },
    closeDelete: function closeDelete() {
      this.dialogDelete = false; // this.$nextTick(() => {
      //   this.editedItem = Object.assign({}, this.defaultItem);
      //   this.editedIndex = -1;
      // });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Product.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Table */ "./resources/js/components/common/Table.vue");
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
  name: 'Product',
  components: {
    Table: _common_Table__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: "Id",
        align: "start",
        value: "id"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Category",
        value: "category.name"
      }, {
        text: "Short Description",
        value: "short_description"
      }, {
        text: "Long Description",
        value: "long_description"
      }, {
        text: "actions",
        value: "actions",
        sortable: false
      }],
      data: [],
      search: "",
      loading: true
    };
  },
  created: function created() {
    this.initialize();
  },
  computed: {
    getData: function getData() {
      this.data = this.$store.state.productModule.products;
      return this.data;
    }
  },
  methods: {
    initialize: function initialize() {
      this.$store.dispatch('categoryModule/read');
      this.$store.dispatch('productModule/read');
      this.loading = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Table.vue?vue&type=template&id=9b028d56&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Table.vue?vue&type=template&id=9b028d56& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.getHeaders,
      items: _vm.getData,
      "sort-by": "calories",
      "footer-props": {
        prevIcon: _vm.mdiChevronLeft,
        nextIcon: _vm.mdiChevronRight
      },
      search: _vm.doSearch,
      loading: _vm.getLoaderState
    },
    scopedSlots: _vm._u(
      [
        {
          key: "top",
          fn: function() {
            return [
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "500px" },
                  model: {
                    value: _vm.dialogDelete,
                    callback: function($$v) {
                      _vm.dialogDelete = $$v
                    },
                    expression: "dialogDelete"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", { staticClass: "headline" }, [
                        _vm._v("Are you sure you want to delete this item?")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: { click: _vm.closeDelete }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: { click: _vm.deleteItemConfirm }
                            },
                            [_vm._v("OK")]
                          ),
                          _vm._v(" "),
                          _c("v-spacer")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        },
        {
          key: "item.actions",
          fn: function(ref) {
            var item = ref.item
            return [
              _c(
                "v-icon",
                {
                  staticClass: "mr-2",
                  attrs: { small: "" },
                  on: {
                    click: function($event) {
                      return _vm.editItem(item)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.mdiPencil))]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  attrs: { small: "" },
                  on: {
                    click: function($event) {
                      return _vm.deleteItem(item)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.mdiDelete))]
              )
            ]
          }
        }
      ],
      null,
      true
    )
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Product.vue?vue&type=template&id=1f243698&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Product.vue?vue&type=template&id=1f243698& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { attrs: { fluid: "" } },
    [
      _c(
        "v-toolbar",
        { attrs: { flat: "" } },
        [
          _c("v-text-field", {
            attrs: { label: "Search" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          }),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "mx-4",
            attrs: { inset: "", vertical: "" }
          }),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: "/product/add" } },
            [
              _c(
                "v-btn",
                { staticClass: "mb-2", attrs: { color: "primary", dark: "" } },
                [_vm._v(" New Item ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Table", {
        attrs: {
          headers: _vm.headers,
          data: _vm.getData,
          search: _vm.search,
          component: 1,
          loading: _vm.loading
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/common/Table.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/common/Table.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_9b028d56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=9b028d56& */ "./resources/js/components/common/Table.vue?vue&type=template&id=9b028d56&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/components/common/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_9b028d56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_9b028d56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/Table.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/common/Table.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/Table.vue?vue&type=template&id=9b028d56&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/common/Table.vue?vue&type=template&id=9b028d56& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_9b028d56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=9b028d56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Table.vue?vue&type=template&id=9b028d56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_9b028d56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_9b028d56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/product/Product.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/product/Product.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_1f243698___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=1f243698& */ "./resources/js/components/product/Product.vue?vue&type=template&id=1f243698&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_1f243698___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_1f243698___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/product/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/Product.vue?vue&type=template&id=1f243698&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/product/Product.vue?vue&type=template&id=1f243698& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1f243698___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=1f243698& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Product.vue?vue&type=template&id=1f243698&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1f243698___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1f243698___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);