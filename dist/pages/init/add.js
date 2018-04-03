'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InitAddWorkbook = function (_wepy$page) {
  _inherits(InitAddWorkbook, _wepy$page);

  function InitAddWorkbook() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InitAddWorkbook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InitAddWorkbook.__proto__ || Object.getPrototypeOf(InitAddWorkbook)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题归纳本初中数学'
    }, _this.$repeat = {}, _this.$props = { "searchField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_search", "componentId": "searchField" } }, _this.$events = {}, _this.components = {
      searchField: _zanField2.default
    }, _this.data = {
      gradeName: '',
      textbookId: '',
      workbookList: [],
      base_search: {
        title: '',
        value: '',
        placeholder: '请输入练习册名称'
      }
    }, _this.events = {
      zanFieldChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.base_search.value = e.detail.value;
                  _context.next = 3;
                  return this._getAllWorkbook(this.textbookId, this.base_search.value);

                case 3:
                  this.workbookList = _context.sent;

                  this.$apply();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function zanFieldChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return zanFieldChange;
      }()
    }, _this.methods = {
      /** 查看练习册大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-workbookBig', urls: [url + '-workbookBig'] });
      },

      /** 练习册增加取消 */
      _edit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index, id) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._setWorkbook(id);

                case 2:
                  this.workbookList[index].status = _context2.sent;

                  this.$apply();

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _edit(_x2, _x3) {
          return _ref3.apply(this, arguments);
        }

        return _edit;
      }(),

      /** 进入我的资料 */
      _intoChapter: function _intoChapter(item) {
        _wepy2.default.reLaunch({
          url: '/pages/my/index?from=init&name=' + item.name + '&id=' + item.id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InitAddWorkbook, [{
    key: '_getAllWorkbook',


    /** 获取全部练习册 */
    value: function _getAllWorkbook(id, name) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/all',
          data: {
            textbookId: id,
            name: name
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }

    /** 编辑练习册 */

  }, {
    key: '_setWorkbook',
    value: function _setWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/edit',
          method: 'POST',
          data: {
            workbookId: id
          },
          success: function success(res) {
            resolve(res.status);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.gradeName = options.name;
                this.textbookId = options.textbookId;
                _context3.next = 4;
                return this._getAllWorkbook(this.textbookId, this.base_search.value);

              case 4:
                this.workbookList = _context3.sent;

                this.$apply();

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x4) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return InitAddWorkbook;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(InitAddWorkbook , 'pages/init/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJJbml0QWRkV29ya2Jvb2siLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VhcmNoRmllbGQiLCJkYXRhIiwiZ3JhZGVOYW1lIiwidGV4dGJvb2tJZCIsIndvcmtib29rTGlzdCIsImJhc2Vfc2VhcmNoIiwidGl0bGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiX2dldEFsbFdvcmtib29rIiwiJGFwcGx5IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfZWRpdCIsImluZGV4IiwiaWQiLCJfc2V0V29ya2Jvb2siLCJzdGF0dXMiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwicmVMYXVuY2giLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJtZXRob2QiLCJ3b3JrYm9va0lkIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGFBQXpDLEVBQXVELGVBQWMsYUFBckUsRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxvQkFBYyxFQUhUO0FBSUxDLG1CQUFhO0FBQ1hDLGVBQU8sRUFESTtBQUVY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ZXB5J1xyXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0QWRkV29ya2Jvb2sgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Yid5Lit5pWw5a2mJ1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzZWFyY2hGaWVsZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJiYXNlX3NlYXJjaFwiLFwiY29tcG9uZW50SWRcIjpcInNlYXJjaEZpZWxkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgc2VhcmNoRmllbGQ6IHphbkZpZWxkXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgZ3JhZGVOYW1lOiAnJyxcclxuICAgICAgdGV4dGJvb2tJZDogJycsXHJcbiAgICAgIHdvcmtib29rTGlzdDogW10sXHJcbiAgICAgIGJhc2Vfc2VhcmNoOiB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpee7g+S5oOWGjOWQjeensCdcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgYXN5bmMgemFuRmllbGRDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9va0lkLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8qKiDmn6XnnIvnu4PkuaDlhozlpKflm74gKi9cclxuICAgICAgX3ByZXZpZXcgKHVybCkge1xyXG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXdvcmtib29rQmlnYCwgdXJsczogW2Ake3VybH0td29ya2Jvb2tCaWdgXX0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKiDnu4PkuaDlhozlop7liqDlj5bmtoggKi9cclxuICAgICAgYXN5bmMgX2VkaXQgKGluZGV4LCBpZCkge1xyXG4gICAgICAgIHRoaXMud29ya2Jvb2tMaXN0W2luZGV4XS5zdGF0dXMgPSBhd2FpdCB0aGlzLl9zZXRXb3JrYm9vayhpZClcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKiDov5vlhaXmiJHnmoTotYTmlpkgKi9cclxuICAgICAgX2ludG9DaGFwdGVyIChpdGVtKSB7XHJcbiAgICAgICAgd2VweS5yZUxhdW5jaCh7XHJcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvbXkvaW5kZXg/ZnJvbT1pbml0Jm5hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5pZH1gXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5blhajpg6jnu4PkuaDlhowgKi9cclxuICAgIF9nZXRBbGxXb3JrYm9vayAoaWQsIG5hbWUpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL2FsbCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRleHRib29rSWQ6IGlkLFxyXG4gICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOe8lui+kee7g+S5oOWGjCAqL1xyXG4gICAgX3NldFdvcmtib29rIChpZCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vd29ya2Jvb2svZWRpdCcsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgd29ya2Jvb2tJZDogaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuc3RhdHVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5ncmFkZU5hbWUgPSBvcHRpb25zLm5hbWVcclxuICAgICAgdGhpcy50ZXh0Ym9va0lkID0gb3B0aW9ucy50ZXh0Ym9va0lkXHJcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9va0lkLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=