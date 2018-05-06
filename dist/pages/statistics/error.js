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
        path: '/pages/my/index'
      };
    }
  }]);

  return StatisticsError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsError , 'pages/statistics/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJyZXZpc2UiLCJhcnJheSIsImlkIiwibmFtZSIsIm9mZnNldCIsImVycm9yIiwiY291bnQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkaW5nIiwibm9tb3JlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuTG9hZG1vcmUxIiwiemFuTG9hZE1vcmUiLCJtZXRob2RzIiwiX2NvdW50IiwiTnVtYmVyIiwid2VweSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiX3JldmlzZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsIiwiZGF0YXNldCIsImN1cnJlbnQiLCJpbmRleCIsInN0YXR1cyIsIkJvb2xlYW4iLCJkZXRhaWwiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiX3NldFJldmlzZSIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJfbG9hZE1vcmUiLCJfZ2V0RXJyb3JMaXN0IiwiY29uY2F0IiwiZXJyb3JMaXN0IiwibnVtYmVyIiwibGVuZ3RoIiwiY2F0Y2giLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsInVybHMiLCJpbWdzIiwiX2Rvd25sb2FkIiwibmF2aWdhdGVUbyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsImZhaWwiLCJlcnIiLCJpdGVtIiwid3giLCJzaG93TG9hZGluZyIsIm1ldGhvZCIsImhpZGVMb2FkaW5nIiwib3B0aW9ucyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwid2luZG93SGVpZ2h0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwicmVzdWx0IiwiZnJvbSIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3Mi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ckI7QUFDQSxxQkFBS0UsS0FBTCxHQUFheUUsT0FBT2pDLE1BQXBCO0FBQ0Esb0JBQUksS0FBSzFDLE1BQUwsQ0FBWTJDLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsdUJBQUt0QyxNQUFMLEdBQWMsSUFBZDtBQUNEO0FBQ0QscUJBQUtnQyxNQUFMOzs7Ozs7OztBQUVBLHFCQUFLakMsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxxQkFBS2dDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJZUQsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUl3QyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJ0RCxnQkFBUUMsR0FBUixDQUFZYSxJQUFJWixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMUCxlQUFPLG9CQURGO0FBRUw0RCxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBM0swQy9ELGVBQUtnRSxJOztrQkFBN0JyRixlIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbkxvYWRNb3JlIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbG9hZG1vcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3NFcnJvciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgcmV2aXNlOiB7XG4gICAgICBhcnJheTogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgbmFtZTogJ+WPiOmUmeS6hidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIG5hbWU6ICfmkJ7lr7nkuoYnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIG9mZnNldDogJycsXG4gICAgZXJyb3I6IFtdLFxuICAgIGNvdW50OiAwLFxuICAgIGlkOiAnJyxcbiAgICBzY3JvbGxIZWlnaHQ6IDUwMCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIG5vbW9yZTogZmFsc2VcbiAgfVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Mb2FkbW9yZTFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwibG9hZGluZ1wiLFwidi1iaW5kOm5vbW9yZS5zeW5jXCI6XCJub21vcmVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHphbkxvYWRtb3JlMTogemFuTG9hZE1vcmVcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqIOaYvuekuumUmeivr+asoeaVsCAqL1xuICAgIF9jb3VudCAoY291bnQpIHtcbiAgICAgIGlmIChOdW1iZXIoY291bnQpKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogYOivpemimOebruiuouatoyR7Y291bnR95qyhYCxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKiDmm7TmlLnorqLmraPnirbmgIEgKi9cbiAgICBhc3luYyBfcmV2aXNlQ2hhbmdlIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWwpXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQpXG4gICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQgIC8vIOiOt+WPluW9k+WJjee0ouW8lVxuICAgICAgbGV0IHN0YXR1cyA9IEJvb2xlYW4oTnVtYmVyKGUuZGV0YWlsLnZhbHVlKSkudG9TdHJpbmcoKVxuICAgICAgdGhpcy5fc2V0UmV2aXNlKHRoaXMuaWQsIHRoaXMuZXJyb3JbaW5kZXhdLCBzdGF0dXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmVycm9yW2luZGV4XS5jb3VudCA9IHJlcy5jb3VudFxuICAgICAgICB0aGlzLmVycm9yW2luZGV4XS5yZXZpc2UgPSByZXMuc3RhdHVzXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvKiog5Yqg6L295pu05aSaICovXG4gICAgX2xvYWRNb3JlICgpIHtcbiAgICAgIC8vIOaXoOabtOWkmuaVsOaNruaIluiAheato+WcqOWKoOi9veWImei/lOWbnlxuICAgICAgaWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLm5vbW9yZSkgcmV0dXJuXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLl9nZXRFcnJvckxpc3QodGhpcy5pZCwgdGhpcy5vZmZzZXQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5jb25jYXQocmVzLmVycm9yTGlzdClcbiAgICAgICAgdGhpcy5vZmZzZXQgPSByZXMub2Zmc2V0XG4gICAgICAgIHRoaXMuY291bnQgPSByZXMubnVtYmVyXG4gICAgICAgIGlmICh0aGlzLm9mZnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLm5vbW9yZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXByaW1hcnlFcnJvcmAsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgfSxcbiAgICAvKiog5LiL6L296ZSZ6aKYICovXG4gICAgX2Rvd25sb2FkICgpIHtcbiAgICAgIC8vIOi3s+i9rOWIsOetm+mAiVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3Mvc2VsZWN0P2lkPSR7dGhpcy5pZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuICAgIC8qKiDlm77niYfpm4YgKi9cbiAgICBpbWdzICgpIHtcbiAgICAgIGxldCB1cmxzID0gW11cbiAgICAgIGZvciAobGV0IGltZyBvZiB0aGlzLmVycm9yKSB7XG4gICAgICAgIHVybHMucHVzaChgJHtpbWcuZXJyb3JJbWcudXJsfS1wcmltYXJ5RXJyb3JgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVybHNcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+W6ZSZ6aKY5pWw5o2uICovXG4gIF9nZXRFcnJvckxpc3QgKGlkLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL3RleHRib29rL3N0YXRpc3RpY3MvZXJyb3InLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhcHRlcklkOiBpZCxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOiuvue9rumUmemimOiuouato+eKtuaAgSAqL1xuICBfc2V0UmV2aXNlIChjaGFwdGVySWQsIGl0ZW0sIHN0YXR1cykge1xuICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvdGV4dGJvb2svc3RhdGlzdGljcy9yZXZpc2UnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogY2hhcHRlcklkLFxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3lzdGVtLndpbmRvd0hlaWdodCAtIDMwXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAvLyDlvIDlp4vliqDovb3mlbDmja5cbiAgICB0cnkge1xuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRFcnJvckxpc3Qob3B0aW9ucy5pZCwgdGhpcy5vZmZzZXQpXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lcnJvciA9IHJlc3VsdC5lcnJvckxpc3RcbiAgICAgIHRoaXMub2Zmc2V0ID0gcmVzdWx0Lm9mZnNldFxuICAgICAgdGhpcy5jb3VudCA9IHJlc3VsdC5udW1iZXJcbiAgICAgIGlmICh0aGlzLm9mZnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5ub21vcmUgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgfVxuICB9XG59XG4iXX0=