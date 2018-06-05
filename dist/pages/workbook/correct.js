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

var WorkbookCorrect = function (_wepy$page) {
  _inherits(WorkbookCorrect, _wepy$page);

  function WorkbookCorrect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookCorrect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookCorrect.__proto__ || Object.getPrototypeOf(WorkbookCorrect)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      result: [],
      name: ''

      // 获取文案内容
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookCorrect, [{
    key: '_getContent',
    value: function _getContent(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/workbook/chapter/correct',
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
        path: '/pages/workbook/share?content=' + this.result.content + '&date=' + this.result.date + '&name=' + this.name
      };
    }
  }]);

  return WorkbookCorrect;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookCorrect , 'pages/workbook/correct'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlY3QuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDb3JyZWN0IiwiZGF0YSIsInJlc3VsdCIsIm5hbWUiLCJpZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2VweSIsInJlcXVlc3QiLCJ1cmwiLCJjaGFwdGVySWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwiX2dldENvbnRlbnQiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsInBhdGgiLCJjb250ZW50IiwiZGF0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLFlBQU07O0FBR1I7QUFMTyxLOzs7OztnQ0FNTUMsRSxFQUFJO0FBQ2YsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssd0RBRE07QUFFWFQsZ0JBQU07QUFDSlUsdUJBQVdQO0FBRFAsV0FGSztBQUtYUSxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1pQLG9CQUFRTyxHQUFSO0FBQ0QsV0FQVTtBQVFYQyxjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVFIsbUJBQU9RLEdBQVA7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJNLENBQVA7QUFjRDs7OzsyRkFFWUMsTzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9ILFFBQVFiLElBQWhCLEVBQXpCOzt1QkFDb0IsS0FBS2lCLFdBQUwsQ0FBaUJKLFFBQVFaLEVBQXpCLEM7OztBQUFwQixxQkFBS0YsTTs7QUFDTCxxQkFBS0MsSUFBTCxHQUFZSyxlQUFLYSxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q2xCLElBQW5EO0FBQ0EscUJBQUttQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUY7Ozs7c0NBQ21CVCxHLEVBQUs7QUFDdEIsYUFBTztBQUNMTSxlQUFPLG9CQURGO0FBRUxJLGlEQUF1QyxLQUFLckIsTUFBTCxDQUFZc0IsT0FBbkQsY0FBbUUsS0FBS3RCLE1BQUwsQ0FBWXVCLElBQS9FLGNBQTRGLEtBQUt0QjtBQUY1RixPQUFQO0FBSUQ7Ozs7RUFwQzBDSyxlQUFLa0IsSTs7a0JBQTdCMUIsZSIsImZpbGUiOiJjb3JyZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tDb3JyZWN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHJlc3VsdDogW10sXHJcbiAgICAgIG5hbWU6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5paH5qGI5YaF5a65XHJcbiAgICBfZ2V0Q29udGVudCAoaWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svY2hhcHRlci9jb3JyZWN0JyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY2hhcHRlcklkOiBpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IG9wdGlvbnMubmFtZX0pXHJcbiAgICAgIHRoaXMucmVzdWx0ID0gYXdhaXQgdGhpcy5fZ2V0Q29udGVudChvcHRpb25zLmlkKVxyXG4gICAgICB0aGlzLm5hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5uYW1lXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIC8qKiDliIbkuqvlhajlsYAgKi9cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgICAgcGF0aDogYC9wYWdlcy93b3JrYm9vay9zaGFyZT9jb250ZW50PSR7dGhpcy5yZXN1bHQuY29udGVudH0mZGF0ZT0ke3RoaXMucmVzdWx0LmRhdGV9Jm5hbWU9JHt0aGlzLm5hbWV9YFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=