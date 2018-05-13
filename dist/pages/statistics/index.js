'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_wepy$page) {
  _inherits(Statistics, _wepy$page);

  function Statistics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Statistics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题本'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.sync": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: [],
      textbook: '',
      statistics: []
    }, _this.methods = {
      _intoList: function _intoList(item) {
        if (item.record === 0) {
          return '';
        } else if (item.error === 0) {
          _wepy2.default.navigateTo({
            url: '/pages/statistics/correct?name=' + item.name + '&id=' + item.chapterId
          });
        } else {
          _wepy2.default.navigateTo({
            url: '/pages/statistics/error?name=' + item.name + '&id=' + item.chapterId
          });
        }
      },
      textbookChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._setUserInfo(id);

                case 2:
                  userinfo = _context.sent;

                  _wepy2.default.setStorageSync('gnb_middle_User', userinfo);
                  _context.next = 6;
                  return this._getStatistics(id);

                case 6:
                  this.statistics = _context.sent;

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function textbookChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return textbookChange;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_setUserInfo',


    /** 更改用户信息 */
    value: function _setUserInfo(id) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/member/infoEdit',
          method: 'POST',
          data: {
            textbookId: id
          },
          success: function success(res) {
            _wepy2.default.hideLoading();
            resolve(res);
          },
          fail: function fail(err) {
            _wepy2.default.hideLoading();
            reject(err);
          }
        });
      });
    }
  }, {
    key: '_getStatistics',
    value: function _getStatistics(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/textbook/statistics',
          data: {
            textbookId: id
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
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.textBookList = _wepy2.default.getStorageSync('gnb_middle_User').textbook;
                this.textbook = _wepy2.default.getStorageSync('gnb_middle_User').textbookId;
                _context2.next = 4;
                return this._getStatistics(this.textbook);

              case 4:
                this.statistics = _context2.sent;

                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
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
        path: '/pages/workbook/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJzdGF0aXN0aWNzIiwibWV0aG9kcyIsIl9pbnRvTGlzdCIsIml0ZW0iLCJyZWNvcmQiLCJlcnJvciIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmFtZSIsImNoYXB0ZXJJZCIsInRleHRib29rQ2hhbmdlIiwiaWQiLCJfc2V0VXNlckluZm8iLCJ1c2VyaW5mbyIsInNldFN0b3JhZ2VTeW5jIiwiX2dldFN0YXRpc3RpY3MiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwidGV4dGJvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsImZhaWwiLCJlcnIiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLHFCQUFvQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixVQUF2QyxFQUFrRCxjQUFhLEVBQS9ELEVBQWtFLHdCQUF1QixjQUF6RixFQUFyQixFLFFBQ1RDLE8sR0FBVSxFQUFDLHFCQUFvQixFQUFDLGNBQWEsZ0JBQWQsRUFBckIsRSxRQUNUQyxVLEdBQWE7QUFDUkMseUJBQW1CQTtBQURYLEssUUFJVkMsSSxHQUFPO0FBQ0xDLG9CQUFjLEVBRFQ7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxrQkFBWTtBQUhQLEssUUFNUEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0dDLElBREgsRUFDUztBQUNmLFlBQUlBLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsaUJBQU8sRUFBUDtBQUNELFNBRkQsTUFFTyxJQUFJRCxLQUFLRSxLQUFMLEtBQWUsQ0FBbkIsRUFBc0I7QUFDM0JDLHlCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLHFEQUF1Q0wsS0FBS00sSUFBNUMsWUFBdUROLEtBQUtPO0FBRDlDLFdBQWhCO0FBR0QsU0FKTSxNQUlBO0FBQ0xKLHlCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLG1EQUFxQ0wsS0FBS00sSUFBMUMsWUFBcUROLEtBQUtPO0FBRDVDLFdBQWhCO0FBR0Q7QUFDRixPQWJPO0FBY0ZDLG9CQWRFO0FBQUEsNkZBY2NDLEVBZGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFlZSxLQUFLQyxZQUFMLENBQWtCRCxFQUFsQixDQWZmOztBQUFBO0FBZUZFLDBCQWZFOztBQWdCTlIsaUNBQUtTLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDRCxRQUF2QztBQWhCTTtBQUFBLHlCQWlCa0IsS0FBS0UsY0FBTCxDQUFvQkosRUFBcEIsQ0FqQmxCOztBQUFBO0FBaUJOLHVCQUFLWixVQWpCQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7QUFxQlY7aUNBQ2NZLEUsRUFBSTtBQUNoQk4scUJBQUtXLFdBQUwsQ0FBaUIsRUFBQ0MsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDZix1QkFBS2dCLE9BQUwsQ0FBYTtBQUNYZCxlQUFLLDZDQURNO0FBRVhlLGtCQUFRLE1BRkc7QUFHWDFCLGdCQUFNO0FBQ0oyQix3QkFBWVo7QUFEUixXQUhLO0FBTVhhLGlCQU5XLG1CQU1GQyxHQU5FLEVBTUc7QUFDWnBCLDJCQUFLcUIsV0FBTDtBQUNBUCxvQkFBUU0sR0FBUjtBQUNELFdBVFU7QUFVWEUsY0FWVyxnQkFVTEMsR0FWSyxFQVVBO0FBQ1R2QiwyQkFBS3FCLFdBQUw7QUFDQU4sbUJBQU9RLEdBQVA7QUFDRDtBQWJVLFNBQWI7QUFlRCxPQWhCTSxDQUFQO0FBaUJEOzs7bUNBRWVqQixFLEVBQUk7QUFDbEIsYUFBTyxJQUFJTyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDZix1QkFBS2dCLE9BQUwsQ0FBYTtBQUNYZCxlQUFLLGlEQURNO0FBRVhYLGdCQUFNO0FBQ0oyQix3QkFBWVo7QUFEUixXQUZLO0FBS1hhLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFBRU4sb0JBQVFNLEdBQVI7QUFBYyxXQUxuQjtBQU1YRSxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFBRVIsbUJBQU9RLEdBQVA7QUFBYTtBQU5mLFNBQWI7QUFRRCxPQVRNLENBQVA7QUFVRDs7Ozs7Ozs7O0FBR0MscUJBQUsvQixZQUFMLEdBQW9CUSxlQUFLd0IsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUMvQixRQUEzRDtBQUNBLHFCQUFLQSxRQUFMLEdBQWdCTyxlQUFLd0IsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNOLFVBQXZEOzt1QkFDd0IsS0FBS1IsY0FBTCxDQUFvQixLQUFLakIsUUFBekIsQzs7O0FBQXhCLHFCQUFLQyxVOztBQUNMLHFCQUFLK0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdpQkwsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlNLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWVIsSUFBSVMsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTGpCLGVBQU8sb0JBREY7QUFFTGtCLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUExRnFDL0IsZUFBS2dDLEk7O2tCQUF4QmpELFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOacrCdcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInRleHRib29rXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInYtYmluZDp0ZXh0Ym9vay5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3RcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxyXG4gICAgICB0ZXh0Ym9vazogJycsXHJcbiAgICAgIHN0YXRpc3RpY3M6IFtdXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgX2ludG9MaXN0IChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucmVjb3JkID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZXJyb3IgPT09IDApIHtcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3Q/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmNoYXB0ZXJJZH1gXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9lcnJvcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uY2hhcHRlcklkfWBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyB0ZXh0Ym9va0NoYW5nZSAoaWQpIHtcclxuICAgICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mbyhpZClcclxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCB1c2VyaW5mbylcclxuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKGlkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOabtOaUueeUqOaIt+S/oeaBryAqL1xyXG4gICAgX3NldFVzZXJJbmZvIChpZCkge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm9FZGl0JyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2dldFN0YXRpc3RpY3MgKGlkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi90ZXh0Ym9vay9zdGF0aXN0aWNzJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGV4dGJvb2tJZDogaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHsgcmVzb2x2ZShyZXMpIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHsgcmVqZWN0KGVycikgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnRleHRib29rXHJcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS50ZXh0Ym9va0lkXHJcbiAgICAgIHRoaXMuc3RhdGlzdGljcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpc3RpY3ModGhpcy50ZXh0Ym9vaylcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19