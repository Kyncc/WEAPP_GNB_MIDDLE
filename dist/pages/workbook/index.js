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
      this.textBookList = _wepy2.default.getStorageSync('User').textbook;
      // 新用户练习册为空的兼容
      if (this.textBookList) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJncmFkZSIsIndvcmtib29rTGlzdCIsIm1ldGhvZHMiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX2dldE15V29ya2Jvb2siLCIkYXBwbHkiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJfaW5pdEFkZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInRleHRib29rSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsInNlbGYiLCJnZXRTdG9yYWdlU3luYyIsIk51bWJlciIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidGl0bGUiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLHFCQUFvQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxtQkFBa0IsVUFBakUsRUFBNEUsY0FBYSxFQUF6RixFQUE0Rix3QkFBdUIsY0FBbkgsRUFBckIsRSxRQUNUQyxPLEdBQVUsRUFBQyxxQkFBb0IsRUFBQyxjQUFhLGdCQUFkLEVBQXJCLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsb0JBQWMsRUFEVDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxvQkFBYztBQUpULEssUUFPUEMsTyxHQUFVO0FBQ1I7QUFDTUMsb0JBRkU7QUFBQSw2RkFFY0MsRUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFHb0IsS0FBS0MsY0FBTCxDQUFvQkQsRUFBcEIsQ0FIcEI7O0FBQUE7QUFHTix1QkFBS0gsWUFIQzs7QUFJTix1QkFBS0ssTUFBTDs7QUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNUjtBQUNBQyxrQkFQUSx3QkFPTUMsSUFQTixFQU9ZO0FBQ2xCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGlEQUFxQ0YsS0FBS0csSUFBMUMsWUFBcURILEtBQUtKO0FBRDVDLFNBQWhCO0FBR0QsT0FYTzs7QUFZUjtBQUNBUSxjQWJRLHNCQWFJO0FBQ1YsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsMkNBQStCLEtBQUtYO0FBRHRCLFNBQWhCO0FBR0Q7QUFqQk8sSzs7Ozs7O0FBbUJWO21DQUNnQkssRSxFQUFJO0FBQ2xCLGFBQU8sSUFBSVMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hOLGVBQUssbUNBRE07QUFFWGIsZ0JBQU07QUFDSm9CLHdCQUFZYjtBQURSLFdBRks7QUFLWGMsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1ROLG1CQUFPTSxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs2QkFFUTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUt4QixZQUFMLEdBQW9CLGVBQUt5QixjQUFMLENBQW9CLE1BQXBCLEVBQTRCeEIsUUFBaEQ7QUFDQTtBQUNBLFVBQUksS0FBS0QsWUFBVCxFQUF1QjtBQUNyQixnQkFBUSxlQUFLeUIsY0FBTCxDQUFvQixNQUFwQixFQUE0QnZCLEtBQXBDO0FBQ0UsZUFBSyxHQUFMO0FBQVc7QUFBRXNCLG1CQUFLdEIsS0FBTCxHQUFhLENBQWIsQ0FBZ0I7QUFBTztBQUNwQyxlQUFLLEdBQUw7QUFBVztBQUFFc0IsbUJBQUt0QixLQUFMLEdBQWEsQ0FBYixDQUFnQjtBQUFPO0FBQ3BDLGVBQUssR0FBTDtBQUFXO0FBQUVzQixtQkFBS3RCLEtBQUwsR0FBYSxDQUFiLENBQWdCO0FBQU87QUFIdEM7QUFLQSxhQUFLRixZQUFMLEdBQW9CLGVBQUt5QixjQUFMLENBQW9CLE1BQXBCLEVBQTRCeEIsUUFBaEQ7QUFDQSxhQUFLQSxRQUFMLEdBQWdCLEtBQUtELFlBQUwsQ0FBa0IwQixPQUFPLEtBQUt4QixLQUFaLENBQWxCLEVBQXNDSSxFQUF0RDtBQUNBLGFBQUtFLE1BQUw7QUFDRDtBQUNGOzs7Ozs7Ozs7O3VCQUcyQixLQUFLRCxjQUFMLENBQW9CLEtBQUtOLFFBQXpCLEM7OztBQUExQixxQkFBS0UsWTs7QUFDTCxxQkFBS0ssTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdpQmEsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlNLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWVIsSUFBSVMsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTEMsZUFBTyxxQkFERjtBQUVMQyxjQUFNO0FBRkQsT0FBUDtBQUlEOzs7O0VBckZxQyxlQUFLQyxJOztrQkFBeEIxQyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGduYlRleHRib29rU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItdGV4dGJvb2tTZWxlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iusOmUmemimCdcbiAgfVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZ3JhZGVcIixcInYtYmluZDprZXkuc3luY1wiOlwidGV4dGJvb2tcIixcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRCb29rTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRleHRCb29rTGlzdDogW10sXG4gICAgdGV4dGJvb2s6ICcnLFxuICAgIGdyYWRlOiAnJyxcbiAgICB3b3JrYm9va0xpc3Q6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDmlZnmnZDliIfmjaIgKi9cbiAgICBhc3luYyB0ZXh0Ym9va0NoYW5nZSAoaWQpIHtcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0TXlXb3JrYm9vayhpZClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKiDov5vlhaXnq6DoioIgKi9cbiAgICBfaW50b0NoYXB0ZXIgKGl0ZW0pIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy93b3JrYm9vay9jaGFwdGVyP25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5pZH1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOWinuWKoOS5oOmimOWGjCAqL1xuICAgIF9pbml0QWRkICgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy93b3JrYm9vay9hZGQ/aWQ9JHt0aGlzLnRleHRib29rfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIC8vIOiOt+WPluaIkeeahOS5oOmimOWGjFxuICBfZ2V0TXlXb3JrYm9vayAoaWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRleHRib29rSWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykudGV4dGJvb2tcbiAgICAvLyDmlrDnlKjmiLfnu4PkuaDlhozkuLrnqbrnmoTlhbzlrrlcbiAgICBpZiAodGhpcy50ZXh0Qm9va0xpc3QpIHtcbiAgICAgIHN3aXRjaCAod2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmdyYWRlKSB7XG4gICAgICAgIGNhc2UgJzcnIDogeyBzZWxmLmdyYWRlID0gMTsgYnJlYWsgfVxuICAgICAgICBjYXNlICc4JyA6IHsgc2VsZi5ncmFkZSA9IDM7IGJyZWFrIH1cbiAgICAgICAgY2FzZSAnOScgOiB7IHNlbGYuZ3JhZGUgPSA1OyBicmVhayB9XG4gICAgICB9XG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS50ZXh0Ym9va1xuICAgICAgdGhpcy50ZXh0Ym9vayA9IHRoaXMudGV4dEJvb2tMaXN0W051bWJlcih0aGlzLmdyYWRlKV0uaWRcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG4gICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRNeVdvcmtib29rKHRoaXMudGV4dGJvb2spXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgIH1cbiAgfVxufVxuIl19