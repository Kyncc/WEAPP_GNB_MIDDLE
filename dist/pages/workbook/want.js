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

var WorkbookWant = function (_wepy$page) {
  _inherits(WorkbookWant, _wepy$page);

  function WorkbookWant() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookWant);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookWant.__proto__ || Object.getPrototypeOf(WorkbookWant)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '上传习题册'
    }, _this.data = {
      longText: '请按示例上传习题册封面和版印次，我们将尽快上架该习题册，请注意查看消息通知~',
      first: [],
      last: [],
      imgs: ['http://img.guinaben.com/workbookPic/1108-cover-725711.jpg', 'http://img.guinaben.com/want1.jpg']
    }, _this.methods = {
      /** 查看大图 */
      _preview: function _preview(type) {
        if (type === 'first') {
          _wepy2.default.previewImage({ current: 'http://img.guinaben.com/workbookPic/1108-cover-725711.jpg', urls: this.imgs });
        } else {
          _wepy2.default.previewImage({ current: 'http://img.guinaben.com/want1.jpg', urls: this.imgs });
        }
      },

      // 点击选择按钮
      _chooseImage: function _chooseImage(type) {
        var self = this;
        _wepy2.default.chooseImage({
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          count: 1,
          success: function success(res) {
            if (type === 'first') {
              self._uploadFile(res.tempFilePaths[0]).then(function (res) {
                console.log(res);
                self.first[0] = res;
                self.$apply();
              });
            } else {
              self._uploadFile(res.tempFilePaths[0]).then(function (res) {
                console.log(res);
                self.last[0] = res;
                self.$apply();
              });
            }
          }
        });
      },

      // 上传按钮的事件
      _upload: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.first.length === 0 || this.last.length === 0)) {
                    _context.next = 4;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请上传正确的封面',
                    showCancel: false,
                    confirmText: '确定'
                  });
                  _context.next = 8;
                  break;

                case 4:
                  _context.next = 6;
                  return this._setWant(this.first[0], this.last[0]);

                case 6:
                  _wepy2.default.showToast({
                    title: '上传成功',
                    icon: 'success',
                    duration: 2000
                  });
                  setTimeout(function () {
                    _wepy2.default.navigateBack();
                  }, 2000);

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _upload() {
          return _ref2.apply(this, arguments);
        }

        return _upload;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookWant, [{
    key: '_uploadFile',


    /** 上传习题册封面 */
    value: function _uploadFile(file) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.uploadFile({
          url: 'https://mid.guinaben.com/upload/img',
          filePath: file,
          name: 'file',
          header: {
            'Content-Type': 'multipart/form-data',
            'openId': _wepy2.default.getStorageSync('gnb_middle_openId')
          },
          formData: {
            'type': 'wantworkbook'
          },
          success: function success(res) {
            resolve(JSON.parse(res.data).data.url);
          },
          fail: function fail(err) {
            console.log(err);
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }

    /** 获取章节数据 */

  }, {
    key: '_setWant',
    value: function _setWant(first, last) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/want',
          method: 'POST',
          data: {
            first: first,
            last: last
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
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

  return WorkbookWant;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookWant , 'pages/workbook/want'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb25nVGV4dCIsImZpcnN0IiwibGFzdCIsImltZ3MiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ0eXBlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfY2hvb3NlSW1hZ2UiLCJzZWxmIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJjb3VudCIsInN1Y2Nlc3MiLCJyZXMiLCJfdXBsb2FkRmlsZSIsInRlbXBGaWxlUGF0aHMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIl91cGxvYWQiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJfc2V0V2FudCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZUJhY2siLCJmaWxlIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJnZXRTdG9yYWdlU3luYyIsImZvcm1EYXRhIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLHdDQURMO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsWUFBTSxDQUFDLDJE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QUtDLEk7O2tCQUExQmpFLFkiLCJmaWxlIjoid2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rV2FudCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIrkvKDkuaDpopjlhownXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbG9uZ1RleHQ6ICfor7fmjInnpLrkvovkuIrkvKDkuaDpopjlhozlsIHpnaLlkozniYjljbDmrKHvvIzmiJHku6zlsIblsL3lv6vkuIrmnrbor6XkuaDpopjlhozvvIzor7fms6jmhI/mn6XnnIvmtojmga/pgJrnn6V+JyxcclxuICAgICAgZmlyc3Q6IFtdLFxyXG4gICAgICBsYXN0OiBbXSxcclxuICAgICAgaW1nczogWydodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93b3JrYm9va1BpYy8xMTA4LWNvdmVyLTcyNTcxMS5qcGcnLCAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDEuanBnJ11cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvKiog5p+l55yL5aSn5Zu+ICovXHJcbiAgICAgIF9wcmV2aWV3ICh0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd29ya2Jvb2tQaWMvMTEwOC1jb3Zlci03MjU3MTEuanBnYCwgdXJsczogdGhpcy5pbWdzfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGBodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50MS5qcGdgLCB1cmxzOiB0aGlzLmltZ3N9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g54K55Ye76YCJ5oup5oyJ6ZKuXHJcbiAgICAgIF9jaG9vc2VJbWFnZSAodHlwZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XHJcbiAgICAgICAgICAgICAgc2VsZi5fdXBsb2FkRmlsZShyZXMudGVtcEZpbGVQYXRoc1swXSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmZpcnN0WzBdID0gcmVzXHJcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzZWxmLl91cGxvYWRGaWxlKHJlcy50ZW1wRmlsZVBhdGhzWzBdKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHNlbGYubGFzdFswXSA9IHJlc1xyXG4gICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDkuIrkvKDmjInpkq7nmoTkuovku7ZcclxuICAgICAgYXN5bmMgX3VwbG9hZCAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlyc3QubGVuZ3RoID09PSAwIHx8IHRoaXMubGFzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+35LiK5Lyg5q2j56Gu55qE5bCB6Z2iJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0V2FudCh0aGlzLmZpcnN0WzBdLCB0aGlzLmxhc3RbMF0pXHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5LiK5Lyg5oiQ5YqfJyxcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB3ZXB5Lm5hdmlnYXRlQmFjaygpIH0sIDIwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOS4iuS8oOS5oOmimOWGjOWwgemdoiAqL1xyXG4gICAgX3VwbG9hZEZpbGUgKGZpbGUpIHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3VwbG9hZC9pbWcnLFxyXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGUsXHJcbiAgICAgICAgICBuYW1lOiAnZmlsZScsXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAndHlwZSc6ICd3YW50d29ya2Jvb2snXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YS51cmwpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPlueroOiKguaVsOaNriAqL1xyXG4gICAgX3NldFdhbnQgKGZpcnN0LCBsYXN0KSB7XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS93b3JrYm9vay93YW50JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBmaXJzdDogZmlyc3QsXHJcbiAgICAgICAgICAgIGxhc3Q6IGxhc3RcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29tcGxldGUgKCkge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19