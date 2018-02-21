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
          url: 'https://mid.guinaben.com/textbook/statistics/correct',
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

                this.name = _wepy2.default.getStorageSync('User').name;
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
  }]);

  return StatisticsCorrect;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsCorrect , 'pages/statistics/correct'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlY3QuanMiXSwibmFtZXMiOlsiU3RhdGlzdGljc0NvcnJlY3QiLCJkYXRhIiwicmVzdWx0IiwibmFtZSIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIl9nZXRDb250ZW50IiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7Ozs0TUFDbkJDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsWUFBTTs7QUFHUjtBQUxPLEs7Ozs7O2dDQU1NQyxFLEVBQUk7QUFDZixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLHNEQURNO0FBRVhSLGdCQUFNO0FBQ0pTLHVCQUFXTjtBQURQLFdBRks7QUFLWE8saUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTixvQkFBUU0sR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RQLG1CQUFPTyxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs7MkZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFDQyxPQUFPSCxRQUFRWixJQUFoQixFQUF6Qjs7dUJBQ29CLEtBQUtnQixXQUFMLENBQWlCSixRQUFRWCxFQUF6QixDOzs7QUFBcEIscUJBQUtGLE07O0FBQ0wscUJBQUtDLElBQUwsR0FBWSxlQUFLaUIsY0FBTCxDQUFvQixNQUFwQixFQUE0QmpCLElBQXhDO0FBQ0EscUJBQUtrQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUIyQyxlQUFLQyxJOztrQkFBL0J0QixpQiIsImZpbGUiOiJjb3JyZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljc0NvcnJlY3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICByZXN1bHQ6IFtdLFxuICAgICAgbmFtZTogJydcbiAgICB9XG5cbiAgICAvLyDojrflj5bmlofmoYjlhoXlrrlcbiAgICBfZ2V0Q29udGVudCAoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3RleHRib29rL3N0YXRpc3RpY3MvY29ycmVjdCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2hhcHRlcklkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxuICAgICAgdGhpcy5yZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRDb250ZW50KG9wdGlvbnMuaWQpXG4gICAgICB0aGlzLm5hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykubmFtZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19