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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJnbmJXb29rYm9va1NlbGVjdCIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5Iiwia2V5IiwidGV4dGJvb2siLCJBcnJheSIsImRlZmF1bHQiLCJkYXRhIiwibmFtZSIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsImlkIiwiJGVtaXQiLCIkYXBwbHkiLCJ3YXRjaCIsImkiLCJsZW5ndGgiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7OzRNQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxnQkFBUTtBQUZILE9BREQ7QUFLTkMsV0FBSztBQUNISCxjQUFNQyxNQURIO0FBRUhDLGdCQUFRO0FBRkwsT0FMQztBQVNORSxnQkFBVTtBQUNSSixjQUFNSyxLQURFO0FBRVJDLGlCQUFTLEVBRkQ7QUFHUkosZ0JBQVE7QUFIQTtBQVRKLEssUUFlUkssSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLLFFBR1BDLE8sR0FBVTtBQUNSQyxzQkFEUSw0QkFDVUMsQ0FEVixFQUNhO0FBQ25CLGFBQUtaLEtBQUwsR0FBYVksRUFBRUMsTUFBRixDQUFTYixLQUF0QjtBQUNBLGFBQUtJLEdBQUwsR0FBVyxLQUFLQyxRQUFMLENBQWNPLEVBQUVDLE1BQUYsQ0FBU2IsS0FBdkIsRUFBOEJjLEVBQXpDO0FBQ0EsYUFBS0wsSUFBTCxHQUFZLEtBQUtKLFFBQUwsQ0FBY08sRUFBRUMsTUFBRixDQUFTYixLQUF2QixFQUE4QlMsSUFBMUM7QUFDQSxhQUFLTSxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLWCxHQUF6QjtBQUNBLGFBQUtZLE1BQUw7QUFDRDtBQVBPLEssUUFTVkMsSyxHQUFRO0FBQ05qQixXQURNLG1CQUNHO0FBQ1AsYUFBSyxJQUFJa0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtiLFFBQUwsQ0FBY2MsTUFBbEMsRUFBMENELEdBQTFDLEVBQStDO0FBQzdDLGNBQUksS0FBS2IsUUFBTCxDQUFjYSxDQUFkLEVBQWlCSixFQUFqQixLQUF3QixLQUFLZCxLQUFqQyxFQUF3QztBQUN0QyxpQkFBS0ksR0FBTCxHQUFXLEtBQUtDLFFBQUwsQ0FBY2EsQ0FBZCxFQUFpQkosRUFBNUI7QUFDQSxpQkFBS0wsSUFBTCxHQUFZLEtBQUtKLFFBQUwsQ0FBY2EsQ0FBZCxFQUFpQlQsSUFBN0I7QUFDQSxpQkFBS08sTUFBTDtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBVkssSzs7OztFQTVCcUNJLGVBQUtDLFM7O2tCQUEvQnZCLGlCIiwiZmlsZSI6ImduYi10ZXh0Ym9va1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ25iV29va2Jvb2tTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICB2YWx1ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGtleToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHRleHRib29rOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgdHdvV2F5OiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBuYW1lOiAnJ1xyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy5rZXkgPSB0aGlzLnRleHRib29rW2UuZGV0YWlsLnZhbHVlXS5pZFxyXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnRleHRib29rW2UuZGV0YWlsLnZhbHVlXS5uYW1lXHJcbiAgICAgIHRoaXMuJGVtaXQoJ2V2ZW50JywgdGhpcy5rZXkpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiAgd2F0Y2ggPSB7XHJcbiAgICB2YWx1ZSAoKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Ym9vay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnRleHRib29rW2ldLmlkID09PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLmtleSA9IHRoaXMudGV4dGJvb2tbaV0uaWRcclxuICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMudGV4dGJvb2tbaV0ubmFtZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==