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

var WorkbookAdd = function (_wepy$page) {
  _inherits(WorkbookAdd, _wepy$page);

  function WorkbookAdd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookAdd.__proto__ || Object.getPrototypeOf(WorkbookAdd)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '练习册管理'
    }, _this.$repeat = {}, _this.$props = { "searchField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_search", "componentId": "searchField" } }, _this.$events = {}, _this.components = {
      searchField: _zanField2.default
    }, _this.data = {
      workbookList: [],
      inputShowed: false,
      inputVal: '',
      textbookId: '',
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

      /** 进入章节 */
      _intoChapter: function _intoChapter(item) {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/chapter?name=' + item.name + '&id=' + item.id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookAdd, [{
    key: '_setWorkbook',


    /** 编辑练习册 */
    value: function _setWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/workbook/edit',
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

    // 添加我的练习册

  }, {
    key: '_getAllWorkbook',
    value: function _getAllWorkbook(id, name) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/workbook/all',
          data: {
            name: name,
            textbookId: id
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
  }, {
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.textbookId = options.id;
                _context3.next = 3;
                return this._getAllWorkbook(this.textbookId, this.base_search.value);

              case 3:
                this.workbookList = _context3.sent;

                this.$apply();

              case 5:
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
  }, {
    key: 'onShow',
    value: function onShow() {
      this.base_search.value = '';
      this.$apply();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        console.log(res.target);
      }
      return {
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return WorkbookAdd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookAdd , 'pages/workbook/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2hGaWVsZCIsImRhdGEiLCJ3b3JrYm9va0xpc3QiLCJpbnB1dFNob3dlZCIsImlucHV0VmFsIiwidGV4dGJvb2tJZCIsImJhc2Vfc2VhcmNoIiwidGl0bGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiX2dldEFsbFdvcmtib29rIiwiJGFwcGx5IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfZWRpdCIsImluZGV4IiwiaWQiLCJfc2V0V29ya2Jvb2siLCJzdGF0dXMiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJ3b3JrYm9va0lkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixhQUF6QyxFQUF1RCxlQUFjLGFBQXJFLEVBQWYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBSVpDLEksR0FBTztBQUNMQyxvQkFBYyxFQURUO0FBRUxD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O0FBQ0EsV0FBS08sTUFBTDtBQUNEOzs7c0NBRWtCdUIsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlJLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWU4sSUFBSU8sTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTHRDLGVBQU8sb0JBREY7QUFFTHVDLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUE1R3NDLGVBQUtDLEk7O2tCQUF6QnZELFciLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rQWRkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnu4PkuaDlhoznrqHnkIYnXG4gIH1cblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic2VhcmNoRmllbGRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9zZWFyY2hcIixcImNvbXBvbmVudElkXCI6XCJzZWFyY2hGaWVsZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgc2VhcmNoRmllbGQ6IHphbkZpZWxkXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHdvcmtib29rTGlzdDogW10sXG4gICAgaW5wdXRTaG93ZWQ6IGZhbHNlLFxuICAgIGlucHV0VmFsOiAnJyxcbiAgICB0ZXh0Ym9va0lkOiAnJyxcbiAgICBiYXNlX3NlYXJjaDoge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXnu4PkuaDlhozlkI3np7AnXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge1xuICAgIGFzeW5jIHphbkZpZWxkQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rSWQsIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5p+l55yL57uD5Lmg5YaM5aSn5Zu+ICovXG4gICAgX3ByZXZpZXcgKHVybCkge1xuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0td29ya2Jvb2tCaWdgLCB1cmxzOiBbYCR7dXJsfS13b3JrYm9va0JpZ2BdfSlcbiAgICB9LFxuICAgIC8qKiDnu4PkuaDlhozlop7liqDlj5bmtoggKi9cbiAgICBhc3luYyBfZWRpdCAoaW5kZXgsIGlkKSB7XG4gICAgICB0aGlzLndvcmtib29rTGlzdFtpbmRleF0uc3RhdHVzID0gYXdhaXQgdGhpcy5fc2V0V29ya2Jvb2soaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKiog6L+b5YWl56ug6IqCICovXG4gICAgX2ludG9DaGFwdGVyIChpdGVtKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY2hhcHRlcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uaWR9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKiog57yW6L6R57uD5Lmg5YaMICovXG4gIF9zZXRXb3JrYm9vayAoaWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svZWRpdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgd29ya2Jvb2tJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuc3RhdHVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyDmt7vliqDmiJHnmoTnu4PkuaDlhoxcbiAgX2dldEFsbFdvcmtib29rIChpZCwgbmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vay9hbGwnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgdGhpcy50ZXh0Ym9va0lkID0gb3B0aW9ucy5pZFxuICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9va0lkLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuXG4gIG9uU2hvdyAoKSB7XG4gICAgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSA9ICcnXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXG4gICAgfVxuICB9XG59XG4iXX0=