'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookAdd = function (_wepy$page) {
  _inherits(WorkbookAdd, _wepy$page);

  function WorkbookAdd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookAdd.__proto__ || Object.getPrototypeOf(WorkbookAdd)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "searchField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_search", "componentId": "searchField" } }, _this.$events = {}, _this.components = {
      searchField: _zanField2.default
    }, _this.data = {
      workbookList: [],
      inputShowed: false,
      inputVal: '',
      textbookId: '',
      base_search: {
        title: '',
        value: '',
        placeholder: '请输入习题册名称'
      }
    }, _this.events = {
      zanFieldChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.base_search.value = e.detail.value;
                  _context.next = 3;
                  return this._getAllWorkbook(this.textbookId, this.base_search.value);

                case 3:
                  this.workbookList = _context.sent;

                  this.$apply();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function zanFieldChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return zanFieldChange;
      }()
    }, _this.methods = {
      /** 查看习题册大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-workbookBig', urls: [url + '-workbookBig'] });
      },

      /** 习题册增加取消 */
      _edit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index, id) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._setWorkbook(id);

                case 2:
                  this.workbookList[index].status = _context2.sent;

                  this.$apply();

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _edit(_x2, _x3) {
          return _ref3.apply(this, arguments);
        }

        return _edit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookAdd, [{
    key: '_setWorkbook',


    /** 编辑习题册 */
    value: function _setWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/edit',
          method: 'POST',
          data: {
            workbookId: id
          },
          success: function success(res) {
            resolve(res.status);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }

    // 添加我的习题册

  }, {
    key: '_getAllWorkbook',
    value: function _getAllWorkbook(id, name) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/all',
          data: {
            name: name,
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
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.textbookId = options.id;
                _context3.next = 3;
                return this._getAllWorkbook(this.textbookId, this.base_search.value);

              case 3:
                this.workbookList = _context3.sent;

                this.$apply();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x4) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      this.base_search.value = '';
      this.$apply();
    }
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

  return WorkbookAdd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookAdd , 'pages/workbook/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlYXJjaEZpZWxkIiwiZGF0YSIsIndvcmtib29rTGlzdCIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJ0ZXh0Ym9va0lkIiwiYmFzZV9zZWFyY2giLCJ0aXRsZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJldmVudHMiLCJ6YW5GaWVsZENoYW5nZSIsImUiLCJkZXRhaWwiLCJfZ2V0QWxsV29ya2Jvb2siLCIkYXBwbHkiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ1cmwiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsIl9lZGl0IiwiaW5kZXgiLCJpZCIsIl9zZXRXb3JrYm9vayIsInN0YXR1cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsIndvcmtib29rSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm5hbWUiLCJvcHRpb25zIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGFBQXpDLEVBQXVELGVBQWMsYUFBckUsRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsSSxHQUFPO0FBQ0xDLG9CQUFjLEVBRFQ7QUFFTEMsbUJBQWEsS0FGUjtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLGtCQUFZLEVBSlA7QUFLTEMsbUJBQWE7QUFDWEMsZUFBTyxFQURJO0FBRVhDLGVBQU8sRUFGSTtBQUdYQyxxQkFBYTtB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IiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rQWRkIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic2VhcmNoRmllbGRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9zZWFyY2hcIixcImNvbXBvbmVudElkXCI6XCJzZWFyY2hGaWVsZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBzZWFyY2hGaWVsZDogemFuRmllbGRcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICB3b3JrYm9va0xpc3Q6IFtdLFxyXG4gICAgaW5wdXRTaG93ZWQ6IGZhbHNlLFxyXG4gICAgaW5wdXRWYWw6ICcnLFxyXG4gICAgdGV4dGJvb2tJZDogJycsXHJcbiAgICBiYXNlX3NlYXJjaDoge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXkuaDpopjlhozlkI3np7AnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7XHJcbiAgICBhc3luYyB6YW5GaWVsZENoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2tJZCwgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8qKiDmn6XnnIvkuaDpopjlhozlpKflm74gKi9cclxuICAgIF9wcmV2aWV3ICh1cmwpIHtcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0td29ya2Jvb2tCaWdgLCB1cmxzOiBbYCR7dXJsfS13b3JrYm9va0JpZ2BdfSlcclxuICAgIH0sXHJcbiAgICAvKiog5Lmg6aKY5YaM5aKe5Yqg5Y+W5raIICovXHJcbiAgICBhc3luYyBfZWRpdCAoaW5kZXgsIGlkKSB7XHJcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0W2luZGV4XS5zdGF0dXMgPSBhd2FpdCB0aGlzLl9zZXRXb3JrYm9vayhpZClcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOe8lui+keS5oOmimOWGjCAqL1xyXG4gIF9zZXRXb3JrYm9vayAoaWQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL2VkaXQnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHdvcmtib29rSWQ6IGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzLnN0YXR1cylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g5re75Yqg5oiR55qE5Lmg6aKY5YaMXHJcbiAgX2dldEFsbFdvcmtib29rIChpZCwgbmFtZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vd29ya2Jvb2svYWxsJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgdGV4dGJvb2tJZDogaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uTG9hZCAob3B0aW9ucykge1xyXG4gICAgdGhpcy50ZXh0Ym9va0lkID0gb3B0aW9ucy5pZFxyXG4gICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rSWQsIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG5cclxuICBvblNob3cgKCkge1xyXG4gICAgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSA9ICcnXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XHJcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=