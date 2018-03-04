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
        path: '/pages/my/index'
      };
    }
  }]);

  return MyEmail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyEmail , 'pages/my/email'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsIm1haWwiLCJnZXRTdG9yYWdlU3luYyIsImVtYWlsIiwiX3NldFVzZXJFbWFpbCIsIl9zZW5kRW1haWwiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwiY2hhcHRlcklkIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm1UZXh0Iiwic2hvd0NhbmNlbCIsImNvbmZpcm0iLCJuYXZpZ2F0ZUJhY2siLCJvcHRpb25zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLFlBQVksQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxVQUFwQyxFQUFnRCxVQUFoRCxFQUE0RCxXQUE1RCxFQUF5RSxXQUF6RSxFQUFzRixZQUF0RixDQUFs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QyxTQUFTaEIsVUFBVXlELENBQVYsQ0FBYixFQUEyQjtBQUN6QixlQUFLdkMsY0FBTCxHQUFzQnVDLENBQXRCO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsV0FBS2hDLE1BQUw7QUFDRDs7O3NDQUVrQmlCLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJaUIsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCQyxnQkFBUUMsR0FBUixDQUFZbkIsSUFBSW9CLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0wzQyxlQUFPLHFCQURGO0FBRUw0QyxjQUFNO0FBRkQsT0FBUDtBQUlEOzs7O0VBaEprQyxlQUFLQyxJOztrQkFBckIvRCxPIiwiZmlsZSI6ImVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG4gIC8vIOWPr+S9v+eUqOW+l0VtYWls6YKu566x5YiX6KGoXG4gIGNvbnN0IGVtYWlsTGlzdCA9IFsnQHFxLmNvbScsICdAMTI2LmNvbScsICdAMTM5LmNvbScsICdAMTYzLmNvbScsICdAMTg5LmNvbScsICdAc29odS5jb20nLCAnQHNpbmEuY29tJywgJ0BnbWFpbC5jb20nXVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeUVtYWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiL6L29J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5GaWVsZDFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiZm9ybV9lbWFpbFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB6YW5GaWVsZDE6IHphbkZpZWxkXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBlbWFpbERpc2FibGVkICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5mb3JtX2VtYWlsLnZhbHVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpZDogJycsXG4gICAgICB0eXBlOiAnJyxcbiAgICAgIGVtYWlsQ29kZXM6IGVtYWlsTGlzdCxcbiAgICAgIGVtYWlsQ29kZUluZGV4OiAwLFxuICAgICAgZm9ybV9lbWFpbDoge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXpgq7nrrEnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgeyBkZXRhaWwgfSA9IGVcbiAgICAgICAgdGhpcy5mb3JtX2VtYWlsLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZEVtYWlsQ29kZUNoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICAvKiog5Y+R6YCBRW1haWwgKi9cbiAgICAgIGFzeW5jIF9zZW5kKCkge1xuICAgICAgICAvLyDlpoLmnpzlvZPliY3nmoRFbWFpbOWSjOS/oeaBr+ebuOWQjOWImeWPkemAge+8jOWQpuWImeabtOaWsEVtYWls5L+h5oGv5Zyo5Y+R6YCBXG4gICAgICAgIGxldCBtYWlsID0gdGhpcy5mb3JtX2VtYWlsLnZhbHVlICsgdGhpcy5lbWFpbENvZGVzW3RoaXMuZW1haWxDb2RlSW5kZXhdXG4gICAgICAgIGlmIChtYWlsICE9PSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5lbWFpbCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJFbWFpbCh0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZEVtYWlsKHRoaXMuaWQsIHRoaXMudHlwZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJFbWFpbCAoZW1haWwpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn5o+Q5Lqk5LitJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mb0VkaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOWPkemAgUVtYWlsICovXG4gICAgX3NlbmRFbWFpbCAoaWQsIHR5cGUpIHtcbiAgICAgIGxldCB1cmxcbiAgICAgIGlmICh0eXBlID09PSAnc3RhdGlzdGljcycpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzL2Rvd25sb2FkJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS93b3JrYm9vay9jaGFwdGVyL2Vycm9yRG93bmxvYWQnXG4gICAgICB9XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxuICAgICAgICAgICAgICBjb250ZW50OiAn5bey5Y+R6YCB6Iez5oKo55qE6YKu566xKOiLpeacquaUtuWIsO+8jOivt+afpeeci+Weg+WcvumCruS7tiknLFxuICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlc29sdmUocmVzLnVybClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZVxuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICBsZXQgZW1haWwgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5lbWFpbFxuICAgICAgLy8g6I635Y+W6YKu566x5ZKM6YKu566x57G75Z6LXG4gICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBlbWFpbC5zcGxpdCgnQCcpWzBdXG4gICAgICBsZXQgdHlwZSA9IGBAJHtlbWFpbC5zcGxpdCgnQCcpWzFdfWBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1haWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBlbWFpbExpc3RbaV0pIHtcbiAgICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=