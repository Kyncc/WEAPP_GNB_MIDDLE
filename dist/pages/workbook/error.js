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
          url: 'https://mid.guinaben.com/v2/workbook/chapter/error',
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
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookError , 'pages/workbook/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXJyb3IiLCJkYXRhIiwiZXJyb3IiLCJkb3dubG9hZFVybCIsImlkIiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJpbWdzIiwiX2Rvd25sb2FkIiwiTnVtYmVyIiwiZ2V0U3RvcmFnZVN5bmMiLCJ2aXAiLCJuYXZpZ2F0ZVRvIiwiY29tcHV0ZWQiLCJpbWciLCJwdXNoIiwiZXJyb3JJbWciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJjaGFwdGVySWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsIl9nZXRDaGFwdGVyIiwiJGFwcGx5IiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxtQkFBYSxFQUZSO0FBR0xDLFVBQUk7QUFIQyxLLFFBTVBDLE8sR0FBVTtBQUNSO0FBQ0FDLGNBRlEsb0JBRUVDLEdBRkYsRUFFTztBQUNiLHVCQUFLQyxZQUFMLENBQWtCLEVBQUNDLFNBQVlGLEdBQVosa0JBQUQsRUFBaUNHLE1BQU0sS0FBS0MsSUFBNUMsRUFBbEI7QUFDRCxPQUpPO0FBS1JDLGVBTFEsdUJBS0s7QUFDWDtBQUNBLFlBQUlDLE9BQU8sZUFBS0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNDLEdBQTlDLENBQUosRUFBd0Q7QUFDdEQseUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZFQseUNBQTJCLEtBQUtILEVBQWhDO0FBRGMsV0FBaEI7QUFHRCxTQUpELE1BSU87QUFDTCx5QkFBS1ksVUFBTCxDQUFnQjtBQUNkVDtBQURjLFdBQWhCO0FBR0Q7QUFDRjtBQWhCTyxLLFFBbUJWVSxRLEdBQVc7QUFDVDtBQUNBTixVQUZTLGtCQUVEO0FBQ04sWUFBSUQsT0FBTyxFQUFYO0FBRE07QUFBQTtBQUFBOztBQUFBO0FBRU4sK0JBQWdCLEtBQUtSLEtBQXJCLDhIQUE0QjtBQUFBLGdCQUFuQmdCLEdBQW1COztBQUMxQlIsaUJBQUtTLElBQUwsQ0FBYUQsSUFBSUUsUUFBSixDQUFhYixHQUExQjtBQUNEO0FBSks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLTixlQUFPRyxJQUFQO0FBQ0Q7QUFSUSxLOzs7Ozs7O0FBV1g7Z0NBQ2FOLEUsRUFBSTtBQUNmLGFBQU8sSUFBSWlCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYakIsZUFBSyxvREFETTtBQUVYTixnQkFBTTtBQUNKd0IsdUJBQVdyQjtBQURQLFdBRks7QUFLWHNCLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWkwsb0JBQVFLLEdBQVI7QUFDRCxXQVBVO0FBUVhDLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUTixtQkFBT00sR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7OzJGQUVZQyxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBQ0MsT0FBT0gsUUFBUUksSUFBaEIsRUFBekI7QUFDQSxxQkFBSzlCLEVBQUwsR0FBVTBCLFFBQVExQixFQUFsQjs7dUJBQ21CLEtBQUsrQixXQUFMLENBQWlCLEtBQUsvQixFQUF0QixDOzs7QUFBbkIscUJBQUtGLEs7O0FBQ0wscUJBQUtrQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2lCVCxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSVUsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCQyxnQkFBUUMsR0FBUixDQUFZWixJQUFJYSxNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMUCxlQUFPLG9CQURGO0FBRUxRLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF2RXdDLGVBQUtDLEk7O2tCQUEzQjNDLGEiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0Vycm9yIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGVycm9yOiBbXSxcclxuICAgICAgZG93bmxvYWRVcmw6ICcnLFxyXG4gICAgICBpZDogJydcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvKiog5p+l55yL5aSn5Zu+ICovXHJcbiAgICAgIF9wcmV2aWV3ICh1cmwpIHtcclxuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYCR7dXJsfS1wcmltYXJ5RXJyb3JgLCB1cmxzOiB0aGlzLmltZ3N9KVxyXG4gICAgICB9LFxyXG4gICAgICBfZG93bmxvYWQgKCkge1xyXG4gICAgICAgIC8vIOS4jeaYr+S8muWRmOi3s+i9rOWIsFZJUOi0reS5sCwg5piv6Lez6L2s5Yiw5LiL6L29XHJcbiAgICAgICAgaWYgKE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS52aXApKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvbXkvZW1haWw/aWQ9JHt0aGlzLmlkfSZ0eXBlPXdvcmtib29rYFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL215L3ZpcGBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIC8qKiDlm77niYfpm4YgKi9cclxuICAgICAgaW1ncyAoKSB7XHJcbiAgICAgICAgbGV0IHVybHMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGltZyBvZiB0aGlzLmVycm9yKSB7XHJcbiAgICAgICAgICB1cmxzLnB1c2goYCR7aW1nLmVycm9ySW1nLnVybH0tcHJpbWFyeUVycm9yYClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybHNcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5bplJnpopjmlbDmja4gKi9cclxuICAgIF9nZXRDaGFwdGVyIChpZCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svY2hhcHRlci9lcnJvcicsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNoYXB0ZXJJZDogaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxyXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxyXG4gICAgICB0aGlzLmVycm9yID0gYXdhaXQgdGhpcy5fZ2V0Q2hhcHRlcih0aGlzLmlkKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=