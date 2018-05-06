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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookAdd.__proto__ || Object.getPrototypeOf(WorkbookAdd)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '练习册管理'
    }, _this.$repeat = {}, _this.$props = { "searchField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_search", "componentId": "searchField" } }, _this.$events = {}, _this.components = {
      searchField: _zanField2.default
    }, _this.data = {
      workbookList: [],
      inputShowed: false,
      inputVal: '',
      textbookId: '',
      base_search: {
        title: '',
        value: '',
        placeholder: '请输入练习册名称'
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
      /** 查看练习册大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-workbookBig', urls: [url + '-workbookBig'] });
      },

      /** 练习册增加取消 */
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
      }(),

      /** 进入章节 */
      _intoChapter: function _intoChapter(item) {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/chapter?name=' + item.name + '&id=' + item.id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookAdd, [{
    key: '_setWorkbook',


    /** 编辑练习册 */
    value: function _setWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/workbook/edit',
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

    // 添加我的练习册

  }, {
    key: '_getAllWorkbook',
    value: function _getAllWorkbook(id, name) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/workbook/all',
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return WorkbookAdd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookAdd , 'pages/workbook/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2hGaWVsZCIsInphbkZpZWxkIiwiZGF0YSIsIndvcmtib29rTGlzdCIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJ0ZXh0Ym9va0lkIiwiYmFzZV9zZWFyY2giLCJ0aXRsZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJldmVudHMiLCJ6YW5GaWVsZENoYW5nZSIsImUiLCJkZXRhaWwiLCJfZ2V0QWxsV29ya2Jvb2siLCIkYXBwbHkiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ1cmwiLCJ3ZXB5IiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfZWRpdCIsImluZGV4IiwiaWQiLCJfc2V0V29ya2Jvb2siLCJzdGF0dXMiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJ3b3JrYm9va0lkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixhQUF6QyxFQUF1RCxlQUFjLGFBQXJFLEVBQWYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsbUJBQWFDO0FBREgsSyxRQUlaQyxJLEdB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VCxXQUFMLENBQWlCRSxLQUFqQixHQUF5QixFQUF6QjtBQUNBLFdBQUtPLE1BQUw7QUFDRDs7O3NDQUVrQndCLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJSSxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlOLElBQUlPLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0x2QyxlQUFPLG9CQURGO0FBRUx3QyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBNUdzQzdCLGVBQUs4QixJOztrQkFBekJ6RCxXIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0FkZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57uD5Lmg5YaM566h55CGJ1xuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNlYXJjaEZpZWxkXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2Vfc2VhcmNoXCIsXCJjb21wb25lbnRJZFwiOlwic2VhcmNoRmllbGRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHNlYXJjaEZpZWxkOiB6YW5GaWVsZFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3b3JrYm9va0xpc3Q6IFtdLFxuICAgIGlucHV0U2hvd2VkOiBmYWxzZSxcbiAgICBpbnB1dFZhbDogJycsXG4gICAgdGV4dGJvb2tJZDogJycsXG4gICAgYmFzZV9zZWFyY2g6IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl57uD5Lmg5YaM5ZCN56ewJ1xuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICBhc3luYyB6YW5GaWVsZENoYW5nZShlKSB7XG4gICAgICB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9va0lkLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqIOafpeeci+e7g+S5oOWGjOWkp+WbviAqL1xuICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXdvcmtib29rQmlnYCwgdXJsczogW2Ake3VybH0td29ya2Jvb2tCaWdgXX0pXG4gICAgfSxcbiAgICAvKiog57uD5Lmg5YaM5aKe5Yqg5Y+W5raIICovXG4gICAgYXN5bmMgX2VkaXQgKGluZGV4LCBpZCkge1xuICAgICAgdGhpcy53b3JrYm9va0xpc3RbaW5kZXhdLnN0YXR1cyA9IGF3YWl0IHRoaXMuX3NldFdvcmtib29rKGlkKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgLyoqIOi/m+WFpeeroOiKgiAqL1xuICAgIF9pbnRvQ2hhcHRlciAoaXRlbSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2NoYXB0ZXI/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmlkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqIOe8lui+kee7g+S5oOWGjCAqL1xuICBfc2V0V29ya2Jvb2sgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vay9lZGl0JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB3b3JrYm9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5zdGF0dXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIOa3u+WKoOaIkeeahOe7g+S5oOWGjFxuICBfZ2V0QWxsV29ya2Jvb2sgKGlkLCBuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vay9hbGwnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgdGhpcy50ZXh0Ym9va0lkID0gb3B0aW9ucy5pZFxuICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9va0lkLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuXG4gIG9uU2hvdyAoKSB7XG4gICAgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSA9ICcnXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXG4gICAgfVxuICB9XG59XG4iXX0=