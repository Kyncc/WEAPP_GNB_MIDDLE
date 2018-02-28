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

// 可使用得Email邮箱列表
var emailList = ['@qq.com', '@126.com', '@139.com', '@163.com', '@189.com', '@sohu.com', '@sina.com', '@gmail.com'];

var MyEmail = function (_wepy$page) {
  _inherits(MyEmail, _wepy$page);

  function MyEmail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyEmail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyEmail.__proto__ || Object.getPrototypeOf(MyEmail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '下载'
    }, _this.$repeat = {}, _this.$props = { "zanField1": { "xmlns:v-bind": "", "v-bind:options.sync": "form_email", "componentId": "zanField1" } }, _this.$events = {}, _this.components = {
      zanField1: _zanField2.default
    }, _this.computed = {
      emailDisabled: function emailDisabled() {
        return Boolean(this.form_email.value);
      }
    }, _this.data = {
      id: '',
      type: '',
      emailCodes: emailList,
      emailCodeIndex: 0,
      form_email: {
        title: '',
        value: '',
        placeholder: '请输入邮箱'
      }
    }, _this.events = {
      zanFieldChange: function zanFieldChange(e) {
        var detail = e.detail;

        this.form_email.value = detail.value;
        this.$apply();
      }
    }, _this.methods = {
      bindEmailCodeChange: function bindEmailCodeChange(e) {
        this.emailCodeIndex = e.detail.value;
      },

      /** 发送Email */
      _send: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var mail;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 如果当前的Email和信息相同则发送，否则更新Email信息在发送
                  mail = this.form_email.value + this.emailCodes[this.emailCodeIndex];

                  if (!(mail !== _wepy2.default.getStorageSync('User').email)) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 4;
                  return this._setUserEmail(this.form_email.value + this.emailCodes[this.emailCodeIndex]);

                case 4:
                  _context.next = 6;
                  return this._sendEmail(this.id, this.type);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _send() {
          return _ref2.apply(this, arguments);
        }

        return _send;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyEmail, [{
    key: '_setUserEmail',


    /** 设置用户信息 */
    value: function _setUserEmail(email) {
      _wepy2.default.showLoading({ title: '提交中' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/member/infoEdit',
          method: 'POST',
          data: {
            email: email
          },
          success: function success(res) {
            _wepy2.default.setStorageSync('User', res);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }

    /** 发送Email */

  }, {
    key: '_sendEmail',
    value: function _sendEmail(id, type) {
      var url = void 0;
      if (type === 'statistics') {
        url = 'https://mid.guinaben.com/textbook/statistics/download';
      } else {
        url = 'https://mid.guinaben.com/workbook/chapter/errorDownload';
      }
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: url,
          data: {
            chapterId: id
          },
          success: function success(res) {
            _wepy2.default.showModal({
              title: '发送成功',
              content: '已发送至您的邮箱(若未收到，请查看垃圾邮件)',
              confirmText: '知道了',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  _wepy2.default.navigateBack();
                }
              }
            });
            resolve(res.url);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.type = options.type;
      this.id = options.id;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var email = _wepy2.default.getStorageSync('User').email;
      // 获取邮箱和邮箱类型
      this.form_email.value = email.split('@')[0];
      var type = '@' + email.split('@')[1];
      for (var i = 0; i < emailList.length; i++) {
        if (type === emailList[i]) {
          this.emailCodeIndex = i;
          break;
        }
      }
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
        path: '/pages/my/index'
      };
    }
  }]);

  return MyEmail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyEmail , 'pages/my/email'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsIm1haWwiLCJnZXRTdG9yYWdlU3luYyIsImVtYWlsIiwiX3NldFVzZXJFbWFpbCIsIl9zZW5kRW1haWwiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwiY2hhcHRlcklkIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm1UZXh0Iiwic2hvd0NhbmNlbCIsImNvbmZpcm0iLCJuYXZpZ2F0ZUJhY2siLCJvcHRpb25zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLFlBQVksQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxVQUFwQyxFQUFnRCxVQUFoRCxFQUE0RCxXQUE1RCxFQUF5RSxXQUF6RSxFQUFzRixZQUF0RixDQUFs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QUFTaEIsVUFBVXlELENBQVYsQ0FBYixFQUEyQjtBQUN6QixlQUFLdkMsY0FBTCxHQUFzQnVDLENBQXRCO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsV0FBS2hDLE1BQUw7QUFDRDs7O3NDQUVrQmlCLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJaUIsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCQyxnQkFBUUMsR0FBUixDQUFZbkIsSUFBSW9CLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0wzQyxlQUFPLHFCQURGO0FBRUw0QyxjQUFNO0FBRkQsT0FBUDtBQUlEOzs7O0VBaEprQyxlQUFLQyxJOztrQkFBckIvRCxPIiwiZmlsZSI6ImVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG4gIC8vIOWPr+S9v+eUqOW+l0VtYWls6YKu566x5YiX6KGoXG4gIGNvbnN0IGVtYWlsTGlzdCA9IFsnQHFxLmNvbScsICdAMTI2LmNvbScsICdAMTM5LmNvbScsICdAMTYzLmNvbScsICdAMTg5LmNvbScsICdAc29odS5jb20nLCAnQHNpbmEuY29tJywgJ0BnbWFpbC5jb20nXVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeUVtYWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiL6L29J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5GaWVsZDFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiZm9ybV9lbWFpbFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB6YW5GaWVsZDE6IHphbkZpZWxkXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBlbWFpbERpc2FibGVkICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5mb3JtX2VtYWlsLnZhbHVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpZDogJycsXG4gICAgICB0eXBlOiAnJyxcbiAgICAgIGVtYWlsQ29kZXM6IGVtYWlsTGlzdCxcbiAgICAgIGVtYWlsQ29kZUluZGV4OiAwLFxuICAgICAgZm9ybV9lbWFpbDoge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXpgq7nrrEnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgeyBkZXRhaWwgfSA9IGVcbiAgICAgICAgdGhpcy5mb3JtX2VtYWlsLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZEVtYWlsQ29kZUNoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICAvKiog5Y+R6YCBRW1haWwgKi9cbiAgICAgIGFzeW5jIF9zZW5kKCkge1xuICAgICAgICAvLyDlpoLmnpzlvZPliY3nmoRFbWFpbOWSjOS/oeaBr+ebuOWQjOWImeWPkemAge+8jOWQpuWImeabtOaWsEVtYWls5L+h5oGv5Zyo5Y+R6YCBXG4gICAgICAgIGxldCBtYWlsID0gdGhpcy5mb3JtX2VtYWlsLnZhbHVlICsgdGhpcy5lbWFpbENvZGVzW3RoaXMuZW1haWxDb2RlSW5kZXhdXG4gICAgICAgIGlmIChtYWlsICE9PSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZW1haWwpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VyRW1haWwodGhpcy5mb3JtX2VtYWlsLnZhbHVlICsgdGhpcy5lbWFpbENvZGVzW3RoaXMuZW1haWxDb2RlSW5kZXhdKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRFbWFpbCh0aGlzLmlkLCB0aGlzLnR5cGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xuICAgIF9zZXRVc2VyRW1haWwgKGVtYWlsKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vbWVtYmVyL2luZm9FZGl0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog5Y+R6YCBRW1haWwgKi9cbiAgICBfc2VuZEVtYWlsIChpZCwgdHlwZSkge1xuICAgICAgbGV0IHVybFxuICAgICAgaWYgKHR5cGUgPT09ICdzdGF0aXN0aWNzJykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3RleHRib29rL3N0YXRpc3RpY3MvZG93bmxvYWQnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvZXJyb3JEb3dubG9hZCdcbiAgICAgIH1cbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnycsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICflt7Llj5HpgIHoh7PmgqjnmoTpgq7nrrEo6Iul5pyq5pS25Yiw77yM6K+35p+l55yL5Z6D5Zy+6YKu5Lu2KScsXG4gICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMudXJsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG9uU2hvdygpIHtcbiAgICAgIGxldCBlbWFpbCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5lbWFpbFxuICAgICAgLy8g6I635Y+W6YKu566x5ZKM6YKu566x57G75Z6LXG4gICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBlbWFpbC5zcGxpdCgnQCcpWzBdXG4gICAgICBsZXQgdHlwZSA9IGBAJHtlbWFpbC5zcGxpdCgnQCcpWzFdfWBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1haWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBlbWFpbExpc3RbaV0pIHtcbiAgICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=