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
        if (item.isUsed) {
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
          url: 'https://mid.guinaben.com/workbook/chapter',
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
        title: '各位家长，用这个记错题，速度快，用处大',
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookChapter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookChapter , 'pages/workbook/chapter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJpZCIsIm1ldGhvZHMiLCJfaW50b0V4ZXJjaXNlIiwiaXRlbSIsImlzVXNlZCIsImlzQWxsQ29ycmVjdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwid29ya2Jvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJhIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwiJGFwcGx5IiwiX2dldENoYXB0ZXIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxVQUFJO0FBRkMsSyxRQUtQQyxPLEdBQVU7QUFDUjs7Ozs7QUFLQUMsbUJBTlEseUJBTU1DLElBTk4sRUFNWTtBQUNsQixZQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2ZELGVBQUtFLFlBQUwsR0FDSSxlQUFLQyxVQUFMLENBQWdCLEVBQUNDLHFDQUFtQ0osS0FBS0gsRUFBeEMsY0FBbURHLEtBQUtLLElBQXpELEVBQWhCLENBREosR0FFSSxlQUFLRixVQUFMLENBQWdCLEVBQUNDLG1DQUFpQ0osS0FBS0gsRUFBdEMsY0FBaURHLEtBQUtLLElBQXZELEVBQWhCLENBRko7QUFHRCxTQUpELE1BSU87QUFDTCx5QkFBS0YsVUFBTCxDQUFnQixFQUFDQyxzQ0FBb0NKLEtBQUtILEVBQXpDLGNBQW9ERyxLQUFLSyxJQUExRCxFQUFoQjtBQUNEO0FBQ0Y7QUFkTyxLOzs7Ozs7O0FBaUJWO2dDQUNhUixFLEVBQUk7QUFDZixhQUFPLElBQUlTLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYTCxlQUFLLDJDQURNO0FBRVhULGdCQUFNO0FBQ0plLHdCQUFZYjtBQURSLFdBRks7QUFLWGMsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTCxvQkFBUUssSUFBSUMsQ0FBWjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RQLG1CQUFPTyxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs7MkZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFDQyxPQUFPSCxRQUFRWCxJQUFoQixFQUF6QjtBQUNBLHFCQUFLUixFQUFMLEdBQVVtQixRQUFRbkIsRUFBbEI7QUFDQSxxQkFBS3VCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSXFCLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS3hCLEVBQXRCLEM7OztBQUFyQixxQkFBS0QsTzs7QUFDTCxxQkFBS3dCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJSLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJVSxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlaLElBQUlhLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xOLGVBQU8scUJBREY7QUFFTE8sY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQTVEMEMsZUFBS0MsSTs7a0JBQTdCakMsZSIsImZpbGUiOiJjaGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tDaGFwdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgY2hhcHRlcjogW10sXG4gICAgICBpZDogJydcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqXG4gICAgICAgKiDov5vlhaXnq6DoioLpobVcbiAgICAgICAqIDEuIGlzVXNlZCDkuLpmYWxzZSDmnKrorrDplJnov5vlhaXnq6DoioLorrDplJnpobXpnaJcbiAgICAgICAqIDIuIGlzVXNlZCDkuLp0cnVlICBpc0FsbENvcnJlY3Qg6L+b5YWl5YWo5a+56aG16Z2iIOWQpuWImSDov5vlhaXorrDplJnpopjpobXpnaJcbiAgICAgICAqL1xuICAgICAgX2ludG9FeGVyY2lzZShpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmlzVXNlZCkge1xuICAgICAgICAgIGl0ZW0uaXNBbGxDb3JyZWN0XG4gICAgICAgICAgICA/IHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2NvcnJlY3Q/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxuICAgICAgICAgICAgOiB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9lcnJvcj9pZD0ke2l0ZW0uaWR9Jm5hbWU9JHtpdGVtLm5hbWV9YH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXhlcmNpc2U/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6I635Y+W56ug6IqC5pWw5o2uXG4gICAgX2dldENoYXB0ZXIgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS93b3JrYm9vay9jaGFwdGVyJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB3b3JrYm9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5hKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IG9wdGlvbnMubmFtZX0pXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdyAoKSB7XG4gICAgICB0aGlzLmNoYXB0ZXIgPSBhd2FpdCB0aGlzLl9nZXRDaGFwdGVyKHRoaXMuaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19