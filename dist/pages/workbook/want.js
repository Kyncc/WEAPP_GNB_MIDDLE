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
      navigationBarTitleText: '上传练习册'
    }, _this.data = {
      longText: '请按示例上传练习册封面和版印次，我们将尽快上架该练习册，请注意查看消息通知~',
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


    /** 上传练习册封面 */
    value: function _uploadFile(file) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.uploadFile({
          url: 'https://api.guinaben.com/upload/img',
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
          url: 'https://api.guinaben.com/workbook/want',
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return WorkbookWant;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookWant , 'pages/workbook/want'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb25nVGV4dCIsImZpcnN0IiwibGFzdCIsImltZ3MiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ0eXBlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfY2hvb3NlSW1hZ2UiLCJzZWxmIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJjb3VudCIsInN1Y2Nlc3MiLCJyZXMiLCJfdXBsb2FkRmlsZSIsInRlbXBGaWxlUGF0aHMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIl91cGxvYWQiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJfc2V0V2FudCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZUJhY2siLCJmaWxlIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJnZXRTdG9yYWdlU3luYyIsImZvcm1EYXRhIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLHdDQURMO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsWUFBTSxDQUFDLDJE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QUtDLEk7O2tCQUExQmpFLFkiLCJmaWxlIjoid2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rV2FudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4iuS8oOe7g+S5oOWGjCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbG9uZ1RleHQ6ICfor7fmjInnpLrkvovkuIrkvKDnu4PkuaDlhozlsIHpnaLlkozniYjljbDmrKHvvIzmiJHku6zlsIblsL3lv6vkuIrmnrbor6Xnu4PkuaDlhozvvIzor7fms6jmhI/mn6XnnIvmtojmga/pgJrnn6V+JyxcbiAgICAgIGZpcnN0OiBbXSxcbiAgICAgIGxhc3Q6IFtdLFxuICAgICAgaW1nczogWydodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93b3JrYm9va1BpYy8xMTA4LWNvdmVyLTcyNTcxMS5qcGcnLCAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDEuanBnJ11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgICAgX3ByZXZpZXcgKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYGh0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dvcmtib29rUGljLzExMDgtY292ZXItNzI1NzExLmpwZ2AsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGBodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50MS5qcGdgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8g54K55Ye76YCJ5oup5oyJ6ZKuXG4gICAgICBfY2hvb3NlSW1hZ2UgKHR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICAgICAgc2VsZi5fdXBsb2FkRmlsZShyZXMudGVtcEZpbGVQYXRoc1swXSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHNlbGYuZmlyc3RbMF0gPSByZXNcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLl91cGxvYWRGaWxlKHJlcy50ZW1wRmlsZVBhdGhzWzBdKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0WzBdID0gcmVzXG4gICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDkuIrkvKDmjInpkq7nmoTkuovku7ZcbiAgICAgIGFzeW5jIF91cGxvYWQgKCkge1xuICAgICAgICBpZiAodGhpcy5maXJzdC5sZW5ndGggPT09IDAgfHwgdGhpcy5sYXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fkuIrkvKDmraPnoa7nmoTlsIHpnaInLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFdhbnQodGhpcy5maXJzdFswXSwgdGhpcy5sYXN0WzBdKVxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5LiK5Lyg5oiQ5YqfJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgd2VweS5uYXZpZ2F0ZUJhY2soKSB9LCAyMDAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOS4iuS8oOe7g+S5oOWGjOWwgemdoiAqL1xuICAgIF91cGxvYWRGaWxlIChmaWxlKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vdXBsb2FkL2ltZycsXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGUsXG4gICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICdvcGVuSWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgJ3R5cGUnOiAnd2FudHdvcmtib29rJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGEudXJsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog6I635Y+W56ug6IqC5pWw5o2uICovXG4gICAgX3NldFdhbnQgKGZpcnN0LCBsYXN0KSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vd29ya2Jvb2svd2FudCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZmlyc3Q6IGZpcnN0LFxuICAgICAgICAgICAgbGFzdDogbGFzdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==