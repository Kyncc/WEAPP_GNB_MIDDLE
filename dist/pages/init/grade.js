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
                    session_key: _wepy2.default.getStorageSync('session_key'),
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
                  textbookId = _wepy2.default.getStorageSync('User').textbook[Number(type)].id;

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
            session_key: _wepy2.default.getStorageSync('session_key'),
            iv: user.iv
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLmpzIl0sIm5hbWVzIjpbIkluaXRHcmFkZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZW5jcnlwdGVkRGF0YSIsIml2IiwibWV0aG9kcyIsIl9pbnRvQWRkV29ya2Jvb2siLCJ0eXBlIiwiZ3JhZGUiLCJfc2V0VXNlckluZm8iLCJzZXNzaW9uX2tleSIsImdldFN0b3JhZ2VTeW5jIiwibmFtZSIsInRleHRib29rSWQiLCJ0ZXh0Ym9vayIsIk51bWJlciIsImlkIiwicmVkaXJlY3RUbyIsInVybCIsInVzZXIiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwic2VsZiIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMscUJBQWUsRUFEVjs7QUFHTEMsVUFBSTs7QUFHTjtBQU5PLEssUUFnQ1BDLE8sR0FBVTtBQUNGQyxzQkFERTtBQUFBLDZGQUNnQkMsSUFEaEIsRUFDc0JDLEtBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUEsS0FBS0MsWUFBTCxDQUFrQjtBQUN0QkQsMkJBQU9BLEtBRGU7QUFFdEJMLG1DQUFlLEtBQUtBLGFBRkU7QUFHdEJPLGlDQUFhLGVBQUtDLGNBQUwsQ0FBb0IsYUFBcEIsQ0FIUztBQUl0QlAsd0JBQUksS0FBS0E7QUFKYSxtQkFBbEIsQ0FGQTs7QUFBQTtBQVFGUSxzQkFSRSxHQVFLLEVBUkw7QUFBQSxnQ0FTRUwsSUFURjtBQUFBLGtEQVdDLEdBWEQsdUJBYUMsR0FiRCx1QkFlQyxHQWZEO0FBQUE7O0FBQUE7QUFXUUsseUJBQU8sT0FBUCxDQVhSOztBQUFBO0FBYVFBLHlCQUFPLE9BQVAsQ0FiUjs7QUFBQTtBQWVRQSx5QkFBTyxPQUFQLENBZlI7O0FBQUE7QUFpQk47QUFDSUMsNEJBbEJFLEdBa0JZLGVBQUtGLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJHLFFBQTdCLENBQXVDQyxPQUFPUixJQUFQLENBQXZDLEVBQXFEUyxFQWxCaEU7O0FBbUJOLGlDQUFLQyxVQUFMLENBQWdCLEVBQUVDLGdDQUE4QlYsS0FBOUIsY0FBNENJLElBQTVDLG9CQUErREMsVUFBakUsRUFBaEI7O0FBbkJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7aUNBekJJTSxJLEVBQU07QUFDbEIscUJBQUtDLFdBQUwsQ0FBaUIsRUFBQ0MsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWFAsZUFBSywwQ0FETTtBQUVYUSxrQkFBUSxNQUZHO0FBR1h4QixnQkFBTTtBQUNKTSxtQkFBT1csS0FBS1gsS0FEUjtBQUVKTCwyQkFBZWdCLEtBQUtoQixhQUZoQjtBQUdKTyx5QkFBYSxlQUFLQyxjQUFMLENBQW9CLGFBQXBCLENBSFQ7QUFJSlAsZ0JBQUllLEtBQUtmO0FBSkwsV0FISztBQVNYdUIsaUJBVFcsbUJBU0ZDLEdBVEUsRUFTRztBQUNaLDJCQUFLQyxXQUFMO0FBQ0EsMkJBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJGLEdBQTVCO0FBQ0FMLG9CQUFRSyxHQUFSO0FBQ0QsV0FiVTtBQWNYRyxjQWRXLGdCQWNMQyxHQWRLLEVBY0E7QUFDVCwyQkFBS0gsV0FBTDtBQUNBTCxtQkFBT1EsR0FBUDtBQUNEO0FBakJVLFNBQWI7QUFtQkQsT0FwQk0sQ0FBUDtBQXFCRDs7OzZCQXlCUTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZQLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaSyxlQUFLOUIsYUFBTCxHQUFxQnlCLElBQUl6QixhQUF6QjtBQUNBOEIsZUFBSzdCLEVBQUwsR0FBVXdCLElBQUl4QixFQUFkO0FBQ0E2QixlQUFLRSxNQUFMO0FBQ0Q7QUFMYyxPQUFqQjtBQU9EOzs7O0VBckVvQyxlQUFLQyxJOztrQkFBdkJyQyxTIiwiZmlsZSI6ImdyYWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEdyYWRlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOS4reWtpidcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBlbmNyeXB0ZWREYXRhOiAnJyxcclxuXHJcbiAgICAgIGl2OiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDorr7nva7nlKjmiLfkv6Hmga8gKi9cclxuICAgIF9zZXRVc2VySW5mbyAodXNlcikge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vbWVtYmVyL2luZm9Jbml0JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBncmFkZTogdXNlci5ncmFkZSxcclxuICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogdXNlci5lbmNyeXB0ZWREYXRhLFxyXG4gICAgICAgICAgICBzZXNzaW9uX2tleTogd2VweS5nZXRTdG9yYWdlU3luYygnc2Vzc2lvbl9rZXknKSxcclxuICAgICAgICAgICAgaXY6IHVzZXIuaXZcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXInLCByZXMpXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFzeW5jIF9pbnRvQWRkV29ya2Jvb2sgKHR5cGUsIGdyYWRlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgZ3JhZGU6IGdyYWRlLFxyXG4gICAgICAgICAgZW5jcnlwdGVkRGF0YTogdGhpcy5lbmNyeXB0ZWREYXRhLFxyXG4gICAgICAgICAgc2Vzc2lvbl9rZXk6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25fa2V5JyksXHJcbiAgICAgICAgICBpdjogdGhpcy5pdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IG5hbWUgPSAnJ1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgLy8gY2FzZSAnMCc6IHsgbmFtZSA9ICfkuIPlubTnuqfkuIrlhownOyBicmVhayB9XHJcbiAgICAgICAgICBjYXNlICcxJzogeyBuYW1lID0gJ+S4g+W5tOe6p+S4i+WGjCc7IGJyZWFrIH1cclxuICAgICAgICAgIC8vIGNhc2UgJzInOiB7IG5hbWUgPSAn5YWr5bm057qn5LiK5YaMJzsgYnJlYWsgfVxyXG4gICAgICAgICAgY2FzZSAnMyc6IHsgbmFtZSA9ICflhavlubTnuqfkuIvlhownOyBicmVhayB9XHJcbiAgICAgICAgICAvLyBjYXNlICc0JzogeyBuYW1lID0gJ+S5neW5tOe6p+S4iuWGjCc7IGJyZWFrIH1cclxuICAgICAgICAgIGNhc2UgJzUnOiB7IG5hbWUgPSAn5Lmd5bm057qn5LiL5YaMJzsgYnJlYWsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5blvZPliY3lubTnuqfnmoTmlZnmnZBcclxuICAgICAgICBsZXQgdGV4dGJvb2tJZCA9ICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykudGV4dGJvb2spW051bWJlcih0eXBlKV0uaWRcclxuICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oeyB1cmw6IGAvcGFnZXMvaW5pdC9hZGQ/Z3JhZGU9JHtncmFkZX0mbmFtZT0ke25hbWV9JnRleHRib29rSWQ9JHt0ZXh0Ym9va0lkfWAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgc2VsZi5lbmNyeXB0ZWREYXRhID0gcmVzLmVuY3J5cHRlZERhdGFcclxuICAgICAgICAgIHNlbGYuaXYgPSByZXMuaXZcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=