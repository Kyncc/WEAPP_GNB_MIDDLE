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
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "class": "header", "xmlns:v-bind": "", "v-bind:value.sync": "grade", "v-bind:key.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.sync": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
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
      this.textBookList = _wepy2.default.getStorageSync('gnb_middle_User').textbook;
      // 新用户练习册为空的兼容
      if (this.textBookList) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJncmFkZSIsIndvcmtib29rTGlzdCIsIm1ldGhvZHMiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX2dldE15V29ya2Jvb2siLCIkYXBwbHkiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJfaW5pdEFkZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInRleHRib29rSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsInNlbGYiLCJnZXRTdG9yYWdlU3luYyIsIk51bWJlciIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLHFCQUFvQixFQUFDLFNBQVEsUUFBVCxFQUFrQixnQkFBZSxFQUFqQyxFQUFvQyxxQkFBb0IsT0FBeEQsRUFBZ0UsbUJBQWtCLFVBQWxGLEVBQTZGLGNBQWEsRUFBMUcsRUFBNkcsd0JBQXVCLGNBQXBJLEVBQXJCLEUsUUFDVEMsTyxHQUFVLEVBQUMscUJBQW9CLEVBQUMsY0FBYSxnQkFBZCxFQUFyQixFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsSSxHQUFPO0FBQ0xDLG9CQUFjLEVBRFQ7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsb0JBQWM7QUFKVCxLLFFBT1BDLE8sR0FBVTtBQUNSO0FBQ01DLG9CQUZFO0FBQUEsNkZBRWNDLEVBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR29CLEtBQUtDLGNBQUwsQ0FBb0JELEVBQXBCLENBSHBCOztBQUFBO0FBR04sdUJBQUtILFlBSEM7O0FBSU4sdUJBQUtLLE1BQUw7O0FBSk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTVI7QUFDQUMsa0JBUFEsd0JBT01DLElBUE4sRUFPWTtBQUNsQix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxpREFBcUNGLEtBQUtHLElBQTFDLFlBQXFESCxLQUFLSjtBQUQ1QyxTQUFoQjtBQUdELE9BWE87O0FBWVI7QUFDQVEsY0FiUSxzQkFhSTtBQUNWLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLDJDQUErQixLQUFLWDtBQUR0QixTQUFoQjtBQUdEO0FBakJPLEs7Ozs7OztBQW1CVjttQ0FDZ0JLLEUsRUFBSTtBQUNsQixhQUFPLElBQUlTLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYTixlQUFLLG1DQURNO0FBRVhiLGdCQUFNO0FBQ0pvQix3QkFBWWI7QUFEUixXQUZLO0FBS1hjLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWkwsb0JBQVFLLEdBQVI7QUFDRCxXQVBVO0FBUVhDLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUTixtQkFBT00sR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7NkJBRVE7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxXQUFLeEIsWUFBTCxHQUFvQixlQUFLeUIsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUN4QixRQUEzRDtBQUNBO0FBQ0EsVUFBSSxLQUFLRCxZQUFULEVBQXVCO0FBQ3JCLGdCQUFRLGVBQUt5QixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q3ZCLEtBQS9DO0FBQ0UsZUFBSyxHQUFMO0FBQVc7QUFBRXNCLG1CQUFLdEIsS0FBTCxHQUFhLENBQWIsQ0FBZ0I7QUFBTztBQUNwQyxlQUFLLEdBQUw7QUFBVztBQUFFc0IsbUJBQUt0QixLQUFMLEdBQWEsQ0FBYixDQUFnQjtBQUFPO0FBQ3BDLGVBQUssR0FBTDtBQUFXO0FBQUVzQixtQkFBS3RCLEtBQUwsR0FBYSxDQUFiLENBQWdCO0FBQU87QUFIdEM7QUFLQSxhQUFLRixZQUFMLEdBQW9CLGVBQUt5QixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q3hCLFFBQTNEO0FBQ0EsYUFBS0EsUUFBTCxHQUFnQixLQUFLRCxZQUFMLENBQWtCMEIsT0FBTyxLQUFLeEIsS0FBWixDQUFsQixFQUFzQ0ksRUFBdEQ7QUFDQSxhQUFLRSxNQUFMO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozt1QkFHMkIsS0FBS0QsY0FBTCxDQUFvQixLQUFLTixRQUF6QixDOzs7QUFBMUIscUJBQUtFLFk7O0FBQ0wscUJBQUtLLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJhLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJTSxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlSLElBQUlTLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xDLGVBQU8scUJBREY7QUFFTEMsY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQXJGcUMsZUFBS0MsSTs7a0JBQXhCMUMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforrDplJnpopgnXG4gIH1cblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJjbGFzc1wiOlwiaGVhZGVyXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImdyYWRlXCIsXCJ2LWJpbmQ6a2V5LnN5bmNcIjpcInRleHRib29rXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInYtYmluZDp0ZXh0Ym9vay5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxuICAgIHRleHRib29rOiAnJyxcbiAgICBncmFkZTogJycsXG4gICAgd29ya2Jvb2tMaXN0OiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5pWZ5p2Q5YiH5o2iICovXG4gICAgYXN5bmMgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldE15V29ya2Jvb2soaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKiog6L+b5YWl56ug6IqCICovXG4gICAgX2ludG9DaGFwdGVyIChpdGVtKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY2hhcHRlcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uaWR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIC8qKiDlop7liqDkuaDpopjlhowgKi9cbiAgICBfaW5pdEFkZCAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svYWRkP2lkPSR7dGhpcy50ZXh0Ym9va31gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICAvLyDojrflj5bmiJHnmoTkuaDpopjlhoxcbiAgX2dldE15V29ya2Jvb2sgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS93b3JrYm9vaycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tcbiAgICAvLyDmlrDnlKjmiLfnu4PkuaDlhozkuLrnqbrnmoTlhbzlrrlcbiAgICBpZiAodGhpcy50ZXh0Qm9va0xpc3QpIHtcbiAgICAgIHN3aXRjaCAod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZ3JhZGUpIHtcbiAgICAgICAgY2FzZSAnNycgOiB7IHNlbGYuZ3JhZGUgPSAxOyBicmVhayB9XG4gICAgICAgIGNhc2UgJzgnIDogeyBzZWxmLmdyYWRlID0gMzsgYnJlYWsgfVxuICAgICAgICBjYXNlICc5JyA6IHsgc2VsZi5ncmFkZSA9IDU7IGJyZWFrIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB0aGlzLnRleHRCb29rTGlzdFtOdW1iZXIodGhpcy5ncmFkZSldLmlkXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0TXlXb3JrYm9vayh0aGlzLnRleHRib29rKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxuICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==