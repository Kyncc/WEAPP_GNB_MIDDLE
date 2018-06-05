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
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: this.imgs });
      },
      _download: function _download() {
        // 不是会员跳转到VIP购买, 是跳转到下载
        if (Number(_wepy2.default.getStorageSync('gnb_middle_User').vip)) {
          _wepy2.default.navigateTo({
            url: '/pages/my/email?id=' + this.id + '&type=workbook'
          });
        } else {
          _wepy2.default.navigateTo({
            url: '/pages/my/vip'
          });
        }
      }
    }, _this.computed = {
      /** 图片集 */
      imgs: function imgs() {
        var urls = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.error[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var img = _step.value;

            urls.push(img.errorImg.url + '-primaryError');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return urls;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookError, [{
    key: '_getChapter',


    /** 获取错题数据 */
    value: function _getChapter(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/workbook/chapter/error',
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

  return WorkbookError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookError , 'pages/workbook/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXJyb3IiLCJkYXRhIiwiZXJyb3IiLCJkb3dubG9hZFVybCIsImlkIiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwid2VweSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiaW1ncyIsIl9kb3dubG9hZCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwidmlwIiwibmF2aWdhdGVUbyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJfZ2V0Q2hhcHRlciIsIiRhcHBseSIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsbUJBQWEsRUFGUjtBQUdMQyxVQUFJO0FBSEMsSyxRQU1QQyxPLEdBQVU7QUFDUjtBQUNBQyxjQUZRLG9CQUVFQyxHQUZGLEVBRU87QUFDYkMsdUJBQUtDLFlBQUwsQ0FBa0IsRUFBQ0MsU0FBWUgsR0FBWixrQkFBRCxFQUFpQ0ksTUFBTSxLQUFLQyxJQUE1QyxFQUFsQjtBQUNELE9BSk87QUFLUkMsZUFMUSx1QkFLSztBQUNYO0FBQ0EsWUFBSUMsT0FBT04sZUFBS08sY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNDLEdBQTlDLENBQUosRUFBd0Q7QUFDdERSLHlCQUFLUyxVQUFMLENBQWdCO0FBQ2RWLHlDQUEyQixLQUFLSCxFQUFoQztBQURjLFdBQWhCO0FBR0QsU0FKRCxNQUlPO0FBQ0xJLHlCQUFLUyxVQUFMLENBQWdCO0FBQ2RWO0FBRGMsV0FBaEI7QUFHRDtBQUNGO0FBaEJPLEssUUFtQlZXLFEsR0FBVztBQUNUO0FBQ0FOLFVBRlMsa0JBRUQ7QUFDTixZQUFJRCxPQUFPLEVBQVg7QUFETTtBQUFBO0FBQUE7O0FBQUE7QUFFTiwrQkFBZ0IsS0FBS1QsS0FBckIsOEhBQTRCO0FBQUEsZ0JBQW5CaUIsR0FBbUI7O0FBQzFCUixpQkFBS1MsSUFBTCxDQUFhRCxJQUFJRSxRQUFKLENBQWFkLEdBQTFCO0FBQ0Q7QUFKSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtOLGVBQU9JLElBQVA7QUFDRDtBQVJRLEs7Ozs7Ozs7QUFXWDtnQ0FDYVAsRSxFQUFJO0FBQ2YsYUFBTyxJQUFJa0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2hCLHVCQUFLaUIsT0FBTCxDQUFhO0FBQ1hsQixlQUFLLHNEQURNO0FBRVhOLGdCQUFNO0FBQ0p5Qix1QkFBV3RCO0FBRFAsV0FGSztBQUtYdUIsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1ROLG1CQUFPTSxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs7MkZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFDQyxPQUFPSCxRQUFRSSxJQUFoQixFQUF6QjtBQUNBLHFCQUFLL0IsRUFBTCxHQUFVMkIsUUFBUTNCLEVBQWxCOzt1QkFDbUIsS0FBS2dDLFdBQUwsQ0FBaUIsS0FBS2hDLEVBQXRCLEM7OztBQUFuQixxQkFBS0YsSzs7QUFDTCxxQkFBS21DLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJULEcsRUFBSztBQUN0QixVQUFJQSxJQUFJVSxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlaLElBQUlhLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xQLGVBQU8sb0JBREY7QUFFTFEsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQXZFd0NuQyxlQUFLb0MsSTs7a0JBQTNCNUMsYSIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rRXJyb3IgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgZXJyb3I6IFtdLFxyXG4gICAgICBkb3dubG9hZFVybDogJycsXHJcbiAgICAgIGlkOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8qKiDmn6XnnIvlpKflm74gKi9cclxuICAgICAgX3ByZXZpZXcgKHVybCkge1xyXG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXByaW1hcnlFcnJvcmAsIHVybHM6IHRoaXMuaW1nc30pXHJcbiAgICAgIH0sXHJcbiAgICAgIF9kb3dubG9hZCAoKSB7XHJcbiAgICAgICAgLy8g5LiN5piv5Lya5ZGY6Lez6L2s5YiwVklQ6LSt5LmwLCDmmK/ot7PovazliLDkuIvovb1cclxuICAgICAgICBpZiAoTnVtYmVyKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnZpcCkpIHtcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9teS9lbWFpbD9pZD0ke3RoaXMuaWR9JnR5cGU9d29ya2Jvb2tgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvbXkvdmlwYFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgLyoqIOWbvueJh+mbhiAqL1xyXG4gICAgICBpbWdzICgpIHtcclxuICAgICAgICBsZXQgdXJscyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaW1nIG9mIHRoaXMuZXJyb3IpIHtcclxuICAgICAgICAgIHVybHMucHVzaChgJHtpbWcuZXJyb3JJbWcudXJsfS1wcmltYXJ5RXJyb3JgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsc1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPlumUmemimOaVsOaNriAqL1xyXG4gICAgX2dldENoYXB0ZXIgKGlkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL3dvcmtib29rL2NoYXB0ZXIvZXJyb3InLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjaGFwdGVySWQ6IGlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcclxuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcclxuICAgICAgdGhpcy5lcnJvciA9IGF3YWl0IHRoaXMuX2dldENoYXB0ZXIodGhpcy5pZClcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19