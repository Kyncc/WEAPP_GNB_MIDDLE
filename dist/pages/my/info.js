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
    }, _this.$repeat = {}, _this.$props = { "nameField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_name", "componentId": "nameField" }, "schoolField": { "v-bind:options.sync": "base_school", "componentId": "schoolField" } }, _this.$events = {}, _this.components = {
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
          url: 'https://mid.guinaben.com/v2/member/infoEdit',
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return MyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyInfo , 'pages/my/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiZ3JhZGVMaXN0IiwiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hbWVGaWVsZCIsInphbkZpZWxkIiwic2V4RmllbGQiLCJzY2hvb2xGaWVsZCIsImRhdGEiLCJncmFkZUluZGV4IiwiTnVtYmVyIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiZ3JhZGUiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwidmFsdWUiLCJzY2hvb2wiLCJwbGFjZWhvbGRlciIsImJhc2VfbmFtZSIsIm5hbWUiLCJiYXNlX3NleCIsInNleCIsImRpc2FibGVkIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiY29tcG9uZW50SWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEdyYWRlQ2hhbmdlIiwiX3NhdmUiLCJ1c2VyIiwiX3NldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWxCOztJQUVxQkMsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVB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LDJCQUFLcUMsV0FBTDtBQUNBckMsMkJBQUtzQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0YsR0FBdkM7QUFDQUwsb0JBQVFLLEdBQVI7QUFDRCxXQVpVO0FBYVhHLGNBYlcsZ0JBYUxDLEdBYkssRUFhQTtBQUNUeEMsMkJBQUtxQyxXQUFMO0FBQ0FMLG1CQUFPUSxHQUFQO0FBQ0Q7QUFoQlUsU0FBYjtBQWtCRCxPQW5CTSxDQUFQO0FBb0JEOzs7NkJBRVM7QUFDUixXQUFLaEMsU0FBTCxDQUFlSCxLQUFmLEdBQXVCTCxlQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q1EsSUFBOUQ7QUFDQSxXQUFLTixXQUFMLENBQWlCRSxLQUFqQixHQUF5QkwsZUFBS0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNLLE1BQWhFO0FBQ0EsV0FBS1IsVUFBTCxHQUFrQkMsT0FBT0MsZUFBS0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNDLEtBQTlDLElBQXVELENBQXpFO0FBQ0EsV0FBS2dCLE1BQUw7QUFDRDs7O3NDQUVrQmtCLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJSyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlQLElBQUlRLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0x4QyxlQUFPLG9CQURGO0FBRUx5QyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBN0dpQzlDLGVBQUsrQyxJOztrQkFBcEI3RCxNIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xyXG5cclxuICBjb25zdCBncmFkZUxpc3QgPSBbJ+S4g+W5tOe6pycsICflhavlubTnuqcnXVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeUluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq66LWE5paZJ1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJuYW1lRmllbGRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9uYW1lXCIsXCJjb21wb25lbnRJZFwiOlwibmFtZUZpZWxkXCJ9LFwic2Nob29sRmllbGRcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJiYXNlX3NjaG9vbFwiLFwiY29tcG9uZW50SWRcIjpcInNjaG9vbEZpZWxkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgbmFtZUZpZWxkOiB6YW5GaWVsZCxcclxuICAgICAgc2V4RmllbGQ6IHphbkZpZWxkLFxyXG4gICAgICBzY2hvb2xGaWVsZDogemFuRmllbGRcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBncmFkZUluZGV4OiBOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZ3JhZGUpIC0gNyxcclxuICAgICAgZ3JhZGVMaXN0OiBncmFkZUxpc3QsXHJcbiAgICAgIGJhc2Vfc2Nob29sOiB7XHJcbiAgICAgICAgdGl0bGU6ICflrabmoKEnLFxyXG4gICAgICAgIHZhbHVlOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5zY2hvb2wsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXmgqjnmoTlrabmoKHlkI3np7AnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhc2VfbmFtZToge1xyXG4gICAgICAgIHRpdGxlOiAn5aeT5ZCNJyxcclxuICAgICAgICB2YWx1ZTogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykubmFtZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeaCqOeahOWnk+WQjSdcclxuICAgICAgfSxcclxuICAgICAgYmFzZV9zZXg6IHtcclxuICAgICAgICB0aXRsZTogJ+aAp+WIqycsXHJcbiAgICAgICAgdmFsdWU6IChOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuc2V4KSA9PT0gMSA/ICfnlLcnIDogJ+WlsycpLFxyXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgeyBjb21wb25lbnRJZCwgZGV0YWlsIH0gPSBlXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudElkID09PSAnbmFtZUZpZWxkJykge1xyXG4gICAgICAgICAgdGhpcy5iYXNlX25hbWUudmFsdWUgPSBkZXRhaWwudmFsdWVcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudElkID09PSAnc2Nob29sRmllbGQnKSB7XHJcbiAgICAgICAgICB0aGlzLmJhc2Vfc2Nob29sLnZhbHVlID0gZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGJpbmRHcmFkZUNoYW5nZSAoZSkge1xyXG4gICAgICAgIHRoaXMuZ3JhZGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIF9zYXZlICgpIHtcclxuICAgICAgICBsZXQgdXNlciA9IHtcclxuICAgICAgICAgIGdyYWRlOiBOdW1iZXIodGhpcy5ncmFkZUluZGV4KSArIDcsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLmJhc2VfbmFtZS52YWx1ZSxcclxuICAgICAgICAgIHNjaG9vbDogdGhpcy5iYXNlX3NjaG9vbC52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VySW5mbyh1c2VyKVxyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcclxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgc3VjY2VzcyAoKSB7XHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xyXG4gICAgX3NldFVzZXJJbmZvICh1c2VyKSB7XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mb0VkaXQnLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGdyYWRlOiB1c2VyLmdyYWRlLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogdXNlci5zY2hvb2xcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93ICgpIHtcclxuICAgICAgdGhpcy5iYXNlX25hbWUudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5uYW1lXHJcbiAgICAgIHRoaXMuYmFzZV9zY2hvb2wudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5zY2hvb2xcclxuICAgICAgdGhpcy5ncmFkZUluZGV4ID0gTnVtYmVyKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmdyYWRlKSAtIDdcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19