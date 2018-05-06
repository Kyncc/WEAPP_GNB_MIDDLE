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

var gnbWookbookSelect = function (_wepy$component) {
  _inherits(gnbWookbookSelect, _wepy$component);

  function gnbWookbookSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, gnbWookbookSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = gnbWookbookSelect.__proto__ || Object.getPrototypeOf(gnbWookbookSelect)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      value: {
        type: String,
        twoWay: true
      },
      key: {
        type: String,
        twoWay: true
      },
      textbook: {
        type: Array,
        default: [],
        twoWay: true
      }
    }, _this.data = {
      name: ''
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.value = e.detail.value;
        this.key = this.textbook[e.detail.value].id;
        this.name = this.textbook[e.detail.value].name;
        this.$emit('event', this.key);
        this.$apply();
      }
    }, _this.watch = {
      value: function value() {
        for (var i = 0; i < this.textbook.length; i++) {
          if (this.textbook[i].id === this.value) {
            this.key = this.textbook[i].id;
            this.name = this.textbook[i].name;
            this.$apply();
            return;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return gnbWookbookSelect;
}(_wepy2.default.component);

exports.default = gnbWookbookSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJnbmJXb29rYm9va1NlbGVjdCIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5Iiwia2V5IiwidGV4dGJvb2siLCJBcnJheSIsImRlZmF1bHQiLCJkYXRhIiwibmFtZSIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsImlkIiwiJGVtaXQiLCIkYXBwbHkiLCJ3YXRjaCIsImkiLCJsZW5ndGgiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7OzRNQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxnQkFBUTtBQUZILE9BREQ7QUFLTkMsV0FBSztBQUNISCxjQUFNQyxNQURIO0FBRUhDLGdCQUFRO0FBRkwsT0FMQztBQVNORSxnQkFBVTtBQUNSSixjQUFNSyxLQURFO0FBRVJDLGlCQUFTLEVBRkQ7QUFHUkosZ0JBQVE7QUFIQTtBQVRKLEssUUFlUkssSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLLFFBR1BDLE8sR0FBVTtBQUNSQyxzQkFEUSw0QkFDVUMsQ0FEVixFQUNhO0FBQ25CLGFBQUtaLEtBQUwsR0FBYVksRUFBRUMsTUFBRixDQUFTYixLQUF0QjtBQUNBLGFBQUtJLEdBQUwsR0FBVyxLQUFLQyxRQUFMLENBQWNPLEVBQUVDLE1BQUYsQ0FBU2IsS0FBdkIsRUFBOEJjLEVBQXpDO0FBQ0EsYUFBS0wsSUFBTCxHQUFZLEtBQUtKLFFBQUwsQ0FBY08sRUFBRUMsTUFBRixDQUFTYixLQUF2QixFQUE4QlMsSUFBMUM7QUFDQSxhQUFLTSxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLWCxHQUF6QjtBQUNBLGFBQUtZLE1BQUw7QUFDRDtBQVBPLEssUUFTVkMsSyxHQUFRO0FBQ05qQixXQURNLG1CQUNHO0FBQ1AsYUFBSyxJQUFJa0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtiLFFBQUwsQ0FBY2MsTUFBbEMsRUFBMENELEdBQTFDLEVBQStDO0FBQzdDLGNBQUksS0FBS2IsUUFBTCxDQUFjYSxDQUFkLEVBQWlCSixFQUFqQixLQUF3QixLQUFLZCxLQUFqQyxFQUF3QztBQUN0QyxpQkFBS0ksR0FBTCxHQUFXLEtBQUtDLFFBQUwsQ0FBY2EsQ0FBZCxFQUFpQkosRUFBNUI7QUFDQSxpQkFBS0wsSUFBTCxHQUFZLEtBQUtKLFFBQUwsQ0FBY2EsQ0FBZCxFQUFpQlQsSUFBN0I7QUFDQSxpQkFBS08sTUFBTDtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBVkssSzs7OztFQTVCcUNJLGVBQUtDLFM7O2tCQUEvQnZCLGlCIiwiZmlsZSI6ImduYi10ZXh0Ym9va1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ25iV29va2Jvb2tTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGtleToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICB0ZXh0Ym9vazoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbXSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfVxuICBkYXRhID0ge1xuICAgIG5hbWU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kUGlja2VyQ2hhbmdlIChlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMua2V5ID0gdGhpcy50ZXh0Ym9va1tlLmRldGFpbC52YWx1ZV0uaWRcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMudGV4dGJvb2tbZS5kZXRhaWwudmFsdWVdLm5hbWVcbiAgICAgIHRoaXMuJGVtaXQoJ2V2ZW50JywgdGhpcy5rZXkpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4gIHdhdGNoID0ge1xuICAgIHZhbHVlICgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Ym9vay5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy50ZXh0Ym9va1tpXS5pZCA9PT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgIHRoaXMua2V5ID0gdGhpcy50ZXh0Ym9va1tpXS5pZFxuICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMudGV4dGJvb2tbaV0ubmFtZVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19