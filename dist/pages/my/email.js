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
                  if (_wepy2.default.getStorageSync('gnb_middle_user').bind) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 6;
                  return this._bindUser(res.detail);

                case 6:
                  // 如果当前的Email和信息相同则发送，否则更新Email信息在发送
                  mail = this.form_email.value + this.emailCodes[this.emailCodeIndex];

                  if (!(mail !== _wepy2.default.getStorageSync('gnb_middle_user').email)) {
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
          url: 'https://api.guinaben.com/member/v2/bind',
          method: 'POST',
          data: {
            userInfo: user.userInfo
          },
          success: function success(res) {
            _wepy2.default.hideLoading();
            _wepy2.default.setStorageSync('gnb_middle_user', res);
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
          url: 'https://api.guinaben.com/member/info',
          method: 'POST',
          data: {
            email: email
          },
          success: function success(res) {
            _wepy2.default.setStorageSync('gnb_middle_user', res);
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
        url = 'https://api.guinaben.com/textbook/statistics/download';
        options = {
          chapterId: id,
          type: this.$parent.globalData.statisticsSelect.toString()
        };
      } else if (type === 'workbook') {
        url = 'https://api.guinaben.com/workbook/chapter/errorDownload';
        options = {
          chapterId: id
        };
      } else {
        url = 'https://api.guinaben.com/resource/download/new/';
        options = {
          id: id,
          type: this.tag
        };
      }
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: url,
          method: 'POST',
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
      var email = _wepy2.default.getStorageSync('gnb_middle_user').email;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJ0YWciLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsInJlcyIsImVyck1zZyIsInNob3dUb2FzdCIsImljb24iLCJnZXRTdG9yYWdlU3luYyIsImJpbmQiLCJfYmluZFVzZXIiLCJtYWlsIiwiZW1haWwiLCJfc2V0VXNlckVtYWlsIiwiX3NlbmRFbWFpbCIsInVzZXIiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInVzZXJJbmZvIiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJvcHRpb25zIiwiY2hhcHRlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzdGF0aXN0aWNzU2VsZWN0IiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJyZXN1bHQiLCJjb25maXJtIiwibmF2aWdhdGVCYWNrIiwiY29uc29sZSIsImxvZyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImZyb20iLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1h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K0JDO0FBQ1YsMkJBQUtKLFdBQUw7QUFDRDtBQWpDVSxTQUFiO0FBbUNELE9BcENNLENBQVA7QUFxQ0Q7OzsyQkFFTUssTyxFQUFTO0FBQ2QsV0FBS3hDLElBQUwsR0FBWXdDLFFBQVF4QyxJQUFwQjtBQUNBLFdBQUtELEVBQUwsR0FBVXlDLFFBQVF6QyxFQUFsQjtBQUNBLFdBQUtFLEdBQUwsR0FBV3VDLFFBQVF2QyxHQUFuQjtBQUNBLFdBQUtTLE1BQUw7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSVksUUFBUSxlQUFLSixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0ksS0FBbkQ7QUFDQTtBQUNBLFdBQUsxQixVQUFMLENBQWdCQyxLQUFoQixHQUF3QnlCLE1BQU1rQyxLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUF4QjtBQUNBLFVBQUl4RCxhQUFXc0IsTUFBTWtDLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQWY7QUFDQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXpFLFVBQVUwRSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsWUFBSXpELFNBQVNoQixVQUFVeUUsQ0FBVixDQUFiLEVBQTJCO0FBQ3pCLGVBQUt0RCxjQUFMLEdBQXNCc0QsQ0FBdEI7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxXQUFLL0MsTUFBTDtBQUNEOzs7c0NBRWtCSSxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSTZDLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkwsZ0JBQVFDLEdBQVIsQ0FBWXpDLElBQUk4QyxNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMeEQsZUFBTyxvQkFERjtBQUVMeUQsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQXhNa0MsZUFBS0MsSTs7a0JBQXJCOUUsTyIsImZpbGUiOiJlbWFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcblxuICAvLyDlj6/kvb/nlKjlvpdFbWFpbOmCrueuseWIl+ihqFxuICBjb25zdCBlbWFpbExpc3QgPSBbJ0BxcS5jb20nLCAnQDEyNi5jb20nLCAnQDEzOS5jb20nLCAnQDE2My5jb20nLCAnQDE4OS5jb20nLCAnQHNvaHUuY29tJywgJ0BzaW5hLmNvbScsICdAZ21haWwuY29tJ11cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlFbWFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4i+i9vSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuRmllbGQxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImZvcm1fZW1haWxcIixcImNvbXBvbmVudElkXCI6XCJ6YW5GaWVsZDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgemFuRmllbGQxOiB6YW5GaWVsZFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZW1haWxEaXNhYmxlZCAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZm9ybV9lbWFpbC52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaWQ6ICcnLFxuICAgICAgdHlwZTogJycsXG4gICAgICB0YWc6ICcnLFxuICAgICAgZW1haWxDb2RlczogZW1haWxMaXN0LFxuICAgICAgZW1haWxDb2RlSW5kZXg6IDAsXG4gICAgICBmb3JtX2VtYWlsOiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpemCrueusSdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICB6YW5GaWVsZENoYW5nZShlKSB7XG4gICAgICAgIGxldCB7IGRldGFpbCB9ID0gZVxuICAgICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kRW1haWxDb2RlQ2hhbmdlIChlKSB7XG4gICAgICAgIHRoaXMuZW1haWxDb2RlSW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xuICAgICAgYXN5bmMgX3NlbmQocmVzKSB7XG4gICAgICAgIC8vIOaOiOadg+WIpOaWrVxuICAgICAgICBpZiAocmVzLmRldGFpbC5lcnJNc2cgIT09ICdnZXRVc2VySW5mbzpvaycpIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7IHRpdGxlOiAn6K+35LiN6KaB5ouS57ud5o6I5p2DJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8g56ys5LiA5qyh5LiK5Lyg5Liq5Lq65L+h5oGvXG4gICAgICAgIGlmICghd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuYmluZCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2JpbmRVc2VyKHJlcy5kZXRhaWwpXG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55qERW1haWzlkozkv6Hmga/nm7jlkIzliJnlj5HpgIHvvIzlkKbliJnmm7TmlrBFbWFpbOS/oeaBr+WcqOWPkemAgVxuICAgICAgICBsZXQgbWFpbCA9IHRoaXMuZm9ybV9lbWFpbC52YWx1ZSArIHRoaXMuZW1haWxDb2Rlc1t0aGlzLmVtYWlsQ29kZUluZGV4XVxuICAgICAgICBpZiAobWFpbCAhPT0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuZW1haWwpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VyRW1haWwodGhpcy5mb3JtX2VtYWlsLnZhbHVlICsgdGhpcy5lbWFpbENvZGVzW3RoaXMuZW1haWxDb2RlSW5kZXhdKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRFbWFpbCh0aGlzLmlkLCB0aGlzLnR5cGUpXG4gICAgICB9XG4gICAgfVxuICAgIC8qKiDnu5HlrprnlKjmiLcgKi9cbiAgICBfYmluZFVzZXIgKHVzZXIpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS9tZW1iZXIvdjIvYmluZCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlckluZm86IHVzZXIudXNlckluZm9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIC8qKiDorr7nva7nlKjmiLfkv6Hmga8gKi9cbiAgICBfc2V0VXNlckVtYWlsIChlbWFpbCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfmj5DkuqTkuK0nfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJywgcmVzKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xuICAgIF9zZW5kRW1haWwgKGlkLCB0eXBlKSB7XG4gICAgICBsZXQgdXJsID0gJydcbiAgICAgIGxldCBvcHRpb25zID0ge31cbiAgICAgIGlmICh0eXBlID09PSAnc3RhdGlzdGljcycpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzL2Rvd25sb2FkJ1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWQsXG4gICAgICAgICAgdHlwZTogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3RhdGlzdGljc1NlbGVjdC50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dvcmtib29rJykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvZXJyb3JEb3dubG9hZCdcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vcmVzb3VyY2UvZG93bmxvYWQvbmV3LydcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdHlwZTogdGhpcy50YWdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflt7Llj5HpgIHoh7PmgqjnmoTpgq7nrrEo6Iul5pyq5pS25Yiw77yM6K+35p+l55yL5Z6D5Zy+6YKu5Lu2KScsXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+S6su+8jOi2heWHuuS7u+WKoeS6hu+8jOaYjuWkqeWGjeadpeWQp++8gScsXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZVxuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICAgIHRoaXMudGFnID0gb3B0aW9ucy50YWdcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICBsZXQgZW1haWwgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5lbWFpbFxuICAgICAgLy8g6I635Y+W6YKu566x5ZKM6YKu566x57G75Z6LXG4gICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBlbWFpbC5zcGxpdCgnQCcpWzBdXG4gICAgICBsZXQgdHlwZSA9IGBAJHtlbWFpbC5zcGxpdCgnQCcpWzFdfWBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1haWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBlbWFpbExpc3RbaV0pIHtcbiAgICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19