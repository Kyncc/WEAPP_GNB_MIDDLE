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

var StatisticsCorrect = function (_wepy$page) {
  _inherits(StatisticsCorrect, _wepy$page);

  function StatisticsCorrect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatisticsCorrect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatisticsCorrect.__proto__ || Object.getPrototypeOf(StatisticsCorrect)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      result: [],
      name: ''

      // 获取文案内容
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatisticsCorrect, [{
    key: '_getContent',
    value: function _getContent(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/textbook/statistics/correct',
          data: {
            chapterId: id
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                _context.next = 3;
                return this._getContent(options.id);

              case 3:
                this.result = _context.sent;

                this.name = _wepy2.default.getStorageSync('gnb_middle_User').name;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()

    /** 分享全局 */

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return {
        title: '各位家长：这样记错题，速度快、好处多',
        path: '/pages/statistics/share?content=' + this.result.content + '&date=' + this.result.date + '&name=' + this.name
      };
    }
  }]);

  return StatisticsCorrect;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsCorrect , 'pages/statistics/correct'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlY3QuanMiXSwibmFtZXMiOlsiU3RhdGlzdGljc0NvcnJlY3QiLCJkYXRhIiwicmVzdWx0IiwibmFtZSIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3ZXB5IiwicmVxdWVzdCIsInVybCIsImNoYXB0ZXJJZCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwib3B0aW9ucyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJfZ2V0Q29udGVudCIsImdldFN0b3JhZ2VTeW5jIiwiJGFwcGx5IiwicGF0aCIsImNvbnRlbnQiLCJkYXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLFlBQU07O0FBR1I7QUFMTyxLOzs7OztnQ0FNTUMsRSxFQUFJO0FBQ2YsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUsseURBRE07QUFFWFQsZ0JBQU07QUFDSlUsdUJBQVdQO0FBRFAsV0FGSztBQUtYUSxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1pQLG9CQUFRTyxHQUFSO0FBQ0QsV0FQVTtBQVFYQyxjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVFIsbUJBQU9RLEdBQVA7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJNLENBQVA7QUFjRDs7OzsyRkFFWUMsTzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9ILFFBQVFiLElBQWhCLEVBQXpCOzt1QkFDb0IsS0FBS2lCLFdBQUwsQ0FBaUJKLFFBQVFaLEVBQXpCLEM7OztBQUFwQixxQkFBS0YsTTs7QUFDTCxxQkFBS0MsSUFBTCxHQUFZSyxlQUFLYSxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q2xCLElBQW5EO0FBQ0EscUJBQUttQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdGOzs7O3NDQUNtQlQsRyxFQUFLO0FBQ3RCLGFBQU87QUFDTE0sZUFBTyxvQkFERjtBQUVMSSxtREFBeUMsS0FBS3JCLE1BQUwsQ0FBWXNCLE9BQXJELGNBQXFFLEtBQUt0QixNQUFMLENBQVl1QixJQUFqRixjQUE4RixLQUFLdEI7QUFGOUYsT0FBUDtBQUlEOzs7O0VBckM0Q0ssZUFBS2tCLEk7O2tCQUEvQjFCLGlCIiwiZmlsZSI6ImNvcnJlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzQ29ycmVjdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICByZXN1bHQ6IFtdLFxyXG4gICAgICBuYW1lOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluaWh+ahiOWGheWuuVxyXG4gICAgX2dldENvbnRlbnQgKGlkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi90ZXh0Ym9vay9zdGF0aXN0aWNzL2NvcnJlY3QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjaGFwdGVySWQ6IGlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcclxuICAgICAgdGhpcy5yZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRDb250ZW50KG9wdGlvbnMuaWQpXHJcbiAgICAgIHRoaXMubmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLm5hbWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliIbkuqvlhajlsYAgKi9cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgICAgcGF0aDogYC9wYWdlcy9zdGF0aXN0aWNzL3NoYXJlP2NvbnRlbnQ9JHt0aGlzLnJlc3VsdC5jb250ZW50fSZkYXRlPSR7dGhpcy5yZXN1bHQuZGF0ZX0mbmFtZT0ke3RoaXMubmFtZX1gXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==