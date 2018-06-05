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
        if (!item.isFinish) {
          _wepy2.default.showModal({
            title: '提示',
            content: '您已超过国家规定教学的进度',
            showCancel: false,
            confirmText: '确定'
          });
        } else if (item.isUsed) {
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
          url: 'https://small.guinaben.com/v2/workbook/chapter',
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return WorkbookChapter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookChapter , 'pages/workbook/chapter'));

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJpZCIsIm1ldGhvZHMiLCJfaW50b0V4ZXJjaXNlIiwiaXRlbSIsImlzRmluaXNoIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiaXNVc2VkIiwiaXNBbGxDb3JyZWN0IiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ3b3JrYm9va0lkIiwic3VjY2VzcyIsInJlcyIsImEiLCJmYWlsIiwiZXJyIiwib3B0aW9ucyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiJGFwcGx5IiwiX2dldENoYXB0ZXIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLFVBQUk7QUFGQyxLLFFBS1BDLE8sR0FBVTtBQUNSOzs7OztBQUtBQyxtQkFOUSx5QkFNTUMsSUFOTixFQU1ZO0FBQ2xCLFlBQUksQ0FBQ0EsS0FBS0MsUUFBVixFQUFvQjtBQUNsQix5QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLElBRE07QUFFYkMscUJBQVMsZUFGSTtBQUdiQyx3QkFBWSxLQUhDO0FBSWJDLHlCQUFhO0FBSkEsV0FBZjtBQU1ELFNBUEQsTUFPTyxJQUFJTixLQUFLTyxNQUFULEVBQWlCO0FBQ3RCUCxlQUFLUSxZQUFMLEdBQ0ksZUFBS0MsVUFBTCxDQUFnQixFQUFDQyxxQ0FBbUNWLEtBQUtILEVBQXhDLGNBQW1ERyxLQUFLVyxJQUF6RCxFQUFoQixDQURKLEdBRUksZUFBS0YsVUFBTCxDQUFnQixFQUFDQyxtQ0FBaUNWLEtBQUtILEVBQXRDLGNBQWlERyxLQUFLVyxJQUF2RCxFQUFoQixDQUZKO0FBR0QsU0FKTSxNQUlBO0FBQ0wseUJBQUtGLFVBQUwsQ0FBZ0IsRUFBQ0Msc0NBQW9DVixLQUFLSCxFQUF6QyxjQUFvREcsS0FBS1csSUFBMUQsRUFBaEI7QUFDRDtBQUNGO0FBckJPLEs7Ozs7Ozs7QUF3QlY7Z0NBQ2FkLEUsRUFBSTtBQUNmLGFBQU8sSUFBSWUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hMLGVBQUssOENBRE07QUFFWGYsZ0JBQU07QUFDSnFCLHdCQUFZbkI7QUFEUixXQUZLO0FBS1hvQixpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1pMLG9CQUFRSyxJQUFJQyxDQUFaO0FBQ0QsV0FQVTtBQVFYQyxjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVFAsbUJBQU9PLEdBQVA7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJNLENBQVA7QUFjRDs7OzsyRkFFWUMsTzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNyQixPQUFPbUIsUUFBUVgsSUFBaEIsRUFBekI7QUFDQSxxQkFBS2QsRUFBTCxHQUFVeUIsUUFBUXpCLEVBQWxCO0FBQ0EscUJBQUs0QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlxQixLQUFLQyxXQUFMLENBQWlCLEtBQUs3QixFQUF0QixDOzs7QUFBckIscUJBQUtELE87O0FBQ0wscUJBQUs2QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2lCUCxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSVMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCQyxnQkFBUUMsR0FBUixDQUFZWCxJQUFJWSxNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMM0IsZUFBTyxvQkFERjtBQUVMNEIsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQXBFMEMsZUFBS0MsSTs7a0JBQTdCdkMsZSIsImZpbGUiOiJjaGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tDaGFwdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgY2hhcHRlcjogW10sXG4gICAgICBpZDogJydcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqXG4gICAgICAgKiDov5vlhaXnq6DoioLpobVcbiAgICAgICAqIDEuIGlzVXNlZCDkuLpmYWxzZSDmnKrorrDplJnov5vlhaXnq6DoioLorrDplJnpobXpnaJcbiAgICAgICAqIDIuIGlzVXNlZCDkuLp0cnVlICBpc0FsbENvcnJlY3Qg6L+b5YWl5YWo5a+56aG16Z2iIOWQpuWImSDov5vlhaXorrDplJnpopjpobXpnaJcbiAgICAgICAqL1xuICAgICAgX2ludG9FeGVyY2lzZShpdGVtKSB7XG4gICAgICAgIGlmICghaXRlbS5pc0ZpbmlzaCkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmgqjlt7LotoXov4flm73lrrbop4TlrprmlZnlrabnmoTov5vluqYnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaXNVc2VkKSB7XG4gICAgICAgICAgaXRlbS5pc0FsbENvcnJlY3RcbiAgICAgICAgICAgID8gd2VweS5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svY29ycmVjdD9pZD0ke2l0ZW0uaWR9Jm5hbWU9JHtpdGVtLm5hbWV9YH0pXG4gICAgICAgICAgICA6IHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2Vycm9yP2lkPSR7aXRlbS5pZH0mbmFtZT0ke2l0ZW0ubmFtZX1gfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9leGVyY2lzZT9pZD0ke2l0ZW0uaWR9Jm5hbWU9JHtpdGVtLm5hbWV9YH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDojrflj5bnq6DoioLmlbDmja5cbiAgICBfZ2V0Q2hhcHRlciAoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL3dvcmtib29rL2NoYXB0ZXInLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdvcmtib29rSWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmEpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuY2hhcHRlciA9IGF3YWl0IHRoaXMuX2dldENoYXB0ZXIodGhpcy5pZClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJpZCIsIm1ldGhvZHMiLCJfaW50b0V4ZXJjaXNlIiwiaXRlbSIsImlzRmluaXNoIiwid2VweSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImlzVXNlZCIsImlzQWxsQ29ycmVjdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwid29ya2Jvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJhIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIiRhcHBseSIsIl9nZXRDaGFwdGVyIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxVQUFJO0FBRkMsSyxRQUtQQyxPLEdBQVU7QUFDUjs7Ozs7QUFLQUMsbUJBTlEseUJBTU1DLElBTk4sRUFNWTtBQUNsQixZQUFJLENBQUNBLEtBQUtDLFFBQVYsRUFBb0I7QUFDbEJDLHlCQUFLQyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sSUFETTtBQUViQyxxQkFBUyxlQUZJO0FBR2JDLHdCQUFZLEtBSEM7QUFJYkMseUJBQWE7QUFKQSxXQUFmO0FBTUQsU0FQRCxNQU9PLElBQUlQLEtBQUtRLE1BQVQsRUFBaUI7QUFDdEJSLGVBQUtTLFlBQUwsR0FDSVAsZUFBS1EsVUFBTCxDQUFnQixFQUFDQyxxQ0FBbUNYLEtBQUtILEVBQXhDLGNBQW1ERyxLQUFLWSxJQUF6RCxFQUFoQixDQURKLEdBRUlWLGVBQUtRLFVBQUwsQ0FBZ0IsRUFBQ0MsbUNBQWlDWCxLQUFLSCxFQUF0QyxjQUFpREcsS0FBS1ksSUFBdkQsRUFBaEIsQ0FGSjtBQUdELFNBSk0sTUFJQTtBQUNMVix5QkFBS1EsVUFBTCxDQUFnQixFQUFDQyxzQ0FBb0NYLEtBQUtILEVBQXpDLGNBQW9ERyxLQUFLWSxJQUExRCxFQUFoQjtBQUNEO0FBQ0Y7QUFyQk8sSzs7Ozs7OztBQXdCVjtnQ0FDYWYsRSxFQUFJO0FBQ2YsYUFBTyxJQUFJZ0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2IsdUJBQUtjLE9BQUwsQ0FBYTtBQUNYTCxlQUFLLGdEQURNO0FBRVhoQixnQkFBTTtBQUNKc0Isd0JBQVlwQjtBQURSLFdBRks7QUFLWHFCLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWkwsb0JBQVFLLElBQUlDLENBQVo7QUFDRCxXQVBVO0FBUVhDLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUUCxtQkFBT08sR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7OzJGQUVZQyxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBQ3JCLE9BQU9tQixRQUFRWCxJQUFoQixFQUF6QjtBQUNBLHFCQUFLZixFQUFMLEdBQVUwQixRQUFRMUIsRUFBbEI7QUFDQSxxQkFBSzZCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSXFCLEtBQUtDLFdBQUwsQ0FBaUIsS0FBSzlCLEVBQXRCLEM7OztBQUFyQixxQkFBS0QsTzs7QUFDTCxxQkFBSzhCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJQLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJUyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlYLElBQUlZLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0wzQixlQUFPLG9CQURGO0FBRUw0QixrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBcEUwQy9CLGVBQUtnQyxJOztrQkFBN0J4QyxlIiwiZmlsZSI6ImNoYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0NoYXB0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY2hhcHRlcjogW10sXHJcbiAgICAgIGlkOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDov5vlhaXnq6DoioLpobVcclxuICAgICAgICogMS4gaXNVc2VkIOS4umZhbHNlIOacquiusOmUmei/m+WFpeeroOiKguiusOmUmemhtemdolxyXG4gICAgICAgKiAyLiBpc1VzZWQg5Li6dHJ1ZSAgaXNBbGxDb3JyZWN0IOi/m+WFpeWFqOWvuemhtemdoiDlkKbliJkg6L+b5YWl6K6w6ZSZ6aKY6aG16Z2iXHJcbiAgICAgICAqL1xyXG4gICAgICBfaW50b0V4ZXJjaXNlKGl0ZW0pIHtcclxuICAgICAgICBpZiAoIWl0ZW0uaXNGaW5pc2gpIHtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn5oKo5bey6LaF6L+H5Zu95a626KeE5a6a5pWZ5a2m55qE6L+b5bqmJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaXNVc2VkKSB7XHJcbiAgICAgICAgICBpdGVtLmlzQWxsQ29ycmVjdFxyXG4gICAgICAgICAgICA/IHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2NvcnJlY3Q/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxyXG4gICAgICAgICAgICA6IHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2Vycm9yP2lkPSR7aXRlbS5pZH0mbmFtZT0ke2l0ZW0ubmFtZX1gfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXhlcmNpc2U/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueroOiKguaVsOaNrlxyXG4gICAgX2dldENoYXB0ZXIgKGlkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL3dvcmtib29rL2NoYXB0ZXInLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB3b3JrYm9va0lkOiBpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5hKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcclxuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uU2hvdyAoKSB7XHJcbiAgICAgIHRoaXMuY2hhcHRlciA9IGF3YWl0IHRoaXMuX2dldENoYXB0ZXIodGhpcy5pZClcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19
>>>>>>> dev
