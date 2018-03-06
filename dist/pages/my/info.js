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

var gradeList = ['七年级', '八年级'];

var MyInfo = function (_wepy$page) {
  _inherits(MyInfo, _wepy$page);

  function MyInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyInfo.__proto__ || Object.getPrototypeOf(MyInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人资料'
    }, _this.$repeat = {}, _this.$props = { "nameField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_name", "componentId": "nameField" }, "sexField": { "v-bind:options.once": "base_sex", "componentId": "sexField" }, "schoolField": { "v-bind:options.sync": "base_school", "componentId": "schoolField" } }, _this.$events = {}, _this.components = {
      nameField: _zanField2.default,
      sexField: _zanField2.default,
      schoolField: _zanField2.default
    }, _this.data = {
      gradeIndex: Number(_wepy2.default.getStorageSync('gnb_middle_User').grade) - 7,
      gradeList: gradeList,
      base_school: {
        title: '学校',
        value: _wepy2.default.getStorageSync('gnb_middle_User').school,
        placeholder: '请输入您的学校名称'
      },
      base_name: {
        title: '姓名',
        value: _wepy2.default.getStorageSync('gnb_middle_User').name,
        placeholder: '请输入您的姓名'
      },
      base_sex: {
        title: '性别',
        value: Number(_wepy2.default.getStorageSync('gnb_middle_User').sex) === 1 ? '男' : '女',
        disabled: true
      }
    }, _this.events = {
      zanFieldChange: function zanFieldChange(e) {
        var componentId = e.componentId,
            detail = e.detail;

        if (componentId === 'nameField') {
          this.base_name.value = detail.value;
        } else if (componentId === 'schoolField') {
          this.base_school.value = detail.value;
        }
        this.$apply();
      }
    }, _this.methods = {
      bindGradeChange: function bindGradeChange(e) {
        this.gradeIndex = e.detail.value;
      },
      _save: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var user;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = {
                    grade: Number(this.gradeIndex) + 7,
                    name: this.base_name.value,
                    school: this.base_school.value
                  };
                  _context.next = 3;
                  return this._setUserInfo(user);

                case 3:
                  _wepy2.default.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000,
                    success: function success() {
                      _wepy2.default.navigateBack();
                    }
                  });

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _save() {
          return _ref2.apply(this, arguments);
        }

        return _save;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyInfo, [{
    key: '_setUserInfo',


    /** 设置用户信息 */
    value: function _setUserInfo(user) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/member/infoEdit',
          method: 'POST',
          data: {
            grade: user.grade,
            name: user.name,
            school: user.school
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
  }, {
    key: 'onShow',
    value: function onShow() {
      this.base_name.value = _wepy2.default.getStorageSync('gnb_middle_User').name;
      this.base_school.value = _wepy2.default.getStorageSync('gnb_middle_User').school;
      this.gradeIndex = Number(_wepy2.default.getStorageSync('gnb_middle_User').grade) - 7;
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

  return MyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyInfo , 'pages/my/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiZ3JhZGVMaXN0IiwiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hbWVGaWVsZCIsInNleEZpZWxkIiwic2Nob29sRmllbGQiLCJkYXRhIiwiZ3JhZGVJbmRleCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwiZ3JhZGUiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwidmFsdWUiLCJzY2hvb2wiLCJwbGFjZWhvbGRlciIsImJhc2VfbmFtZSIsIm5hbWUiLCJiYXNlX3NleCIsInNleCIsImRpc2FibGVkIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiY29tcG9uZW50SWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEdyYWRlQ2hhbmdlIiwiX3NhdmUiLCJ1c2VyIiwiX3NldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWxCOztJQUVxQkMsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixX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QyxXQUFMO0FBQ0EsMkJBQUtDLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDRixHQUF2QztBQUNBTCxvQkFBUUssR0FBUjtBQUNELFdBWlU7QUFhWEcsY0FiVyxnQkFhTEMsR0FiSyxFQWFBO0FBQ1QsMkJBQUtILFdBQUw7QUFDQUwsbUJBQU9RLEdBQVA7QUFDRDtBQWhCVSxTQUFiO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7Ozs2QkFFUztBQUNSLFdBQUtoQyxTQUFMLENBQWVILEtBQWYsR0FBdUIsZUFBS0osY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNRLElBQTlEO0FBQ0EsV0FBS04sV0FBTCxDQUFpQkUsS0FBakIsR0FBeUIsZUFBS0osY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNLLE1BQWhFO0FBQ0EsV0FBS1AsVUFBTCxHQUFrQkMsT0FBTyxlQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0MsS0FBOUMsSUFBdUQsQ0FBekU7QUFDQSxXQUFLZ0IsTUFBTDtBQUNEOzs7c0NBRWtCa0IsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlLLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWVAsSUFBSVEsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTHhDLGVBQU8scUJBREY7QUFFTHlDLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUE3R2lDLGVBQUtDLEk7O2tCQUFwQjNELE0iLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcblxuICBjb25zdCBncmFkZUxpc3QgPSBbJ+S4g+W5tOe6pycsICflhavlubTnuqcnXVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15SW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uui1hOaWmSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibmFtZUZpZWxkXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2VfbmFtZVwiLFwiY29tcG9uZW50SWRcIjpcIm5hbWVGaWVsZFwifSxcInNleEZpZWxkXCI6e1widi1iaW5kOm9wdGlvbnMub25jZVwiOlwiYmFzZV9zZXhcIixcImNvbXBvbmVudElkXCI6XCJzZXhGaWVsZFwifSxcInNjaG9vbEZpZWxkXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9zY2hvb2xcIixcImNvbXBvbmVudElkXCI6XCJzY2hvb2xGaWVsZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBuYW1lRmllbGQ6IHphbkZpZWxkLFxuICAgICAgc2V4RmllbGQ6IHphbkZpZWxkLFxuICAgICAgc2Nob29sRmllbGQ6IHphbkZpZWxkXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGdyYWRlSW5kZXg6IE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5ncmFkZSkgLSA3LFxuICAgICAgZ3JhZGVMaXN0OiBncmFkZUxpc3QsXG4gICAgICBiYXNlX3NjaG9vbDoge1xuICAgICAgICB0aXRsZTogJ+WtpuagoScsXG4gICAgICAgIHZhbHVlOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5zY2hvb2wsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5oKo55qE5a2m5qCh5ZCN56ewJ1xuICAgICAgfSxcbiAgICAgIGJhc2VfbmFtZToge1xuICAgICAgICB0aXRsZTogJ+Wnk+WQjScsXG4gICAgICAgIHZhbHVlOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5uYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeaCqOeahOWnk+WQjSdcbiAgICAgIH0sXG4gICAgICBiYXNlX3NleDoge1xuICAgICAgICB0aXRsZTogJ+aAp+WIqycsXG4gICAgICAgIHZhbHVlOiAoTnVtYmVyKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnNleCkgPT09IDEgPyAn55S3JyA6ICflpbMnKSxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICB6YW5GaWVsZENoYW5nZShlKSB7XG4gICAgICAgIGxldCB7IGNvbXBvbmVudElkLCBkZXRhaWwgfSA9IGVcbiAgICAgICAgaWYgKGNvbXBvbmVudElkID09PSAnbmFtZUZpZWxkJykge1xuICAgICAgICAgIHRoaXMuYmFzZV9uYW1lLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50SWQgPT09ICdzY2hvb2xGaWVsZCcpIHtcbiAgICAgICAgICB0aGlzLmJhc2Vfc2Nob29sLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kR3JhZGVDaGFuZ2UgKGUpIHtcbiAgICAgICAgdGhpcy5ncmFkZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBhc3luYyBfc2F2ZSAoKSB7XG4gICAgICAgIGxldCB1c2VyID0ge1xuICAgICAgICAgIGdyYWRlOiBOdW1iZXIodGhpcy5ncmFkZUluZGV4KSArIDcsXG4gICAgICAgICAgbmFtZTogdGhpcy5iYXNlX25hbWUudmFsdWUsXG4gICAgICAgICAgc2Nob29sOiB0aGlzLmJhc2Vfc2Nob29sLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fc2V0VXNlckluZm8odXNlcilcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgc3VjY2VzcyAoKSB7XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDorr7nva7nlKjmiLfkv6Hmga8gKi9cbiAgICBfc2V0VXNlckluZm8gKHVzZXIpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mb0VkaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdyYWRlOiB1c2VyLmdyYWRlLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgc2Nob29sOiB1c2VyLnNjaG9vbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5iYXNlX25hbWUudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5uYW1lXG4gICAgICB0aGlzLmJhc2Vfc2Nob29sLnZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuc2Nob29sXG4gICAgICB0aGlzLmdyYWRlSW5kZXggPSBOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZ3JhZGUpIC0gN1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=