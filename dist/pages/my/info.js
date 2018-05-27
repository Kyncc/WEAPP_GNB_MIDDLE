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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiZ3JhZGVMaXN0IiwiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hbWVGaWVsZCIsInNleEZpZWxkIiwic2Nob29sRmllbGQiLCJkYXRhIiwiZ3JhZGVJbmRleCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwiZ3JhZGUiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwidmFsdWUiLCJzY2hvb2wiLCJwbGFjZWhvbGRlciIsImJhc2VfbmFtZSIsIm5hbWUiLCJiYXNlX3NleCIsInNleCIsImRpc2FibGVkIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiY29tcG9uZW50SWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEdyYWRlQ2hhbmdlIiwiX3NhdmUiLCJ1c2VyIiwiX3NldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWxCOztJQUVxQkMsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixX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Q0FMLG9CQUFRSyxHQUFSO0FBQ0QsV0FaVTtBQWFYRyxjQWJXLGdCQWFMQyxHQWJLLEVBYUE7QUFDVCwyQkFBS0gsV0FBTDtBQUNBTCxtQkFBT1EsR0FBUDtBQUNEO0FBaEJVLFNBQWI7QUFrQkQsT0FuQk0sQ0FBUDtBQW9CRDs7OzZCQUVTO0FBQ1IsV0FBS2hDLFNBQUwsQ0FBZUgsS0FBZixHQUF1QixlQUFLSixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q1EsSUFBOUQ7QUFDQSxXQUFLTixXQUFMLENBQWlCRSxLQUFqQixHQUF5QixlQUFLSixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0ssTUFBaEU7QUFDQSxXQUFLUCxVQUFMLEdBQWtCQyxPQUFPLGVBQUtDLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDQyxLQUE5QyxJQUF1RCxDQUF6RTtBQUNBLFdBQUtnQixNQUFMO0FBQ0Q7OztzQ0FFa0JrQixHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSUssSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCQyxnQkFBUUMsR0FBUixDQUFZUCxJQUFJUSxNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMeEMsZUFBTyxvQkFERjtBQUVMeUMsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQTdHaUMsZUFBS0MsSTs7a0JBQXBCM0QsTSIsImZpbGUiOiJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG4gIGNvbnN0IGdyYWRlTGlzdCA9IFsn5LiD5bm057qnJywgJ+WFq+W5tOe6pyddXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlJbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq66LWE5paZJ1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJuYW1lRmllbGRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9uYW1lXCIsXCJjb21wb25lbnRJZFwiOlwibmFtZUZpZWxkXCJ9LFwic2Nob29sRmllbGRcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJiYXNlX3NjaG9vbFwiLFwiY29tcG9uZW50SWRcIjpcInNjaG9vbEZpZWxkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIG5hbWVGaWVsZDogemFuRmllbGQsXG4gICAgICBzZXhGaWVsZDogemFuRmllbGQsXG4gICAgICBzY2hvb2xGaWVsZDogemFuRmllbGRcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgZ3JhZGVJbmRleDogTnVtYmVyKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmdyYWRlKSAtIDcsXG4gICAgICBncmFkZUxpc3Q6IGdyYWRlTGlzdCxcbiAgICAgIGJhc2Vfc2Nob29sOiB7XG4gICAgICAgIHRpdGxlOiAn5a2m5qChJyxcbiAgICAgICAgdmFsdWU6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnNjaG9vbCxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXmgqjnmoTlrabmoKHlkI3np7AnXG4gICAgICB9LFxuICAgICAgYmFzZV9uYW1lOiB7XG4gICAgICAgIHRpdGxlOiAn5aeT5ZCNJyxcbiAgICAgICAgdmFsdWU6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLm5hbWUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5oKo55qE5aeT5ZCNJ1xuICAgICAgfSxcbiAgICAgIGJhc2Vfc2V4OiB7XG4gICAgICAgIHRpdGxlOiAn5oCn5YirJyxcbiAgICAgICAgdmFsdWU6IChOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuc2V4KSA9PT0gMSA/ICfnlLcnIDogJ+WlsycpLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IHsgY29tcG9uZW50SWQsIGRldGFpbCB9ID0gZVxuICAgICAgICBpZiAoY29tcG9uZW50SWQgPT09ICduYW1lRmllbGQnKSB7XG4gICAgICAgICAgdGhpcy5iYXNlX25hbWUudmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRJZCA9PT0gJ3NjaG9vbEZpZWxkJykge1xuICAgICAgICAgIHRoaXMuYmFzZV9zY2hvb2wudmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRHcmFkZUNoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmdyYWRlSW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGFzeW5jIF9zYXZlICgpIHtcbiAgICAgICAgbGV0IHVzZXIgPSB7XG4gICAgICAgICAgZ3JhZGU6IE51bWJlcih0aGlzLmdyYWRlSW5kZXgpICsgNyxcbiAgICAgICAgICBuYW1lOiB0aGlzLmJhc2VfbmFtZS52YWx1ZSxcbiAgICAgICAgICBzY2hvb2w6IHRoaXMuYmFzZV9zY2hvb2wudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VySW5mbyh1c2VyKVxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICBzdWNjZXNzICgpIHtcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xuICAgIF9zZXRVc2VySW5mbyAodXNlcikge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ3JhZGU6IHVzZXIuZ3JhZGUsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBzY2hvb2w6IHVzZXIuc2Nob29sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uU2hvdyAoKSB7XG4gICAgICB0aGlzLmJhc2VfbmFtZS52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLm5hbWVcbiAgICAgIHRoaXMuYmFzZV9zY2hvb2wudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5zY2hvb2xcbiAgICAgIHRoaXMuZ3JhZGVJbmRleCA9IE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5ncmFkZSkgLSA3XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==