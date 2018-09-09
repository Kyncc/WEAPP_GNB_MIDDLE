'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zanLoadmore = function (_wepy$component) {
  _inherits(zanLoadmore, _wepy$component);

  function zanLoadmore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanLoadmore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanLoadmore.__proto__ || Object.getPrototypeOf(zanLoadmore)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      loading: {
        type: Boolean,
        default: false
      },
      nodata: {
        type: Boolean,
        default: false
      },
      nomore: {
        type: Boolean,
        default: false
      },
      nodata_str: {
        type: String,
        default: '暂无数据'
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanLoadmore;
}(_wepy2.default.component);

exports.default = zanLoadmore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1sb2FkbW9yZS5qcyJdLCJuYW1lcyI6WyJ6YW5Mb2FkbW9yZSIsInByb3BzIiwibG9hZGluZyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsIm5vZGF0YSIsIm5vbW9yZSIsIm5vZGF0YV9zdHIiLCJTdHJpbmciLCJtZXRob2RzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRO0FBQ05DLGVBQVM7QUFDUEMsY0FBTUMsT0FEQztBQUVQQyxpQkFBUztBQUZGLE9BREg7QUFLTkMsY0FBUTtBQUNOSCxjQUFNQyxPQURBO0FBRU5DLGlCQUFTO0FBRkgsT0FMRjtBQVNORSxjQUFRO0FBQ05KLGNBQU1DLE9BREE7QUFFTkMsaUJBQVM7QUFGSCxPQVRGO0FBYU5HLGtCQUFZO0FBQ1ZMLGNBQU1NLE1BREk7QUFFVkosaUJBQVM7QUFGQztBQWJOLEssUUFrQlJLLE8sR0FBVSxFOzs7O0VBbkI2QkMsZUFBS0MsUzs7a0JBQXpCWixXIiwiZmlsZSI6Inphbi1sb2FkbW9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuTG9hZG1vcmUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGxvYWRpbmc6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgbm9kYXRhOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG5vbW9yZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBub2RhdGFfc3RyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAn5pqC5peg5pWw5o2uJ1xuICAgIH1cbiAgfVxuICBtZXRob2RzID0ge31cbn1cbiJdfQ==