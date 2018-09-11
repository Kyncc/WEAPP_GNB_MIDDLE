'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanNoticebar = require('./../../components/zan-noticebar.js');

var _zanNoticebar2 = _interopRequireDefault(_zanNoticebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookExercise = function (_wepy$page) {
  _inherits(WorkbookExercise, _wepy$page);

  function WorkbookExercise() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookExercise);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookExercise.__proto__ || Object.getPrototypeOf(WorkbookExercise)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "zanNoticebar1": { "xmlns:v-bind": "", "v-bind:text.once": "longText", "componentId": "static1" } }, _this.$events = {}, _this.components = {
      zanNoticebar1: _zanNoticebar2.default
    }, _this.data = {
      name: '',
      longText: '点错题题号完成记错，提交作业查看我的错题',
      charpterId: '',
      exercise: []
    }, _this.methods = {
      /** 上传错题 */
      _upload: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var answerId, answer, allCorrect, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, nodes, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, questions;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  answerId = []; // 题目ID数组

                  answer = []; // 题目答案数组

                  allCorrect = true; // 全部为真的判断

                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 6;
                  _iterator = this.exercise.nodes[Symbol.iterator]();

                case 8:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 32;
                    break;
                  }

                  nodes = _step.value;
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context.prev = 13;

                  for (_iterator2 = nodes.questions[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    questions = _step2.value;

                    answerId.push(questions.id);
                    answer.push(questions.answer);
                    if (!questions.answer) allCorrect = false;
                  }
                  _context.next = 21;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context['catch'](13);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context.t0;

                case 21:
                  _context.prev = 21;
                  _context.prev = 22;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 24:
                  _context.prev = 24;

                  if (!_didIteratorError2) {
                    _context.next = 27;
                    break;
                  }

                  throw _iteratorError2;

                case 27:
                  return _context.finish(24);

                case 28:
                  return _context.finish(21);

                case 29:
                  _iteratorNormalCompletion = true;
                  _context.next = 8;
                  break;

                case 32:
                  _context.next = 38;
                  break;

                case 34:
                  _context.prev = 34;
                  _context.t1 = _context['catch'](6);
                  _didIteratorError = true;
                  _iteratorError = _context.t1;

                case 38:
                  _context.prev = 38;
                  _context.prev = 39;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 41:
                  _context.prev = 41;

                  if (!_didIteratorError) {
                    _context.next = 44;
                    break;
                  }

                  throw _iteratorError;

                case 44:
                  return _context.finish(41);

                case 45:
                  return _context.finish(38);

                case 46:
                  _context.next = 48;
                  return this._setExerciseResult(answerId, answer, this.charpterId);

                case 48:
                  if (allCorrect) {
                    _wepy2.default.redirectTo({ url: '/pages/workbook/correct?id=' + this.charpterId + '&name=' + this.name });
                  } else {
                    _wepy2.default.redirectTo({ url: '/pages/workbook/error?id=' + this.charpterId + '&name=' + this.name });
                  }

                case 49:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[6, 34, 38, 46], [13, 17, 21, 29], [22,, 24, 28], [39,, 41, 45]]);
        }));

        function _upload() {
          return _ref2.apply(this, arguments);
        }

        return _upload;
      }(),

      /** 记错的切换 */
      _change: function _change(pindex, index) {
        var answer = this.exercise.nodes[pindex]['questions'][index]['answer'];
        this.exercise.nodes[pindex]['questions'][index]['answer'] = !answer;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookExercise, [{
    key: '_getExercise',


    /** 获取章节习题 */
    value: function _getExercise(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/workbook/chapter/exercise',
          data: {
            chapterId: id
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

    /** 设置练习结果 */

  }, {
    key: '_setExerciseResult',
    value: function _setExerciseResult(ids, answers, chapterId) {
      _wepy2.default.showLoading({ title: '提交中' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/workbook/chapter/setExercise',
          method: 'POST',
          data: {
            chapterId: chapterId,
            answer: answers,
            answerId: ids
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                this.charpterId = options.id;
                this.name = options.name;
                _context2.next = 5;
                return this._getExercise(options.id);

              case 5:
                this.exercise = _context2.sent;

                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
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

  return WorkbookExercise;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookExercise , 'pages/workbook/exercise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiemFuTm90aWNlYmFyIiwiZGF0YSIsIm5hbWUiLCJsb25nVGV4dCIsImNoYXJwdGVySWQiLCJleGVyY2lzZSIsIm1ldGhvZHMiLCJfdXBsb2FkIiwiYW5zd2VySWQiLCJhbnN3ZXIiLCJhbGxDb3JyZWN0Iiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJ3ZXB5IiwicmVkaXJlY3RUbyIsInVybCIsIl9jaGFuZ2UiLCJwaW5kZXgiLCJpbmRleCIsIiRhcHBseSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsImNoYXB0ZXJJZCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwiaWRzIiwiYW5zd2VycyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtZXRob2QiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwib3B0aW9ucyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiX2dldEV4ZXJjaXNlIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELGVBQWMsU0FBL0QsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMscUJBQWVDO0FBREwsSyxRQUlaQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVLHNCQUZMO0FBR0xDLGtCQUFZLEVBSFA7QUFJTEMsZ0JBQVU7QUFKTCxLLFFBT1BDLE8sR0FBVTtBQUNSO0FBQ01DLGFBRkU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0ZDLDBCQUhFLEdBR1MsRUFIVCxFQUdZOztBQUNkQyx3QkFKRSxHQUlPLEVBSlAsRUFJVTs7QUFDWkMsNEJBTEUsR0FLVyxJQUxYLEVBS2dCOztBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQU1ZLEtBQUtMLFFBQUwsQ0FBY00sS0FOMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNR0EsdUJBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPSixvQ0FBc0JBLE1BQU1DLFNBQTVCLDJIQUF1QztBQUE5QkEsNkJBQThCOztBQUNyQ0osNkJBQVNLLElBQVQsQ0FBY0QsVUFBVUUsRUFBeEI7QUFDQUwsMkJBQU9JLElBQVAsQ0FBWUQsVUFBVUgsTUFBdEI7QUFDQSx3QkFBSSxDQUFDRyxVQUFVSCxNQUFmLEVBQXVCQyxhQUFhLEtBQWI7QUFDeEI7QUFYRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx5QkFhQSxLQUFLSyxrQkFBTCxDQUF3QlAsUUFBeEIsRUFBa0NDLE1BQWxDLEVBQTBDLEtBQUtMLFVBQS9DLENBYkE7O0FBQUE7QUFjTixzQkFBSU0sVUFBSixFQUFnQjtBQUNkTSxtQ0FBS0MsVUFBTCxDQUFnQixFQUFFQyxxQ0FBbUMsS0FBS2QsVUFBeEMsY0FBMkQsS0FBS0YsSUFBbEUsRUFBaEI7QUFDRCxtQkFGRCxNQUVPO0FBQ0xjLG1DQUFLQyxVQUFMLENBQWdCLEVBQUVDLG1DQUFpQyxLQUFLZCxVQUF0QyxjQUF5RCxLQUFLRixJQUFoRSxFQUFoQjtBQUNEOztBQWxCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFvQlI7QUFDQWlCLGFBckJRLG1CQXFCQ0MsTUFyQkQsRUFxQlNDLEtBckJULEVBcUJnQjtBQUN0QixZQUFJWixTQUFTLEtBQUtKLFFBQUwsQ0FBY00sS0FBZCxDQUFvQlMsTUFBcEIsRUFBNEIsV0FBNUIsRUFBeUNDLEtBQXpDLEVBQWdELFFBQWhELENBQWI7QUFDQSxhQUFLaEIsUUFBTCxDQUFjTSxLQUFkLENBQW9CUyxNQUFwQixFQUE0QixXQUE1QixFQUF5Q0MsS0FBekMsRUFBZ0QsUUFBaEQsSUFBNEQsQ0FBQ1osTUFBN0Q7QUFDQSxhQUFLYSxNQUFMO0FBQ0Q7QUF6Qk8sSzs7Ozs7OztBQTRCVjtpQ0FDY1IsRSxFQUFJO0FBQ2hCLGFBQU8sSUFBSVMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1QsdUJBQUtVLE9BQUwsQ0FBYTtBQUNYUixlQUFLLG9EQURNO0FBRVhqQixnQkFBTTtBQUNKMEIsdUJBQVdiO0FBRFAsV0FGSztBQUtYYyxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FQVTtBQVFYQyxjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJNLENBQVA7QUFjRDs7QUFFRDs7Ozt1Q0FDb0JDLEcsRUFBS0MsTyxFQUFTTixTLEVBQVc7QUFDM0NYLHFCQUFLa0IsV0FBTCxDQUFpQixFQUFFQyxPQUFPLEtBQVQsRUFBakI7QUFDQSxhQUFPLElBQUlaLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENULHVCQUFLVSxPQUFMLENBQWE7QUFDWFIsZUFBSyx1REFETTtBQUVYa0Isa0JBQVEsTUFGRztBQUdYbkMsZ0JBQU07QUFDSjBCLHVCQUFXQSxTQURQO0FBRUpsQixvQkFBUXdCLE9BRko7QUFHSnpCLHNCQUFVd0I7QUFITixXQUhLO0FBUVhKLGlCQVJXLG1CQVFGQyxHQVJFLEVBUUc7QUFDWkwsb0JBQVFLLEdBQVI7QUFDRCxXQVZVO0FBV1hDLGNBWFcsZ0JBV0xDLEdBWEssRUFXQTtBQUNUTixtQkFBT00sR0FBUDtBQUNELFdBYlU7QUFjWE0sa0JBZFcsc0JBY0M7QUFDVnJCLDJCQUFLc0IsV0FBTDtBQUNEO0FBaEJVLFNBQWI7QUFrQkQsT0FuQk0sQ0FBUDtBQW9CRDs7Ozs0RkFFWUMsTzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUVOLE9BQU9JLFFBQVFyQyxJQUFqQixFQUF6QjtBQUNBLHFCQUFLRSxVQUFMLEdBQWtCbUMsUUFBUXpCLEVBQTFCO0FBQ0EscUJBQUtaLElBQUwsR0FBWXFDLFFBQVFyQyxJQUFwQjs7dUJBQ3NCLEtBQUt3QyxZQUFMLENBQWtCSCxRQUFRekIsRUFBMUIsQzs7O0FBQXRCLHFCQUFLVCxROztBQUNMLHFCQUFLaUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdpQk8sRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUljLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWWhCLElBQUlpQixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMWCxlQUFPLG9CQURGO0FBRUxZLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF2RzJDaEMsZUFBS2lDLEk7O2tCQUE5QnZELGdCIiwiZmlsZSI6ImV4ZXJjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbk5vdGljZWJhciBmcm9tICdAL2NvbXBvbmVudHMvemFuLW5vdGljZWJhcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tFeGVyY2lzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Ob3RpY2ViYXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0ZXh0Lm9uY2VcIjpcImxvbmdUZXh0XCIsXCJjb21wb25lbnRJZFwiOlwic3RhdGljMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgemFuTm90aWNlYmFyMTogemFuTm90aWNlYmFyXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGxvbmdUZXh0OiAn54K56ZSZ6aKY6aKY5Y+35a6M5oiQ6K6w6ZSZ77yM5o+Q5Lqk5L2c5Lia5p+l55yL5oiR55qE6ZSZ6aKYJyxcbiAgICBjaGFycHRlcklkOiAnJyxcbiAgICBleGVyY2lzZTogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqIOS4iuS8oOmUmemimCAqL1xuICAgIGFzeW5jIF91cGxvYWQgKCkge1xuICAgICAgbGV0IGFuc3dlcklkID0gW10gLy8g6aKY55uuSUTmlbDnu4RcbiAgICAgIGxldCBhbnN3ZXIgPSBbXSAvLyDpopjnm67nrZTmoYjmlbDnu4RcbiAgICAgIGxldCBhbGxDb3JyZWN0ID0gdHJ1ZSAvLyDlhajpg6jkuLrnnJ/nmoTliKTmlq1cbiAgICAgIGZvciAobGV0IG5vZGVzIG9mIHRoaXMuZXhlcmNpc2Uubm9kZXMpIHtcbiAgICAgICAgZm9yIChsZXQgcXVlc3Rpb25zIG9mIG5vZGVzLnF1ZXN0aW9ucykge1xuICAgICAgICAgIGFuc3dlcklkLnB1c2gocXVlc3Rpb25zLmlkKVxuICAgICAgICAgIGFuc3dlci5wdXNoKHF1ZXN0aW9ucy5hbnN3ZXIpXG4gICAgICAgICAgaWYgKCFxdWVzdGlvbnMuYW5zd2VyKSBhbGxDb3JyZWN0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fc2V0RXhlcmNpc2VSZXN1bHQoYW5zd2VySWQsIGFuc3dlciwgdGhpcy5jaGFycHRlcklkKVxuICAgICAgaWYgKGFsbENvcnJlY3QpIHtcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHsgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2NvcnJlY3Q/aWQ9JHt0aGlzLmNoYXJwdGVySWR9Jm5hbWU9JHt0aGlzLm5hbWV9YCB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHsgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2Vycm9yP2lkPSR7dGhpcy5jaGFycHRlcklkfSZuYW1lPSR7dGhpcy5uYW1lfWAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKiDorrDplJnnmoTliIfmjaIgKi9cbiAgICBfY2hhbmdlIChwaW5kZXgsIGluZGV4KSB7XG4gICAgICBsZXQgYW5zd2VyID0gdGhpcy5leGVyY2lzZS5ub2Rlc1twaW5kZXhdWydxdWVzdGlvbnMnXVtpbmRleF1bJ2Fuc3dlciddXG4gICAgICB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ10gPSAhYW5zd2VyXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPlueroOiKguS5oOmimCAqL1xuICBfZ2V0RXhlcmNpc2UgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS93b3JrYm9vay9jaGFwdGVyL2V4ZXJjaXNlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDorr7nva7nu4PkuaDnu5PmnpwgKi9cbiAgX3NldEV4ZXJjaXNlUmVzdWx0IChpZHMsIGFuc3dlcnMsIGNoYXB0ZXJJZCkge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+aPkOS6pOS4rScgfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvc2V0RXhlcmNpc2UnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogY2hhcHRlcklkLFxuICAgICAgICAgIGFuc3dlcjogYW5zd2VycyxcbiAgICAgICAgICBhbnN3ZXJJZDogaWRzXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6IG9wdGlvbnMubmFtZSB9KVxuICAgIHRoaXMuY2hhcnB0ZXJJZCA9IG9wdGlvbnMuaWRcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWVcbiAgICB0aGlzLmV4ZXJjaXNlID0gYXdhaXQgdGhpcy5fZ2V0RXhlcmNpc2Uob3B0aW9ucy5pZClcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==