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
      } else if (type === 'workbook') {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiY29tcHV0ZWQiLCJlbWFpbERpc2FibGVkIiwiQm9vbGVhbiIsImZvcm1fZW1haWwiLCJ2YWx1ZSIsImRhdGEiLCJpZCIsInR5cGUiLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRFbWFpbENvZGVDaGFuZ2UiLCJfc2VuZCIsIm1haWwiLCJnZXRTdG9yYWdlU3luYyIsImVtYWlsIiwiX3NldFVzZXJFbWFpbCIsIl9zZW5kRW1haWwiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwib3B0aW9ucyIsImNoYXB0ZXJJZCIsImhhc093blByb3BlcnR5Iiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm1UZXh0Iiwic2hvd0NhbmNlbCIsInJlc3VsdCIsImNvbmZpcm0iLCJuYXZpZ2F0ZUJhY2siLCJjb25zb2xlIiwibG9nIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLFlBQVksQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxVQUFwQyxFQUFnRCxVQUFoRCxF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QXNDRDs7OzJCQUVNQyxPLEVBQVM7QUFDZCxXQUFLaEMsSUFBTCxHQUFZZ0MsUUFBUWhDLElBQXBCO0FBQ0EsV0FBS0QsRUFBTCxHQUFVaUMsUUFBUWpDLEVBQWxCO0FBQ0EsV0FBS1UsTUFBTDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJTSxRQUFRLGVBQUtELGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDQyxLQUFuRDtBQUNBO0FBQ0EsV0FBS25CLFVBQUwsQ0FBZ0JDLEtBQWhCLEdBQXdCa0IsTUFBTTZCLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQXhCO0FBQ0EsVUFBSTVDLGFBQVdlLE1BQU02QixLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUFmO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUk3RCxVQUFVOEQsTUFBOUIsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFlBQUk3QyxTQUFTaEIsVUFBVTZELENBQVYsQ0FBYixFQUEyQjtBQUN6QixlQUFLM0MsY0FBTCxHQUFzQjJDLENBQXRCO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsV0FBS3BDLE1BQUw7QUFDRDs7O3NDQUVrQmlCLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJcUIsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCTCxnQkFBUUMsR0FBUixDQUFZakIsSUFBSXNCLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0w3QyxlQUFPLHFCQURGO0FBRUw4QyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBaktrQyxlQUFLQyxJOztrQkFBckJsRSxPIiwiZmlsZSI6ImVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcclxuXHJcbiAgLy8g5Y+v5L2/55So5b6XRW1haWzpgq7nrrHliJfooahcclxuICBjb25zdCBlbWFpbExpc3QgPSBbJ0BxcS5jb20nLCAnQDEyNi5jb20nLCAnQDEzOS5jb20nLCAnQDE2My5jb20nLCAnQDE4OS5jb20nLCAnQHNvaHUuY29tJywgJ0BzaW5hLmNvbScsICdAZ21haWwuY29tJ11cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeUVtYWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4i+i9vSdcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuRmllbGQxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImZvcm1fZW1haWxcIixcImNvbXBvbmVudElkXCI6XCJ6YW5GaWVsZDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICB6YW5GaWVsZDE6IHphbkZpZWxkXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIGVtYWlsRGlzYWJsZWQgKCkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZm9ybV9lbWFpbC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgdHlwZTogJycsXHJcbiAgICAgIGVtYWlsQ29kZXM6IGVtYWlsTGlzdCxcclxuICAgICAgZW1haWxDb2RlSW5kZXg6IDAsXHJcbiAgICAgIGZvcm1fZW1haWw6IHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl6YKu566xJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICB6YW5GaWVsZENoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHsgZGV0YWlsIH0gPSBlXHJcbiAgICAgICAgdGhpcy5mb3JtX2VtYWlsLnZhbHVlID0gZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYmluZEVtYWlsQ29kZUNoYW5nZSAoZSkge1xyXG4gICAgICAgIHRoaXMuZW1haWxDb2RlSW5kZXggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICAvKiog5Y+R6YCBRW1haWwgKi9cclxuICAgICAgYXN5bmMgX3NlbmQoKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55qERW1haWzlkozkv6Hmga/nm7jlkIzliJnlj5HpgIHvvIzlkKbliJnmm7TmlrBFbWFpbOS/oeaBr+WcqOWPkemAgVxyXG4gICAgICAgIGxldCBtYWlsID0gdGhpcy5mb3JtX2VtYWlsLnZhbHVlICsgdGhpcy5lbWFpbENvZGVzW3RoaXMuZW1haWxDb2RlSW5kZXhdXHJcbiAgICAgICAgaWYgKG1haWwgIT09IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmVtYWlsKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VyRW1haWwodGhpcy5mb3JtX2VtYWlsLnZhbHVlICsgdGhpcy5lbWFpbENvZGVzW3RoaXMuZW1haWxDb2RlSW5kZXhdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLl9zZW5kRW1haWwodGhpcy5pZCwgdGhpcy50eXBlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xyXG4gICAgX3NldFVzZXJFbWFpbCAoZW1haWwpIHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfmj5DkuqTkuK0nfSlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvRWRpdCcsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29tcGxldGUgKCkge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlj5HpgIFFbWFpbCAqL1xyXG4gICAgX3NlbmRFbWFpbCAoaWQsIHR5cGUpIHtcclxuICAgICAgbGV0IHVybCA9ICcnXHJcbiAgICAgIGxldCBvcHRpb25zID0ge31cclxuICAgICAgaWYgKHR5cGUgPT09ICdzdGF0aXN0aWNzJykge1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdGV4dGJvb2svc3RhdGlzdGljcy9kb3dubG9hZCdcclxuICAgICAgICBvcHRpb25zID0ge2NoYXB0ZXJJZDogaWR9XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dvcmtib29rJykge1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9lcnJvckRvd25sb2FkJ1xyXG4gICAgICAgIG9wdGlvbnMgPSB7Y2hhcHRlcklkOiBpZH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3Jlc291cmNlL2Rvd25sb2FkJ1xyXG4gICAgICAgIG9wdGlvbnMgPSB7aWQ6IGlkfVxyXG4gICAgICB9XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn5bey5Y+R6YCB6Iez5oKo55qE6YKu566xKOiLpeacquaUtuWIsO+8jOivt+afpeeci+Weg+WcvumCruS7tiknLFxyXG4gICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkurLvvIzotoXlh7rku7vliqHkuobvvIzmmI7lpKnlho3mnaXlkKfvvIEnLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXHJcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIGxldCBlbWFpbCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmVtYWlsXHJcbiAgICAgIC8vIOiOt+WPlumCrueuseWSjOmCrueuseexu+Wei1xyXG4gICAgICB0aGlzLmZvcm1fZW1haWwudmFsdWUgPSBlbWFpbC5zcGxpdCgnQCcpWzBdXHJcbiAgICAgIGxldCB0eXBlID0gYEAke2VtYWlsLnNwbGl0KCdAJylbMV19YFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtYWlsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBlbWFpbExpc3RbaV0pIHtcclxuICAgICAgICAgIHRoaXMuZW1haWxDb2RlSW5kZXggPSBpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=