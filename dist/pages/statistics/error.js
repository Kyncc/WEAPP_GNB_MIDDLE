'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanLoadmore = require('./../../components/zan-loadmore.js');

var _zanLoadmore2 = _interopRequireDefault(_zanLoadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatisticsError = function (_wepy$page) {
  _inherits(StatisticsError, _wepy$page);

  function StatisticsError() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatisticsError);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatisticsError.__proto__ || Object.getPrototypeOf(StatisticsError)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      offset: '',
      error: [],
      id: '',
      count: 0,
      scrollHeight: 500,
      loading: true,
      nomore: false
    }, _this.$repeat = {}, _this.$props = { "zanLoadmore1": { "xmlns:v-bind": "", "v-bind:loading.sync": "loading", "v-bind:nomore.sync": "nomore" } }, _this.$events = {}, _this.components = {
      zanLoadmore1: _zanLoadmore2.default
    }, _this.methods = {
      /** 加载更多 */
      _loadMore: function _loadMore() {
        var _this2 = this;

        // 无更多数据或者正在加载则返回
        if (this.loading || this.nomore) return;
        this.loading = true;
        this._getErrorList(this.id, this.offset).then(function (res) {
          _this2.loading = false;
          _this2.error = _this2.error.concat(res.errorList);
          _this2.offset = res.offset;
          _this2.count = res.number;
          if (_this2.offset.length === 0) {
            _this2.nomore = true;
          }
          _this2.$apply();
        }).catch(function () {
          _this2.nomore = true;
          _this2.loading = false;
          _this2.$apply();
        });
      },

      /** 查看大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: this.imgs });
      },
      _download: function _download() {
        // 先判断是否会员
        _wepy2.default.navigateTo({
          url: '/pages/my/email?id=' + this.id + '&type=statistics'
        });
      }
    }, _this.computed = {
      /** 图片集 */
      imgs: function imgs() {
        var urls = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.error[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var img = _step.value;

            urls.push(img.errorImg.url + '-primaryError');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return urls;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatisticsError, [{
    key: '_getErrorList',


    /** 获取错题数据 */
    value: function _getErrorList(id, offset) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/textbook/statistics/error',
          data: {
            chapterId: id,
            offset: offset
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.scrollHeight = this.$parent.globalData.system.windowHeight - 30;
                wx.setNavigationBarTitle({ title: options.name });
                // 开始加载数据
                _context.prev = 2;

                this.id = options.id;
                _context.next = 6;
                return this._getErrorList(options.id, this.offset);

              case 6:
                result = _context.sent;

                this.loading = false;
                this.error = result.errorList;
                this.offset = result.offset;
                this.count = result.number;
                if (this.offset.length === 0) {
                  this.nomore = true;
                }
                this.$apply();
                _context.next = 20;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](2);

                this.loading = false;
                this.nomore = true;
                this.$apply();

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 15]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return StatisticsError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsError , 'pages/statistics/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJvZmZzZXQiLCJlcnJvciIsImlkIiwiY291bnQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkaW5nIiwibm9tb3JlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuTG9hZG1vcmUxIiwibWV0aG9kcyIsIl9sb2FkTW9yZSIsIl9nZXRFcnJvckxpc3QiLCJ0aGVuIiwicmVzIiwiY29uY2F0IiwiZXJyb3JMaXN0IiwibnVtYmVyIiwibGVuZ3RoIiwiJGFwcGx5IiwiY2F0Y2giLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiaW1ncyIsIl9kb3dubG9hZCIsIm5hdmlnYXRlVG8iLCJjb21wdXRlZCIsImltZyIsInB1c2giLCJlcnJvckltZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsImNoYXB0ZXJJZCIsInN1Y2Nlc3MiLCJmYWlsIiwiZXJyIiwib3B0aW9ucyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwid2luZG93SGVpZ2h0Iiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJyZXN1bHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxVQUFJLEVBSEM7QUFJTEMsYUFBTyxDQUpGO0FBS0xDLG9CQUFjLEdBTFQ7QUFNTEMsZUFBUyxJQU5KO0FBT0xDLGNBQVE7QUFQSCxLLFFBVVJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGdCQUFlLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELHNCQUFxQixRQUF4RSxF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SixLQUFMLEdBQWFtRCxPQUFPbEMsU0FBcEI7QUFDQSxxQkFBS2xCLE1BQUwsR0FBY29ELE9BQU9wRCxNQUFyQjtBQUNBLHFCQUFLRyxLQUFMLEdBQWFpRCxPQUFPakMsTUFBcEI7QUFDQSxvQkFBSSxLQUFLbkIsTUFBTCxDQUFZb0IsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUM1Qix1QkFBS2QsTUFBTCxHQUFjLElBQWQ7QUFDRDtBQUNELHFCQUFLZSxNQUFMOzs7Ozs7OztBQUVBLHFCQUFLaEIsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxxQkFBS2UsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5HdUMsZUFBS2dDLEk7O2tCQUE3QnZELGUiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgemFuTG9hZE1vcmUgZnJvbSAnQC9jb21wb25lbnRzL3phbi1sb2FkbW9yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljc0Vycm9yIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgZGF0YSA9IHtcbiAgICBvZmZzZXQ6ICcnLFxuICAgIGVycm9yOiBbXSxcbiAgICBpZDogJycsXG4gICAgY291bnQ6IDAsXG4gICAgc2Nyb2xsSGVpZ2h0OiA1MDAsXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBub21vcmU6IGZhbHNlXG4gIH1cblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuTG9hZG1vcmUxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsb2FkaW5nLnN5bmNcIjpcImxvYWRpbmdcIixcInYtYmluZDpub21vcmUuc3luY1wiOlwibm9tb3JlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICB6YW5Mb2FkbW9yZTE6IHphbkxvYWRNb3JlXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDliqDovb3mm7TlpJogKi9cbiAgICBfbG9hZE1vcmUgKCkge1xuICAgICAgLy8g5peg5pu05aSa5pWw5o2u5oiW6ICF5q2j5Zyo5Yqg6L295YiZ6L+U5ZueXG4gICAgICBpZiAodGhpcy5sb2FkaW5nIHx8IHRoaXMubm9tb3JlKSByZXR1cm5cbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuX2dldEVycm9yTGlzdCh0aGlzLmlkLCB0aGlzLm9mZnNldCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmVycm9yLmNvbmNhdChyZXMuZXJyb3JMaXN0KVxuICAgICAgICB0aGlzLm9mZnNldCA9IHJlcy5vZmZzZXRcbiAgICAgICAgdGhpcy5jb3VudCA9IHJlcy5udW1iZXJcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvKiog5p+l55yL5aSn5Zu+ICovXG4gICAgX3ByZXZpZXcgKHVybCkge1xuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0tcHJpbWFyeUVycm9yYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICB9LFxuICAgIF9kb3dubG9hZCAoKSB7XG4gICAgICAvLyDlhYjliKTmlq3mmK/lkKbkvJrlkZhcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9teS9lbWFpbD9pZD0ke3RoaXMuaWR9JnR5cGU9c3RhdGlzdGljc2BcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7XG4gICAgLyoqIOWbvueJh+mbhiAqL1xuICAgIGltZ3MgKCkge1xuICAgICAgbGV0IHVybHMgPSBbXVxuICAgICAgZm9yIChsZXQgaW1nIG9mIHRoaXMuZXJyb3IpIHtcbiAgICAgICAgdXJscy5wdXNoKGAke2ltZy5lcnJvckltZy51cmx9LXByaW1hcnlFcnJvcmApXG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsc1xuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5bplJnpopjmlbDmja4gKi9cbiAgX2dldEVycm9yTGlzdCAoaWQsIG9mZnNldCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdGV4dGJvb2svc3RhdGlzdGljcy9lcnJvcicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3lzdGVtLndpbmRvd0hlaWdodCAtIDMwXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAvLyDlvIDlp4vliqDovb3mlbDmja5cbiAgICB0cnkge1xuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRFcnJvckxpc3Qob3B0aW9ucy5pZCwgdGhpcy5vZmZzZXQpXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lcnJvciA9IHJlc3VsdC5lcnJvckxpc3RcbiAgICAgIHRoaXMub2Zmc2V0ID0gcmVzdWx0Lm9mZnNldFxuICAgICAgdGhpcy5jb3VudCA9IHJlc3VsdC5udW1iZXJcbiAgICAgIGlmICh0aGlzLm9mZnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG59XG4iXX0=