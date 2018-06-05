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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiemFuRmllbGQiLCJjb21wdXRlZCIsImVtYWlsRGlzYWJsZWQiLCJCb29sZWFuIiwiZm9ybV9lbWFpbCIsInZhbHVlIiwiZGF0YSIsImlkIiwidHlwZSIsInRhZyIsImVtYWlsQ29kZXMiLCJlbWFpbENvZGVJbmRleCIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJldmVudHMiLCJ6YW5GaWVsZENoYW5nZSIsImUiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEVtYWlsQ29kZUNoYW5nZSIsIl9zZW5kIiwicmVzIiwiZXJyTXNnIiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJnZXRTdG9yYWdlU3luYyIsImJpbmQiLCJfYmluZFVzZXIiLCJtYWlsIiwiZW1haWwiLCJfc2V0VXNlckVtYWlsIiwiX3NlbmRFbWFpbCIsInVzZXIiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImVuY3J5cHRlZERhdGEiLCJzZXNzaW9uX2tleSIsIml2Iiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJvcHRpb25zIiwiY2hhcHRlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzdGF0aXN0aWNzU2VsZWN0IiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJyZXN1bHQiLCJjb25maXJtIiwibmF2aWdhdGVCYWNrIiwiX3ZhbHVlIiwibXNnIiwiY29uc29sZSIsImxvZyIsInNwbGl0Iiwi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QVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQXpNa0NuRCxlQUFLb0QsSTs7a0JBQXJCcEYsTyIsImZpbGUiOiJlbWFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcblxuICAvLyDlj6/kvb/nlKjlvpdFbWFpbOmCrueuseWIl+ihqFxuICBjb25zdCBlbWFpbExpc3QgPSBbJ0BxcS5jb20nLCAnQDEyNi5jb20nLCAnQDEzOS5jb20nLCAnQDE2My5jb20nLCAnQDE4OS5jb20nLCAnQHNvaHUuY29tJywgJ0BzaW5hLmNvbScsICdAZ21haWwuY29tJ11cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlFbWFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4i+i9vSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuRmllbGQxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImZvcm1fZW1haWxcIixcImNvbXBvbmVudElkXCI6XCJ6YW5GaWVsZDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgemFuRmllbGQxOiB6YW5GaWVsZFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZW1haWxEaXNhYmxlZCAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZm9ybV9lbWFpbC52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaWQ6ICcnLFxuICAgICAgdHlwZTogJycsXG4gICAgICB0YWc6ICcnLFxuICAgICAgZW1haWxDb2RlczogZW1haWxMaXN0LFxuICAgICAgZW1haWxDb2RlSW5kZXg6IDAsXG4gICAgICBmb3JtX2VtYWlsOiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpemCrueusSdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICB6YW5GaWVsZENoYW5nZShlKSB7XG4gICAgICAgIGxldCB7IGRldGFpbCB9ID0gZVxuICAgICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kRW1haWxDb2RlQ2hhbmdlIChlKSB7XG4gICAgICAgIHRoaXMuZW1haWxDb2RlSW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xuICAgICAgYXN5bmMgX3NlbmQocmVzKSB7XG4gICAgICAgIC8vIOaOiOadg+WIpOaWrVxuICAgICAgICBpZiAocmVzLmRldGFpbC5lcnJNc2cgIT09ICdnZXRVc2VySW5mbzpvaycpIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7IHRpdGxlOiAn6K+35LiN6KaB5ouS57ud5o6I5p2DJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8g56ys5LiA5qyh5LiK5Lyg5Liq5Lq65L+h5oGvXG4gICAgICAgIGlmICghd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuYmluZCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2JpbmRVc2VyKHJlcy5kZXRhaWwpXG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55qERW1haWzlkozkv6Hmga/nm7jlkIzliJnlj5HpgIHvvIzlkKbliJnmm7TmlrBFbWFpbOS/oeaBr+WcqOWPkemAgVxuICAgICAgICBsZXQgbWFpbCA9IHRoaXMuZm9ybV9lbWFpbC52YWx1ZSArIHRoaXMuZW1haWxDb2Rlc1t0aGlzLmVtYWlsQ29kZUluZGV4XVxuICAgICAgICBpZiAobWFpbCAhPT0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZW1haWwpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VyRW1haWwodGhpcy5mb3JtX2VtYWlsLnZhbHVlICsgdGhpcy5lbWFpbENvZGVzW3RoaXMuZW1haWxDb2RlSW5kZXhdKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRFbWFpbCh0aGlzLmlkLCB0aGlzLnR5cGUpXG4gICAgICB9XG4gICAgfVxuICAgIC8qKiDnu5HlrprnlKjmiLcgKi9cbiAgICBfYmluZFVzZXIgKHVzZXIpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL21lbWJlci9pbmZvSW5pdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogdXNlci5lbmNyeXB0ZWREYXRhLFxuICAgICAgICAgICAgc2Vzc2lvbl9rZXk6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfc2Vzc2lvbl9rZXknKSxcbiAgICAgICAgICAgIGl2OiB1c2VyLml2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJFbWFpbCAoZW1haWwpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn5o+Q5Lqk5LitJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog5Y+R6YCBRW1haWwgKi9cbiAgICBfc2VuZEVtYWlsIChpZCwgdHlwZSkge1xuICAgICAgbGV0IHVybCA9ICcnXG4gICAgICBsZXQgb3B0aW9ucyA9IHt9XG4gICAgICBpZiAodHlwZSA9PT0gJ3N0YXRpc3RpY3MnKSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi90ZXh0Ym9vay9zdGF0aXN0aWNzL2Rvd25sb2FkJ1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWQsXG4gICAgICAgICAgdHlwZTogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3RhdGlzdGljc1NlbGVjdC50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dvcmtib29rJykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svY2hhcHRlci9lcnJvckRvd25sb2FkJ1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL3Jlc291cmNlL2Rvd25sb2FkL25ldy8nXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHR5cGU6IHRoaXMudGFnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5bey5Y+R6YCB6Iez5oKo55qE6YKu566xKOiLpeacquaUtuWIsO+8jOivt+afpeeci+Weg+WcvumCruS7tiknLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcy5fdmFsdWUubXNnLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGVcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgICB0aGlzLnRhZyA9IG9wdGlvbnMudGFnXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgbGV0IGVtYWlsID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZW1haWxcbiAgICAgIC8vIOiOt+WPlumCrueuseWSjOmCrueuseexu+Wei1xuICAgICAgdGhpcy5mb3JtX2VtYWlsLnZhbHVlID0gZW1haWwuc3BsaXQoJ0AnKVswXVxuICAgICAgbGV0IHR5cGUgPSBgQCR7ZW1haWwuc3BsaXQoJ0AnKVsxXX1gXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtYWlsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZSA9PT0gZW1haWxMaXN0W2ldKSB7XG4gICAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==