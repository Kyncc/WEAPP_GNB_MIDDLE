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
        if (Number(_wepy2.default.getStorageSync('User').vip)) {
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
  }]);

  return StatisticsError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsError , 'pages/statistics/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJvZmZzZXQiLCJlcnJvciIsImlkIiwiY291bnQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkaW5nIiwibm9tb3JlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuTG9hZG1vcmUxIiwibWV0aG9kcyIsIl9sb2FkTW9yZSIsIl9nZXRFcnJvckxpc3QiLCJ0aGVuIiwicmVzIiwiY29uY2F0IiwiZXJyb3JMaXN0IiwibnVtYmVyIiwibGVuZ3RoIiwiJGFwcGx5IiwiY2F0Y2giLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiaW1ncyIsIl9kb3dubG9hZCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwidmlwIiwibmF2aWdhdGVUbyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzeXN0ZW0iLCJ3aW5kb3dIZWlnaHQiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsInJlc3VsdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLFVBQUksRUFIQztBQUlMQyxhQUFPLENBSkY7QUFLTEMsb0JBQWMsR0FMVDtBQU1MQyxlQUFTLElBTko7QUFPTEMsY0FBUTtBQVBILEssUUFVUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1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O0FBQ0E7OztBQUVFLHFCQUFLcEQsRUFBTCxHQUFVNEMsUUFBUTVDLEVBQWxCOzt1QkFDbUIsS0FBS1ksYUFBTCxDQUFtQmdDLFFBQVE1QyxFQUEzQixFQUErQixLQUFLRixNQUFwQyxDOzs7QUFBZnVELHNCOztBQUNKLHFCQUFLbEQsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS0osS0FBTCxHQUFhc0QsT0FBT3JDLFNBQXBCO0FBQ0EscUJBQUtsQixNQUFMLEdBQWN1RCxPQUFPdkQsTUFBckI7QUFDQSxxQkFBS0csS0FBTCxHQUFhb0QsT0FBT3BDLE1BQXBCO0FBQ0Esb0JBQUksS0FBS25CLE1BQUwsQ0FBWW9CLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsdUJBQUtkLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFDRCxxQkFBS2UsTUFBTDs7Ozs7Ozs7QUFFQSxxQkFBS2hCLE9BQUwsR0FBZSxLQUFmO0FBQ0EscUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EscUJBQUtlLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6R3VDLGVBQUttQyxJOztrQkFBN0IxRCxlIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbkxvYWRNb3JlIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbG9hZG1vcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3NFcnJvciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgb2Zmc2V0OiAnJyxcbiAgICBlcnJvcjogW10sXG4gICAgaWQ6ICcnLFxuICAgIGNvdW50OiAwLFxuICAgIHNjcm9sbEhlaWdodDogNTAwLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbm9tb3JlOiBmYWxzZVxuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbkxvYWRtb3JlMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCIsXCJ2LWJpbmQ6bm9tb3JlLnN5bmNcIjpcIm5vbW9yZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgemFuTG9hZG1vcmUxOiB6YW5Mb2FkTW9yZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5Yqg6L295pu05aSaICovXG4gICAgX2xvYWRNb3JlICgpIHtcbiAgICAgIC8vIOaXoOabtOWkmuaVsOaNruaIluiAheato+WcqOWKoOi9veWImei/lOWbnlxuICAgICAgaWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLm5vbW9yZSkgcmV0dXJuXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLl9nZXRFcnJvckxpc3QodGhpcy5pZCwgdGhpcy5vZmZzZXQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5jb25jYXQocmVzLmVycm9yTGlzdClcbiAgICAgICAgdGhpcy5vZmZzZXQgPSByZXMub2Zmc2V0XG4gICAgICAgIHRoaXMuY291bnQgPSByZXMubnVtYmVyXG4gICAgICAgIGlmICh0aGlzLm9mZnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLm5vbW9yZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXByaW1hcnlFcnJvcmAsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgfSxcbiAgICBfZG93bmxvYWQgKCkge1xuICAgICAgLy8g5LiN5piv5Lya5ZGY6Lez6L2s5YiwVklQ6LSt5LmwLCDmmK/ot7PovazliLDkuIvovb1cbiAgICAgIGlmIChOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnZpcCkpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvbXkvZW1haWw/aWQ9JHt0aGlzLmlkfSZ0eXBlPXN0YXRpc3RpY3NgXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9teS92aXBgXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7XG4gICAgLyoqIOWbvueJh+mbhiAqL1xuICAgIGltZ3MgKCkge1xuICAgICAgbGV0IHVybHMgPSBbXVxuICAgICAgZm9yIChsZXQgaW1nIG9mIHRoaXMuZXJyb3IpIHtcbiAgICAgICAgdXJscy5wdXNoKGAke2ltZy5lcnJvckltZy51cmx9LXByaW1hcnlFcnJvcmApXG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsc1xuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5bplJnpopjmlbDmja4gKi9cbiAgX2dldEVycm9yTGlzdCAoaWQsIG9mZnNldCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdGV4dGJvb2svc3RhdGlzdGljcy9lcnJvcicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3lzdGVtLndpbmRvd0hlaWdodCAtIDMwXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAvLyDlvIDlp4vliqDovb3mlbDmja5cbiAgICB0cnkge1xuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRFcnJvckxpc3Qob3B0aW9ucy5pZCwgdGhpcy5vZmZzZXQpXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lcnJvciA9IHJlc3VsdC5lcnJvckxpc3RcbiAgICAgIHRoaXMub2Zmc2V0ID0gcmVzdWx0Lm9mZnNldFxuICAgICAgdGhpcy5jb3VudCA9IHJlc3VsdC5udW1iZXJcbiAgICAgIGlmICh0aGlzLm9mZnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG59XG4iXX0=