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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题归纳本'
    }, _this.data = {
      userInfo: {
        name: '',
        headImg: '',
        vip: ''
      }
    }, _this.methods = {
      // 复制公众号码
      _copy: function _copy() {
        _wepy2.default.setClipboardData({
          data: 'guinaben3456',
          success: function success(res) {
            _wepy2.default.showToast({
              title: '复制成功!',
              icon: 'none'
            });
          }
        });
      },
      _into: function _into(url) {
        wx.navigateTo({
          url: url
        });
      },

      // 打开小程序
      _open: function _open() {
        wx.navigateToMiniProgram({
          appId: 'wx4e089964d6aefc57'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.userInfo.name = _wepy2.default.getStorageSync('gnb_middle_User').name;
                this.userInfo.headImg = _wepy2.default.getStorageSync('gnb_middle_User').headImg;
                this.userInfo.vip = _wepy2.default.getStorageSync('gnb_middle_User').vip;
                this.$apply();

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
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
        path: '/pages/init/entry'
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwibWV0aG9kcyIsIl9jb3B5Iiwid2VweSIsInNldENsaXBib2FyZERhdGEiLCJzdWNjZXNzIiwicmVzIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiX2ludG8iLCJ1cmwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJfb3BlbiIsIm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGNBQU0sRUFERTtBQUVSQyxpQkFBUyxFQUZEO0FBR1JDLGFBQUs7QUFIRztBQURMLEssUUFRUEMsTyxHQUFVO0FBQ1I7QUFDQUMsV0FGUSxtQkFFQztBQUNQQyx1QkFBS0MsZ0JBQUwsQ0FBc0I7QUFDcEJSLGdCQUFNLGNBRGM7QUFFcEJTLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILDJCQUFLSSxTQUFMLENBQWU7QUFDYkMscUJBQU8sT0FETTtBQUViQyxvQkFBTTtBQUZPLGFBQWY7QUFJRDtBQVBtQixTQUF0QjtBQVNELE9BWk87QUFhUkMsV0FiUSxpQkFhREMsR0FiQyxFQWFJO0FBQ1ZDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixlQUFLQTtBQURPLFNBQWQ7QUFHRCxPQWpCTzs7QUFrQlI7QUFDQUcsV0FuQlEsbUJBbUJDO0FBQ1BGLFdBQUdHLHFCQUFILENBQXlCO0FBQ3ZCQyxpQkFBTztBQURnQixTQUF6QjtBQUdEO0FBdkJPLEs7Ozs7Ozs7Ozs7O0FBMkJSLHFCQUFLbkIsUUFBTCxDQUFjQyxJQUFkLEdBQXFCSyxlQUFLYyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q25CLElBQTVEO0FBQ0EscUJBQUtELFFBQUwsQ0FBY0UsT0FBZCxHQUF3QkksZUFBS2MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNsQixPQUEvRDtBQUNBLHFCQUFLRixRQUFMLENBQWNHLEdBQWQsR0FBb0JHLGVBQUtjLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDakIsR0FBM0Q7QUFDQSxxQkFBS2tCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJaLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJYSxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlmLElBQUlnQixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMZCxlQUFPLG9CQURGO0FBRUxlLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF2RGdDckIsZUFBS3NCLEk7O2tCQUFuQmhDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjlvZLnurPmnKwnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXNlckluZm86IHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBoZWFkSW1nOiAnJyxcclxuICAgICAgICB2aXA6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyDlpI3liLblhazkvJflj7fnoIFcclxuICAgICAgX2NvcHkgKCkge1xyXG4gICAgICAgIHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XHJcbiAgICAgICAgICBkYXRhOiAnZ3VpbmFiZW4zNDU2JyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICflpI3liLbmiJDlip8hJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBfaW50byAodXJsKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IHVybFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOaJk+W8gOWwj+eoi+W6j1xyXG4gICAgICBfb3BlbiAoKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICAgIGFwcElkOiAnd3g0ZTA4OTk2NGQ2YWVmYzU3J1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvblNob3cgKCkge1xyXG4gICAgICB0aGlzLnVzZXJJbmZvLm5hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5uYW1lXHJcbiAgICAgIHRoaXMudXNlckluZm8uaGVhZEltZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLmhlYWRJbWdcclxuICAgICAgdGhpcy51c2VySW5mby52aXAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS52aXBcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9pbml0L2VudHJ5J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=