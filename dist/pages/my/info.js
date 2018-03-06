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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiZ3JhZGVMaXN0IiwiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hbWVGaWVsZCIsInNleEZpZWxkIiwic2Nob29sRmllbGQiLCJkYXRhIiwiZ3JhZGVJbmRleCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwiZ3JhZGUiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwidmFsdWUiLCJzY2hvb2wiLCJwbGFjZWhvbGRlciIsImJhc2VfbmFtZSIsIm5hbWUiLCJiYXNlX3NleCIsInNleCIsImRpc2FibGVkIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiY29tcG9uZW50SWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEdyYWRlQ2hhbmdlIiwiX3NhdmUiLCJ1c2VyIiwiX3NldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWxCOztJQUVxQkMsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixX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QyxXQUFMO0FBQ0EsMkJBQUtDLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDRixHQUF2QztBQUNBTCxvQkFBUUssR0FBUjtBQUNELFdBWlU7QUFhWEcsY0FiVyxnQkFhTEMsR0FiSyxFQWFBO0FBQ1QsMkJBQUtILFdBQUw7QUFDQUwsbUJBQU9RLEdBQVA7QUFDRDtBQWhCVSxTQUFiO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7Ozs2QkFFUztBQUNSLFdBQUtoQyxTQUFMLENBQWVILEtBQWYsR0FBdUIsZUFBS0osY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNRLElBQTlEO0FBQ0EsV0FBS04sV0FBTCxDQUFpQkUsS0FBakIsR0FBeUIsZUFBS0osY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNLLE1BQWhFO0FBQ0EsV0FBS1AsVUFBTCxHQUFrQkMsT0FBTyxlQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0MsS0FBOUMsSUFBdUQsQ0FBekU7QUFDQSxXQUFLZ0IsTUFBTDtBQUNEOzs7c0NBRWtCa0IsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlLLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWVAsSUFBSVEsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTHhDLGVBQU8scUJBREY7QUFFTHlDLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUE3R2lDLGVBQUtDLEk7O2tCQUFwQjNELE0iLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXHJcblxyXG4gIGNvbnN0IGdyYWRlTGlzdCA9IFsn5LiD5bm057qnJywgJ+WFq+W5tOe6pyddXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15SW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrotYTmlpknXHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hbWVGaWVsZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJiYXNlX25hbWVcIixcImNvbXBvbmVudElkXCI6XCJuYW1lRmllbGRcIn0sXCJzZXhGaWVsZFwiOntcInYtYmluZDpvcHRpb25zLm9uY2VcIjpcImJhc2Vfc2V4XCIsXCJjb21wb25lbnRJZFwiOlwic2V4RmllbGRcIn0sXCJzY2hvb2xGaWVsZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2Vfc2Nob29sXCIsXCJjb21wb25lbnRJZFwiOlwic2Nob29sRmllbGRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBuYW1lRmllbGQ6IHphbkZpZWxkLFxyXG4gICAgICBzZXhGaWVsZDogemFuRmllbGQsXHJcbiAgICAgIHNjaG9vbEZpZWxkOiB6YW5GaWVsZFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGdyYWRlSW5kZXg6IE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5ncmFkZSkgLSA3LFxyXG4gICAgICBncmFkZUxpc3Q6IGdyYWRlTGlzdCxcclxuICAgICAgYmFzZV9zY2hvb2w6IHtcclxuICAgICAgICB0aXRsZTogJ+WtpuagoScsXHJcbiAgICAgICAgdmFsdWU6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnNjaG9vbCxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeaCqOeahOWtpuagoeWQjeensCdcclxuICAgICAgfSxcclxuICAgICAgYmFzZV9uYW1lOiB7XHJcbiAgICAgICAgdGl0bGU6ICflp5PlkI0nLFxyXG4gICAgICAgIHZhbHVlOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5uYW1lLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5oKo55qE5aeT5ZCNJ1xyXG4gICAgICB9LFxyXG4gICAgICBiYXNlX3NleDoge1xyXG4gICAgICAgIHRpdGxlOiAn5oCn5YirJyxcclxuICAgICAgICB2YWx1ZTogKE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5zZXgpID09PSAxID8gJ+eUtycgOiAn5aWzJyksXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgemFuRmllbGRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCB7IGNvbXBvbmVudElkLCBkZXRhaWwgfSA9IGVcclxuICAgICAgICBpZiAoY29tcG9uZW50SWQgPT09ICduYW1lRmllbGQnKSB7XHJcbiAgICAgICAgICB0aGlzLmJhc2VfbmFtZS52YWx1ZSA9IGRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50SWQgPT09ICdzY2hvb2xGaWVsZCcpIHtcclxuICAgICAgICAgIHRoaXMuYmFzZV9zY2hvb2wudmFsdWUgPSBkZXRhaWwudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYmluZEdyYWRlQ2hhbmdlIChlKSB7XHJcbiAgICAgICAgdGhpcy5ncmFkZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgX3NhdmUgKCkge1xyXG4gICAgICAgIGxldCB1c2VyID0ge1xyXG4gICAgICAgICAgZ3JhZGU6IE51bWJlcih0aGlzLmdyYWRlSW5kZXgpICsgNyxcclxuICAgICAgICAgIG5hbWU6IHRoaXMuYmFzZV9uYW1lLnZhbHVlLFxyXG4gICAgICAgICAgc2Nob29sOiB0aGlzLmJhc2Vfc2Nob29sLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvKHVzZXIpXHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxyXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICBzdWNjZXNzICgpIHtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXHJcbiAgICBfc2V0VXNlckluZm8gKHVzZXIpIHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvRWRpdCcsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZ3JhZGU6IHVzZXIuZ3JhZGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgc2Nob29sOiB1c2VyLnNjaG9vbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblNob3cgKCkge1xyXG4gICAgICB0aGlzLmJhc2VfbmFtZS52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLm5hbWVcclxuICAgICAgdGhpcy5iYXNlX3NjaG9vbC52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnNjaG9vbFxyXG4gICAgICB0aGlzLmdyYWRlSW5kZXggPSBOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZ3JhZGUpIC0gN1xyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=