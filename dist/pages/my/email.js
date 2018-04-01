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
        options = {
          chapterId: id,
          type: this.$parent.globalData.statisticsSelect.toString()
        };
      } else if (type === 'workbook') {
        url = 'https://mid.guinaben.com/workbook/chapter/errorDownload';
        options = {
          chapterId: id
        };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsIm1haWwiLCJnZXRTdG9yYWdlU3luYyIsImVtYWlsIiwiX3NldFVzZXJFbWFpbCIsIl9zZW5kRW1haWwiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwib3B0aW9ucyIsImNoYXB0ZXJJZCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic3RhdGlzdGljc1NlbGVjdCIsInRvU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzaG93Q2FuY2VsIiwicmVzdWx0IiwiY29uZmlybSIsIm5hdmlnYXRlQmFjayIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJmcm9tIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsWUFBWSxDQUFD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J1xyXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xyXG5cclxuICAvLyDlj6/kvb/nlKjlvpdFbWFpbOmCrueuseWIl+ihqFxyXG4gIGNvbnN0IGVtYWlsTGlzdCA9IFsnQHFxLmNvbScsICdAMTI2LmNvbScsICdAMTM5LmNvbScsICdAMTYzLmNvbScsICdAMTg5LmNvbScsICdAc29odS5jb20nLCAnQHNpbmEuY29tJywgJ0BnbWFpbC5jb20nXVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RW1haWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiL6L29J1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5GaWVsZDFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiZm9ybV9lbWFpbFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHphbkZpZWxkMTogemFuRmllbGRcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgZW1haWxEaXNhYmxlZCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5mb3JtX2VtYWlsLnZhbHVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICB0eXBlOiAnJyxcclxuICAgICAgZW1haWxDb2RlczogZW1haWxMaXN0LFxyXG4gICAgICBlbWFpbENvZGVJbmRleDogMCxcclxuICAgICAgZm9ybV9lbWFpbDoge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXpgq7nrrEnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgeyBkZXRhaWwgfSA9IGVcclxuICAgICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBkZXRhaWwudmFsdWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBiaW5kRW1haWxDb2RlQ2hhbmdlIChlKSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xyXG4gICAgICBhc3luYyBfc2VuZCgpIHtcclxuICAgICAgICAvLyDlpoLmnpzlvZPliY3nmoRFbWFpbOWSjOS/oeaBr+ebuOWQjOWImeWPkemAge+8jOWQpuWImeabtOaWsEVtYWls5L+h5oGv5Zyo5Y+R6YCBXHJcbiAgICAgICAgbGV0IG1haWwgPSB0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF1cclxuICAgICAgICBpZiAobWFpbCAhPT0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZW1haWwpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJFbWFpbCh0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRFbWFpbCh0aGlzLmlkLCB0aGlzLnR5cGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXHJcbiAgICBfc2V0VXNlckVtYWlsIChlbWFpbCkge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vbWVtYmVyL2luZm9FZGl0JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWPkemAgUVtYWlsICovXHJcbiAgICBfc2VuZEVtYWlsIChpZCwgdHlwZSkge1xyXG4gICAgICBsZXQgdXJsID0gJydcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7fVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N0YXRpc3RpY3MnKSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzL2Rvd25sb2FkJ1xyXG4gICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkLFxyXG4gICAgICAgICAgdHlwZTogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3RhdGlzdGljc1NlbGVjdC50b1N0cmluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3b3JrYm9vaycpIHtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvZXJyb3JEb3dubG9hZCdcclxuICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgY2hhcHRlcklkOiBpZFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3Jlc291cmNlL2Rvd25sb2FkJ1xyXG4gICAgICAgIG9wdGlvbnMgPSB7aWQ6IGlkfVxyXG4gICAgICB9XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn5bey5Y+R6YCB6Iez5oKo55qE6YKu566xKOiLpeacquaUtuWIsO+8jOivt+afpeeci+Weg+WcvumCruS7tiknLFxyXG4gICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkurLvvIzotoXlh7rku7vliqHkuobvvIzmmI7lpKnlho3mnaXlkKfvvIEnLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXHJcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIGxldCBlbWFpbCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmVtYWlsXHJcbiAgICAgIC8vIOiOt+WPlumCrueuseWSjOmCrueuseexu+Wei1xyXG4gICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBlbWFpbC5zcGxpdCgnQCcpWzBdXHJcbiAgICAgIGxldCB0eXBlID0gYEAke2VtYWlsLnNwbGl0KCdAJylbMV19YFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtYWlsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBlbWFpbExpc3RbaV0pIHtcclxuICAgICAgICAgIHRoaXMuZW1haWxDb2RlSW5kZXggPSBpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=