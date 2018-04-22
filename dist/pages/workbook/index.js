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

      /** 增加练习册 */
      _initAdd: function _initAdd() {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/add?id=' + this.textbook
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_getMyWorkbook',

    // 获取我的练习册
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/my/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/workbook/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJncmFkZSIsIndvcmtib29rTGlzdCIsIm1ldGhvZHMiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX2dldE15V29ya2Jvb2siLCIkYXBwbHkiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJfaW5pdEFkZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInRleHRib29rSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsInNlbGYiLCJnZXRTdG9yYWdlU3luYyIsIk51bWJlciIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidGl0bGUiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsU0FBUSxRQUFULEVBQWtCLGdCQUFlLEVBQWpDLEVBQW9DLHFCQUFvQixPQUF4RCxFQUFnRSxtQkFBa0IsVUFBbEYsRUFBNkYsY0FBYSxFQUExRyxFQUE2Ryx3QkFBdUIsY0FBcEksRUFBckIsRSxRQUNUQyxPLEdBQVUsRUFBQyxxQkFBb0IsRUFBQyxjQUFhLGdCQUFkLEVBQXJCLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsb0JBQWMsRUFEVDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxvQkFBYztBQUpULEssUUFPUEMsTyxHQUFVO0FBQ1I7QUFDTUMsb0JBRkU7QUFBQSw2RkFFY0MsRUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFHb0IsS0FBS0MsY0FBTCxDQUFvQkQsRUFBcEIsQ0FIcEI7O0FBQUE7QUFHTix1QkFBS0gsWUFIQzs7QUFJTix1QkFBS0ssTUFBTDs7QUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFNUjtBQUNBQyxrQkFQUSx3QkFPTUMsSUFQTixFQU9ZO0FBQ2xCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGlEQUFxQ0YsS0FBS0csSUFBMUMsWUFBcURILEtBQUtKO0FBRDVDLFNBQWhCO0FBR0QsT0FYTzs7QUFZUjtBQUNBUSxjQWJRLHNCQWFJO0FBQ1YsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsMkNBQStCLEtBQUtYO0FBRHRCLFNBQWhCO0FBR0Q7QUFqQk8sSzs7Ozs7O0FBbUJWO21DQUNnQkssRSxFQUFJO0FBQ2xCLGFBQU8sSUFBSVMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hOLGVBQUssbUNBRE07QUFFWGIsZ0JBQU07QUFDSm9CLHdCQUFZYjtBQURSLFdBRks7QUFLWGMsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1ROLG1CQUFPTSxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs2QkFFUTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUt4QixZQUFMLEdBQW9CLGVBQUt5QixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q3hCLFFBQTNEO0FBQ0E7QUFDQSxVQUFJLEtBQUtELFlBQVQsRUFBdUI7QUFDckIsZ0JBQVEsZUFBS3lCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDdkIsS0FBL0M7QUFDRSxlQUFLLEdBQUw7QUFBVztBQUFFc0IsbUJBQUt0QixLQUFMLEdBQWEsQ0FBYixDQUFnQjtBQUFPO0FBQ3BDLGVBQUssR0FBTDtBQUFXO0FBQUVzQixtQkFBS3RCLEtBQUwsR0FBYSxDQUFiLENBQWdCO0FBQU87QUFDcEMsZUFBSyxHQUFMO0FBQVc7QUFBRXNCLG1CQUFLdEIsS0FBTCxHQUFhLENBQWIsQ0FBZ0I7QUFBTztBQUh0QztBQUtBLGFBQUtGLFlBQUwsR0FBb0IsZUFBS3lCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDeEIsUUFBM0Q7QUFDQSxhQUFLQSxRQUFMLEdBQWdCLEtBQUtELFlBQUwsQ0FBa0IwQixPQUFPLEtBQUt4QixLQUFaLENBQWxCLEVBQXNDSSxFQUF0RDtBQUNBLGFBQUtFLE1BQUw7QUFDRDtBQUNGOzs7Ozs7Ozs7O3VCQUcyQixLQUFLRCxjQUFMLENBQW9CLEtBQUtOLFFBQXpCLEM7OztBQUExQixxQkFBS0UsWTs7QUFDTCxxQkFBS0ssTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdpQmEsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlNLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWVIsSUFBSVMsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTEMsZUFBTyxvQkFERjtBQUVMQyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBdEZxQyxlQUFLQyxJOztrQkFBeEIzQyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iusOmUmemimCdcclxuICB9XHJcblxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcImNsYXNzXCI6XCJoZWFkZXJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZ3JhZGVcIixcInYtYmluZDprZXkuc3luY1wiOlwidGV4dGJvb2tcIixcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRCb29rTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxyXG4gICAgdGV4dGJvb2s6ICcnLFxyXG4gICAgZ3JhZGU6ICcnLFxyXG4gICAgd29ya2Jvb2tMaXN0OiBbXVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8qKiDmlZnmnZDliIfmjaIgKi9cclxuICAgIGFzeW5jIHRleHRib29rQ2hhbmdlIChpZCkge1xyXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldE15V29ya2Jvb2soaWQpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICAvKiog6L+b5YWl56ug6IqCICovXHJcbiAgICBfaW50b0NoYXB0ZXIgKGl0ZW0pIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY2hhcHRlcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uaWR9YFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qKiDlop7liqDnu4PkuaDlhowgKi9cclxuICAgIF9pbml0QWRkICgpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svYWRkP2lkPSR7dGhpcy50ZXh0Ym9va31gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOiOt+WPluaIkeeahOe7g+S5oOWGjFxyXG4gIF9nZXRNeVdvcmtib29rIChpZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vd29ya2Jvb2snLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRleHRib29rSWQ6IGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tcclxuICAgIC8vIOaWsOeUqOaIt+e7g+S5oOWGjOS4uuepuueahOWFvOWuuVxyXG4gICAgaWYgKHRoaXMudGV4dEJvb2tMaXN0KSB7XHJcbiAgICAgIHN3aXRjaCAod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuZ3JhZGUpIHtcclxuICAgICAgICBjYXNlICc3JyA6IHsgc2VsZi5ncmFkZSA9IDE7IGJyZWFrIH1cclxuICAgICAgICBjYXNlICc4JyA6IHsgc2VsZi5ncmFkZSA9IDM7IGJyZWFrIH1cclxuICAgICAgICBjYXNlICc5JyA6IHsgc2VsZi5ncmFkZSA9IDU7IGJyZWFrIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnRleHRib29rXHJcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB0aGlzLnRleHRCb29rTGlzdFtOdW1iZXIodGhpcy5ncmFkZSldLmlkXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uU2hvdygpIHtcclxuICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0TXlXb3JrYm9vayh0aGlzLnRleHRib29rKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19