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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJ0YWciLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsInJlcyIsImVyck1zZyIsInNob3dUb2FzdCIsImljb24iLCJnZXRTdG9yYWdlU3luYyIsImJpbmQiLCJfYmluZFVzZXIiLCJtYWlsIiwiZW1haWwiLCJfc2V0VXNlckVtYWlsIiwiX3NlbmRFbWFpbCIsInVzZXIiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImVuY3J5cHRlZERhdGEiLCJzZXNzaW9uX2tleSIsIml2Iiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJvcHRpb25zIiwiY2hhcHRlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzdGF0aXN0aWNzU2VsZWN0IiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJyZXN1bHQiLCJjb25maXJtIiwibmF2aWdhdGVCYWNrIiwiY29uc29sZSIsImxvZyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImZyb20iLCJ0YXJnZXQiLCJpbWFn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Q29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG5cbiAgLy8g5Y+v5L2/55So5b6XRW1haWzpgq7nrrHliJfooahcbiAgY29uc3QgZW1haWxMaXN0ID0gWydAcXEuY29tJywgJ0AxMjYuY29tJywgJ0AxMzkuY29tJywgJ0AxNjMuY29tJywgJ0AxODkuY29tJywgJ0Bzb2h1LmNvbScsICdAc2luYS5jb20nLCAnQGdtYWlsLmNvbSddXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RW1haWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIvovb0nXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbkZpZWxkMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJmb3JtX2VtYWlsXCIsXCJjb21wb25lbnRJZFwiOlwiemFuRmllbGQxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHphbkZpZWxkMTogemFuRmllbGRcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGVtYWlsRGlzYWJsZWQgKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmZvcm1fZW1haWwudmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlkOiAnJyxcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgdGFnOiAnJyxcbiAgICAgIGVtYWlsQ29kZXM6IGVtYWlsTGlzdCxcbiAgICAgIGVtYWlsQ29kZUluZGV4OiAwLFxuICAgICAgZm9ybV9lbWFpbDoge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXpgq7nrrEnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgeyBkZXRhaWwgfSA9IGVcbiAgICAgICAgdGhpcy5mb3JtX2VtYWlsLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZEVtYWlsQ29kZUNoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICAvKiog5Y+R6YCBRW1haWwgKi9cbiAgICAgIGFzeW5jIF9zZW5kKHJlcykge1xuICAgICAgICAvLyDmjojmnYPliKTmlq1cbiAgICAgICAgaWYgKHJlcy5kZXRhaWwuZXJyTXNnICE9PSAnZ2V0VXNlckluZm86b2snKSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+S4jeimgeaLkue7neaOiOadgycsIGljb246ICdub25lJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIOesrOS4gOasoeS4iuS8oOS4quS6uuS/oeaBr1xuICAgICAgICBpZiAoIXdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmJpbmQpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9iaW5kVXNlcihyZXMuZGV0YWlsKVxuICAgICAgICB9XG4gICAgICAgIC8vIOWmguaenOW9k+WJjeeahEVtYWls5ZKM5L+h5oGv55u45ZCM5YiZ5Y+R6YCB77yM5ZCm5YiZ5pu05pawRW1haWzkv6Hmga/lnKjlj5HpgIFcbiAgICAgICAgbGV0IG1haWwgPSB0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF1cbiAgICAgICAgaWYgKG1haWwgIT09IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmVtYWlsKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0VXNlckVtYWlsKHRoaXMuZm9ybV9lbWFpbC52YWx1ZSArIHRoaXMuZW1haWxDb2Rlc1t0aGlzLmVtYWlsQ29kZUluZGV4XSlcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9zZW5kRW1haWwodGhpcy5pZCwgdGhpcy50eXBlKVxuICAgICAgfVxuICAgIH1cbiAgICAvKiog57uR5a6a55So5oi3ICovXG4gICAgX2JpbmRVc2VyICh1c2VyKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mb0luaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IHVzZXIuZW5jcnlwdGVkRGF0YSxcbiAgICAgICAgICAgIHNlc3Npb25fa2V5OiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3Nlc3Npb25fa2V5JyksXG4gICAgICAgICAgICBpdjogdXNlci5pdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xuICAgIF9zZXRVc2VyRW1haWwgKGVtYWlsKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mb0VkaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOWPkemAgUVtYWlsICovXG4gICAgX3NlbmRFbWFpbCAoaWQsIHR5cGUpIHtcbiAgICAgIGxldCB1cmwgPSAnJ1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fVxuICAgICAgaWYgKHR5cGUgPT09ICdzdGF0aXN0aWNzJykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvdGV4dGJvb2svc3RhdGlzdGljcy9kb3dubG9hZCdcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkLFxuICAgICAgICAgIHR5cGU6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnN0YXRpc3RpY3NTZWxlY3QudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3b3JrYm9vaycpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL3dvcmtib29rL2NoYXB0ZXIvZXJyb3JEb3dubG9hZCdcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi9yZXNvdXJjZS9kb3dubG9hZC9uZXcvJ1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICB0eXBlOiB0aGlzLnRhZ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnycsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+W3suWPkemAgeiHs+aCqOeahOmCrueusSjoi6XmnKrmlLbliLDvvIzor7fmn6XnnIvlnoPlnL7pgq7ku7YpJyxcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5Lqy77yM6LaF5Ye65Lu75Yqh5LqG77yM5piO5aSp5YaN5p2l5ZCn77yBJyxcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgdGhpcy50YWcgPSBvcHRpb25zLnRhZ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG9uU2hvdygpIHtcbiAgICAgIGxldCBlbWFpbCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmVtYWlsXG4gICAgICAvLyDojrflj5bpgq7nrrHlkozpgq7nrrHnsbvlnotcbiAgICAgIHRoaXMuZm9ybV9lbWFpbC52YWx1ZSA9IGVtYWlsLnNwbGl0KCdAJylbMF1cbiAgICAgIGxldCB0eXBlID0gYEAke2VtYWlsLnNwbGl0KCdAJylbMV19YFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbWFpbExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IGVtYWlsTGlzdFtpXSkge1xuICAgICAgICAgIHRoaXMuZW1haWxDb2RlSW5kZXggPSBpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=