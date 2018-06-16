'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      tag: '',
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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
          var mail;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(res.detail.errMsg !== 'getUserInfo:ok')) {
                    _context.next = 3;
                    break;
                  }

                  _wepy2.default.showToast({ title: '请不要拒绝授权', icon: 'none' });
                  return _context.abrupt('return');

                case 3:
                  if (_wepy2.default.getStorageSync('gnb_middle_User').bind) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 6;
                  return this._bindUser(res.detail);

                case 6:
                  // 如果当前的Email和信息相同则发送，否则更新Email信息在发送
                  mail = this.form_email.value + this.emailCodes[this.emailCodeIndex];

                  if (!(mail !== _wepy2.default.getStorageSync('gnb_middle_User').email)) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 10;
                  return this._setUserEmail(this.form_email.value + this.emailCodes[this.emailCodeIndex]);

                case 10:
                  _context.next = 12;
                  return this._sendEmail(this.id, this.type);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _send(_x) {
          return _ref2.apply(this, arguments);
        }

        return _send;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyEmail, [{
    key: '_bindUser',

    /** 绑定用户 */
    value: function _bindUser(user) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/member/infoInit',
          method: 'POST',
          data: {
            encryptedData: user.encryptedData,
            session_key: _wepy2.default.getStorageSync('gnb_middle_session_key'),
            iv: user.iv
          },
          success: function success(res) {
            _wepy2.default.hideLoading();
            _wepy2.default.setStorageSync('gnb_middle_User', res);
            resolve(res);
          },
          fail: function fail(err) {
            _wepy2.default.hideLoading();
            reject(err);
          }
        });
      });
    }
    /** 设置用户信息 */

  }, {
    key: '_setUserEmail',
    value: function _setUserEmail(email) {
      _wepy2.default.showLoading({ title: '提交中' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/member/infoEdit',
          method: 'POST',
          data: {
            email: email
          },
          success: function success(res) {
            _wepy2.default.setStorageSync('gnb_middle_User', res);
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
      var url = '';
      var options = {};
      if (type === 'statistics') {
        url = 'https://small.guinaben.com/v2/textbook/statistics/download';
        options = {
          chapterId: id,
          type: this.$parent.globalData.statisticsSelect.toString()
        };
      } else if (type === 'workbook') {
        url = 'https://small.guinaben.com/v2/workbook/chapter/errorDownload';
        options = {
          chapterId: id
        };
      } else {
        url = 'https://small.guinaben.com/v2/resource/download/new/';
        options = {
          id: id,
          type: this.tag
        };
      }
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: url,
          data: _extends({}, options),
          success: function success(res) {
            if (res.hasOwnProperty('url')) {
              _wepy2.default.showModal({
                title: '发送成功',
                content: '已发送至您的邮箱(若未收到，请查看垃圾邮件)',
                confirmText: '知道了',
                showCancel: false,
                success: function success(result) {
                  if (result.confirm) {
                    _wepy2.default.navigateBack();
                  }
                }
              });
            } else {
              _wepy2.default.showModal({
                title: '提示',
                content: res._value.msg,
                confirmText: '知道了',
                showCancel: false
              });
            }
          },
          fail: function fail(err) {
            console.log(err);
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
      this.tag = options.tag;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var email = _wepy2.default.getStorageSync('gnb_middle_User').email;
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return MyEmail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyEmail , 'pages/my/email'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJ0YWciLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsInJlcyIsImVyck1zZyIsInNob3dUb2FzdCIsImljb24iLCJnZXRTdG9yYWdlU3luYyIsImJpbmQiLCJfYmluZFVzZXIiLCJtYWlsIiwiZW1haWwiLCJfc2V0VXNlckVtYWlsIiwiX3NlbmRFbWFpbCIsInVzZXIiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImVuY3J5cHRlZERhdGEiLCJzZXNzaW9uX2tleSIsIml2Iiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJvcHRpb25zIiwiY2hhcHRlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzdGF0aXN0aWNzU2VsZWN0IiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJyZXN1bHQiLCJjb25maXJtIiwibmF2aWdhdGVCYWNrIiwiX3ZhbHVlIiwibXNnIiwiY29uc29sZSIsImxvZyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImZyb20i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ckJsRixPIiwiZmlsZSI6ImVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG4gIC8vIOWPr+S9v+eUqOW+l0VtYWls6YKu566x5YiX6KGoXG4gIGNvbnN0IGVtYWlsTGlzdCA9IFsnQHFxLmNvbScsICdAMTI2LmNvbScsICdAMTM5LmNvbScsICdAMTYzLmNvbScsICdAMTg5LmNvbScsICdAc29odS5jb20nLCAnQHNpbmEuY29tJywgJ0BnbWFpbC5jb20nXVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeUVtYWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiL6L29J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5GaWVsZDFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiZm9ybV9lbWFpbFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB6YW5GaWVsZDE6IHphbkZpZWxkXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBlbWFpbERpc2FibGVkICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5mb3JtX2VtYWlsLnZhbHVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpZDogJycsXG4gICAgICB0eXBlOiAnJyxcbiAgICAgIHRhZzogJycsXG4gICAgICBlbWFpbENvZGVzOiBlbWFpbExpc3QsXG4gICAgICBlbWFpbENvZGVJbmRleDogMCxcbiAgICAgIGZvcm1fZW1haWw6IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl6YKu566xJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IHsgZGV0YWlsIH0gPSBlXG4gICAgICAgIHRoaXMuZm9ybV9lbWFpbC52YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRFbWFpbENvZGVDaGFuZ2UgKGUpIHtcbiAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgLyoqIOWPkemAgUVtYWlsICovXG4gICAgICBhc3luYyBfc2VuZChyZXMpIHtcbiAgICAgICAgLy8g5o6I5p2D5Yik5patXG4gICAgICAgIGlmIChyZXMuZGV0YWlsLmVyck1zZyAhPT0gJ2dldFVzZXJJbmZvOm9rJykge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHsgdGl0bGU6ICfor7fkuI3opoHmi5Lnu53mjojmnYMnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyDnrKzkuIDmrKHkuIrkvKDkuKrkurrkv6Hmga9cbiAgICAgICAgaWYgKCF3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5iaW5kKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fYmluZFVzZXIocmVzLmRldGFpbClcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzlvZPliY3nmoRFbWFpbOWSjOS/oeaBr+ebuOWQjOWImeWPkemAge+8jOWQpuWImeabtOaWsEVtYWls5L+h5oGv5Zyo5Y+R6YCBXG4gICAgICAgIGxldCBtYWlsID0gdGhpcy5mb3JtX2VtYWlsLnZhbHVlICsgdGhpcy5lbWFpbENvZGVzW3RoaXMuZW1haWxDb2RlSW5kZXhdXG4gICAgICAgIGlmIChtYWlsICE9PSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5lbWFpbCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJFbWFpbCh0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZEVtYWlsKHRoaXMuaWQsIHRoaXMudHlwZSlcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqIOe7keWumueUqOaItyAqL1xuICAgIF9iaW5kVXNlciAodXNlcikge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm9Jbml0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBlbmNyeXB0ZWREYXRhOiB1c2VyLmVuY3J5cHRlZERhdGEsXG4gICAgICAgICAgICBzZXNzaW9uX2tleTogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9zZXNzaW9uX2tleScpLFxuICAgICAgICAgICAgaXY6IHVzZXIuaXZcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIC8qKiDorr7nva7nlKjmiLfkv6Hmga8gKi9cbiAgICBfc2V0VXNlckVtYWlsIChlbWFpbCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfmj5DkuqTkuK0nfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm9FZGl0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xuICAgIF9zZW5kRW1haWwgKGlkLCB0eXBlKSB7XG4gICAgICBsZXQgdXJsID0gJydcbiAgICAgIGxldCBvcHRpb25zID0ge31cbiAgICAgIGlmICh0eXBlID09PSAnc3RhdGlzdGljcycpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL3RleHRib29rL3N0YXRpc3RpY3MvZG93bmxvYWQnXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgY2hhcHRlcklkOiBpZCxcbiAgICAgICAgICB0eXBlOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zdGF0aXN0aWNzU2VsZWN0LnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnd29ya2Jvb2snKSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vay9jaGFwdGVyL2Vycm9yRG93bmxvYWQnXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgY2hhcHRlcklkOiBpZFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvcmVzb3VyY2UvZG93bmxvYWQvbmV3LydcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdHlwZTogdGhpcy50YWdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflt7Llj5HpgIHoh7PmgqjnmoTpgq7nrrEo6Iul5pyq5pS25Yiw77yM6K+35p+l55yL5Z6D5Zy+6YKu5Lu2KScsXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzLl92YWx1ZS5tc2csXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZVxuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICAgIHRoaXMudGFnID0gb3B0aW9ucy50YWdcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICBsZXQgZW1haWwgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5lbWFpbFxuICAgICAgLy8g6I635Y+W6YKu566x5ZKM6YKu566x57G75Z6LXG4gICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBlbWFpbC5zcGxpdCgnQCcpWzBdXG4gICAgICBsZXQgdHlwZSA9IGBAJHtlbWFpbC5zcGxpdCgnQCcpWzFdfWBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1haWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBlbWFpbExpc3RbaV0pIHtcbiAgICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19