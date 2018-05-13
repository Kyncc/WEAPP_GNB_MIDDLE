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
          url: 'https://mid.guinaben.com/v2/member/infoInit',
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
          url: 'https://mid.guinaben.com/v2/member/infoEdit',
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
        url = 'https://mid.guinaben.com/v2/textbook/statistics/download';
        options = {
          chapterId: id,
          type: this.$parent.globalData.statisticsSelect.toString()
        };
      } else if (type === 'workbook') {
        url = 'https://mid.guinaben.com/v2/workbook/chapter/errorDownload';
        options = {
          chapterId: id
        };
      } else {
        url = 'https://mid.guinaben.com/v2/resource/download/new/';
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
            try {
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
              }
            } catch (err) {
              _wepy2.default.showModal({
                title: '提示',
                content: '亲，超出任务了，明天再来吧！',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiemFuRmllbGQiLCJjb21wdXRlZCIsImVtYWlsRGlzYWJsZWQiLCJCb29sZWFuIiwiZm9ybV9lbWFpbCIsInZhbHVlIiwiZGF0YSIsImlkIiwidHlwZSIsInRhZyIsImVtYWlsQ29kZXMiLCJlbWFpbENvZGVJbmRleCIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJldmVudHMiLCJ6YW5GaWVsZENoYW5nZSIsImUiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEVtYWlsQ29kZUNoYW5nZSIsIl9zZW5kIiwicmVzIiwiZXJyTXNnIiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJnZXRTdG9yYWdlU3luYyIsImJpbmQiLCJfYmluZFVzZXIiLCJtYWlsIiwiZW1haWwiLCJfc2V0VXNlckVtYWlsIiwiX3NlbmRFbWFpbCIsInVzZXIiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImVuY3J5cHRlZERhdGEiLCJzZXNzaW9uX2tleSIsIml2Iiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJvcHRpb25zIiwiY2hhcHRlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzdGF0aXN0aWNzU2VsZWN0IiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJyZXN1bHQiLCJjb25maXJtIiwibmF2aWdhdGVCYWNrIiwiY29uc29sZSIsImxvZyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImZy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VSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBM01rQ2pELGVBQUtrRCxJOztrQkFBckJsRixPIiwiZmlsZSI6ImVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcclxuXHJcbiAgLy8g5Y+v5L2/55So5b6XRW1haWzpgq7nrrHliJfooahcclxuICBjb25zdCBlbWFpbExpc3QgPSBbJ0BxcS5jb20nLCAnQDEyNi5jb20nLCAnQDEzOS5jb20nLCAnQDE2My5jb20nLCAnQDE4OS5jb20nLCAnQHNvaHUuY29tJywgJ0BzaW5hLmNvbScsICdAZ21haWwuY29tJ11cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeUVtYWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4i+i9vSdcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuRmllbGQxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImZvcm1fZW1haWxcIixcImNvbXBvbmVudElkXCI6XCJ6YW5GaWVsZDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICB6YW5GaWVsZDE6IHphbkZpZWxkXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIGVtYWlsRGlzYWJsZWQgKCkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZm9ybV9lbWFpbC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgdHlwZTogJycsXHJcbiAgICAgIHRhZzogJycsXHJcbiAgICAgIGVtYWlsQ29kZXM6IGVtYWlsTGlzdCxcclxuICAgICAgZW1haWxDb2RlSW5kZXg6IDAsXHJcbiAgICAgIGZvcm1fZW1haWw6IHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl6YKu566xJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICB6YW5GaWVsZENoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHsgZGV0YWlsIH0gPSBlXHJcbiAgICAgICAgdGhpcy5mb3JtX2VtYWlsLnZhbHVlID0gZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYmluZEVtYWlsQ29kZUNoYW5nZSAoZSkge1xyXG4gICAgICAgIHRoaXMuZW1haWxDb2RlSW5kZXggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICAvKiog5Y+R6YCBRW1haWwgKi9cclxuICAgICAgYXN5bmMgX3NlbmQocmVzKSB7XHJcbiAgICAgICAgLy8g5o6I5p2D5Yik5patXHJcbiAgICAgICAgaWYgKHJlcy5kZXRhaWwuZXJyTXNnICE9PSAnZ2V0VXNlckluZm86b2snKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7IHRpdGxlOiAn6K+35LiN6KaB5ouS57ud5o6I5p2DJywgaWNvbjogJ25vbmUnIH0pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g56ys5LiA5qyh5LiK5Lyg5Liq5Lq65L+h5oGvXHJcbiAgICAgICAgaWYgKCF3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5iaW5kKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLl9iaW5kVXNlcihyZXMuZGV0YWlsKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzlvZPliY3nmoRFbWFpbOWSjOS/oeaBr+ebuOWQjOWImeWPkemAge+8jOWQpuWImeabtOaWsEVtYWls5L+h5oGv5Zyo5Y+R6YCBXHJcbiAgICAgICAgbGV0IG1haWwgPSB0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF1cclxuICAgICAgICBpZiAobWFpbCAhPT0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZW1haWwpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJFbWFpbCh0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRFbWFpbCh0aGlzLmlkLCB0aGlzLnR5cGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiDnu5HlrprnlKjmiLcgKi9cclxuICAgIF9iaW5kVXNlciAodXNlcikge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm9Jbml0JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlbmNyeXB0ZWREYXRhOiB1c2VyLmVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgIHNlc3Npb25fa2V5OiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3Nlc3Npb25fa2V5JyksXHJcbiAgICAgICAgICAgIGl2OiB1c2VyLml2XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xyXG4gICAgX3NldFVzZXJFbWFpbCAoZW1haWwpIHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfmj5DkuqTkuK0nfSlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL21lbWJlci9pbmZvRWRpdCcsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29tcGxldGUgKCkge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xyXG4gICAgX3NlbmRFbWFpbCAoaWQsIHR5cGUpIHtcclxuICAgICAgbGV0IHVybCA9ICcnXHJcbiAgICAgIGxldCBvcHRpb25zID0ge31cclxuICAgICAgaWYgKHR5cGUgPT09ICdzdGF0aXN0aWNzJykge1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvdGV4dGJvb2svc3RhdGlzdGljcy9kb3dubG9hZCdcclxuICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgY2hhcHRlcklkOiBpZCxcclxuICAgICAgICAgIHR5cGU6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0YXRpc3RpY3NTZWxlY3QudG9TdHJpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnd29ya2Jvb2snKSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vay9jaGFwdGVyL2Vycm9yRG93bmxvYWQnXHJcbiAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIGNoYXB0ZXJJZDogaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9yZXNvdXJjZS9kb3dubG9hZC9uZXcvJ1xyXG4gICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnRhZ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLi4ub3B0aW9uc1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogJ+W3suWPkemAgeiHs+aCqOeahOmCrueusSjoi6XmnKrmlLbliLDvvIzor7fmn6XnnIvlnoPlnL7pgq7ku7YpJyxcclxuICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxyXG4gICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5Lqy77yM6LaF5Ye65Lu75Yqh5LqG77yM5piO5aSp5YaN5p2l5ZCn77yBJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29tcGxldGUgKCkge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZVxyXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxyXG4gICAgICB0aGlzLnRhZyA9IG9wdGlvbnMudGFnXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIGxldCBlbWFpbCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmVtYWlsXHJcbiAgICAgIC8vIOiOt+WPlumCrueuseWSjOmCrueuseexu+Wei1xyXG4gICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBlbWFpbC5zcGxpdCgnQCcpWzBdXHJcbiAgICAgIGxldCB0eXBlID0gYEAke2VtYWlsLnNwbGl0KCdAJylbMV19YFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtYWlsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBlbWFpbExpc3RbaV0pIHtcclxuICAgICAgICAgIHRoaXMuZW1haWxDb2RlSW5kZXggPSBpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=