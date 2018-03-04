'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InitGrade = function (_wepy$page) {
  _inherits(InitGrade, _wepy$page);

  function InitGrade() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InitGrade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InitGrade.__proto__ || Object.getPrototypeOf(InitGrade)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题归纳本中学'
    }, _this.data = {
      encryptedData: '',

      iv: ''

      /** 设置用户信息 */
    }, _this.methods = {
      _intoAddWorkbook: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type, grade) {
          var name, textbookId;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._setUserInfo({
                    grade: grade,
                    encryptedData: this.encryptedData,
                    session_key: _wepy2.default.getStorageSync('gnb_middle_session_key'),
                    iv: this.iv
                  });

                case 2:
                  name = '';
                  _context.t0 = type;
                  _context.next = _context.t0 === '1' ? 6 : _context.t0 === '3' ? 8 : _context.t0 === '5' ? 10 : 12;
                  break;

                case 6:
                  name = '七年级下册';return _context.abrupt('break', 12);

                case 8:
                  name = '八年级下册';return _context.abrupt('break', 12);

                case 10:
                  name = '九年级下册';return _context.abrupt('break', 12);

                case 12:
                  // 获取当前年级的教材
                  textbookId = _wepy2.default.getStorageSync('gnb_middle_User').textbook[Number(type)].id;

                  _wepy2.default.redirectTo({ url: '/pages/init/add?grade=' + grade + '&name=' + name + '&textbookId=' + textbookId });

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _intoAddWorkbook(_x, _x2) {
          return _ref2.apply(this, arguments);
        }

        return _intoAddWorkbook;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InitGrade, [{
    key: '_setUserInfo',
    value: function _setUserInfo(user) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/member/infoInit',
          method: 'POST',
          data: {
            grade: user.grade,
            encryptedData: user.encryptedData,
            session_key: _wepy2.default.getStorageSync('gnb_middle_session_key'),
            iv: user.iv
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
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.encryptedData = res.encryptedData;
          self.iv = res.iv;
          self.$apply();
        }
      });
    }
  }]);

  return InitGrade;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(InitGrade , 'pages/init/grade'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLmpzIl0sIm5hbWVzIjpbIkluaXRHcmFkZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZW5jcnlwdGVkRGF0YSIsIml2IiwibWV0aG9kcyIsIl9pbnRvQWRkV29ya2Jvb2siLCJ0eXBlIiwiZ3JhZGUiLCJfc2V0VXNlckluZm8iLCJzZXNzaW9uX2tleSIsImdldFN0b3JhZ2VTeW5jIiwibmFtZSIsInRleHRib29rSWQiLCJ0ZXh0Ym9vayIsIk51bWJlciIsImlkIiwicmVkaXJlY3RUbyIsInVybCIsInVzZXIiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwic2VsZiIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMscUJBQWUsRUFEVjs7QUFHTEMsVUFBSTs7QUFHTjtBQU5PLEssUUFnQ1BDLE8sR0FBVTtBQUNGQyxzQkFERTtBQUFBLDZGQUNnQkMsSUFEaEIsRUFDc0JDLEtBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUEsS0FBS0MsWUFBTCxDQUFrQjtBQUN0QkQsMkJBQU9BLEtBRGU7QUFFdEJMLG1DQUFlLEtBQUtBLGFBRkU7QUFHdEJPLGlDQUFhLGVBQUtDLGNBQUwsQ0FBb0Isd0JBQXBCLENBSFM7QUFJdEJQLHdCQUFJLEtBQUtBO0FBSmEsbUJBQWxCLENBRkE7O0FBQUE7QUFRRlEsc0JBUkUsR0FRSyxFQVJMO0FBQUEsZ0NBU0VMLElBVEY7QUFBQSxrREFXQyxHQVhELHVCQWFDLEdBYkQsdUJBZUMsR0FmRDtBQUFBOztBQUFBO0FBV1FLLHlCQUFPLE9BQVAsQ0FYUjs7QUFBQTtBQWFRQSx5QkFBTyxPQUFQLENBYlI7O0FBQUE7QUFlUUEseUJBQU8sT0FBUCxDQWZSOztBQUFBO0FBaUJOO0FBQ0lDLDRCQWxCRSxHQWtCWSxlQUFLRixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0csUUFBeEMsQ0FBa0RDLE9BQU9SLElBQVAsQ0FBbEQsRUFBZ0VTLEVBbEIzRTs7QUFtQk4saUNBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsZ0NBQThCVixLQUE5QixjQUE0Q0ksSUFBNUMsb0JBQStEQyxVQUFqRSxFQUFoQjs7QUFuQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7OztpQ0F6QklNLEksRUFBTTtBQUNsQixxQkFBS0MsV0FBTCxDQUFpQixFQUFDQyxPQUFPLEtBQVIsRUFBakI7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYUCxlQUFLLDBDQURNO0FBRVhRLGtCQUFRLE1BRkc7QUFHWHhCLGdCQUFNO0FBQ0pNLG1CQUFPVyxLQUFLWCxLQURSO0FBRUpMLDJCQUFlZ0IsS0FBS2hCLGFBRmhCO0FBR0pPLHlCQUFhLGVBQUtDLGNBQUwsQ0FBb0Isd0JBQXBCLENBSFQ7QUFJSlAsZ0JBQUllLEtBQUtmO0FBSkwsV0FISztBQVNYdUIsaUJBVFcsbUJBU0ZDLEdBVEUsRUFTRztBQUNaLDJCQUFLQyxXQUFMO0FBQ0EsMkJBQUtDLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDRixHQUF2QztBQUNBTCxvQkFBUUssR0FBUjtBQUNELFdBYlU7QUFjWEcsY0FkVyxnQkFjTEMsR0FkSyxFQWNBO0FBQ1QsMkJBQUtILFdBQUw7QUFDQUwsbUJBQU9RLEdBQVA7QUFDRDtBQWpCVSxTQUFiO0FBbUJELE9BcEJNLENBQVA7QUFxQkQ7Ozs2QkF5QlE7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmUCxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkssZUFBSzlCLGFBQUwsR0FBcUJ5QixJQUFJekIsYUFBekI7QUFDQThCLGVBQUs3QixFQUFMLEdBQVV3QixJQUFJeEIsRUFBZDtBQUNBNkIsZUFBS0UsTUFBTDtBQUNEO0FBTGMsT0FBakI7QUFPRDs7OztFQXJFb0MsZUFBS0MsSTs7a0JBQXZCckMsUyIsImZpbGUiOiJncmFkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRHcmFkZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjlvZLnurPmnKzkuK3lraYnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgZW5jcnlwdGVkRGF0YTogJycsXHJcblxyXG4gICAgICBpdjogJydcclxuICAgIH1cclxuXHJcbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXHJcbiAgICBfc2V0VXNlckluZm8gKHVzZXIpIHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvSW5pdCcsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZ3JhZGU6IHVzZXIuZ3JhZGUsXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IHVzZXIuZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgc2Vzc2lvbl9rZXk6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfc2Vzc2lvbl9rZXknKSxcclxuICAgICAgICAgICAgaXY6IHVzZXIuaXZcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYXN5bmMgX2ludG9BZGRXb3JrYm9vayAodHlwZSwgZ3JhZGUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICBncmFkZTogZ3JhZGUsXHJcbiAgICAgICAgICBlbmNyeXB0ZWREYXRhOiB0aGlzLmVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICBzZXNzaW9uX2tleTogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9zZXNzaW9uX2tleScpLFxyXG4gICAgICAgICAgaXY6IHRoaXMuaXZcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBuYW1lID0gJydcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgIC8vIGNhc2UgJzAnOiB7IG5hbWUgPSAn5LiD5bm057qn5LiK5YaMJzsgYnJlYWsgfVxyXG4gICAgICAgICAgY2FzZSAnMSc6IHsgbmFtZSA9ICfkuIPlubTnuqfkuIvlhownOyBicmVhayB9XHJcbiAgICAgICAgICAvLyBjYXNlICcyJzogeyBuYW1lID0gJ+WFq+W5tOe6p+S4iuWGjCc7IGJyZWFrIH1cclxuICAgICAgICAgIGNhc2UgJzMnOiB7IG5hbWUgPSAn5YWr5bm057qn5LiL5YaMJzsgYnJlYWsgfVxyXG4gICAgICAgICAgLy8gY2FzZSAnNCc6IHsgbmFtZSA9ICfkuZ3lubTnuqfkuIrlhownOyBicmVhayB9XHJcbiAgICAgICAgICBjYXNlICc1JzogeyBuYW1lID0gJ+S5neW5tOe6p+S4i+WGjCc7IGJyZWFrIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5bm057qn55qE5pWZ5p2QXHJcbiAgICAgICAgbGV0IHRleHRib29rSWQgPSAod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2spW051bWJlcih0eXBlKV0uaWRcclxuICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oeyB1cmw6IGAvcGFnZXMvaW5pdC9hZGQ/Z3JhZGU9JHtncmFkZX0mbmFtZT0ke25hbWV9JnRleHRib29rSWQ9JHt0ZXh0Ym9va0lkfWAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgc2VsZi5lbmNyeXB0ZWREYXRhID0gcmVzLmVuY3J5cHRlZERhdGFcclxuICAgICAgICAgIHNlbGYuaXYgPSByZXMuaXZcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=