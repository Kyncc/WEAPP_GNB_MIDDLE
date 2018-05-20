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
      revise: {
        array: [{
          id: 0,
          name: '又错了'
        }, {
          id: 1,
          name: '搞对了'
        }]
      },
      offset: '',
      error: [],
      count: 0,
      id: '',
      scrollHeight: 500,
      loading: true,
      nomore: false
    }, _this.$repeat = {}, _this.$props = { "zanLoadmore1": { "xmlns:v-bind": "", "v-bind:loading.sync": "loading", "v-bind:nomore.sync": "nomore" } }, _this.$events = {}, _this.components = {
      zanLoadmore1: _zanLoadmore2.default
    }, _this.methods = {
      /** 显示错误次数 */
      _count: function _count(count) {
        if (Number(count)) {
          _wepy2.default.showToast({
            title: '\u8BE5\u9898\u76EE\u8BA2\u6B63' + count + '\u6B21',
            icon: 'none',
            duration: 2000
          });
        }
      },

      /** 更改订正状态 */
      _reviseChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var _this2 = this;

          var index, status;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log(e.target.val);
                  console.log(e.target.dataset.current);
                  index = e.target.dataset.current; // 获取当前索引

                  status = Boolean(Number(e.detail.value)).toString();

                  this._setRevise(this.id, this.error[index], status).then(function (res) {
                    _this2.error[index].count = res.count;
                    _this2.error[index].revise = res.status;
                    _this2.$apply();
                  });

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _reviseChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return _reviseChange;
      }(),

      /** 加载更多 */
      _loadMore: function _loadMore() {
        var _this3 = this;

        // 无更多数据或者正在加载则返回
        if (this.loading || this.nomore) return;
        this.loading = true;
        this._getErrorList(this.id, this.offset).then(function (res) {
          _this3.loading = false;
          _this3.error = _this3.error.concat(res.errorList);
          _this3.offset = res.offset;
          _this3.count = res.number;
          if (_this3.offset.length === 0) {
            _this3.nomore = true;
          }
          _this3.$apply();
        }).catch(function () {
          _this3.nomore = true;
          _this3.loading = false;
          _this3.$apply();
        });
      },

      /** 查看大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: this.imgs });
      },

      /** 下载错题 */
      _download: function _download() {
        // 跳转到筛选
        _wepy2.default.navigateTo({
          url: '/pages/statistics/select?id=' + this.id
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
          url: 'https://mid.guinaben.com/v2/textbook/statistics/error',
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

    /** 设置错题订正状态 */

  }, {
    key: '_setRevise',
    value: function _setRevise(chapterId, item, status) {
      wx.showLoading({ title: '提交中' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/textbook/statistics/revise',
          method: 'POST',
          data: {
            chapterId: chapterId,
            id: item.id,
            status: status
          },
          success: function success(res) {
            _wepy2.default.hideLoading();
            resolve(res);
          },
          fail: function fail(err) {
            _wepy2.default.hideLoading();
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.scrollHeight = this.$parent.globalData.system.windowHeight - 30;
                wx.setNavigationBarTitle({ title: options.name });
                // 开始加载数据
                _context2.prev = 2;

                this.id = options.id;
                _context2.next = 6;
                return this._getErrorList(options.id, this.offset);

              case 6:
                result = _context2.sent;

                this.loading = false;
                this.error = result.errorList;
                this.offset = result.offset;
                this.count = result.number;
                if (this.offset.length === 0) {
                  this.nomore = true;
                }
                this.$apply();
                _context2.next = 20;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2['catch'](2);

                this.loading = false;
                this.nomore = true;
                this.$apply();

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 15]]);
      }));

      function onLoad(_x2) {
        return _ref3.apply(this, arguments);
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return StatisticsError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsError , 'pages/statistics/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJyZXZpc2UiLCJhcnJheSIsImlkIiwibmFtZSIsIm9mZnNldCIsImVycm9yIiwiY291bnQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkaW5nIiwibm9tb3JlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuTG9hZG1vcmUxIiwiemFuTG9hZE1vcmUiLCJtZXRob2RzIiwiX2NvdW50IiwiTnVtYmVyIiwid2VweSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiX3JldmlzZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsIiwiZGF0YXNldCIsImN1cnJlbnQiLCJpbmRleCIsInN0YXR1cyIsIkJvb2xlYW4iLCJkZXRhaWwiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiX3NldFJldmlzZSIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJfbG9hZE1vcmUiLCJfZ2V0RXJyb3JMaXN0IiwiY29uY2F0IiwiZXJyb3JMaXN0IiwibnVtYmVyIiwibGVuZ3RoIiwiY2F0Y2giLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsInVybHMiLCJpbWdzIiwiX2Rvd25sb2FkIiwibmF2aWdhdGVUbyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsImZhaWwiLCJlcnIiLCJpdGVtIiwid3giLCJzaG93TG9hZGluZyIsIm1ldGhvZCIsImhpZGVMb2FkaW5nIiwib3B0aW9ucyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwid2luZG93SGVpZ2h0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwicmVzdWx0IiwiZnJvbSIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3Mi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ckI7QUFDQSxxQkFBS0UsS0FBTCxHQUFheUUsT0FBT2pDLE1BQXBCO0FBQ0Esb0JBQUksS0FBSzFDLE1BQUwsQ0FBWTJDLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsdUJBQUt0QyxNQUFMLEdBQWMsSUFBZDtBQUNEO0FBQ0QscUJBQUtnQyxNQUFMOzs7Ozs7OztBQUVBLHFCQUFLakMsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxxQkFBS2dDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJZUQsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUl3QyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJ0RCxnQkFBUUMsR0FBUixDQUFZYSxJQUFJWixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMUCxlQUFPLG9CQURGO0FBRUw0RCxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBM0swQy9ELGVBQUtnRSxJOztrQkFBN0JyRixlIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB6YW5Mb2FkTW9yZSBmcm9tICdAL2NvbXBvbmVudHMvemFuLWxvYWRtb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljc0Vycm9yIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgcmV2aXNlOiB7XHJcbiAgICAgIGFycmF5OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBuYW1lOiAn5Y+I6ZSZ5LqGJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAn5pCe5a+55LqGJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIG9mZnNldDogJycsXHJcbiAgICBlcnJvcjogW10sXHJcbiAgICBjb3VudDogMCxcclxuICAgIGlkOiAnJyxcclxuICAgIHNjcm9sbEhlaWdodDogNTAwLFxyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIG5vbW9yZTogZmFsc2VcclxuICB9XHJcblxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Mb2FkbW9yZTFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwibG9hZGluZ1wiLFwidi1iaW5kOm5vbW9yZS5zeW5jXCI6XCJub21vcmVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgemFuTG9hZG1vcmUxOiB6YW5Mb2FkTW9yZVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8qKiDmmL7npLrplJnor6/mrKHmlbAgKi9cclxuICAgIF9jb3VudCAoY291bnQpIHtcclxuICAgICAgaWYgKE51bWJlcihjb3VudCkpIHtcclxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogYOivpemimOebruiuouatoyR7Y291bnR95qyhYCxcclxuICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKiDmm7TmlLnorqLmraPnirbmgIEgKi9cclxuICAgIGFzeW5jIF9yZXZpc2VDaGFuZ2UgKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsKVxyXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQpXHJcbiAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudCAgLy8g6I635Y+W5b2T5YmN57Si5byVXHJcbiAgICAgIGxldCBzdGF0dXMgPSBCb29sZWFuKE51bWJlcihlLmRldGFpbC52YWx1ZSkpLnRvU3RyaW5nKClcclxuICAgICAgdGhpcy5fc2V0UmV2aXNlKHRoaXMuaWQsIHRoaXMuZXJyb3JbaW5kZXhdLCBzdGF0dXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JbaW5kZXhdLmNvdW50ID0gcmVzLmNvdW50XHJcbiAgICAgICAgdGhpcy5lcnJvcltpbmRleF0ucmV2aXNlID0gcmVzLnN0YXR1c1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvKiog5Yqg6L295pu05aSaICovXHJcbiAgICBfbG9hZE1vcmUgKCkge1xyXG4gICAgICAvLyDml6Dmm7TlpJrmlbDmja7miJbogIXmraPlnKjliqDovb3liJnov5Tlm55cclxuICAgICAgaWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLm5vbW9yZSkgcmV0dXJuXHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgICAgdGhpcy5fZ2V0RXJyb3JMaXN0KHRoaXMuaWQsIHRoaXMub2Zmc2V0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmVycm9yLmNvbmNhdChyZXMuZXJyb3JMaXN0KVxyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gcmVzLm9mZnNldFxyXG4gICAgICAgIHRoaXMuY291bnQgPSByZXMubnVtYmVyXHJcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qKiDmn6XnnIvlpKflm74gKi9cclxuICAgIF9wcmV2aWV3ICh1cmwpIHtcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0tcHJpbWFyeUVycm9yYCwgdXJsczogdGhpcy5pbWdzfSlcclxuICAgIH0sXHJcbiAgICAvKiog5LiL6L296ZSZ6aKYICovXHJcbiAgICBfZG93bmxvYWQgKCkge1xyXG4gICAgICAvLyDot7PovazliLDnrZvpgIlcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9zZWxlY3Q/aWQ9JHt0aGlzLmlkfWBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXB1dGVkID0ge1xyXG4gICAgLyoqIOWbvueJh+mbhiAqL1xyXG4gICAgaW1ncyAoKSB7XHJcbiAgICAgIGxldCB1cmxzID0gW11cclxuICAgICAgZm9yIChsZXQgaW1nIG9mIHRoaXMuZXJyb3IpIHtcclxuICAgICAgICB1cmxzLnB1c2goYCR7aW1nLmVycm9ySW1nLnVybH0tcHJpbWFyeUVycm9yYClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdXJsc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPlumUmemimOaVsOaNriAqL1xyXG4gIF9nZXRFcnJvckxpc3QgKGlkLCBvZmZzZXQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL3RleHRib29rL3N0YXRpc3RpY3MvZXJyb3InLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNoYXB0ZXJJZDogaWQsXHJcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9rumUmemimOiuouato+eKtuaAgSAqL1xyXG4gIF9zZXRSZXZpc2UgKGNoYXB0ZXJJZCwgaXRlbSwgc3RhdHVzKSB7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6ICfmj5DkuqTkuK0nfSlcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL3RleHRib29rL3N0YXRpc3RpY3MvcmV2aXNlJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjaGFwdGVySWQ6IGNoYXB0ZXJJZCxcclxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zeXN0ZW0ud2luZG93SGVpZ2h0IC0gMzBcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IG9wdGlvbnMubmFtZX0pXHJcbiAgICAvLyDlvIDlp4vliqDovb3mlbDmja5cclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRFcnJvckxpc3Qob3B0aW9ucy5pZCwgdGhpcy5vZmZzZXQpXHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHRoaXMuZXJyb3IgPSByZXN1bHQuZXJyb3JMaXN0XHJcbiAgICAgIHRoaXMub2Zmc2V0ID0gcmVzdWx0Lm9mZnNldFxyXG4gICAgICB0aGlzLmNvdW50ID0gcmVzdWx0Lm51bWJlclxyXG4gICAgICBpZiAodGhpcy5vZmZzZXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XHJcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=