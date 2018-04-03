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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookAdd.__proto__ || Object.getPrototypeOf(WorkbookAdd)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "searchField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_search", "componentId": "searchField" } }, _this.$events = {}, _this.components = {
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

    // 添加我的练习册

  }, {
    key: '_getAllWorkbook',
    value: function _getAllWorkbook(id, name) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/all',
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
        title: '各位家长，用这个记错题，速度快，用处大',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookAdd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookAdd , 'pages/workbook/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlYXJjaEZpZWxkIiwiZGF0YSIsIndvcmtib29rTGlzdCIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJ0ZXh0Ym9va0lkIiwiYmFzZV9zZWFyY2giLCJ0aXRsZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJldmVudHMiLCJ6YW5GaWVsZENoYW5nZSIsImUiLCJkZXRhaWwiLCJfZ2V0QWxsV29ya2Jvb2siLCIkYXBwbHkiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ1cmwiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsIl9lZGl0IiwiaW5kZXgiLCJpZCIsIl9zZXRXb3JrYm9vayIsInN0YXR1cyIsIl9pbnRvQ2hhcHRlciIsIml0ZW0iLCJuYXZpZ2F0ZVRvIiwibmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsIndvcmtib29rSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsYUFBekMsRUFBdUQsZUFBYyxhQUFyRSxFQUFmLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsb0JBQWMsRUFEVDtBQUVMQyxtQkFBYSxLQUZSO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsa0JBQVksRUFKUDtBQUtMQyxtQkFBYTtBQUNYQyxlQUFP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UUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlOLElBQUlPLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0x0QyxlQUFPLHFCQURGO0FBRUx1QyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBeEdzQyxlQUFLQyxJOztrQkFBekJyRCxXIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rQWRkIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic2VhcmNoRmllbGRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9zZWFyY2hcIixcImNvbXBvbmVudElkXCI6XCJzZWFyY2hGaWVsZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBzZWFyY2hGaWVsZDogemFuRmllbGRcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICB3b3JrYm9va0xpc3Q6IFtdLFxyXG4gICAgaW5wdXRTaG93ZWQ6IGZhbHNlLFxyXG4gICAgaW5wdXRWYWw6ICcnLFxyXG4gICAgdGV4dGJvb2tJZDogJycsXHJcbiAgICBiYXNlX3NlYXJjaDoge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXnu4PkuaDlhozlkI3np7AnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7XHJcbiAgICBhc3luYyB6YW5GaWVsZENoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2tJZCwgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8qKiDmn6XnnIvnu4PkuaDlhozlpKflm74gKi9cclxuICAgIF9wcmV2aWV3ICh1cmwpIHtcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0td29ya2Jvb2tCaWdgLCB1cmxzOiBbYCR7dXJsfS13b3JrYm9va0JpZ2BdfSlcclxuICAgIH0sXHJcbiAgICAvKiog57uD5Lmg5YaM5aKe5Yqg5Y+W5raIICovXHJcbiAgICBhc3luYyBfZWRpdCAoaW5kZXgsIGlkKSB7XHJcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0W2luZGV4XS5zdGF0dXMgPSBhd2FpdCB0aGlzLl9zZXRXb3JrYm9vayhpZClcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIC8qKiDov5vlhaXnq6DoioIgKi9cclxuICAgIF9pbnRvQ2hhcHRlciAoaXRlbSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYC9wYWdlcy93b3JrYm9vay9jaGFwdGVyP25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5pZH1gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog57yW6L6R57uD5Lmg5YaMICovXHJcbiAgX3NldFdvcmtib29rIChpZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vd29ya2Jvb2svZWRpdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd29ya2Jvb2tJZDogaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMuc3RhdHVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDmt7vliqDmiJHnmoTnu4PkuaDlhoxcclxuICBfZ2V0QWxsV29ya2Jvb2sgKGlkLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS93b3JrYm9vay9hbGwnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XHJcbiAgICB0aGlzLnRleHRib29rSWQgPSBvcHRpb25zLmlkXHJcbiAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2tJZCwgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSlcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcblxyXG4gIG9uU2hvdyAoKSB7XHJcbiAgICB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlID0gJydcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcblxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcclxuICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvbXkvaW5kZXgnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==