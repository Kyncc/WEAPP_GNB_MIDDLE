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
      name: '',
      openId: '',
      headImg: '',
      sex: ''

      /** 设置用户信息 */
    }, _this.methods = {
      _intoAddWorkbook: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(grade) {
          var name, textbookId;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._setUserInfo({
                    grade: grade,
                    name: this.name,
                    openId: this.openId,
                    headImg: this.headImg,
                    sex: this.sex
                  });

                case 2:
                  name = '';
                  _context.t0 = grade;
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
                  textbookId = _wepy2.default.getStorageSync('User').textbook[Number(grade)].id;

                  _wepy2.default.redirectTo({ url: '/pages/init/add?grade=' + grade + '&name=' + name + '&textbookId=' + textbookId });

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _intoAddWorkbook(_x) {
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
          url: 'https://mid.guinaben.com/member/infoEdit',
          method: 'POST',
          data: {
            grade: user.grade,
            name: user.name,
            openId: user.openId,
            headImg: user.headImg,
            sex: user.sex
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
          self.name = res.userInfo.nickName;
          self.openId = res.userInfo.openId;
          self.headImg = res.userInfo.avatarUrl;
          self.sex = res.userInfo.gender;
          self.$apply();
        }
      });
    }
  }]);

  return InitGrade;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(InitGrade , 'pages/init/grade'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLmpzIl0sIm5hbWVzIjpbIkluaXRHcmFkZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsIm9wZW5JZCIsImhlYWRJbWciLCJzZXgiLCJtZXRob2RzIiwiX2ludG9BZGRXb3JrYm9vayIsImdyYWRlIiwiX3NldFVzZXJJbmZvIiwidGV4dGJvb2tJZCIsImdldFN0b3JhZ2VTeW5jIiwidGV4dGJvb2siLCJOdW1iZXIiLCJpZCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJ1c2VyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsInNldFN0b3JhZ2VTeW5jIiwiZmFpbCIsImVyciIsInNlbGYiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxXQUFLOztBQUdQO0FBUE8sSyxRQWtDUEMsTyxHQUFVO0FBQ0ZDLHNCQURFO0FBQUEsNkZBQ2dCQyxLQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVBLEtBQUtDLFlBQUwsQ0FBa0I7QUFDdEJELDJCQUFPQSxLQURlO0FBRXRCTiwwQkFBTSxLQUFLQSxJQUZXO0FBR3RCQyw0QkFBUSxLQUFLQSxNQUhTO0FBSXRCQyw2QkFBUyxLQUFLQSxPQUpRO0FBS3RCQyx5QkFBSyxLQUFLQTtBQUxZLG1CQUFsQixDQUZBOztBQUFBO0FBU0ZILHNCQVRFLEdBU0ssRUFUTDtBQUFBLGdDQVVFTSxLQVZGO0FBQUEsa0RBWUMsR0FaRCx1QkFjQyxHQWRELHVCQWdCQyxHQWhCRDtBQUFBOztBQUFBO0FBWVFOLHlCQUFPLE9BQVAsQ0FaUjs7QUFBQTtBQWNRQSx5QkFBTyxPQUFQLENBZFI7O0FBQUE7QUFnQlFBLHlCQUFPLE9BQVAsQ0FoQlI7O0FBQUE7QUFrQk47QUFDSVEsNEJBbkJFLEdBbUJZLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJDLFFBQTdCLENBQXVDQyxPQUFPTCxLQUFQLENBQXZDLEVBQXNETSxFQW5CakU7O0FBb0JOLGlDQUFLQyxVQUFMLENBQWdCLEVBQUVDLGdDQUE4QlIsS0FBOUIsY0FBNENOLElBQTVDLG9CQUErRFEsVUFBakUsRUFBaEI7O0FBcEJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7aUNBMUJJTyxJLEVBQU07QUFDbEIscUJBQUtDLFdBQUwsQ0FBaUIsRUFBQ0MsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWFAsZUFBSywwQ0FETTtBQUVYUSxrQkFBUSxNQUZHO0FBR1h2QixnQkFBTTtBQUNKTyxtQkFBT1MsS0FBS1QsS0FEUjtBQUVKTixrQkFBTWUsS0FBS2YsSUFGUDtBQUdKQyxvQkFBUWMsS0FBS2QsTUFIVDtBQUlKQyxxQkFBU2EsS0FBS2IsT0FKVjtBQUtKQyxpQkFBS1ksS0FBS1o7QUFMTixXQUhLO0FBVVhvQixpQkFWVyxtQkFVRkMsR0FWRSxFQVVHO0FBQ1osMkJBQUtDLFdBQUw7QUFDQSwyQkFBS0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QkYsR0FBNUI7QUFDQUwsb0JBQVFLLEdBQVI7QUFDRCxXQWRVO0FBZVhHLGNBZlcsZ0JBZUxDLEdBZkssRUFlQTtBQUNULDJCQUFLSCxXQUFMO0FBQ0FMLG1CQUFPUSxHQUFQO0FBQ0Q7QUFsQlUsU0FBYjtBQW9CRCxPQXJCTSxDQUFQO0FBc0JEOzs7NkJBMEJRO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZlAsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pLLGVBQUs3QixJQUFMLEdBQVl3QixJQUFJTyxRQUFKLENBQWFDLFFBQXpCO0FBQ0FILGVBQUs1QixNQUFMLEdBQWN1QixJQUFJTyxRQUFKLENBQWE5QixNQUEzQjtBQUNBNEIsZUFBSzNCLE9BQUwsR0FBZXNCLElBQUlPLFFBQUosQ0FBYUUsU0FBNUI7QUFDQUosZUFBSzFCLEdBQUwsR0FBV3FCLElBQUlPLFFBQUosQ0FBYUcsTUFBeEI7QUFDQUwsZUFBS00sTUFBTDtBQUNEO0FBUGMsT0FBakI7QUFTRDs7OztFQTFFb0MsZUFBS0MsSTs7a0JBQXZCeEMsUyIsImZpbGUiOiJncmFkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRHcmFkZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOS4reWtpidcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBvcGVuSWQ6ICcnLFxuICAgICAgaGVhZEltZzogJycsXG4gICAgICBzZXg6ICcnXG4gICAgfVxuXG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xuICAgIF9zZXRVc2VySW5mbyAodXNlcikge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ3JhZGU6IHVzZXIuZ3JhZGUsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBvcGVuSWQ6IHVzZXIub3BlbklkLFxuICAgICAgICAgICAgaGVhZEltZzogdXNlci5oZWFkSW1nLFxuICAgICAgICAgICAgc2V4OiB1c2VyLnNleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIF9pbnRvQWRkV29ya2Jvb2sgKGdyYWRlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvKHtcbiAgICAgICAgICBncmFkZTogZ3JhZGUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIG9wZW5JZDogdGhpcy5vcGVuSWQsXG4gICAgICAgICAgaGVhZEltZzogdGhpcy5oZWFkSW1nLFxuICAgICAgICAgIHNleDogdGhpcy5zZXhcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG5hbWUgPSAnJ1xuICAgICAgICBzd2l0Y2ggKGdyYWRlKSB7XG4gICAgICAgICAgLy8gY2FzZSAnMCc6IHsgbmFtZSA9ICfkuIPlubTnuqfkuIrlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnMSc6IHsgbmFtZSA9ICfkuIPlubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgICAgLy8gY2FzZSAnMic6IHsgbmFtZSA9ICflhavlubTnuqfkuIrlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnMyc6IHsgbmFtZSA9ICflhavlubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgICAgLy8gY2FzZSAnNCc6IHsgbmFtZSA9ICfkuZ3lubTnuqfkuIrlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnNSc6IHsgbmFtZSA9ICfkuZ3lubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5bm057qn55qE5pWZ5p2QXG4gICAgICAgIGxldCB0ZXh0Ym9va0lkID0gKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS50ZXh0Ym9vaylbTnVtYmVyKGdyYWRlKV0uaWRcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHsgdXJsOiBgL3BhZ2VzL2luaXQvYWRkP2dyYWRlPSR7Z3JhZGV9Jm5hbWU9JHtuYW1lfSZ0ZXh0Ym9va0lkPSR7dGV4dGJvb2tJZH1gIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgc2VsZi5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgc2VsZi5vcGVuSWQgPSByZXMudXNlckluZm8ub3BlbklkXG4gICAgICAgICAgc2VsZi5oZWFkSW1nID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICAgIHNlbGYuc2V4ID0gcmVzLnVzZXJJbmZvLmdlbmRlclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==