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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJvZmZzZXQiLCJlcnJvciIsImlkIiwiY291bnQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkaW5nIiwibm9tb3JlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuTG9hZG1vcmUxIiwibWV0aG9kcyIsIl9sb2FkTW9yZSIsIl9nZXRFcnJvckxpc3QiLCJ0aGVuIiwicmVzIiwiY29uY2F0IiwiZXJyb3JMaXN0IiwibnVtYmVyIiwibGVuZ3RoIiwiJGFwcGx5IiwiY2F0Y2giLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiaW1ncyIsIl9kb3dubG9hZCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwidmlwIiwibmF2aWdhdGVUbyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzeXN0ZW0iLCJ3aW5kb3dIZWlnaHQiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsInJlc3VsdCIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsVUFBSSxFQUhDO0FBSUxDLGFBQU8sQ0FKRjtBQUtMQyxvQkFBYyxHQUxUO0FBTUxDLGVBQVMsSUFOSjtBQU9MQyxjQUFRO0FBUEgsSyxRQVVSQyxPLEdBQVUs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QUMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9QLFFBQVFRLElBQWhCLEVBQXpCO0FBQ0E7OztBQUVFLHFCQUFLcEQsRUFBTCxHQUFVNEMsUUFBUTVDLEVBQWxCOzt1QkFDbUIsS0FBS1ksYUFBTCxDQUFtQmdDLFFBQVE1QyxFQUEzQixFQUErQixLQUFLRixNQUFwQyxDOzs7QUFBZnVELHNCOztBQUNKLHFCQUFLbEQsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS0osS0FBTCxHQUFhc0QsT0FBT3JDLFNBQXBCO0FBQ0EscUJBQUtsQixNQUFMLEdBQWN1RCxPQUFPdkQsTUFBckI7QUFDQSxxQkFBS0csS0FBTCxHQUFhb0QsT0FBT3BDLE1BQXBCO0FBQ0Esb0JBQUksS0FBS25CLE1BQUwsQ0FBWW9CLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsdUJBQUtkLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFDRCxxQkFBS2UsTUFBTDs7Ozs7Ozs7QUFFQSxxQkFBS2hCLE9BQUwsR0FBZSxLQUFmO0FBQ0EscUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EscUJBQUtlLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJZUwsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUl3QyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVkxQyxJQUFJMkMsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTE4sZUFBTyxxQkFERjtBQUVMTyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBdEgwQyxlQUFLQyxJOztrQkFBN0JoRSxlIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB6YW5Mb2FkTW9yZSBmcm9tICdAL2NvbXBvbmVudHMvemFuLWxvYWRtb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljc0Vycm9yIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgb2Zmc2V0OiAnJyxcclxuICAgIGVycm9yOiBbXSxcclxuICAgIGlkOiAnJyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc2Nyb2xsSGVpZ2h0OiA1MDAsXHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgbm9tb3JlOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbkxvYWRtb3JlMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCIsXCJ2LWJpbmQ6bm9tb3JlLnN5bmNcIjpcIm5vbW9yZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICB6YW5Mb2FkbW9yZTE6IHphbkxvYWRNb3JlXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLyoqIOWKoOi9veabtOWkmiAqL1xyXG4gICAgX2xvYWRNb3JlICgpIHtcclxuICAgICAgLy8g5peg5pu05aSa5pWw5o2u5oiW6ICF5q2j5Zyo5Yqg6L295YiZ6L+U5ZueXHJcbiAgICAgIGlmICh0aGlzLmxvYWRpbmcgfHwgdGhpcy5ub21vcmUpIHJldHVyblxyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIHRoaXMuX2dldEVycm9yTGlzdCh0aGlzLmlkLCB0aGlzLm9mZnNldCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5jb25jYXQocmVzLmVycm9yTGlzdClcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHJlcy5vZmZzZXRcclxuICAgICAgICB0aGlzLmNvdW50ID0gcmVzLm51bWJlclxyXG4gICAgICAgIGlmICh0aGlzLm9mZnNldC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5vbW9yZSA9IHRydWVcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvKiog5p+l55yL5aSn5Zu+ICovXHJcbiAgICBfcHJldmlldyAodXJsKSB7XHJcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXByaW1hcnlFcnJvcmAsIHVybHM6IHRoaXMuaW1nc30pXHJcbiAgICB9LFxyXG4gICAgX2Rvd25sb2FkICgpIHtcclxuICAgICAgLy8g5LiN5piv5Lya5ZGY6Lez6L2s5YiwVklQ6LSt5LmwLCDmmK/ot7PovazliLDkuIvovb1cclxuICAgICAgaWYgKE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS52aXApKSB7XHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYC9wYWdlcy9teS9lbWFpbD9pZD0ke3RoaXMuaWR9JnR5cGU9c3RhdGlzdGljc2BcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvbXkvdmlwYFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXB1dGVkID0ge1xyXG4gICAgLyoqIOWbvueJh+mbhiAqL1xyXG4gICAgaW1ncyAoKSB7XHJcbiAgICAgIGxldCB1cmxzID0gW11cclxuICAgICAgZm9yIChsZXQgaW1nIG9mIHRoaXMuZXJyb3IpIHtcclxuICAgICAgICB1cmxzLnB1c2goYCR7aW1nLmVycm9ySW1nLnVybH0tcHJpbWFyeUVycm9yYClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdXJsc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPlumUmemimOaVsOaNriAqL1xyXG4gIF9nZXRFcnJvckxpc3QgKGlkLCBvZmZzZXQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3RleHRib29rL3N0YXRpc3RpY3MvZXJyb3InLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNoYXB0ZXJJZDogaWQsXHJcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3lzdGVtLndpbmRvd0hlaWdodCAtIDMwXHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxyXG4gICAgLy8g5byA5aeL5Yqg6L295pWw5o2uXHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZ2V0RXJyb3JMaXN0KG9wdGlvbnMuaWQsIHRoaXMub2Zmc2V0KVxyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLmVycm9yID0gcmVzdWx0LmVycm9yTGlzdFxyXG4gICAgICB0aGlzLm9mZnNldCA9IHJlc3VsdC5vZmZzZXRcclxuICAgICAgdGhpcy5jb3VudCA9IHJlc3VsdC5udW1iZXJcclxuICAgICAgaWYgKHRoaXMub2Zmc2V0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLm5vbW9yZSA9IHRydWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19