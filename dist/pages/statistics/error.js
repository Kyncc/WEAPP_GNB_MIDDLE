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
        // 不是会员跳转到VIP购买, 是跳转到下载
        if (Number(_wepy2.default.getStorageSync('gnb_middle_User').vip)) {
          _wepy2.default.navigateTo({
            url: '/pages/my/email?id=' + this.id + '&type=statistics'
          });
        } else {
          _wepy2.default.navigateTo({
            url: '/pages/my/vip'
          });
        }
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

  return StatisticsError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsError , 'pages/statistics/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJvZmZzZXQiLCJlcnJvciIsImlkIiwiY291bnQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkaW5nIiwibm9tb3JlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuTG9hZG1vcmUxIiwibWV0aG9kcyIsIl9sb2FkTW9yZSIsIl9nZXRFcnJvckxpc3QiLCJ0aGVuIiwicmVzIiwiY29uY2F0IiwiZXJyb3JMaXN0IiwibnVtYmVyIiwibGVuZ3RoIiwiJGFwcGx5IiwiY2F0Y2giLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiaW1ncyIsIl9kb3dubG9hZCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwidmlwIiwibmF2aWdhdGVUbyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzeXN0ZW0iLCJ3aW5kb3dIZWlnaHQiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsInJlc3VsdCIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsVUFBSSxFQUhDO0FBSUxDLGFBQU8sQ0FKRjtBQUtMQyxvQkFBYyxHQUxUO0FBTUxDLGVBQVMsSUFOSjtBQU9MQyxjQUFRO0FBUEgsSyxRQVVSQyxPLEdBQVUs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QUMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9QLFFBQVFRLElBQWhCLEVBQXpCO0FBQ0E7OztBQUVFLHFCQUFLcEQsRUFBTCxHQUFVNEMsUUFBUTVDLEVBQWxCOzt1QkFDbUIsS0FBS1ksYUFBTCxDQUFtQmdDLFFBQVE1QyxFQUEzQixFQUErQixLQUFLRixNQUFwQyxDOzs7QUFBZnVELHNCOztBQUNKLHFCQUFLbEQsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS0osS0FBTCxHQUFhc0QsT0FBT3JDLFNBQXBCO0FBQ0EscUJBQUtsQixNQUFMLEdBQWN1RCxPQUFPdkQsTUFBckI7QUFDQSxxQkFBS0csS0FBTCxHQUFhb0QsT0FBT3BDLE1BQXBCO0FBQ0Esb0JBQUksS0FBS25CLE1BQUwsQ0FBWW9CLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsdUJBQUtkLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFDRCxxQkFBS2UsTUFBTDs7Ozs7Ozs7QUFFQSxxQkFBS2hCLE9BQUwsR0FBZSxLQUFmO0FBQ0EscUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EscUJBQUtlLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJZUwsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUl3QyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVkxQyxJQUFJMkMsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTE4sZUFBTyxxQkFERjtBQUVMTyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBdEgwQyxlQUFLQyxJOztrQkFBN0JoRSxlIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbkxvYWRNb3JlIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbG9hZG1vcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3NFcnJvciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgb2Zmc2V0OiAnJyxcbiAgICBlcnJvcjogW10sXG4gICAgaWQ6ICcnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcm9sbEhlaWdodDogNTAwLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbm9tb3JlOiBmYWxzZVxuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbkxvYWRtb3JlMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCIsXCJ2LWJpbmQ6bm9tb3JlLnN5bmNcIjpcIm5vbW9yZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgemFuTG9hZG1vcmUxOiB6YW5Mb2FkTW9yZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5Yqg6L295pu05aSaICovXG4gICAgX2xvYWRNb3JlICgpIHtcbiAgICAgIC8vIOaXoOabtOWkmuaVsOaNruaIluiAheato+WcqOWKoOi9veWImei/lOWbnlxuICAgICAgaWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLm5vbW9yZSkgcmV0dXJuXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLl9nZXRFcnJvckxpc3QodGhpcy5pZCwgdGhpcy5vZmZzZXQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5jb25jYXQocmVzLmVycm9yTGlzdClcbiAgICAgICAgdGhpcy5vZmZzZXQgPSByZXMub2Zmc2V0XG4gICAgICAgIHRoaXMuY291bnQgPSByZXMubnVtYmVyXG4gICAgICAgIGlmICh0aGlzLm9mZnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLm5vbW9yZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXByaW1hcnlFcnJvcmAsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgfSxcbiAgICBfZG93bmxvYWQgKCkge1xuICAgICAgLy8g5LiN5piv5Lya5ZGY6Lez6L2s5YiwVklQ6LSt5LmwLCDmmK/ot7PovazliLDkuIvovb1cbiAgICAgIGlmIChOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudmlwKSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9teS9lbWFpbD9pZD0ke3RoaXMuaWR9JnR5cGU9c3RhdGlzdGljc2BcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL215L3ZpcGBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wdXRlZCA9IHtcbiAgICAvKiog5Zu+54mH6ZuGICovXG4gICAgaW1ncyAoKSB7XG4gICAgICBsZXQgdXJscyA9IFtdXG4gICAgICBmb3IgKGxldCBpbWcgb2YgdGhpcy5lcnJvcikge1xuICAgICAgICB1cmxzLnB1c2goYCR7aW1nLmVycm9ySW1nLnVybH0tcHJpbWFyeUVycm9yYClcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmxzXG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPlumUmemimOaVsOaNriAqL1xuICBfZ2V0RXJyb3JMaXN0IChpZCwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzL2Vycm9yJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWQsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zeXN0ZW0ud2luZG93SGVpZ2h0IC0gMzBcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxuICAgIC8vIOW8gOWni+WKoOi9veaVsOaNrlxuICAgIHRyeSB7XG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2dldEVycm9yTGlzdChvcHRpb25zLmlkLCB0aGlzLm9mZnNldClcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmVycm9yID0gcmVzdWx0LmVycm9yTGlzdFxuICAgICAgdGhpcy5vZmZzZXQgPSByZXN1bHQub2Zmc2V0XG4gICAgICB0aGlzLmNvdW50ID0gcmVzdWx0Lm51bWJlclxuICAgICAgaWYgKHRoaXMub2Zmc2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLm5vbW9yZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLm5vbW9yZSA9IHRydWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==