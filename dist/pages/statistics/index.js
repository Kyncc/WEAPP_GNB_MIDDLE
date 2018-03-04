'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_wepy$page) {
  _inherits(Statistics, _wepy$page);

  function Statistics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Statistics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题本'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "grade", "v-bind:key.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.sync": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: [],
      textbook: '',
      grade: '0',
      statistics: []
    }, _this.methods = {
      _intoList: function _intoList(item) {
        if (item.record === 0) {
          return '';
        } else if (item.error === 0) {
          _wepy2.default.navigateTo({
            url: '/pages/statistics/correct?name=' + item.name + '&id=' + item.chapterId
          });
        } else {
          _wepy2.default.navigateTo({
            url: '/pages/statistics/error?name=' + item.name + '&id=' + item.chapterId
          });
        }
      },
      textbookChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._getStatistics(id);

                case 2:
                  this.statistics = _context.sent;

                  this.$apply();

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function textbookChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return textbookChange;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_getStatistics',
    value: function _getStatistics(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/textbook/statistics',
          data: {
            textbookId: id
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
    value: function onLoad() {
      var self = this;
      switch (_wepy2.default.getStorageSync('gnb_middle_User').grade) {
        case '7':
          {
            self.grade = 1;break;
          }
        case '8':
          {
            self.grade = 3;break;
          }
        case '9':
          {
            self.grade = 5;break;
          }
      }
      this.textBookList = _wepy2.default.getStorageSync('gnb_middle_User').textbook;
      this.textbook = this.textBookList[Number(this.grade)].id;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._getStatistics(this.textbook);

              case 2:
                this.statistics = _context2.sent;

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
        path: '/pages/my/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJncmFkZSIsInN0YXRpc3RpY3MiLCJtZXRob2RzIiwiX2ludG9MaXN0IiwiaXRlbSIsInJlY29yZCIsImVycm9yIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJjaGFwdGVySWQiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX2dldFN0YXRpc3RpY3MiLCIkYXBwbHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ0ZXh0Ym9va0lkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJzZWxmIiwiZ2V0U3RvcmFnZVN5bmMiLCJOdW1iZXIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0MsbUJBQWtCLFVBQWpFLEVBQTRFLGNBQWEsRUFBekYsRUFBNEYsd0JBQXVCLGNBQW5ILEVBQXJCLEUsUUFDVEMsTyxHQUFVLEVBQUMscUJBQW9CLEVBQUMsY0FBYSxnQkFBZCxFQUFyQixFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLG9CQUFjLEVBRFQ7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxhQUFPLEdBSEY7QUFJTEMsa0JBQVk7QUFKUCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxJQURILEVBQ1M7QUFDZixZQUFJQSxLQUFLQyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGlCQUFPLEVBQVA7QUFDRCxTQUZELE1BRU8sSUFBSUQsS0FBS0UsS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQzNCLHlCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLHFEQUF1Q0osS0FBS0ssSUFBNUMsWUFBdURMLEtBQUtNO0FBRDlDLFdBQWhCO0FBR0QsU0FKTSxNQUlBO0FBQ0wseUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsbURBQXFDSixLQUFLSyxJQUExQyxZQUFxREwsS0FBS007QUFENUMsV0FBaEI7QUFHRDtBQUNGLE9BYk87QUFjRkMsb0JBZEU7QUFBQSw2RkFjY0MsRUFkZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFla0IsS0FBS0MsY0FBTCxDQUFvQkQsRUFBcEIsQ0FmbEI7O0FBQUE7QUFlTix1QkFBS1gsVUFmQzs7QUFnQk4sdUJBQUthLE1BQUw7O0FBaEJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7bUNBb0JNRixFLEVBQUk7QUFDbEIsYUFBTyxJQUFJRyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWFYsZUFBSyw4Q0FETTtBQUVYWCxnQkFBTTtBQUNKc0Isd0JBQVlQO0FBRFIsV0FGSztBQUtYUSxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQUVMLG9CQUFRSyxHQUFSO0FBQWMsV0FMbkI7QUFNWEMsY0FOVyxnQkFNTEMsR0FOSyxFQU1BO0FBQUVOLG1CQUFPTSxHQUFQO0FBQWE7QUFOZixTQUFiO0FBUUQsT0FUTSxDQUFQO0FBVUQ7Ozs2QkFFUTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLGNBQVEsZUFBS0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUN6QixLQUEvQztBQUNFLGFBQUssR0FBTDtBQUFXO0FBQUV3QixpQkFBS3hCLEtBQUwsR0FBYSxDQUFiLENBQWdCO0FBQU87QUFDcEMsYUFBSyxHQUFMO0FBQVc7QUFBRXdCLGlCQUFLeEIsS0FBTCxHQUFhLENBQWIsQ0FBZ0I7QUFBTztBQUNwQyxhQUFLLEdBQUw7QUFBVztBQUFFd0IsaUJBQUt4QixLQUFMLEdBQWEsQ0FBYixDQUFnQjtBQUFPO0FBSHRDO0FBS0EsV0FBS0YsWUFBTCxHQUFvQixlQUFLMkIsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUMxQixRQUEzRDtBQUNBLFdBQUtBLFFBQUwsR0FBZ0IsS0FBS0QsWUFBTCxDQUFrQjRCLE9BQU8sS0FBSzFCLEtBQVosQ0FBbEIsRUFBc0NZLEVBQXREO0FBQ0EsV0FBS0UsTUFBTDtBQUNEOzs7Ozs7Ozs7O3VCQUd5QixLQUFLRCxjQUFMLENBQW9CLEtBQUtkLFFBQXpCLEM7OztBQUF4QixxQkFBS0UsVTs7QUFDTCxxQkFBS2EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdpQk8sRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlNLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWVIsSUFBSVMsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTEMsZUFBTyxxQkFERjtBQUVMQyxjQUFNO0FBRkQsT0FBUDtBQUlEOzs7O0VBN0VxQyxlQUFLQyxJOztrQkFBeEI1QyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjmnKwnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJncmFkZVwiLFwidi1iaW5kOmtleS5zeW5jXCI6XCJ0ZXh0Ym9va1wiLFwieG1sbnM6di1vblwiOlwiXCIsXCJ2LWJpbmQ6dGV4dGJvb2suc3luY1wiOlwidGV4dEJvb2tMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidGV4dGJvb2tDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxuICAgICAgdGV4dGJvb2s6ICcnLFxuICAgICAgZ3JhZGU6ICcwJyxcbiAgICAgIHN0YXRpc3RpY3M6IFtdXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIF9pbnRvTGlzdCAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5yZWNvcmQgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmVycm9yID09PSAwKSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3Q/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmNoYXB0ZXJJZH1gXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvZXJyb3I/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmNoYXB0ZXJJZH1gXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHRleHRib29rQ2hhbmdlIChpZCkge1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKGlkKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldFN0YXRpc3RpY3MgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7IHJlc29sdmUocmVzKSB9LFxuICAgICAgICAgIGZhaWwgKGVycikgeyByZWplY3QoZXJyKSB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc3dpdGNoICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5ncmFkZSkge1xuICAgICAgICBjYXNlICc3JyA6IHsgc2VsZi5ncmFkZSA9IDE7IGJyZWFrIH1cbiAgICAgICAgY2FzZSAnOCcgOiB7IHNlbGYuZ3JhZGUgPSAzOyBicmVhayB9XG4gICAgICAgIGNhc2UgJzknIDogeyBzZWxmLmdyYWRlID0gNTsgYnJlYWsgfVxuICAgICAgfVxuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS50ZXh0Ym9va1xuICAgICAgdGhpcy50ZXh0Ym9vayA9IHRoaXMudGV4dEJvb2tMaXN0W051bWJlcih0aGlzLmdyYWRlKV0uaWRcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBhc3luYyBvblNob3coKSB7XG4gICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19