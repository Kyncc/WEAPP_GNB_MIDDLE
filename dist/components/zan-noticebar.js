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

var zanNoticebar = function (_wepy$component) {
  _inherits(zanNoticebar, _wepy$component);

  function zanNoticebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanNoticebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanNoticebar.__proto__ || Object.getPrototypeOf(zanNoticebar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: String,
      text: String
    }, _this.data = {
      animationData: {},
      currentComponent: {}
    }, _this.methods = {
      initZanNoticeBarScroll: function initZanNoticeBarScroll() {
        var _this2 = this;

        var componentId = this.componentId;
        var currentComponent = {
          width: undefined,
          wrapWidth: undefined,
          animation: null,
          resetAnimation: null
        };
        wx.createSelectorQuery().select('#' + componentId + '__content').boundingClientRect(function (rect) {
          if (rect.width) {
            currentComponent.width = rect.width;
            wx.createSelectorQuery().select('#' + componentId + '__content-wrap').boundingClientRect(function (rect) {
              currentComponent.wrapWidth = rect.width;
              if (currentComponent.wrapWidth < currentComponent.width) {
                var mstime = currentComponent.width / 40 * 1000;
                currentComponent.animation = wx.createAnimation({
                  duration: mstime,
                  timingFunction: 'linear'
                });
                currentComponent.resetAnimation = wx.createAnimation({
                  duration: 0,
                  timingFunction: 'linear'
                });
                _this2.currentComponent = currentComponent;
                _this2.methods.scrollZanNoticeBar.call(_this2, componentId, mstime);
              }
            }).exec();
          } else {
            console.warn('页面缺少 noticebar 元素');
          }
        }).exec();
      },
      scrollZanNoticeBar: function scrollZanNoticeBar(componentId, mstime) {
        var _this3 = this;

        var currentComponent = this.currentComponent;
        var resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step();
        this.animationData = resetAnimationData.export();
        this.$apply();
        var aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step();
        setTimeout(function () {
          _this3.animationData = aninationData.export();
          _this3.$apply();
        }, 100);

        setTimeout(function () {
          _this3.methods.scrollZanNoticeBar.call(_this3, componentId, mstime);
        }, mstime);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanNoticebar;
}(_wepy2.default.component);

exports.default = zanNoticebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1ub3RpY2ViYXIuanMiXSwibmFtZXMiOlsiemFuTm90aWNlYmFyIiwicHJvcHMiLCJjb21wb25lbnRJZCIsIlN0cmluZyIsInRleHQiLCJkYXRhIiwiYW5pbWF0aW9uRGF0YSIsImN1cnJlbnRDb21wb25lbnQiLCJtZXRob2RzIiwiaW5pdFphbk5vdGljZUJhclNjcm9sbCIsIndpZHRoIiwidW5kZWZpbmVkIiwid3JhcFdpZHRoIiwiYW5pbWF0aW9uIiwicmVzZXRBbmltYXRpb24iLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwibXN0aW1lIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInNjcm9sbFphbk5vdGljZUJhciIsImNhbGwiLCJleGVjIiwiY29uc29sZSIsIndhcm4iLCJyZXNldEFuaW1hdGlvbkRhdGEiLCJ0cmFuc2xhdGVYIiwic3RlcCIsImV4cG9ydCIsIiRhcHBseSIsImFuaW5hdGlvbkRhdGEiLCJzZXRUaW1lb3V0Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSyxHQUFRO0FBQ05DLG1CQUFhQyxNQURQO0FBRU5DLFlBQU1EO0FBRkEsSyxRQUlSRSxJLEdBQU87QUFDTEMscUJBQWUsRUFEVjtBQUVMQyx3QkFBa0I7QUFGYixLLFFBSVBDLE8sR0FBVTtBQUNSQyw0QkFEUSxvQ0FDaUI7QUFBQTs7QUFDdkIsWUFBSVAsY0FBYyxLQUFLQSxXQUF2QjtBQUNBLFlBQUlLLG1CQUFtQjtBQUNyQkcsaUJBQU9DLFNBRGM7QUFFckJDLHFCQUFXRCxTQUZVO0FBR3JCRSxxQkFBVyxJQUhVO0FBSXJCQywwQkFBZ0I7QUFKSyxTQUF2QjtBQU1BQyxXQUNHQyxtQkFESCxHQUVHQyxNQUZILE9BRWNmLFdBRmQsZ0JBR0dnQixrQkFISCxDQUdzQixnQkFBUTtBQUMxQixjQUFJQyxLQUFLVCxLQUFULEVBQWdCO0FBQ2RILDZCQUFpQkcsS0FBakIsR0FBeUJTLEtBQUtULEtBQTlCO0FBQ0FLLGVBQ0dDLG1CQURILEdBRUdDLE1BRkgsT0FFY2YsV0FGZCxxQkFHR2dCLGtCQUhILENBR3NCLGdCQUFRO0FBQzFCWCwrQkFBaUJLLFNBQWpCLEdBQTZCTyxLQUFLVCxLQUFsQztBQUNBLGtCQUFJSCxpQkFBaUJLLFNBQWpCLEdBQTZCTCxpQkFBaUJHLEtBQWxELEVBQXlEO0FBQ3ZELG9CQUFJVSxTQUFTYixpQkFBaUJHLEtBQWpCLEdBQXlCLEVBQXpCLEdBQThCLElBQTNDO0FBQ0FILGlDQUFpQk0sU0FBakIsR0FBNkJFLEdBQUdNLGVBQUgsQ0FBbUI7QUFDOUNDLDRCQUFVRixNQURvQztBQUU5Q0csa0NBQWdCO0FBRjhCLGlCQUFuQixDQUE3QjtBQUlBaEIsaUNBQWlCTyxjQUFqQixHQUFrQ0MsR0FBR00sZUFBSCxDQUFtQjtBQUNuREMsNEJBQVUsQ0FEeUM7QUFFbkRDLGtDQUFnQjtBQUZtQyxpQkFBbkIsQ0FBbEM7QUFJQSx1QkFBS2hCLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSx1QkFBS0MsT0FBTCxDQUFhZ0Isa0JBQWIsQ0FBZ0NDLElBQWhDLENBQXFDLE1BQXJDLEVBQTJDdkIsV0FBM0MsRUFBd0RrQixNQUF4RDtBQUNEO0FBQ0YsYUFsQkgsRUFtQkdNLElBbkJIO0FBb0JELFdBdEJELE1Bc0JPO0FBQ0xDLG9CQUFRQyxJQUFSLENBQWEsbUJBQWI7QUFDRDtBQUNGLFNBN0JILEVBOEJHRixJQTlCSDtBQStCRCxPQXhDTztBQTBDUkYsd0JBMUNRLDhCQTBDV3RCLFdBMUNYLEVBMEN3QmtCLE1BMUN4QixFQTBDZ0M7QUFBQTs7QUFDdEMsWUFBSWIsbUJBQW1CLEtBQUtBLGdCQUE1QjtBQUNBLFlBQUlzQixxQkFBcUJ0QixpQkFBaUJPLGNBQWpCLENBQWdDZ0IsVUFBaEMsQ0FBMkN2QixpQkFBaUJLLFNBQTVELEVBQXVFbUIsSUFBdkUsRUFBekI7QUFDQSxhQUFLekIsYUFBTCxHQUFxQnVCLG1CQUFtQkcsTUFBbkIsRUFBckI7QUFDQSxhQUFLQyxNQUFMO0FBQ0EsWUFBSUMsZ0JBQWdCM0IsaUJBQWlCTSxTQUFqQixDQUEyQmlCLFVBQTNCLENBQXNDLENBQUNWLE1BQUQsR0FBVSxFQUFWLEdBQWUsSUFBckQsRUFBMkRXLElBQTNELEVBQXBCO0FBQ0FJLG1CQUFXLFlBQU07QUFDZixpQkFBSzdCLGFBQUwsR0FBcUI0QixjQUFjRixNQUFkLEVBQXJCO0FBQ0EsaUJBQUtDLE1BQUw7QUFDRCxTQUhELEVBR0csR0FISDs7QUFLQUUsbUJBQVcsWUFBTTtBQUNmLGlCQUFLM0IsT0FBTCxDQUFhZ0Isa0JBQWIsQ0FBZ0NDLElBQWhDLENBQXFDLE1BQXJDLEVBQTJDdkIsV0FBM0MsRUFBd0RrQixNQUF4RDtBQUNELFNBRkQsRUFFR0EsTUFGSDtBQUdEO0FBeERPLEs7Ozs7RUFUOEJnQixlQUFLQyxTOztrQkFBMUJyQyxZIiwiZmlsZSI6Inphbi1ub3RpY2ViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHphbk5vdGljZWJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgY29tcG9uZW50SWQ6IFN0cmluZyxcbiAgICB0ZXh0OiBTdHJpbmdcbiAgfVxuICBkYXRhID0ge1xuICAgIGFuaW1hdGlvbkRhdGE6IHt9LFxuICAgIGN1cnJlbnRDb21wb25lbnQ6IHt9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBpbml0WmFuTm90aWNlQmFyU2Nyb2xsKCkge1xuICAgICAgbGV0IGNvbXBvbmVudElkID0gdGhpcy5jb21wb25lbnRJZFxuICAgICAgbGV0IGN1cnJlbnRDb21wb25lbnQgPSB7XG4gICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIHdyYXBXaWR0aDogdW5kZWZpbmVkLFxuICAgICAgICBhbmltYXRpb246IG51bGwsXG4gICAgICAgIHJlc2V0QW5pbWF0aW9uOiBudWxsXG4gICAgICB9XG4gICAgICB3eFxuICAgICAgICAuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICAgIC5zZWxlY3QoYCMke2NvbXBvbmVudElkfV9fY29udGVudGApXG4gICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QocmVjdCA9PiB7XG4gICAgICAgICAgaWYgKHJlY3Qud2lkdGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQud2lkdGggPSByZWN0LndpZHRoXG4gICAgICAgICAgICB3eFxuICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICAgICAgICAgIC5zZWxlY3QoYCMke2NvbXBvbmVudElkfV9fY29udGVudC13cmFwYClcbiAgICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LndyYXBXaWR0aCA9IHJlY3Qud2lkdGhcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudC53cmFwV2lkdGggPCBjdXJyZW50Q29tcG9uZW50LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgbXN0aW1lID0gY3VycmVudENvbXBvbmVudC53aWR0aCAvIDQwICogMTAwMFxuICAgICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5hbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogbXN0aW1lLFxuICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcidcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnJlc2V0QW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5zY3JvbGxaYW5Ob3RpY2VCYXIuY2FsbCh0aGlzLCBjb21wb25lbnRJZCwgbXN0aW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmV4ZWMoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ+mhtemdoue8uuWwkSBub3RpY2ViYXIg5YWD57SgJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5leGVjKClcbiAgICB9LFxuXG4gICAgc2Nyb2xsWmFuTm90aWNlQmFyKGNvbXBvbmVudElkLCBtc3RpbWUpIHtcbiAgICAgIGxldCBjdXJyZW50Q29tcG9uZW50ID0gdGhpcy5jdXJyZW50Q29tcG9uZW50XG4gICAgICBsZXQgcmVzZXRBbmltYXRpb25EYXRhID0gY3VycmVudENvbXBvbmVudC5yZXNldEFuaW1hdGlvbi50cmFuc2xhdGVYKGN1cnJlbnRDb21wb25lbnQud3JhcFdpZHRoKS5zdGVwKClcbiAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IHJlc2V0QW5pbWF0aW9uRGF0YS5leHBvcnQoKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgbGV0IGFuaW5hdGlvbkRhdGEgPSBjdXJyZW50Q29tcG9uZW50LmFuaW1hdGlvbi50cmFuc2xhdGVYKC1tc3RpbWUgKiA0MCAvIDEwMDApLnN0ZXAoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW5hdGlvbkRhdGEuZXhwb3J0KClcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMTAwKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5tZXRob2RzLnNjcm9sbFphbk5vdGljZUJhci5jYWxsKHRoaXMsIGNvbXBvbmVudElkLCBtc3RpbWUpXG4gICAgICB9LCBtc3RpbWUpXG4gICAgfVxuICB9XG59XG4iXX0=