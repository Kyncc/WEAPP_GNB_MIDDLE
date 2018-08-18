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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJnbmJUZXh0Ym9va1NlbGVjdCIsInByb3BzIiwidGV4dGJvb2siLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5IiwibGlzdCIsIkFycmF5IiwiZGVmYXVsdCIsImRhdGEiLCJpbmRleCIsIndhdGNoIiwidmFsIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJpZCIsInRvU3RyaW5nIiwiJGFwcGx5IiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7Ozs0TUFDbkJDLEssR0FBUTtBQUNOQyxnQkFBVTtBQUNSQyxjQUFNQyxNQURFO0FBRVJDLGdCQUFRO0FBRkEsT0FESjtBQUtOQyxZQUFNO0FBQ0pILGNBQU1JLEtBREY7QUFFSkMsaUJBQVMsRUFGTDtBQUdKSCxnQkFBUTtBQUhKO0FBTEEsSyxRQVdSSSxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFHUEMsSyxHQUFRO0FBQ05ULGNBRE0sb0JBQ0lVLEdBREosRUFDUztBQUFBOztBQUNiLFlBQUksS0FBS04sSUFBTCxDQUFVTyxNQUFkLEVBQXNCO0FBQ3BCLGVBQUtQLElBQUwsQ0FBVVEsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQU9MLEtBQVAsRUFBaUI7QUFDakMsZ0JBQUlLLEtBQUtDLEVBQUwsQ0FBUUMsUUFBUixPQUF1QkwsSUFBSUssUUFBSixFQUEzQixFQUEyQztBQUN6QyxxQkFBS1AsS0FBTCxHQUFhQSxLQUFiO0FBQ0EscUJBQUtRLE1BQUw7QUFDQSxxQkFBTyxFQUFQO0FBQ0Q7QUFDRixXQU5EO0FBT0Q7QUFDRixPQVhLO0FBWU5aLFVBWk0sZ0JBWUFNLEdBWkEsRUFZSztBQUFBOztBQUNULGFBQUtOLElBQUwsQ0FBVVEsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQU9MLEtBQVAsRUFBaUI7QUFDakMsY0FBSUssS0FBS0MsRUFBTCxDQUFRQyxRQUFSLE9BQXVCLE9BQUtmLFFBQUwsQ0FBY2UsUUFBZCxFQUEzQixFQUFxRDtBQUNuRCxtQkFBS1AsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsbUJBQUtRLE1BQUw7QUFDQSxtQkFBTyxFQUFQO0FBQ0Q7QUFDRixTQU5EO0FBT0Q7QUFwQkssSyxRQXNCUkMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNVQyxDQURWLEVBQ2E7QUFDbkIsYUFBS1gsS0FBTCxHQUFhVyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0EsYUFBS3JCLFFBQUwsR0FBZ0IsS0FBS0ksSUFBTCxDQUFVLEtBQUtJLEtBQWYsRUFBc0JNLEVBQXRDO0FBQ0EsYUFBS1EsS0FBTCxDQUFXLE9BQVgsRUFBb0IsS0FBS2xCLElBQUwsQ0FBVSxLQUFLSSxLQUFmLEVBQXNCTSxFQUExQztBQUNBLGFBQUtFLE1BQUw7QUFDRDtBQU5PLEs7Ozs7RUFyQ21DLGVBQUtPLFM7O2tCQUEvQnpCLGlCIiwiZmlsZSI6ImduYi10ZXh0Ym9va1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ25iVGV4dGJvb2tTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHRleHRib29rOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogW10sXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbmRleDogMFxuICB9XG4gIHdhdGNoID0ge1xuICAgIHRleHRib29rICh2YWwpIHtcbiAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmlkLnRvU3RyaW5nKCkgPT09IHZhbC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGxpc3QgKHZhbCkge1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlkLnRvU3RyaW5nKCkgPT09IHRoaXMudGV4dGJvb2sudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kUGlja2VyQ2hhbmdlIChlKSB7XG4gICAgICB0aGlzLmluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB0aGlzLmxpc3RbdGhpcy5pbmRleF0uaWRcbiAgICAgIHRoaXMuJGVtaXQoJ2V2ZW50JywgdGhpcy5saXN0W3RoaXMuaW5kZXhdLmlkKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxufVxuIl19