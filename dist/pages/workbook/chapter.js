'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookChapter = function (_wepy$page) {
  _inherits(WorkbookChapter, _wepy$page);

  function WorkbookChapter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookChapter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookChapter.__proto__ || Object.getPrototypeOf(WorkbookChapter)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      chapter: [],
      id: ''
    }, _this.methods = {
      /**
       * 进入章节页
       * 1. isUsed 为false 未记错进入章节记错页面
       * 2. isUsed 为true  isAllCorrect 进入全对页面 否则 进入记错题页面
       */
      _intoExercise: function _intoExercise(item) {
        if (!item.isFinish) {
          _wepy2.default.showModal({
            title: '提示',
            content: '您已超过国家规定教学的进度',
            showCancel: false,
            confirmText: '确定'
          });
        } else if (item.isUsed) {
          item.isAllCorrect ? _wepy2.default.navigateTo({ url: '/pages/workbook/correct?id=' + item.id + '&name=' + item.name }) : _wepy2.default.navigateTo({ url: '/pages/workbook/error?id=' + item.id + '&name=' + item.name });
        } else {
          _wepy2.default.navigateTo({ url: '/pages/workbook/exercise?id=' + item.id + '&name=' + item.name });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookChapter, [{
    key: '_getChapter',


    // 获取章节数据
    value: function _getChapter(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/workbook/chapter',
          data: {
            workbookId: id
          },
          success: function success(res) {
            resolve(res.a);
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                this.id = options.id;
                this.$apply();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._getChapter(this.id);

              case 2:
                this.chapter = _context2.sent;

                this.$apply();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
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

  return WorkbookChapter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookChapter , 'pages/workbook/chapter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJpZCIsIm1ldGhvZHMiLCJfaW50b0V4ZXJjaXNlIiwiaXRlbSIsImlzRmluaXNoIiwid2VweSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImlzVXNlZCIsImlzQWxsQ29ycmVjdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwid29ya2Jvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJhIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIiRhcHBseSIsIl9nZXRDaGFwdGVyIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxVQUFJO0FBRkMsSyxRQUtQQyxPLEdBQVU7QUFDUjs7Ozs7QUFLQUMsbUJBTlEseUJBTU1DLElBTk4sRUFNWTtBQUNsQixZQUFJLENBQUNBLEtBQUtDLFFBQVYsRUFBb0I7QUFDbEJDLHlCQUFLQyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sSUFETTtBQUViQyxxQkFBUyxlQUZJO0FBR2JDLHdCQUFZLEtBSEM7QUFJYkMseUJBQWE7QUFKQSxXQUFmO0FBTUQsU0FQRCxNQU9PLElBQUlQLEtBQUtRLE1BQVQsRUFBaUI7QUFDdEJSLGVBQUtTLFlBQUwsR0FDSVAsZUFBS1EsVUFBTCxDQUFnQixFQUFDQyxxQ0FBbUNYLEtBQUtILEVBQXhDLGNBQW1ERyxLQUFLWSxJQUF6RCxFQUFoQixDQURKLEdBRUlWLGVBQUtRLFVBQUwsQ0FBZ0IsRUFBQ0MsbUNBQWlDWCxLQUFLSCxFQUF0QyxjQUFpREcsS0FBS1ksSUFBdkQsRUFBaEIsQ0FGSjtBQUdELFNBSk0sTUFJQTtBQUNMVix5QkFBS1EsVUFBTCxDQUFnQixFQUFDQyxzQ0FBb0NYLEtBQUtILEVBQXpDLGNBQW9ERyxLQUFLWSxJQUExRCxFQUFoQjtBQUNEO0FBQ0Y7QUFyQk8sSzs7Ozs7OztBQXdCVjtnQ0FDYWYsRSxFQUFJO0FBQ2YsYUFBTyxJQUFJZ0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2IsdUJBQUtjLE9BQUwsQ0FBYTtBQUNYTCxlQUFLLDhDQURNO0FBRVhoQixnQkFBTTtBQUNKc0Isd0JBQVlwQjtBQURSLFdBRks7QUFLWHFCLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWkwsb0JBQVFLLElBQUlDLENBQVo7QUFDRCxXQVBVO0FBUVhDLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUUCxtQkFBT08sR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7OzJGQUVZQyxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBQ3JCLE9BQU9tQixRQUFRWCxJQUFoQixFQUF6QjtBQUNBLHFCQUFLZixFQUFMLEdBQVUwQixRQUFRMUIsRUFBbEI7QUFDQSxxQkFBSzZCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSXFCLEtBQUtDLFdBQUwsQ0FBaUIsS0FBSzlCLEVBQXRCLEM7OztBQUFyQixxQkFBS0QsTzs7QUFDTCxxQkFBSzhCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJQLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJUyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlYLElBQUlZLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0wzQixlQUFPLG9CQURGO0FBRUw0QixrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBcEUwQy9CLGVBQUtnQyxJOztrQkFBN0J4QyxlIiwiZmlsZSI6ImNoYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0NoYXB0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY2hhcHRlcjogW10sXHJcbiAgICAgIGlkOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDov5vlhaXnq6DoioLpobVcclxuICAgICAgICogMS4gaXNVc2VkIOS4umZhbHNlIOacquiusOmUmei/m+WFpeeroOiKguiusOmUmemhtemdolxyXG4gICAgICAgKiAyLiBpc1VzZWQg5Li6dHJ1ZSAgaXNBbGxDb3JyZWN0IOi/m+WFpeWFqOWvuemhtemdoiDlkKbliJkg6L+b5YWl6K6w6ZSZ6aKY6aG16Z2iXHJcbiAgICAgICAqL1xyXG4gICAgICBfaW50b0V4ZXJjaXNlKGl0ZW0pIHtcclxuICAgICAgICBpZiAoIWl0ZW0uaXNGaW5pc2gpIHtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn5oKo5bey6LaF6L+H5Zu95a626KeE5a6a5pWZ5a2m55qE6L+b5bqmJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaXNVc2VkKSB7XHJcbiAgICAgICAgICBpdGVtLmlzQWxsQ29ycmVjdFxyXG4gICAgICAgICAgICA/IHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2NvcnJlY3Q/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxyXG4gICAgICAgICAgICA6IHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2Vycm9yP2lkPSR7aXRlbS5pZH0mbmFtZT0ke2l0ZW0ubmFtZX1gfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXhlcmNpc2U/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueroOiKguaVsOaNrlxyXG4gICAgX2dldENoYXB0ZXIgKGlkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vay9jaGFwdGVyJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgd29ya2Jvb2tJZDogaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuYSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IG9wdGlvbnMubmFtZX0pXHJcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvblNob3cgKCkge1xyXG4gICAgICB0aGlzLmNoYXB0ZXIgPSBhd2FpdCB0aGlzLl9nZXRDaGFwdGVyKHRoaXMuaWQpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XHJcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxyXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==