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
      gradeIndex: Number(_wepy2.default.getStorageSync('User').grade) - 7,
      gradeList: gradeList,
      base_school: {
        title: '学校',
        value: _wepy2.default.getStorageSync('User').school,
        placeholder: '请输入您的学校名称'
      },
      base_name: {
        title: '姓名',
        value: _wepy2.default.getStorageSync('User').name,
        placeholder: '请输入您的姓名'
      },
      base_sex: {
        title: '性别',
        value: Number(_wepy2.default.getStorageSync('User').sex) === 1 ? '男' : '女',
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
            _wepy2.default.setStorageSync('User', res);
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
      this.base_name.value = _wepy2.default.getStorageSync('User').name;
      this.base_school.value = _wepy2.default.getStorageSync('User').school;
      this.gradeIndex = Number(_wepy2.default.getStorageSync('User').grade) - 7;
      this.$apply();
    }
  }]);

  return MyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyInfo , 'pages/my/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiZ3JhZGVMaXN0IiwiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hbWVGaWVsZCIsInNleEZpZWxkIiwic2Nob29sRmllbGQiLCJkYXRhIiwiZ3JhZGVJbmRleCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwiZ3JhZGUiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwidmFsdWUiLCJzY2hvb2wiLCJwbGFjZWhvbGRlciIsImJhc2VfbmFtZSIsIm5hbWUiLCJiYXNlX3NleCIsInNleCIsImRpc2FibGVkIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiY29tcG9uZW50SWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEdyYWRlQ2hhbmdlIiwiX3NhdmUiLCJ1c2VyIiwiX3NldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFsQjs7SUFFcUJDLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsV0FBekMsRUFBcUQsZUFBYyxXQUFuRSxFQUFiLEVBQTZGLFlBQVcsRUFBQyx1QkFBc0Is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LG9CQUFRSyxHQUFSO0FBQ0QsV0FaVTtBQWFYRyxjQWJXLGdCQWFMQyxHQWJLLEVBYUE7QUFDVCwyQkFBS0gsV0FBTDtBQUNBTCxtQkFBT1EsR0FBUDtBQUNEO0FBaEJVLFNBQWI7QUFrQkQsT0FuQk0sQ0FBUDtBQW9CRDs7OzZCQUVTO0FBQ1IsV0FBS2hDLFNBQUwsQ0FBZUgsS0FBZixHQUF1QixlQUFLSixjQUFMLENBQW9CLE1BQXBCLEVBQTRCUSxJQUFuRDtBQUNBLFdBQUtOLFdBQUwsQ0FBaUJFLEtBQWpCLEdBQXlCLGVBQUtKLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJLLE1BQXJEO0FBQ0EsV0FBS1AsVUFBTCxHQUFrQkMsT0FBTyxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCQyxLQUFuQyxJQUE0QyxDQUE5RDtBQUNBLFdBQUtnQixNQUFMO0FBQ0Q7Ozs7RUFsR2lDLGVBQUt1QixJOztrQkFBcEJyRCxNIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG5cbiAgY29uc3QgZ3JhZGVMaXN0ID0gWyfkuIPlubTnuqcnLCAn5YWr5bm057qnJ11cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeUluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrotYTmlpknXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hbWVGaWVsZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJiYXNlX25hbWVcIixcImNvbXBvbmVudElkXCI6XCJuYW1lRmllbGRcIn0sXCJzZXhGaWVsZFwiOntcInYtYmluZDpvcHRpb25zLm9uY2VcIjpcImJhc2Vfc2V4XCIsXCJjb21wb25lbnRJZFwiOlwic2V4RmllbGRcIn0sXCJzY2hvb2xGaWVsZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2Vfc2Nob29sXCIsXCJjb21wb25lbnRJZFwiOlwic2Nob29sRmllbGRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbmFtZUZpZWxkOiB6YW5GaWVsZCxcbiAgICAgIHNleEZpZWxkOiB6YW5GaWVsZCxcbiAgICAgIHNjaG9vbEZpZWxkOiB6YW5GaWVsZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBncmFkZUluZGV4OiBOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmdyYWRlKSAtIDcsXG4gICAgICBncmFkZUxpc3Q6IGdyYWRlTGlzdCxcbiAgICAgIGJhc2Vfc2Nob29sOiB7XG4gICAgICAgIHRpdGxlOiAn5a2m5qChJyxcbiAgICAgICAgdmFsdWU6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5zY2hvb2wsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5oKo55qE5a2m5qCh5ZCN56ewJ1xuICAgICAgfSxcbiAgICAgIGJhc2VfbmFtZToge1xuICAgICAgICB0aXRsZTogJ+Wnk+WQjScsXG4gICAgICAgIHZhbHVlOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykubmFtZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXmgqjnmoTlp5PlkI0nXG4gICAgICB9LFxuICAgICAgYmFzZV9zZXg6IHtcbiAgICAgICAgdGl0bGU6ICfmgKfliKsnLFxuICAgICAgICB2YWx1ZTogKE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuc2V4KSA9PT0gMSA/ICfnlLcnIDogJ+WlsycpLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IHsgY29tcG9uZW50SWQsIGRldGFpbCB9ID0gZVxuICAgICAgICBpZiAoY29tcG9uZW50SWQgPT09ICduYW1lRmllbGQnKSB7XG4gICAgICAgICAgdGhpcy5iYXNlX25hbWUudmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRJZCA9PT0gJ3NjaG9vbEZpZWxkJykge1xuICAgICAgICAgIHRoaXMuYmFzZV9zY2hvb2wudmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRHcmFkZUNoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmdyYWRlSW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGFzeW5jIF9zYXZlICgpIHtcbiAgICAgICAgbGV0IHVzZXIgPSB7XG4gICAgICAgICAgZ3JhZGU6IE51bWJlcih0aGlzLmdyYWRlSW5kZXgpICsgNyxcbiAgICAgICAgICBuYW1lOiB0aGlzLmJhc2VfbmFtZS52YWx1ZSxcbiAgICAgICAgICBzY2hvb2w6IHRoaXMuYmFzZV9zY2hvb2wudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VySW5mbyh1c2VyKVxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICBzdWNjZXNzICgpIHtcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xuICAgIF9zZXRVc2VySW5mbyAodXNlcikge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ3JhZGU6IHVzZXIuZ3JhZGUsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBzY2hvb2w6IHVzZXIuc2Nob29sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5iYXNlX25hbWUudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykubmFtZVxuICAgICAgdGhpcy5iYXNlX3NjaG9vbC52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5zY2hvb2xcbiAgICAgIHRoaXMuZ3JhZGVJbmRleCA9IE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZ3JhZGUpIC0gN1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19