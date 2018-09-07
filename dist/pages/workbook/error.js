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

var WorkbookError = function (_wepy$page) {
  _inherits(WorkbookError, _wepy$page);

  function WorkbookError() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookError);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookError.__proto__ || Object.getPrototypeOf(WorkbookError)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      error: [],
      downloadUrl: '',
      id: ''
    }, _this.methods = {
      /** 查看大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: [url + '-primaryError'] });
      },
      _download: function _download() {
        // 不是会员跳转到VIP购买, 是跳转到下载
        if (Number(_wepy2.default.getStorageSync('gnb_middle_user').vip)) {
          _wepy2.default.navigateTo({
            url: '/pages/my/email?id=' + this.id + '&type=workbook'
          });
        } else {
          _wepy2.default.navigateTo({
            url: '/pages/my/vip'
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookError, [{
    key: '_getChapter',


    /** 获取错题数据 */
    value: function _getChapter(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/workbook/v2/chapter/error',
          data: {
            chapterId: id
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                this.id = options.id;
                _context.next = 4;
                return this._getChapter(this.id);

              case 4:
                this.error = _context.sent;

                this.$apply();

              case 6:
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
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return {
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return WorkbookError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookError , 'pages/workbook/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXJyb3IiLCJkYXRhIiwiZXJyb3IiLCJkb3dubG9hZFVybCIsImlkIiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfZG93bmxvYWQiLCJOdW1iZXIiLCJnZXRTdG9yYWdlU3luYyIsInZpcCIsIm5hdmlnYXRlVG8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJjaGFwdGVySWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsIl9nZXRDaGFwdGVyIiwiJGFwcGx5IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsbUJBQWEsRUFGUjtBQUdMQyxVQUFJO0FBSEMsSyxRQU1QQyxPLEdBQVU7QUFDUjtBQUNBQyxjQUZRLG9CQUVFQyxHQUZGLEVBRU87QUFDYix1QkFBS0MsWUFBTCxDQUFrQixFQUFDQyxTQUFZRixHQUFaLGtCQUFELEVBQWlDRyxNQUFNLENBQUlILEdBQUosbUJBQXZDLEVBQWxCO0FBQ0QsT0FKTztBQUtSSSxlQUxRLHVCQUtLO0FBQ1g7QUFDQSxZQUFJQyxPQUFPLGVBQUtDLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDQyxHQUE5QyxDQUFKLEVBQXdEO0FBQ3RELHlCQUFLQyxVQUFMLENBQWdCO0FBQ2RSLHlDQUEyQixLQUFLSCxFQUFoQztBQURjLFdBQWhCO0FBR0QsU0FKRCxNQUlPO0FBQ0wseUJBQUtXLFVBQUwsQ0FBZ0I7QUFDZFI7QUFEYyxXQUFoQjtBQUdEO0FBQ0Y7QUFoQk8sSzs7Ozs7OztBQW1CVjtnQ0FDYUgsRSxFQUFJO0FBQ2YsYUFBTyxJQUFJWSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWFosZUFBSyxvREFETTtBQUVYTixnQkFBTTtBQUNKbUIsdUJBQVdoQjtBQURQLFdBRks7QUFLWGlCLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWkwsb0JBQVFLLEdBQVI7QUFDRCxXQVBVO0FBUVhDLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUTixtQkFBT00sR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7OzJGQUVZQyxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBQ0MsT0FBT0gsUUFBUUksSUFBaEIsRUFBekI7QUFDQSxxQkFBS3pCLEVBQUwsR0FBVXFCLFFBQVFyQixFQUFsQjs7dUJBQ21CLEtBQUswQixXQUFMLENBQWlCLEtBQUsxQixFQUF0QixDOzs7QUFBbkIscUJBQUtGLEs7O0FBQ0wscUJBQUs2QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2lCVCxHLEVBQUs7QUFDdEIsYUFBTztBQUNMTSxlQUFPLG9CQURGO0FBRUxJLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF6RHdDLGVBQUtDLEk7O2tCQUEzQmxDLGEiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0Vycm9yIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgZXJyb3I6IFtdLFxuICAgICAgZG93bmxvYWRVcmw6ICcnLFxuICAgICAgaWQ6ICcnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8qKiDmn6XnnIvlpKflm74gKi9cbiAgICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0tcHJpbWFyeUVycm9yYCwgdXJsczogW2Ake3VybH0tcHJpbWFyeUVycm9yYF19KVxuICAgICAgfSxcbiAgICAgIF9kb3dubG9hZCAoKSB7XG4gICAgICAgIC8vIOS4jeaYr+S8muWRmOi3s+i9rOWIsFZJUOi0reS5sCwg5piv6Lez6L2s5Yiw5LiL6L29XG4gICAgICAgIGlmIChOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudmlwKSkge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvbXkvZW1haWw/aWQ9JHt0aGlzLmlkfSZ0eXBlPXdvcmtib29rYFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9teS92aXBgXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDojrflj5bplJnpopjmlbDmja4gKi9cbiAgICBfZ2V0Q2hhcHRlciAoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL3dvcmtib29rL3YyL2NoYXB0ZXIvZXJyb3InLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgICB0aGlzLmVycm9yID0gYXdhaXQgdGhpcy5fZ2V0Q2hhcHRlcih0aGlzLmlkKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=