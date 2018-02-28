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
      navigationBarTitleText: '记错题'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "grade", "v-bind:key.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.sync": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: [],
      textbook: '',
      grade: '',
      workbookList: []
    }, _this.methods = {
      /** 教材切换 */
      textbookChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._getMyWorkbook(id);

                case 2:
                  this.workbookList = _context.sent;

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
      }(),

      /** 进入章节 */
      _intoChapter: function _intoChapter(item) {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/chapter?name=' + item.name + '&id=' + item.id
        });
      },

      /** 增加习题册 */
      _initAdd: function _initAdd() {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/add?id=' + this.textbook
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_getMyWorkbook',

    // 获取我的习题册
    value: function _getMyWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook',
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
      switch (_wepy2.default.getStorageSync('User').grade) {
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
      this.textBookList = _wepy2.default.getStorageSync('User').textbook;
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
                return this._getMyWorkbook(this.textbook);

              case 2:
                this.workbookList = _context2.sent;

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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/workbook/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJncmFkZSIsIndvcmtib29rTGlzdCIsIm1ldGhvZHMiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX2dldE15V29ya2Jvb2siLCIkYXBwbHkiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJfaW5pdEFkZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInRleHRib29rSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsInNlbGYiLCJnZXRTdG9yYWdlU3luYyIsIk51bWJlciIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLHFCQUFvQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxtQkFBa0IsVUFBakUsRUFBNEUsY0FBYSxFQUF6RixFQUE0Rix3QkFBdUIsY0FBbkgsRUFBckIsRSxRQUNUQyxPLEdBQVUsRUFBQyxxQkFBb0IsRUFBQyxjQUFhLGdCQUFkLEVBQXJCLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsb0JBQWMsRUFEVDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxvQkFBYztBQUpULEssUUFPUEMsTyxHQUFVO0FBQ1I7QUFDTUMsb0JBRkU7QUFBQSw2RkFFY0MsRUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFHb0IsS0FBS0MsY0FBTCxDQUFvQkQsRUFBcEIsQ0FIcEI7O0FBQUE7QUFHTix1QkFBS0gsWUFIQzs7QUFJTix1QkFBS0ssTUFBTDs7QUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNUjtBQUNBQyxrQkFQUSx3QkFPTUMsSUFQTixFQU9ZO0FBQ2xCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGlEQUFxQ0YsS0FBS0csSUFBMUMsWUFBcURILEtBQUtKO0FBRDVDLFNBQWhCO0FBR0QsT0FYTzs7QUFZUjtBQUNBUSxjQWJRLHNCQWFJO0FBQ1YsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsMkNBQStCLEtBQUtYO0FBRHRCLFNBQWhCO0FBR0Q7QUFqQk8sSzs7Ozs7O0FBbUJWO21DQUNnQkssRSxFQUFJO0FBQ2xCLGFBQU8sSUFBSVMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hOLGVBQUssbUNBRE07QUFFWGIsZ0JBQU07QUFDSm9CLHdCQUFZYjtBQURSLFdBRks7QUFLWGMsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1ROLG1CQUFPTSxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs2QkFFUTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLGNBQVEsZUFBS0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QnZCLEtBQXBDO0FBQ0UsYUFBSyxHQUFMO0FBQVc7QUFBRXNCLGlCQUFLdEIsS0FBTCxHQUFhLENBQWIsQ0FBZ0I7QUFBTztBQUNwQyxhQUFLLEdBQUw7QUFBVztBQUFFc0IsaUJBQUt0QixLQUFMLEdBQWEsQ0FBYixDQUFnQjtBQUFPO0FBQ3BDLGFBQUssR0FBTDtBQUFXO0FBQUVzQixpQkFBS3RCLEtBQUwsR0FBYSxDQUFiLENBQWdCO0FBQU87QUFIdEM7QUFLQSxXQUFLRixZQUFMLEdBQW9CLGVBQUt5QixjQUFMLENBQW9CLE1BQXBCLEVBQTRCeEIsUUFBaEQ7QUFDQSxXQUFLQSxRQUFMLEdBQWdCLEtBQUtELFlBQUwsQ0FBa0IwQixPQUFPLEtBQUt4QixLQUFaLENBQWxCLEVBQXNDSSxFQUF0RDtBQUNBLFdBQUtFLE1BQUw7QUFDRDs7Ozs7Ozs7Ozt1QkFHMkIsS0FBS0QsY0FBTCxDQUFvQixLQUFLTixRQUF6QixDOzs7QUFBMUIscUJBQUtFLFk7O0FBQ0wscUJBQUtLLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJhLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJTSxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlSLElBQUlTLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xDLGVBQU8scUJBREY7QUFFTEMsY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQWpGcUMsZUFBS0MsSTs7a0JBQXhCMUMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforrDplJnpopgnXG4gIH1cblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImdyYWRlXCIsXCJ2LWJpbmQ6a2V5LnN5bmNcIjpcInRleHRib29rXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInYtYmluZDp0ZXh0Ym9vay5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxuICAgIHRleHRib29rOiAnJyxcbiAgICBncmFkZTogJycsXG4gICAgd29ya2Jvb2tMaXN0OiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5pWZ5p2Q5YiH5o2iICovXG4gICAgYXN5bmMgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldE15V29ya2Jvb2soaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKiog6L+b5YWl56ug6IqCICovXG4gICAgX2ludG9DaGFwdGVyIChpdGVtKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY2hhcHRlcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uaWR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIC8qKiDlop7liqDkuaDpopjlhowgKi9cbiAgICBfaW5pdEFkZCAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svYWRkP2lkPSR7dGhpcy50ZXh0Ym9va31gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICAvLyDojrflj5bmiJHnmoTkuaDpopjlhoxcbiAgX2dldE15V29ya2Jvb2sgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS93b3JrYm9vaycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHN3aXRjaCAod2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmdyYWRlKSB7XG4gICAgICBjYXNlICc3JyA6IHsgc2VsZi5ncmFkZSA9IDE7IGJyZWFrIH1cbiAgICAgIGNhc2UgJzgnIDogeyBzZWxmLmdyYWRlID0gMzsgYnJlYWsgfVxuICAgICAgY2FzZSAnOScgOiB7IHNlbGYuZ3JhZGUgPSA1OyBicmVhayB9XG4gICAgfVxuICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnRleHRib29rXG4gICAgdGhpcy50ZXh0Ym9vayA9IHRoaXMudGV4dEJvb2tMaXN0W051bWJlcih0aGlzLmdyYWRlKV0uaWRcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG4gICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRNeVdvcmtib29rKHRoaXMudGV4dGJvb2spXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgIH1cbiAgfVxufVxuIl19