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

var gnbTextbookSelect = function (_wepy$component) {
  _inherits(gnbTextbookSelect, _wepy$component);

  function gnbTextbookSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, gnbTextbookSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = gnbTextbookSelect.__proto__ || Object.getPrototypeOf(gnbTextbookSelect)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      textbook: {
        type: String,
        twoWay: true
      },
      list: {
        type: Array,
        default: [],
        twoWay: true
      }
    }, _this.data = {
      index: 0
    }, _this.watch = {
      textbook: function textbook(val) {
        var _this2 = this;

        if (this.list.length) {
          this.list.forEach(function (item, index) {
            if (item.id.toString() === val.toString()) {
              _this2.index = index;
              _this2.$apply();
              return {};
            }
          });
        }
      },
      list: function list(val) {
        var _this3 = this;

        this.list.forEach(function (item, index) {
          if (item.id.toString() === _this3.textbook.toString()) {
            _this3.index = index;
            _this3.$apply();
            return {};
          }
        });
      }
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.index = e.detail.value;
        this.textbook = this.list[this.index].id;
        this.$emit('event', this.list[this.index].id);
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return gnbTextbookSelect;
}(_wepy2.default.component);

exports.default = gnbTextbookSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJnbmJUZXh0Ym9va1NlbGVjdCIsInByb3BzIiwidGV4dGJvb2siLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5IiwibGlzdCIsIkFycmF5IiwiZGVmYXVsdCIsImRhdGEiLCJpbmRleCIsIndhdGNoIiwidmFsIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJpZCIsInRvU3RyaW5nIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkZW1pdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxLLEdBQVE7QUFDTkMsZ0JBQVU7QUFDUkMsY0FBTUMsTUFERTtBQUVSQyxnQkFBUTtBQUZBLE9BREo7QUFLTkMsWUFBTTtBQUNKSCxjQUFNSSxLQURGO0FBRUpDLGlCQUFTLEVBRkw7QUFHSkgsZ0JBQVE7QUFISjtBQUxBLEssUUFXUkksSSxHQUFPO0FBQ0xDLGFBQU87QUFERixLLFFBR1BDLEssR0FBUTtBQUNOVCxjQURNLG9CQUNJVSxHQURKLEVBQ1M7QUFBQTs7QUFDYixZQUFJLEtBQUtOLElBQUwsQ0FBVU8sTUFBZCxFQUFzQjtBQUNwQixlQUFLUCxJQUFMLENBQVVRLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPTCxLQUFQLEVBQWlCO0FBQ2pDLGdCQUFJSyxLQUFLQyxFQUFMLENBQVFDLFFBQVIsT0FBdUJMLElBQUlLLFFBQUosRUFBM0IsRUFBMkM7QUFDekMscUJBQUtQLEtBQUwsR0FBYUEsS0FBYjtBQUNBLHFCQUFLUSxNQUFMO0FBQ0EscUJBQU8sRUFBUDtBQUNEO0FBQ0YsV0FORDtBQU9EO0FBQ0YsT0FYSztBQVlOWixVQVpNLGdCQVlBTSxHQVpBLEVBWUs7QUFBQTs7QUFDVCxhQUFLTixJQUFMLENBQVVRLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPTCxLQUFQLEVBQWlCO0FBQ2pDLGNBQUlLLEtBQUtDLEVBQUwsQ0FBUUMsUUFBUixPQUF1QixPQUFLZixRQUFMLENBQWNlLFFBQWQsRUFBM0IsRUFBcUQ7QUFDbkQsbUJBQUtQLEtBQUwsR0FBYUEsS0FBYjtBQUNBLG1CQUFLUSxNQUFMO0FBQ0EsbUJBQU8sRUFBUDtBQUNEO0FBQ0YsU0FORDtBQU9EO0FBcEJLLEssUUFzQlJDLE8sR0FBVTtBQUNSQyxzQkFEUSw0QkFDVUMsQ0FEVixFQUNhO0FBQ25CLGFBQUtYLEtBQUwsR0FBYVcsRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNBLGFBQUtyQixRQUFMLEdBQWdCLEtBQUtJLElBQUwsQ0FBVSxLQUFLSSxLQUFmLEVBQXNCTSxFQUF0QztBQUNBLGFBQUtRLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEtBQUtsQixJQUFMLENBQVUsS0FBS0ksS0FBZixFQUFzQk0sRUFBMUM7QUFDQSxhQUFLRSxNQUFMO0FBQ0Q7QUFOTyxLOzs7O0VBckNtQ08sZUFBS0MsUzs7a0JBQS9CMUIsaUIiLCJmaWxlIjoiZ25iLXRleHRib29rU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbmJUZXh0Ym9va1NlbGVjdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgdGV4dGJvb2s6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbXSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfVxuICBkYXRhID0ge1xuICAgIGluZGV4OiAwXG4gIH1cbiAgd2F0Y2ggPSB7XG4gICAgdGV4dGJvb2sgKHZhbCkge1xuICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQudG9TdHJpbmcoKSA9PT0gdmFsLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgbGlzdCAodmFsKSB7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQudG9TdHJpbmcoKSA9PT0gdGhpcy50ZXh0Ym9vay50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGJpbmRQaWNrZXJDaGFuZ2UgKGUpIHtcbiAgICAgIHRoaXMuaW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy50ZXh0Ym9vayA9IHRoaXMubGlzdFt0aGlzLmluZGV4XS5pZFxuICAgICAgdGhpcy4kZW1pdCgnZXZlbnQnLCB0aGlzLmxpc3RbdGhpcy5pbmRleF0uaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG59XG4iXX0=