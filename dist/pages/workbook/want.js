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
  }]);

  return WorkbookWant;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookWant , 'pages/workbook/want'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb25nVGV4dCIsImZpcnN0IiwibGFzdCIsImltZ3MiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ0eXBlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfY2hvb3NlSW1hZ2UiLCJzZWxmIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJjb3VudCIsInN1Y2Nlc3MiLCJyZXMiLCJfdXBsb2FkRmlsZSIsInRlbXBGaWxlUGF0aHMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIl91cGxvYWQiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJfc2V0V2FudCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZUJhY2siLCJmaWxlIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJnZXRTdG9yYWdlU3luYyIsImZvcm1EYXRhIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVUsd0NBREw7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxZQUFNLENBQUMsMkRBQUQsRUFBOEQsbUNBQTlEO0FBSkQsSyxRQU9QQyxPLEdBQVU7QUFDUjtBQUNBQyxjQUZRLG9CQUVFQyxJQUZGLEVBRVE7QUFDZCxZQUFJQSxTQUFTLE9BQWIsRUFBc0I7QUFDcEIseUJBQUtDLFlBQUwsQ0FBa0IsRUFBQ0Msb0VBQUQsRUFBdUVDLE1BQU0sS0FBS04sSUFBbEYsRUFBbEI7QUFDRCxTQUZELE1BRU87QUFDTCx5QkFBS0ksWUFBTCxDQUFrQixFQUFDQyw0Q0FBRCxFQUErQ0MsTUFBTSxLQUFLTixJQUExRCxFQUFsQjtBQUNEO0FBQ0YsT0FSTzs7QUFTUjtBQUNBTyxrQkFWUSx3QkFVTUosSUFWTixFQVVZO0FBQ2xCLFlBQUlLLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FESztBQUVmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRkc7QUFHZkMsaUJBQU8sQ0FIUTtBQUlmQyxpQkFKZSxtQkFJTkMsR0FKTSxFQUlEO0FBQ1osZ0JBQUlYLFNBQVMsT0FBYixFQUFzQjtBQUNwQkssbUJBQUtPLFdBQUwsQ0FBaUJELElBQUlFLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBakIsRUFBdUNDLElBQXZDLENBQTRDLFVBQUNILEdBQUQsRUFBUztBQUNuREksd0JBQVFDLEdBQVIsQ0FBWUwsR0FBWjtBQUNBTixxQkFBS1YsS0FBTCxDQUFXLENBQVgsSUFBZ0JnQixHQUFoQjtBQUNBTixxQkFBS1ksTUFBTDtBQUNELGVBSkQ7QUFLRCxhQU5ELE1BTU87QUFDTFosbUJBQUtPLFdBQUwsQ0FBaUJELElBQUlFLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBakIsRUFBdUNDLElBQXZDLENBQTRDLFVBQUNILEdBQUQsRUFBUztBQUNuREksd0JBQVFDLEdBQVIsQ0FBWUwsR0FBWjtBQUNBTixxQkFBS1QsSUFBTCxDQUFVLENBQVYsSUFBZWUsR0FBZjtBQUNBTixxQkFBS1ksTUFBTDtBQUNELGVBSkQ7QUFLRDtBQUNGO0FBbEJjLFNBQWpCO0FBb0JELE9BaENPOztBQWlDUjtBQUNNQyxhQWxDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFtQ0YsS0FBS3ZCLEtBQUwsQ0FBV3dCLE1BQVgsS0FBc0IsQ0FBdEIsSUFBMkIsS0FBS3ZCLElBQUwsQ0FBVXVCLE1BQVYsS0FBcUIsQ0FuQzlDO0FBQUE7QUFBQTtBQUFBOztBQW9DSixpQ0FBS0MsU0FBTCxDQUFlO0FBQ2JDLDJCQUFPLElBRE07QUFFYkMsNkJBQVMsVUFGSTtBQUdiQyxnQ0FBWSxLQUhDO0FBSWJDLGlDQUFhO0FBSkEsbUJBQWY7QUFwQ0k7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBMkNFLEtBQUtDLFFBQUwsQ0FBYyxLQUFLOUIsS0FBTCxDQUFXLENBQVgsQ0FBZCxFQUE2QixLQUFLQyxJQUFMLENBQVUsQ0FBVixDQUE3QixDQTNDRjs7QUFBQTtBQTRDSixpQ0FBSzhCLFNBQUwsQ0FBZTtBQUNiTCwyQkFBTyxNQURNO0FBRWJNLDBCQUFNLFNBRk87QUFHYkMsOEJBQVU7QUFIRyxtQkFBZjtBQUtBQyw2QkFBVyxZQUFNO0FBQUUsbUNBQUtDLFlBQUw7QUFBcUIsbUJBQXhDLEVBQTBDLElBQTFDOztBQWpESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7QUFzRFY7Z0NBQ2FDLEksRUFBTTtBQUNqQixxQkFBS0MsV0FBTCxDQUFpQixFQUFDWCxPQUFPLEtBQVIsRUFBakI7QUFDQSxhQUFPLElBQUlZLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxxQ0FEUztBQUVkQyxvQkFBVVAsSUFGSTtBQUdkUSxnQkFBTSxNQUhRO0FBSWRDLGtCQUFRO0FBQ04sNEJBQWdCLHFCQURWO0FBRU4sc0JBQVUsZUFBS0MsY0FBTCxDQUFvQixRQUFwQjtBQUZKLFdBSk07QUFRZEMsb0JBQVU7QUFDUixvQkFBUTtBQURBLFdBUkk7QUFXZGhDLGlCQVhjLG1CQVdMQyxHQVhLLEVBV0E7QUFDWnVCLG9CQUFRUyxLQUFLQyxLQUFMLENBQVdqQyxJQUFJbEIsSUFBZixFQUFxQkEsSUFBckIsQ0FBMEI0QyxHQUFsQztBQUNELFdBYmE7QUFjZFEsY0FkYyxnQkFjUkMsR0FkUSxFQWNIO0FBQ1QvQixvQkFBUUMsR0FBUixDQUFZOEIsR0FBWjtBQUNBWCxtQkFBT1csR0FBUDtBQUNELFdBakJhO0FBa0JkQyxrQkFsQmMsc0JBa0JGO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQXBCYSxTQUFoQjtBQXNCRCxPQXZCTSxDQUFQO0FBd0JEOztBQUVEOzs7OzZCQUNVckQsSyxFQUFPQyxJLEVBQU07QUFDckIscUJBQUtvQyxXQUFMLENBQWlCLEVBQUNYLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSVksT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS2MsT0FBTCxDQUFhO0FBQ1haLGVBQUssd0NBRE07QUFFWGEsa0JBQVEsTUFGRztBQUdYekQsZ0JBQU07QUFDSkUsbUJBQU9BLEtBREg7QUFFSkMsa0JBQU1BO0FBRkYsV0FISztBQU9YYyxpQkFQVyxtQkFPRkMsR0FQRSxFQU9HO0FBQ1p1QixvQkFBUXZCLEdBQVI7QUFDRCxXQVRVO0FBVVhrQyxjQVZXLGdCQVVMQyxHQVZLLEVBVUE7QUFDVFgsbUJBQU9XLEdBQVA7QUFDRCxXQVpVO0FBYVhDLGtCQWJXLHNCQWFDO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQWZVLFNBQWI7QUFpQkQsT0FsQk0sQ0FBUDtBQW1CRDs7OztFQXJIdUMsZUFBS0csSTs7a0JBQTFCN0QsWSIsImZpbGUiOiJ3YW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tXYW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiK5Lyg5Lmg6aKY5YaMJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBsb25nVGV4dDogJ+ivt+aMieekuuS+i+S4iuS8oOS5oOmimOWGjOWwgemdouWSjOeJiOWNsOasoe+8jOaIkeS7rOWwhuWwveW/q+S4iuaetuivpeS5oOmimOWGjO+8jOivt+azqOaEj+afpeeci+a2iOaBr+mAmuefpX4nLFxuICAgICAgZmlyc3Q6IFtdLFxuICAgICAgbGFzdDogW10sXG4gICAgICBpbWdzOiBbJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dvcmtib29rUGljLzExMDgtY292ZXItNzI1NzExLmpwZycsICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50MS5qcGcnXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvKiog5p+l55yL5aSn5Zu+ICovXG4gICAgICBfcHJldmlldyAodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd29ya2Jvb2tQaWMvMTEwOC1jb3Zlci03MjU3MTEuanBnYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYGh0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dhbnQxLmpwZ2AsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyDngrnlh7vpgInmi6nmjInpkq5cbiAgICAgIF9jaG9vc2VJbWFnZSAodHlwZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgICAgICBzZWxmLl91cGxvYWRGaWxlKHJlcy50ZW1wRmlsZVBhdGhzWzBdKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgc2VsZi5maXJzdFswXSA9IHJlc1xuICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuX3VwbG9hZEZpbGUocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBzZWxmLmxhc3RbMF0gPSByZXNcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOS4iuS8oOaMiemSrueahOS6i+S7tlxuICAgICAgYXN5bmMgX3VwbG9hZCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ivt+S4iuS8oOato+ehrueahOWwgemdoicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0V2FudCh0aGlzLmZpcnN0WzBdLCB0aGlzLmxhc3RbMF0pXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfkuIrkvKDmiJDlip8nLFxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB3ZXB5Lm5hdmlnYXRlQmFjaygpIH0sIDIwMDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5LiK5Lyg5Lmg6aKY5YaM5bCB6Z2iICovXG4gICAgX3VwbG9hZEZpbGUgKGZpbGUpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS91cGxvYWQvaW1nJyxcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZSxcbiAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgJ3R5cGUnOiAnd2FudHdvcmtib29rJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGEudXJsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog6I635Y+W56ug6IqC5pWw5o2uICovXG4gICAgX3NldFdhbnQgKGZpcnN0LCBsYXN0KSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vd29ya2Jvb2svd2FudCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZmlyc3Q6IGZpcnN0LFxuICAgICAgICAgICAgbGFzdDogbGFzdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=