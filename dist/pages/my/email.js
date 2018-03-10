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

                  if (!(mail !== _wepy2.default.getStorageSync('gnb_middle_User').email)) {
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
        url = 'https://mid.guinaben.com/textbook/statistics/download';
        options = { chapterId: id };
      } else if (type === 'chapter') {
        url = 'https://mid.guinaben.com/workbook/chapter/errorDownload';
        options = { chapterId: id };
      } else {
        url = 'https://mid.guinaben.com/resource/download';
        options = { id: id };
      }
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: url,
          data: _extends({}, options),
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
        title: '各位家长，用这个记错题，速度快，用处大',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/my/index'
      };
    }
  }]);

  return MyEmail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyEmail , 'pages/my/email'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsIm1haWwiLCJnZXRTdG9yYWdlU3luYyIsImVtYWlsIiwiX3NldFVzZXJFbWFpbCIsIl9zZW5kRW1haWwiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwib3B0aW9ucyIsImNoYXB0ZXJJZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwibmF2aWdhdGVCYWNrIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxZQUFZLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsVUFBcEMsRUFBZ0QsVUFBaEQsRUFBNEQsV0FBNUQsRUFBeUUsV0FBekUsRUFB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R0FBd0JrQixNQUFNeUIsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBeEI7QUFDQSxVQUFJeEMsYUFBV2UsTUFBTXlCLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQWY7QUFDQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXpELFVBQVUwRCxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsWUFBSXpDLFNBQVNoQixVQUFVeUQsQ0FBVixDQUFiLEVBQTJCO0FBQ3pCLGVBQUt2QyxjQUFMLEdBQXNCdUMsQ0FBdEI7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxXQUFLaEMsTUFBTDtBQUNEOzs7c0NBRWtCaUIsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlpQixJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVluQixJQUFJb0IsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTDNDLGVBQU8scUJBREY7QUFFTDRDLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF2SmtDLGVBQUtDLEk7O2tCQUFyQmhFLE8iLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xyXG5cclxuICAvLyDlj6/kvb/nlKjlvpdFbWFpbOmCrueuseWIl+ihqFxyXG4gIGNvbnN0IGVtYWlsTGlzdCA9IFsnQHFxLmNvbScsICdAMTI2LmNvbScsICdAMTM5LmNvbScsICdAMTYzLmNvbScsICdAMTg5LmNvbScsICdAc29odS5jb20nLCAnQHNpbmEuY29tJywgJ0BnbWFpbC5jb20nXVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RW1haWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiL6L29J1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5GaWVsZDFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiZm9ybV9lbWFpbFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHphbkZpZWxkMTogemFuRmllbGRcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgZW1haWxEaXNhYmxlZCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5mb3JtX2VtYWlsLnZhbHVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICB0eXBlOiAnJyxcclxuICAgICAgZW1haWxDb2RlczogZW1haWxMaXN0LFxyXG4gICAgICBlbWFpbENvZGVJbmRleDogMCxcclxuICAgICAgZm9ybV9lbWFpbDoge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXpgq7nrrEnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgeyBkZXRhaWwgfSA9IGVcclxuICAgICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBkZXRhaWwudmFsdWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBiaW5kRW1haWxDb2RlQ2hhbmdlIChlKSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xyXG4gICAgICBhc3luYyBfc2VuZCgpIHtcclxuICAgICAgICAvLyDlpoLmnpzlvZPliY3nmoRFbWFpbOWSjOS/oeaBr+ebuOWQjOWImeWPkemAge+8jOWQpuWImeabtOaWsEVtYWls5L+h5oGv5Zyo5Y+R6YCBXHJcbiAgICAgICAgbGV0IG1haWwgPSB0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF1cclxuICAgICAgICBpZiAobWFpbCAhPT0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZW1haWwpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJFbWFpbCh0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRFbWFpbCh0aGlzLmlkLCB0aGlzLnR5cGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXHJcbiAgICBfc2V0VXNlckVtYWlsIChlbWFpbCkge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vbWVtYmVyL2luZm9FZGl0JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWPkemAgUVtYWlsICovXHJcbiAgICBfc2VuZEVtYWlsIChpZCwgdHlwZSkge1xyXG4gICAgICBsZXQgdXJsID0gJydcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7fVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N0YXRpc3RpY3MnKSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzL2Rvd25sb2FkJ1xyXG4gICAgICAgIG9wdGlvbnMgPSB7Y2hhcHRlcklkOiBpZH1cclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2hhcHRlcicpIHtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvZXJyb3JEb3dubG9hZCdcclxuICAgICAgICBvcHRpb25zID0ge2NoYXB0ZXJJZDogaWR9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS9yZXNvdXJjZS9kb3dubG9hZCdcclxuICAgICAgICBvcHRpb25zID0ge2lkOiBpZH1cclxuICAgICAgfVxyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLi4ub3B0aW9uc1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICflt7Llj5HpgIHoh7PmgqjnmoTpgq7nrrEo6Iul5pyq5pS25Yiw77yM6K+35p+l55yL5Z6D5Zy+6YKu5Lu2KScsXHJcbiAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMudXJsKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGVcclxuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgbGV0IGVtYWlsID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZW1haWxcclxuICAgICAgLy8g6I635Y+W6YKu566x5ZKM6YKu566x57G75Z6LXHJcbiAgICAgIHRoaXMuZm9ybV9lbWFpbC52YWx1ZSA9IGVtYWlsLnNwbGl0KCdAJylbMF1cclxuICAgICAgbGV0IHR5cGUgPSBgQCR7ZW1haWwuc3BsaXQoJ0AnKVsxXX1gXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1haWxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IGVtYWlsTGlzdFtpXSkge1xyXG4gICAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XHJcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxyXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvbXkvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==