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
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookWant;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookWant , 'pages/workbook/want'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb25nVGV4dCIsImZpcnN0IiwibGFzdCIsImltZ3MiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ0eXBlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfY2hvb3NlSW1hZ2UiLCJzZWxmIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJjb3VudCIsInN1Y2Nlc3MiLCJyZXMiLCJfdXBsb2FkRmlsZSIsInRlbXBGaWxlUGF0aHMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIl91cGxvYWQiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJfc2V0V2FudCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZUJhY2siLCJmaWxlIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJnZXRTdG9yYWdlU3luYyIsImZvcm1EYXRhIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVSx3Q0FETDtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLFlBQU0sQ0FBQywyREFBRCxFQUE4RCxt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bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va1dhbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIrkvKDkuaDpopjlhownXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxvbmdUZXh0OiAn6K+35oyJ56S65L6L5LiK5Lyg5Lmg6aKY5YaM5bCB6Z2i5ZKM54mI5Y2w5qyh77yM5oiR5Lus5bCG5bC95b+r5LiK5p626K+l5Lmg6aKY5YaM77yM6K+35rOo5oSP5p+l55yL5raI5oGv6YCa55+lficsXG4gICAgICBmaXJzdDogW10sXG4gICAgICBsYXN0OiBbXSxcbiAgICAgIGltZ3M6IFsnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd29ya2Jvb2tQaWMvMTEwOC1jb3Zlci03MjU3MTEuanBnJywgJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dhbnQxLmpwZyddXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8qKiDmn6XnnIvlpKflm74gKi9cbiAgICAgIF9wcmV2aWV3ICh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGBodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93b3JrYm9va1BpYy8xMTA4LWNvdmVyLTcyNTcxMS5qcGdgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDEuanBnYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIOeCueWHu+mAieaLqeaMiemSrlxuICAgICAgX2Nob29zZUltYWdlICh0eXBlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgICAgIHNlbGYuX3VwbG9hZEZpbGUocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBzZWxmLmZpcnN0WzBdID0gcmVzXG4gICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5fdXBsb2FkRmlsZShyZXMudGVtcEZpbGVQYXRoc1swXSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHNlbGYubGFzdFswXSA9IHJlc1xuICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5LiK5Lyg5oyJ6ZKu55qE5LqL5Lu2XG4gICAgICBhc3luYyBfdXBsb2FkICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3QubGVuZ3RoID09PSAwIHx8IHRoaXMubGFzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn6K+35LiK5Lyg5q2j56Gu55qE5bCB6Z2iJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zZXRXYW50KHRoaXMuZmlyc3RbMF0sIHRoaXMubGFzdFswXSlcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+S4iuS8oOaIkOWKnycsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHdlcHkubmF2aWdhdGVCYWNrKCkgfSwgMjAwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDkuIrkvKDkuaDpopjlhozlsIHpnaIgKi9cbiAgICBfdXBsb2FkRmlsZSAoZmlsZSkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3VwbG9hZC9pbWcnLFxuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLFxuICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICAnb3BlbklkJzogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgICd0eXBlJzogJ3dhbnR3b3JrYm9vaydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcy5kYXRhKS5kYXRhLnVybClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlueroOiKguaVsOaNriAqL1xuICAgIF9zZXRXYW50IChmaXJzdCwgbGFzdCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL3dhbnQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdCxcbiAgICAgICAgICAgIGxhc3Q6IGxhc3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==