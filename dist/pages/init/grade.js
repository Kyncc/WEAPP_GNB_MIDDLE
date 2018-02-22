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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type, grade) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLmpzIl0sIm5hbWVzIjpbIkluaXRHcmFkZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsIm9wZW5JZCIsImhlYWRJbWciLCJzZXgiLCJtZXRob2RzIiwiX2ludG9BZGRXb3JrYm9vayIsInR5cGUiLCJncmFkZSIsIl9zZXRVc2VySW5mbyIsInRleHRib29rSWQiLCJnZXRTdG9yYWdlU3luYyIsInRleHRib29rIiwiTnVtYmVyIiwiaWQiLCJyZWRpcmVjdFRvIiwidXJsIiwidXNlciIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZ2VuZGVyIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxlQUFTLEVBSEo7QUFJTEMsV0FBSzs7QUFHUDtBQVBPLEssUUFrQ1BDLE8sR0FBVTtBQUNGQyxzQkFERTtBQUFBLDZGQUNnQkMsSUFEaEIsRUFDc0JDLEtBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUEsS0FBS0MsWUFBTCxDQUFrQjtBQUN0QkQsMkJBQU9BLEtBRGU7QUFFdEJQLDBCQUFNLEtBQUtBLElBRlc7QUFHdEJDLDRCQUFRLEtBQUtBLE1BSFM7QUFJdEJDLDZCQUFTLEtBQUtBLE9BSlE7QUFLdEJDLHlCQUFLLEtBQUtBO0FBTFksbUJBQWxCLENBRkE7O0FBQUE7QUFTRkgsc0JBVEUsR0FTSyxFQVRMO0FBQUEsZ0NBVUVNLElBVkY7QUFBQSxrREFZQyxHQVpELHVCQWNDLEdBZEQsdUJBZ0JDLEdBaEJEO0FBQUE7O0FBQUE7QUFZUU4seUJBQU8sT0FBUCxDQVpSOztBQUFBO0FBY1FBLHlCQUFPLE9BQVAsQ0FkUjs7QUFBQTtBQWdCUUEseUJBQU8sT0FBUCxDQWhCUjs7QUFBQTtBQWtCTjtBQUNJUyw0QkFuQkUsR0FtQlksZUFBS0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QkMsUUFBN0IsQ0FBdUNDLE9BQU9OLElBQVAsQ0FBdkMsRUFBcURPLEVBbkJoRTs7QUFvQk4saUNBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsZ0NBQThCUixLQUE5QixjQUE0Q1AsSUFBNUMsb0JBQStEUyxVQUFqRSxFQUFoQjs7QUFwQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7OztpQ0ExQklPLEksRUFBTTtBQUNsQixxQkFBS0MsV0FBTCxDQUFpQixFQUFDQyxPQUFPLEtBQVIsRUFBakI7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYUCxlQUFLLDBDQURNO0FBRVhRLGtCQUFRLE1BRkc7QUFHWHhCLGdCQUFNO0FBQ0pRLG1CQUFPUyxLQUFLVCxLQURSO0FBRUpQLGtCQUFNZ0IsS0FBS2hCLElBRlA7QUFHSkMsb0JBQVFlLEtBQUtmLE1BSFQ7QUFJSkMscUJBQVNjLEtBQUtkLE9BSlY7QUFLSkMsaUJBQUthLEtBQUtiO0FBTE4sV0FISztBQVVYcUIsaUJBVlcsbUJBVUZDLEdBVkUsRUFVRztBQUNaLDJCQUFLQyxXQUFMO0FBQ0EsMkJBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJGLEdBQTVCO0FBQ0FMLG9CQUFRSyxHQUFSO0FBQ0QsV0FkVTtBQWVYRyxjQWZXLGdCQWVMQyxHQWZLLEVBZUE7QUFDVCwyQkFBS0gsV0FBTDtBQUNBTCxtQkFBT1EsR0FBUDtBQUNEO0FBbEJVLFNBQWI7QUFvQkQsT0FyQk0sQ0FBUDtBQXNCRDs7OzZCQTBCUTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZQLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaSyxlQUFLOUIsSUFBTCxHQUFZeUIsSUFBSU8sUUFBSixDQUFhQyxRQUF6QjtBQUNBSCxlQUFLN0IsTUFBTCxHQUFjd0IsSUFBSU8sUUFBSixDQUFhL0IsTUFBM0I7QUFDQTZCLGVBQUs1QixPQUFMLEdBQWV1QixJQUFJTyxRQUFKLENBQWFFLFNBQTVCO0FBQ0FKLGVBQUszQixHQUFMLEdBQVdzQixJQUFJTyxRQUFKLENBQWFHLE1BQXhCO0FBQ0FMLGVBQUtNLE1BQUw7QUFDRDtBQVBjLE9BQWpCO0FBU0Q7Ozs7RUExRW9DLGVBQUtDLEk7O2tCQUF2QnpDLFMiLCJmaWxlIjoiZ3JhZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0R3JhZGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Lit5a2mJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBvcGVuSWQ6ICcnLFxyXG4gICAgICBoZWFkSW1nOiAnJyxcclxuICAgICAgc2V4OiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDorr7nva7nlKjmiLfkv6Hmga8gKi9cclxuICAgIF9zZXRVc2VySW5mbyAodXNlcikge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vbWVtYmVyL2luZm9FZGl0JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBncmFkZTogdXNlci5ncmFkZSxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICBvcGVuSWQ6IHVzZXIub3BlbklkLFxyXG4gICAgICAgICAgICBoZWFkSW1nOiB1c2VyLmhlYWRJbWcsXHJcbiAgICAgICAgICAgIHNleDogdXNlci5zZXhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXInLCByZXMpXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFzeW5jIF9pbnRvQWRkV29ya2Jvb2sgKHR5cGUsIGdyYWRlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgZ3JhZGU6IGdyYWRlLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgb3BlbklkOiB0aGlzLm9wZW5JZCxcclxuICAgICAgICAgIGhlYWRJbWc6IHRoaXMuaGVhZEltZyxcclxuICAgICAgICAgIHNleDogdGhpcy5zZXhcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBuYW1lID0gJydcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgIC8vIGNhc2UgJzAnOiB7IG5hbWUgPSAn5LiD5bm057qn5LiK5YaMJzsgYnJlYWsgfVxyXG4gICAgICAgICAgY2FzZSAnMSc6IHsgbmFtZSA9ICfkuIPlubTnuqfkuIvlhownOyBicmVhayB9XHJcbiAgICAgICAgICAvLyBjYXNlICcyJzogeyBuYW1lID0gJ+WFq+W5tOe6p+S4iuWGjCc7IGJyZWFrIH1cclxuICAgICAgICAgIGNhc2UgJzMnOiB7IG5hbWUgPSAn5YWr5bm057qn5LiL5YaMJzsgYnJlYWsgfVxyXG4gICAgICAgICAgLy8gY2FzZSAnNCc6IHsgbmFtZSA9ICfkuZ3lubTnuqfkuIrlhownOyBicmVhayB9XHJcbiAgICAgICAgICBjYXNlICc1JzogeyBuYW1lID0gJ+S5neW5tOe6p+S4i+WGjCc7IGJyZWFrIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5bm057qn55qE5pWZ5p2QXHJcbiAgICAgICAgbGV0IHRleHRib29rSWQgPSAod2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnRleHRib29rKVtOdW1iZXIodHlwZSldLmlkXHJcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHsgdXJsOiBgL3BhZ2VzL2luaXQvYWRkP2dyYWRlPSR7Z3JhZGV9Jm5hbWU9JHtuYW1lfSZ0ZXh0Ym9va0lkPSR7dGV4dGJvb2tJZH1gIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHNlbGYubmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxyXG4gICAgICAgICAgc2VsZi5vcGVuSWQgPSByZXMudXNlckluZm8ub3BlbklkXHJcbiAgICAgICAgICBzZWxmLmhlYWRJbWcgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgICBzZWxmLnNleCA9IHJlcy51c2VySW5mby5nZW5kZXJcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=