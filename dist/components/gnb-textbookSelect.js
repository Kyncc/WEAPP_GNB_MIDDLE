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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJnbmJXb29rYm9va1NlbGVjdCIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5Iiwia2V5IiwidGV4dGJvb2siLCJBcnJheSIsImRlZmF1bHQiLCJkYXRhIiwibmFtZSIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsImlkIiwiJGVtaXQiLCIkYXBwbHkiLCJ3YXRjaCIsImkiLCJsZW5ndGgiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNQyxNQUREO0FBRUxDLGdCQUFRO0FBRkgsT0FERDtBQUtOQyxXQUFLO0FBQ0hILGNBQU1DLE1BREg7QUFFSEMsZ0JBQVE7QUFGTCxPQUxDO0FBU05FLGdCQUFVO0FBQ1JKLGNBQU1LLEtBREU7QUFFUkMsaUJBQVMsRUFGRDtBQUdSSixnQkFBUTtBQUhBO0FBVEosSyxRQWVSSyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFHUEMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNVQyxDQURWLEVBQ2E7QUFDbkIsYUFBS1osS0FBTCxHQUFhWSxFQUFFQyxNQUFGLENBQVNiLEtBQXRCO0FBQ0EsYUFBS0ksR0FBTCxHQUFXLEtBQUtDLFFBQUwsQ0FBY08sRUFBRUMsTUFBRixDQUFTYixLQUF2QixFQUE4QmMsRUFBekM7QUFDQSxhQUFLTCxJQUFMLEdBQVksS0FBS0osUUFBTCxDQUFjTyxFQUFFQyxNQUFGLENBQVNiLEtBQXZCLEVBQThCUyxJQUExQztBQUNBLGFBQUtNLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEtBQUtYLEdBQXpCO0FBQ0EsYUFBS1ksTUFBTDtBQUNEO0FBUE8sSyxRQVNWQyxLLEdBQVE7QUFDTmpCLFdBRE0sbUJBQ0c7QUFDUCxhQUFLLElBQUlrQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2IsUUFBTCxDQUFjYyxNQUFsQyxFQUEwQ0QsR0FBMUMsRUFBK0M7QUFDN0MsY0FBSSxLQUFLYixRQUFMLENBQWNhLENBQWQsRUFBaUJKLEVBQWpCLEtBQXdCLEtBQUtkLEtBQWpDLEVBQXdDO0FBQ3RDLGlCQUFLSSxHQUFMLEdBQVcsS0FBS0MsUUFBTCxDQUFjYSxDQUFkLEVBQWlCSixFQUE1QjtBQUNBLGlCQUFLTCxJQUFMLEdBQVksS0FBS0osUUFBTCxDQUFjYSxDQUFkLEVBQWlCVCxJQUE3QjtBQUNBLGlCQUFLTyxNQUFMO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFWSyxLOzs7O0VBNUJxQyxlQUFLSSxTOztrQkFBL0J0QixpQiIsImZpbGUiOiJnbmItdGV4dGJvb2tTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGduYldvb2tib29rU2VsZWN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgdGV4dGJvb2s6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogW10sXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLmtleSA9IHRoaXMudGV4dGJvb2tbZS5kZXRhaWwudmFsdWVdLmlkXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnRleHRib29rW2UuZGV0YWlsLnZhbHVlXS5uYW1lXG4gICAgICB0aGlzLiRlbWl0KCdldmVudCcsIHRoaXMua2V5KVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuICB3YXRjaCA9IHtcbiAgICB2YWx1ZSAoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dGJvb2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dGJvb2tbaV0uaWQgPT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmtleSA9IHRoaXMudGV4dGJvb2tbaV0uaWRcbiAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnRleHRib29rW2ldLm5hbWVcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==