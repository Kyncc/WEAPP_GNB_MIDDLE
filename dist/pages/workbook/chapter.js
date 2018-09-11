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
          url: 'https://api.guinaben.com/workbook/chapter',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJpZCIsIm1ldGhvZHMiLCJfaW50b0V4ZXJjaXNlIiwiaXRlbSIsImlzRmluaXNoIiwid2VweSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImlzVXNlZCIsImlzQWxsQ29ycmVjdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwid29ya2Jvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJhIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIiRhcHBseSIsIl9nZXRDaGFwdGVyIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxVQUFJO0FBRkMsSyxRQUtQQyxPLEdBQVU7QUFDUjs7Ozs7QUFLQUMsbUJBTlEseUJBTU1DLElBTk4sRUFNWTtBQUNsQixZQUFJLENBQUNBLEtBQUtDLFFBQVYsRUFBb0I7QUFDbEJDLHlCQUFLQyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sSUFETTtBQUViQyxxQkFBUyxlQUZJO0FBR2JDLHdCQUFZLEtBSEM7QUFJYkMseUJBQWE7QUFKQSxXQUFmO0FBTUQsU0FQRCxNQU9PLElBQUlQLEtBQUtRLE1BQVQsRUFBaUI7QUFDdEJSLGVBQUtTLFlBQUwsR0FDSVAsZUFBS1EsVUFBTCxDQUFnQixFQUFFQyxxQ0FBbUNYLEtBQUtILEVBQXhDLGNBQW1ERyxLQUFLWSxJQUExRCxFQUFoQixDQURKLEdBRUlWLGVBQUtRLFVBQUwsQ0FBZ0IsRUFBRUMsbUNBQWlDWCxLQUFLSCxFQUF0QyxjQUFpREcsS0FBS1ksSUFBeEQsRUFBaEIsQ0FGSjtBQUdELFNBSk0sTUFJQTtBQUNMVix5QkFBS1EsVUFBTCxDQUFnQixFQUFFQyxzQ0FBb0NYLEtBQUtILEVBQXpDLGNBQW9ERyxLQUFLWSxJQUEzRCxFQUFoQjtBQUNEO0FBQ0Y7QUFyQk8sSzs7Ozs7OztBQXdCVjtnQ0FDYWYsRSxFQUFJO0FBQ2YsYUFBTyxJQUFJZ0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2IsdUJBQUtjLE9BQUwsQ0FBYTtBQUNYTCxlQUFLLDJDQURNO0FBRVhoQixnQkFBTTtBQUNKc0Isd0JBQVlwQjtBQURSLFdBRks7QUFLWHFCLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWkwsb0JBQVFLLElBQUlDLENBQVo7QUFDRCxXQVBVO0FBUVhDLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUUCxtQkFBT08sR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7OzJGQUVZQyxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBRXJCLE9BQU9tQixRQUFRWCxJQUFqQixFQUF6QjtBQUNBLHFCQUFLZixFQUFMLEdBQVUwQixRQUFRMUIsRUFBbEI7QUFDQSxxQkFBSzZCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSXFCLEtBQUtDLFdBQUwsQ0FBaUIsS0FBSzlCLEVBQXRCLEM7OztBQUFyQixxQkFBS0QsTzs7QUFDTCxxQkFBSzhCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJQLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJUyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlYLElBQUlZLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0wzQixlQUFPLG9CQURGO0FBRUw0QixrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBcEUwQy9CLGVBQUtnQyxJOztrQkFBN0J4QyxlIiwiZmlsZSI6ImNoYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0NoYXB0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBjaGFwdGVyOiBbXSxcbiAgICAgIGlkOiAnJ1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvKipcbiAgICAgICAqIOi/m+WFpeeroOiKgumhtVxuICAgICAgICogMS4gaXNVc2VkIOS4umZhbHNlIOacquiusOmUmei/m+WFpeeroOiKguiusOmUmemhtemdolxuICAgICAgICogMi4gaXNVc2VkIOS4unRydWUgIGlzQWxsQ29ycmVjdCDov5vlhaXlhajlr7npobXpnaIg5ZCm5YiZIOi/m+WFpeiusOmUmemimOmhtemdolxuICAgICAgICovXG4gICAgICBfaW50b0V4ZXJjaXNlKGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtLmlzRmluaXNoKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+aCqOW3sui2hei/h+WbveWutuinhOWumuaVmeWtpueahOi/m+W6picsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5pc1VzZWQpIHtcbiAgICAgICAgICBpdGVtLmlzQWxsQ29ycmVjdFxuICAgICAgICAgICAgPyB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY29ycmVjdD9pZD0ke2l0ZW0uaWR9Jm5hbWU9JHtpdGVtLm5hbWV9YCB9KVxuICAgICAgICAgICAgOiB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXJyb3I/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXhlcmNpc2U/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOiOt+WPlueroOiKguaVsOaNrlxuICAgIF9nZXRDaGFwdGVyIChpZCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlcicsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd29ya2Jvb2tJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuYSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogb3B0aW9ucy5uYW1lIH0pXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdyAoKSB7XG4gICAgICB0aGlzLmNoYXB0ZXIgPSBhd2FpdCB0aGlzLl9nZXRDaGFwdGVyKHRoaXMuaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==