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
          url: 'https://mid.guinaben.com/v2/workbook/chapter',
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
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookChapter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookChapter , 'pages/workbook/chapter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJpZCIsIm1ldGhvZHMiLCJfaW50b0V4ZXJjaXNlIiwiaXRlbSIsImlzRmluaXNoIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiaXNVc2VkIiwiaXNBbGxDb3JyZWN0IiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ3b3JrYm9va0lkIiwic3VjY2VzcyIsInJlcyIsImEiLCJmYWlsIiwiZXJyIiwib3B0aW9ucyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiJGFwcGx5IiwiX2dldENoYXB0ZXIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLFVBQUk7QUFGQyxLLFFBS1BDLE8sR0FBVTtBQUNSOzs7OztBQUtBQyxtQkFOUSx5QkFNTUMsSUFOTixFQU1ZO0FBQ2xCLFlBQUksQ0FBQ0EsS0FBS0MsUUFBVixFQUFvQjtBQUNsQix5QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLElBRE07QUFFYkMscUJBQVMsZUFGSTtBQUdiQyx3QkFBWSxLQUhDO0FBSWJDLHlCQUFhO0FBSkEsV0FBZjtBQU1ELFNBUEQsTUFPTyxJQUFJTixLQUFLTyxNQUFULEVBQWlCO0FBQ3RCUCxlQUFLUSxZQUFMLEdBQ0ksZUFBS0MsVUFBTCxDQUFnQixFQUFDQyxxQ0FBbUNWLEtBQUtILEVBQXhDLGNBQW1ERyxLQUFLVyxJQUF6RCxFQUFoQixDQURKLEdBRUksZUFBS0YsVUFBTCxDQUFnQixFQUFDQyxtQ0FBaUNWLEtBQUtILEVBQXRDLGNBQWlERyxLQUFLVyxJQUF2RCxFQUFoQixDQUZKO0FBR0QsU0FKTSxNQUlBO0FBQ0wseUJBQUtGLFVBQUwsQ0FBZ0IsRUFBQ0Msc0NBQW9DVixLQUFLSCxFQUF6QyxjQUFvREcsS0FBS1csSUFBMUQsRUFBaEI7QUFDRDtBQUNGO0FBckJPLEs7Ozs7Ozs7QUF3QlY7Z0NBQ2FkLEUsRUFBSTtBQUNmLGFBQU8sSUFBSWUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hMLGVBQUssOENBRE07QUFFWGYsZ0JBQU07QUFDSnFCLHdCQUFZbkI7QUFEUixXQUZLO0FBS1hvQixpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1pMLG9CQUFRSyxJQUFJQyxDQUFaO0FBQ0QsV0FQVTtBQVFYQyxjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVFAsbUJBQU9PLEdBQVA7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJNLENBQVA7QUFjRDs7OzsyRkFFWUMsTzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNyQixPQUFPbUIsUUFBUVgsSUFBaEIsRUFBekI7QUFDQSxxQkFBS2QsRUFBTCxHQUFVeUIsUUFBUXpCLEVBQWxCO0FBQ0EscUJBQUs0QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlxQixLQUFLQyxXQUFMLENBQWlCLEtBQUs3QixFQUF0QixDOzs7QUFBckIscUJBQUtELE87O0FBQ0wscUJBQUs2QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2lCUCxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSVMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCQyxnQkFBUUMsR0FBUixDQUFZWCxJQUFJWSxNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMM0IsZUFBTyxvQkFERjtBQUVMNEIsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQXBFMEMsZUFBS0MsSTs7a0JBQTdCdkMsZSIsImZpbGUiOiJjaGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tDaGFwdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGNoYXB0ZXI6IFtdLFxyXG4gICAgICBpZDogJydcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvKipcclxuICAgICAgICog6L+b5YWl56ug6IqC6aG1XHJcbiAgICAgICAqIDEuIGlzVXNlZCDkuLpmYWxzZSDmnKrorrDplJnov5vlhaXnq6DoioLorrDplJnpobXpnaJcclxuICAgICAgICogMi4gaXNVc2VkIOS4unRydWUgIGlzQWxsQ29ycmVjdCDov5vlhaXlhajlr7npobXpnaIg5ZCm5YiZIOi/m+WFpeiusOmUmemimOmhtemdolxyXG4gICAgICAgKi9cclxuICAgICAgX2ludG9FeGVyY2lzZShpdGVtKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtLmlzRmluaXNoKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogJ+aCqOW3sui2hei/h+WbveWutuinhOWumuaVmeWtpueahOi/m+W6picsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlzVXNlZCkge1xyXG4gICAgICAgICAgaXRlbS5pc0FsbENvcnJlY3RcclxuICAgICAgICAgICAgPyB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9jb3JyZWN0P2lkPSR7aXRlbS5pZH0mbmFtZT0ke2l0ZW0ubmFtZX1gfSlcclxuICAgICAgICAgICAgOiB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9lcnJvcj9pZD0ke2l0ZW0uaWR9Jm5hbWU9JHtpdGVtLm5hbWV9YH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2V4ZXJjaXNlP2lkPSR7aXRlbS5pZH0mbmFtZT0ke2l0ZW0ubmFtZX1gfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnq6DoioLmlbDmja5cclxuICAgIF9nZXRDaGFwdGVyIChpZCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svY2hhcHRlcicsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHdvcmtib29rSWQ6IGlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmEpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxyXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25TaG93ICgpIHtcclxuICAgICAgdGhpcy5jaGFwdGVyID0gYXdhaXQgdGhpcy5fZ2V0Q2hhcHRlcih0aGlzLmlkKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=