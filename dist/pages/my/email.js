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
          type: this.$parent.globalData.statisticsSelect[0].toString()
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJ0YWciLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsInJlcyIsImVyck1zZyIsInNob3dUb2FzdCIsImljb24iLCJnZXRTdG9yYWdlU3luYyIsImJpbmQiLCJfYmluZFVzZXIiLCJtYWlsIiwiZW1haWwiLCJfc2V0VXNlckVtYWlsIiwiX3NlbmRFbWFpbCIsInVzZXIiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImVuY3J5cHRlZERhdGEiLCJzZXNzaW9uX2tleSIsIml2Iiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJvcHRpb25zIiwiY2hhcHRlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzdGF0aXN0aWNzU2VsZWN0IiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJyZXN1bHQiLCJjb25maXJtIiwibmF2aWdhdGVCYWNrIiwiY29uc29sZSIsImxvZyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImZyb20iLCJ0YXJnZXQiLCJpbWFn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QUtDLEk7O2tCQUFyQmhGLE8iLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xyXG5cclxuICAvLyDlj6/kvb/nlKjlvpdFbWFpbOmCrueuseWIl+ihqFxyXG4gIGNvbnN0IGVtYWlsTGlzdCA9IFsnQHFxLmNvbScsICdAMTI2LmNvbScsICdAMTM5LmNvbScsICdAMTYzLmNvbScsICdAMTg5LmNvbScsICdAc29odS5jb20nLCAnQHNpbmEuY29tJywgJ0BnbWFpbC5jb20nXVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RW1haWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiL6L29J1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5GaWVsZDFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiZm9ybV9lbWFpbFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHphbkZpZWxkMTogemFuRmllbGRcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgZW1haWxEaXNhYmxlZCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5mb3JtX2VtYWlsLnZhbHVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICB0eXBlOiAnJyxcclxuICAgICAgdGFnOiAnJyxcclxuICAgICAgZW1haWxDb2RlczogZW1haWxMaXN0LFxyXG4gICAgICBlbWFpbENvZGVJbmRleDogMCxcclxuICAgICAgZm9ybV9lbWFpbDoge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXpgq7nrrEnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgeyBkZXRhaWwgfSA9IGVcclxuICAgICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBkZXRhaWwudmFsdWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBiaW5kRW1haWxDb2RlQ2hhbmdlIChlKSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xyXG4gICAgICBhc3luYyBfc2VuZChyZXMpIHtcclxuICAgICAgICAvLyDmjojmnYPliKTmlq1cclxuICAgICAgICBpZiAocmVzLmRldGFpbC5lcnJNc2cgIT09ICdnZXRVc2VySW5mbzpvaycpIHtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHsgdGl0bGU6ICfor7fkuI3opoHmi5Lnu53mjojmnYMnLCBpY29uOiAnbm9uZScgfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnrKzkuIDmrKHkuIrkvKDkuKrkurrkv6Hmga9cclxuICAgICAgICBpZiAoIXdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmJpbmQpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuX2JpbmRVc2VyKHJlcy5kZXRhaWwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOW9k+WJjeeahEVtYWls5ZKM5L+h5oGv55u45ZCM5YiZ5Y+R6YCB77yM5ZCm5YiZ5pu05pawRW1haWzkv6Hmga/lnKjlj5HpgIFcclxuICAgICAgICBsZXQgbWFpbCA9IHRoaXMuZm9ybV9lbWFpbC52YWx1ZSArIHRoaXMuZW1haWxDb2Rlc1t0aGlzLmVtYWlsQ29kZUluZGV4XVxyXG4gICAgICAgIGlmIChtYWlsICE9PSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5lbWFpbCkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0VXNlckVtYWlsKHRoaXMuZm9ybV9lbWFpbC52YWx1ZSArIHRoaXMuZW1haWxDb2Rlc1t0aGlzLmVtYWlsQ29kZUluZGV4XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZEVtYWlsKHRoaXMuaWQsIHRoaXMudHlwZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIOe7keWumueUqOaItyAqL1xyXG4gICAgX2JpbmRVc2VyICh1c2VyKSB7XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mb0luaXQnLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IHVzZXIuZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgc2Vzc2lvbl9rZXk6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfc2Vzc2lvbl9rZXknKSxcclxuICAgICAgICAgICAgaXY6IHVzZXIuaXZcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXHJcbiAgICBfc2V0VXNlckVtYWlsIChlbWFpbCkge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm9FZGl0JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWPkemAgUVtYWlsICovXHJcbiAgICBfc2VuZEVtYWlsIChpZCwgdHlwZSkge1xyXG4gICAgICBsZXQgdXJsID0gJydcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7fVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N0YXRpc3RpY3MnKSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi90ZXh0Ym9vay9zdGF0aXN0aWNzL2Rvd25sb2FkJ1xyXG4gICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkLFxyXG4gICAgICAgICAgdHlwZTogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3RhdGlzdGljc1NlbGVjdFswXS50b1N0cmluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3b3JrYm9vaycpIHtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL3dvcmtib29rL2NoYXB0ZXIvZXJyb3JEb3dubG9hZCdcclxuICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgY2hhcHRlcklkOiBpZFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL3Jlc291cmNlL2Rvd25sb2FkL25ldy8nXHJcbiAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgIHR5cGU6IHRoaXMudGFnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn5bey5Y+R6YCB6Iez5oKo55qE6YKu566xKOiLpeacquaUtuWIsO+8jOivt+afpeeci+Weg+WcvumCruS7tiknLFxyXG4gICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkurLvvIzotoXlh7rku7vliqHkuobvvIzmmI7lpKnlho3mnaXlkKfvvIEnLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXHJcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXHJcbiAgICAgIHRoaXMudGFnID0gb3B0aW9ucy50YWdcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgbGV0IGVtYWlsID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZW1haWxcclxuICAgICAgLy8g6I635Y+W6YKu566x5ZKM6YKu566x57G75Z6LXHJcbiAgICAgIHRoaXMuZm9ybV9lbWFpbC52YWx1ZSA9IGVtYWlsLnNwbGl0KCdAJylbMF1cclxuICAgICAgbGV0IHR5cGUgPSBgQCR7ZW1haWwuc3BsaXQoJ0AnKVsxXX1gXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1haWxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IGVtYWlsTGlzdFtpXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XHJcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxyXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==