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
      title: {
        type: String,
        default: '当前选择'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJnbmJXb29rYm9va1NlbGVjdCIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5Iiwia2V5IiwidGl0bGUiLCJkZWZhdWx0IiwidGV4dGJvb2siLCJBcnJheSIsImRhdGEiLCJuYW1lIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiaWQiLCIkZW1pdCIsIiRhcHBseSIsIndhdGNoIiwiaSIsImxlbmd0aCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7Ozs0TUFDbkJDLEssR0FBUTtBQUNOQyxhQUFPO0FBQ0xDLGNBQU1DLE1BREQ7QUFFTEMsZ0JBQVE7QUFGSCxPQUREO0FBS05DLFdBQUs7QUFDSEgsY0FBTUMsTUFESDtBQUVIQyxnQkFBUTtBQUZMLE9BTEM7QUFTTkUsYUFBTztBQUNMSixjQUFNQyxNQUREO0FBRUxJLGlCQUFTO0FBRkosT0FURDtBQWFOQyxnQkFBVTtBQUNSTixjQUFNTyxLQURFO0FBRVJGLGlCQUFTLEVBRkQ7QUFHUkgsZ0JBQVE7QUFIQTtBQWJKLEssUUFtQlJNLEksR0FBTztBQUNMQyxZQUFNO0FBREQsSyxRQUdQQyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1VDLENBRFYsRUFDYTtBQUNuQixhQUFLYixLQUFMLEdBQWFhLEVBQUVDLE1BQUYsQ0FBU2QsS0FBdEI7QUFDQSxhQUFLSSxHQUFMLEdBQVcsS0FBS0csUUFBTCxDQUFjTSxFQUFFQyxNQUFGLENBQVNkLEtBQXZCLEVBQThCZSxFQUF6QztBQUNBLGFBQUtMLElBQUwsR0FBWSxLQUFLSCxRQUFMLENBQWNNLEVBQUVDLE1BQUYsQ0FBU2QsS0FBdkIsRUFBOEJVLElBQTFDO0FBQ0EsYUFBS00sS0FBTCxDQUFXLE9BQVgsRUFBb0IsS0FBS1osR0FBekI7QUFDQSxhQUFLYSxNQUFMO0FBQ0Q7QUFQTyxLLFFBU1ZDLEssR0FBUTtBQUNObEIsV0FETSxtQkFDRztBQUNQLGFBQUssSUFBSW1CLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLWixRQUFMLENBQWNhLE1BQWxDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3QyxjQUFJLEtBQUtaLFFBQUwsQ0FBY1ksQ0FBZCxFQUFpQkosRUFBakIsS0FBd0IsS0FBS2YsS0FBakMsRUFBd0M7QUFDdEMsaUJBQUtJLEdBQUwsR0FBVyxLQUFLRyxRQUFMLENBQWNZLENBQWQsRUFBaUJKLEVBQTVCO0FBQ0EsaUJBQUtMLElBQUwsR0FBWSxLQUFLSCxRQUFMLENBQWNZLENBQWQsRUFBaUJULElBQTdCO0FBQ0EsaUJBQUtPLE1BQUw7QUFDQTtBQUNEO0FBQ0Y7QUFDRjtBQVZLLEs7Ozs7RUFoQ3FDLGVBQUtJLFM7O2tCQUEvQnZCLGlCIiwiZmlsZSI6ImduYi10ZXh0Ym9va1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ25iV29va2Jvb2tTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICB2YWx1ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGtleToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJ+W9k+WJjemAieaLqSdcclxuICAgIH0sXHJcbiAgICB0ZXh0Ym9vazoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgbmFtZTogJydcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGJpbmRQaWNrZXJDaGFuZ2UgKGUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMua2V5ID0gdGhpcy50ZXh0Ym9va1tlLmRldGFpbC52YWx1ZV0uaWRcclxuICAgICAgdGhpcy5uYW1lID0gdGhpcy50ZXh0Ym9va1tlLmRldGFpbC52YWx1ZV0ubmFtZVxyXG4gICAgICB0aGlzLiRlbWl0KCdldmVudCcsIHRoaXMua2V5KVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHdhdGNoID0ge1xyXG4gICAgdmFsdWUgKCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dGJvb2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0Ym9va1tpXS5pZCA9PT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5rZXkgPSB0aGlzLnRleHRib29rW2ldLmlkXHJcbiAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnRleHRib29rW2ldLm5hbWVcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=