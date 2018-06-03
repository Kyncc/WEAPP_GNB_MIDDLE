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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwibWV0aG9kcyIsIl9jb3B5Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJfaW50byIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsIl9vcGVuIiwibmF2aWdhdGVUb01pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsY0FBTSxFQURFO0FBRVJDLGlCQUFTLEVBRkQ7QUFHUkMsYUFBSztBQUhHO0FBREwsSyxRQVFQQyxPLEdBQVU7QUFDUjtBQUNBQyxXQUZRLG1CQUVDO0FBQ1AsdUJBQUtDLGdCQUFMLENBQXNCO0FBQ3BCUCxnQkFBTSxjQURjO0FBRXBCUSxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLDJCQUFLQyxTQUFMLENBQWU7QUFDYkMscUJBQU8sT0FETTtBQUViQyxvQkFBTTtBQUZPLGFBQWY7QUFJRDtBQVBtQixTQUF0QjtBQVNELE9BWk87QUFhUkMsV0FiUSxpQkFhREMsR0FiQyxFQWFJO0FBQ1ZDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixlQUFLQTtBQURPLFNBQWQ7QUFHRCxPQWpCTzs7QUFrQlI7QUFDQUcsV0FuQlEsbUJBbUJDO0FBQ1BGLFdBQUdHLHFCQUFILENBQXlCO0FBQ3ZCQyxpQkFBTztBQURnQixTQUF6QjtBQUdEO0FBdkJPLEs7Ozs7Ozs7Ozs7O0FBMkJSLHFCQUFLbEIsUUFBTCxDQUFjQyxJQUFkLEdBQXFCLGVBQUtrQixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q2xCLElBQTVEO0FBQ0EscUJBQUtELFFBQUwsQ0FBY0UsT0FBZCxHQUF3QixlQUFLaUIsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNqQixPQUEvRDtBQUNBLHFCQUFLRixRQUFMLENBQWNHLEdBQWQsR0FBb0IsZUFBS2dCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDaEIsR0FBM0Q7QUFDQSxxQkFBS2lCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJaLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJYSxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlmLElBQUlnQixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMZCxlQUFPLG9CQURGO0FBRUxlLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF2RGdDLGVBQUtDLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGhlYWRJbWc6ICcnLFxuICAgICAgICB2aXA6ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vIOWkjeWItuWFrOS8l+WPt+eggVxuICAgICAgX2NvcHkgKCkge1xuICAgICAgICB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xuICAgICAgICAgIGRhdGE6ICdndWluYWJlbjM0NTYnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WkjeWItuaIkOWKnyEnLFxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIF9pbnRvICh1cmwpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDmiZPlvIDlsI/nqIvluo9cbiAgICAgIF9vcGVuICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcbiAgICAgICAgICBhcHBJZDogJ3d4NGUwODk5NjRkNmFlZmM1NydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvblNob3cgKCkge1xuICAgICAgdGhpcy51c2VySW5mby5uYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykubmFtZVxuICAgICAgdGhpcy51c2VySW5mby5oZWFkSW1nID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuaGVhZEltZ1xuICAgICAgdGhpcy51c2VySW5mby52aXAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS52aXBcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luaXQvZW50cnknXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=