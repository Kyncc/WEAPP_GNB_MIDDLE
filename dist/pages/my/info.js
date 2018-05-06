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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiZ3JhZGVMaXN0IiwiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hbWVGaWVsZCIsInphbkZpZWxkIiwic2V4RmllbGQiLCJzY2hvb2xGaWVsZCIsImRhdGEiLCJncmFkZUluZGV4IiwiTnVtYmVyIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiZ3JhZGUiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwidmFsdWUiLCJzY2hvb2wiLCJwbGFjZWhvbGRlciIsImJhc2VfbmFtZSIsIm5hbWUiLCJiYXNlX3NleCIsInNleCIsImRpc2FibGVkIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiY29tcG9uZW50SWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEdyYWRlQ2hhbmdlIiwiX3NhdmUiLCJ1c2VyIiwiX3NldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWxCOztJQUVxQkMsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVB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LDJCQUFLcUMsV0FBTDtBQUNBckMsMkJBQUtzQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0YsR0FBdkM7QUFDQUwsb0JBQVFLLEdBQVI7QUFDRCxXQVpVO0FBYVhHLGNBYlcsZ0JBYUxDLEdBYkssRUFhQTtBQUNUeEMsMkJBQUtxQyxXQUFMO0FBQ0FMLG1CQUFPUSxHQUFQO0FBQ0Q7QUFoQlUsU0FBYjtBQWtCRCxPQW5CTSxDQUFQO0FBb0JEOzs7NkJBRVM7QUFDUixXQUFLaEMsU0FBTCxDQUFlSCxLQUFmLEdBQXVCTCxlQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q1EsSUFBOUQ7QUFDQSxXQUFLTixXQUFMLENBQWlCRSxLQUFqQixHQUF5QkwsZUFBS0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNLLE1BQWhFO0FBQ0EsV0FBS1IsVUFBTCxHQUFrQkMsT0FBT0MsZUFBS0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNDLEtBQTlDLElBQXVELENBQXpFO0FBQ0EsV0FBS2dCLE1BQUw7QUFDRDs7O3NDQUVrQmtCLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJSyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlQLElBQUlRLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0x4QyxlQUFPLG9CQURGO0FBRUx5QyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBN0dpQzlDLGVBQUsrQyxJOztrQkFBcEI3RCxNIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG5cbiAgY29uc3QgZ3JhZGVMaXN0ID0gWyfkuIPlubTnuqcnLCAn5YWr5bm057qnJ11cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeUluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrotYTmlpknXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hbWVGaWVsZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJiYXNlX25hbWVcIixcImNvbXBvbmVudElkXCI6XCJuYW1lRmllbGRcIn0sXCJzY2hvb2xGaWVsZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2Vfc2Nob29sXCIsXCJjb21wb25lbnRJZFwiOlwic2Nob29sRmllbGRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbmFtZUZpZWxkOiB6YW5GaWVsZCxcbiAgICAgIHNleEZpZWxkOiB6YW5GaWVsZCxcbiAgICAgIHNjaG9vbEZpZWxkOiB6YW5GaWVsZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBncmFkZUluZGV4OiBOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZ3JhZGUpIC0gNyxcbiAgICAgIGdyYWRlTGlzdDogZ3JhZGVMaXN0LFxuICAgICAgYmFzZV9zY2hvb2w6IHtcbiAgICAgICAgdGl0bGU6ICflrabmoKEnLFxuICAgICAgICB2YWx1ZTogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuc2Nob29sLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeaCqOeahOWtpuagoeWQjeensCdcbiAgICAgIH0sXG4gICAgICBiYXNlX25hbWU6IHtcbiAgICAgICAgdGl0bGU6ICflp5PlkI0nLFxuICAgICAgICB2YWx1ZTogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykubmFtZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXmgqjnmoTlp5PlkI0nXG4gICAgICB9LFxuICAgICAgYmFzZV9zZXg6IHtcbiAgICAgICAgdGl0bGU6ICfmgKfliKsnLFxuICAgICAgICB2YWx1ZTogKE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5zZXgpID09PSAxID8gJ+eUtycgOiAn5aWzJyksXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgeyBjb21wb25lbnRJZCwgZGV0YWlsIH0gPSBlXG4gICAgICAgIGlmIChjb21wb25lbnRJZCA9PT0gJ25hbWVGaWVsZCcpIHtcbiAgICAgICAgICB0aGlzLmJhc2VfbmFtZS52YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudElkID09PSAnc2Nob29sRmllbGQnKSB7XG4gICAgICAgICAgdGhpcy5iYXNlX3NjaG9vbC52YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZEdyYWRlQ2hhbmdlIChlKSB7XG4gICAgICAgIHRoaXMuZ3JhZGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgYXN5bmMgX3NhdmUgKCkge1xuICAgICAgICBsZXQgdXNlciA9IHtcbiAgICAgICAgICBncmFkZTogTnVtYmVyKHRoaXMuZ3JhZGVJbmRleCkgKyA3LFxuICAgICAgICAgIG5hbWU6IHRoaXMuYmFzZV9uYW1lLnZhbHVlLFxuICAgICAgICAgIHNjaG9vbDogdGhpcy5iYXNlX3NjaG9vbC52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvKHVzZXIpXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+aIkOWKnycsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIHN1Y2Nlc3MgKCkge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJJbmZvICh1c2VyKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm9FZGl0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBncmFkZTogdXNlci5ncmFkZSxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIHNjaG9vbDogdXNlci5zY2hvb2xcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuYmFzZV9uYW1lLnZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykubmFtZVxuICAgICAgdGhpcy5iYXNlX3NjaG9vbC52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnNjaG9vbFxuICAgICAgdGhpcy5ncmFkZUluZGV4ID0gTnVtYmVyKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmdyYWRlKSAtIDdcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19