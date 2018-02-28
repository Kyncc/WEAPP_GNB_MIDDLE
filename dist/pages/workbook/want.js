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
            'openId': _wepy2.default.getStorageSync('openId')
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
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookWant;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookWant , 'pages/workbook/want'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb25nVGV4dCIsImZpcnN0IiwibGFzdCIsImltZ3MiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ0eXBlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfY2hvb3NlSW1hZ2UiLCJzZWxmIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJjb3VudCIsInN1Y2Nlc3MiLCJyZXMiLCJfdXBsb2FkRmlsZSIsInRlbXBGaWxlUGF0aHMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIl91cGxvYWQiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJfc2V0V2FudCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZUJhY2siLCJmaWxlIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJnZXRTdG9yYWdlU3luYyIsImZvcm1EYXRhIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVSx3Q0FETDtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLFlBQU0sQ0FBQywyREFBRCxFQUE4RCxt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dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rV2FudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4iuS8oOS5oOmimOWGjCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbG9uZ1RleHQ6ICfor7fmjInnpLrkvovkuIrkvKDkuaDpopjlhozlsIHpnaLlkozniYjljbDmrKHvvIzmiJHku6zlsIblsL3lv6vkuIrmnrbor6XkuaDpopjlhozvvIzor7fms6jmhI/mn6XnnIvmtojmga/pgJrnn6V+JyxcbiAgICAgIGZpcnN0OiBbXSxcbiAgICAgIGxhc3Q6IFtdLFxuICAgICAgaW1nczogWydodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93b3JrYm9va1BpYy8xMTA4LWNvdmVyLTcyNTcxMS5qcGcnLCAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDEuanBnJ11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgICAgX3ByZXZpZXcgKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYGh0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dvcmtib29rUGljLzExMDgtY292ZXItNzI1NzExLmpwZ2AsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGBodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50MS5qcGdgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8g54K55Ye76YCJ5oup5oyJ6ZKuXG4gICAgICBfY2hvb3NlSW1hZ2UgKHR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICAgICAgc2VsZi5fdXBsb2FkRmlsZShyZXMudGVtcEZpbGVQYXRoc1swXSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHNlbGYuZmlyc3RbMF0gPSByZXNcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLl91cGxvYWRGaWxlKHJlcy50ZW1wRmlsZVBhdGhzWzBdKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0WzBdID0gcmVzXG4gICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDkuIrkvKDmjInpkq7nmoTkuovku7ZcbiAgICAgIGFzeW5jIF91cGxvYWQgKCkge1xuICAgICAgICBpZiAodGhpcy5maXJzdC5sZW5ndGggPT09IDAgfHwgdGhpcy5sYXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fkuIrkvKDmraPnoa7nmoTlsIHpnaInLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFdhbnQodGhpcy5maXJzdFswXSwgdGhpcy5sYXN0WzBdKVxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5LiK5Lyg5oiQ5YqfJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgd2VweS5uYXZpZ2F0ZUJhY2soKSB9LCAyMDAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOS4iuS8oOS5oOmimOWGjOWwgemdoiAqL1xuICAgIF91cGxvYWRGaWxlIChmaWxlKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdXBsb2FkL2ltZycsXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGUsXG4gICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICdvcGVuSWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgICd0eXBlJzogJ3dhbnR3b3JrYm9vaydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcy5kYXRhKS5kYXRhLnVybClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlueroOiKguaVsOaNriAqL1xuICAgIF9zZXRXYW50IChmaXJzdCwgbGFzdCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL3dhbnQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdCxcbiAgICAgICAgICAgIGxhc3Q6IGxhc3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==