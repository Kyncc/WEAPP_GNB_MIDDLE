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

var WorkbookChapter = function (_wepy$page) {
  _inherits(WorkbookChapter, _wepy$page);

  function WorkbookChapter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookChapter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookChapter.__proto__ || Object.getPrototypeOf(WorkbookChapter)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      chapter: [],
      id: ''
    }, _this.methods = {
      /**
       * 进入章节页
       * 1. isUsed 为false 未记错进入章节记错页面
       * 2. isUsed 为true  isAllCorrect 进入全对页面 否则 进入记错题页面
       */
      _intoExercise: function _intoExercise(item) {
        if (item.isUsed) {
          item.isAllCorrect ? _wepy2.default.navigateTo({ url: '/pages/workbook/correct?id=' + item.id + '&name=' + item.name }) : _wepy2.default.navigateTo({ url: '/pages/workbook/error?id=' + item.id + '&name=' + item.name });
        } else {
          _wepy2.default.navigateTo({ url: '/pages/workbook/exercise?id=' + item.id + '&name=' + item.name });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookChapter, [{
    key: '_getChapter',


    // 获取章节数据
    value: function _getChapter(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/chapter',
          data: {
            workbookId: id
          },
          success: function success(res) {
            resolve(res.a);
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
                this.id = options.id;
                this.$apply();

              case 3:
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
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._getChapter(this.id);

              case 2:
                this.chapter = _context2.sent;

                this.$apply();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        console.log(res.target);
      }
      return {
        title: '各位家长，用这个记错题，速度快，用处大',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookChapter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookChapter , 'pages/workbook/chapter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJpZCIsIm1ldGhvZHMiLCJfaW50b0V4ZXJjaXNlIiwiaXRlbSIsImlzVXNlZCIsImlzQWxsQ29ycmVjdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwid29ya2Jvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJhIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwiJGFwcGx5IiwiX2dldENoYXB0ZXIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLFVBQUk7QUFGQyxLLFFBS1BDLE8sR0FBVTtBQUNSOzs7OztBQUtBQyxtQkFOUSx5QkFNTUMsSUFOTixFQU1ZO0FBQ2xCLFlBQUlBLEtBQUtDLE1BQVQsRUFBaUI7QUFDZkQsZUFBS0UsWUFBTCxHQUNJLGVBQUtDLFVBQUwsQ0FBZ0IsRUFBQ0MscUNBQW1DSixLQUFLSCxFQUF4QyxjQUFtREcsS0FBS0ssSUFBekQsRUFBaEIsQ0FESixHQUVJLGVBQUtGLFVBQUwsQ0FBZ0IsRUFBQ0MsbUNBQWlDSixLQUFLSCxFQUF0QyxjQUFpREcsS0FBS0ssSUFBdkQsRUFBaEIsQ0FGSjtBQUdELFNBSkQsTUFJTztBQUNMLHlCQUFLRixVQUFMLENBQWdCLEVBQUNDLHNDQUFvQ0osS0FBS0gsRUFBekMsY0FBb0RHLEtBQUtLLElBQTFELEVBQWhCO0FBQ0Q7QUFDRjtBQWRPLEs7Ozs7Ozs7QUFpQlY7Z0NBQ2FSLEUsRUFBSTtBQUNmLGFBQU8sSUFBSVMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hMLGVBQUssMkNBRE07QUFFWFQsZ0JBQU07QUFDSmUsd0JBQVliO0FBRFIsV0FGSztBQUtYYyxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1pMLG9CQUFRSyxJQUFJQyxDQUFaO0FBQ0QsV0FQVTtBQVFYQyxjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVFAsbUJBQU9PLEdBQVA7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJNLENBQVA7QUFjRDs7OzsyRkFFWUMsTzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9ILFFBQVFYLElBQWhCLEVBQXpCO0FBQ0EscUJBQUtSLEVBQUwsR0FBVW1CLFFBQVFuQixFQUFsQjtBQUNBLHFCQUFLdUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJcUIsS0FBS0MsV0FBTCxDQUFpQixLQUFLeEIsRUFBdEIsQzs7O0FBQXJCLHFCQUFLRCxPOztBQUNMLHFCQUFLd0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdpQlIsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlVLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWVosSUFBSWEsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTE4sZUFBTyxxQkFERjtBQUVMTyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBN0QwQyxlQUFLQyxJOztrQkFBN0JsQyxlIiwiZmlsZSI6ImNoYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0NoYXB0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBjaGFwdGVyOiBbXSxcbiAgICAgIGlkOiAnJ1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvKipcbiAgICAgICAqIOi/m+WFpeeroOiKgumhtVxuICAgICAgICogMS4gaXNVc2VkIOS4umZhbHNlIOacquiusOmUmei/m+WFpeeroOiKguiusOmUmemhtemdolxuICAgICAgICogMi4gaXNVc2VkIOS4unRydWUgIGlzQWxsQ29ycmVjdCDov5vlhaXlhajlr7npobXpnaIg5ZCm5YiZIOi/m+WFpeiusOmUmemimOmhtemdolxuICAgICAgICovXG4gICAgICBfaW50b0V4ZXJjaXNlKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uaXNVc2VkKSB7XG4gICAgICAgICAgaXRlbS5pc0FsbENvcnJlY3RcbiAgICAgICAgICAgID8gd2VweS5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svY29ycmVjdD9pZD0ke2l0ZW0uaWR9Jm5hbWU9JHtpdGVtLm5hbWV9YH0pXG4gICAgICAgICAgICA6IHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2Vycm9yP2lkPSR7aXRlbS5pZH0mbmFtZT0ke2l0ZW0ubmFtZX1gfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9leGVyY2lzZT9pZD0ke2l0ZW0uaWR9Jm5hbWU9JHtpdGVtLm5hbWV9YH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDojrflj5bnq6DoioLmlbDmja5cbiAgICBfZ2V0Q2hhcHRlciAoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXInLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdvcmtib29rSWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmEpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuY2hhcHRlciA9IGF3YWl0IHRoaXMuX2dldENoYXB0ZXIodGhpcy5pZClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19