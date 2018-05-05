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
          url: 'https://mid.guinaben.com/v2/workbook/chapter/exercise',
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
          url: 'https://mid.guinaben.com/v2/workbook/chapter/setExercise',
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
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookExercise;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookExercise , 'pages/workbook/exercise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiZGF0YSIsIm5hbWUiLCJsb25nVGV4dCIsImNoYXJwdGVySWQiLCJleGVyY2lzZSIsIm1ldGhvZHMiLCJfdXBsb2FkIiwiYW5zd2VySWQiLCJhbnN3ZXIiLCJhbGxDb3JyZWN0Iiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJyZWRpcmVjdFRvIiwidXJsIiwiX2NoYW5nZSIsInBpbmRleCIsImluZGV4IiwiJGFwcGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJpZHMiLCJhbnN3ZXJzIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1ldGhvZCIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJfZ2V0RXhlcmNpc2UiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7ME1BQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsVUFBdEMsRUFBaUQsZUFBYyxTQUEvRCxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxnQkFBVSxzQkFGTDtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLGdCQUFVO0FBSkwsSyxRQU9Q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RE07QUFFWGtCLGtCQUFRLE1BRkc7QUFHWGxDLGdCQUFNO0FBQ0p5Qix1QkFBV0EsU0FEUDtBQUVKakIsb0JBQVF1QixPQUZKO0FBR0p4QixzQkFBVXVCO0FBSE4sV0FISztBQVFYSixpQkFSVyxtQkFRRkMsR0FSRSxFQVFHO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FWVTtBQVdYQyxjQVhXLGdCQVdMQyxHQVhLLEVBV0E7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRCxXQWJVO0FBY1hNLGtCQWRXLHNCQWNDO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQWhCVSxTQUFiO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7Ozs7NEZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFFTixPQUFPSSxRQUFRcEMsSUFBakIsRUFBekI7QUFDQSxxQkFBS0UsVUFBTCxHQUFrQmtDLFFBQVF4QixFQUExQjtBQUNBLHFCQUFLWixJQUFMLEdBQVlvQyxRQUFRcEMsSUFBcEI7O3VCQUNzQixLQUFLdUMsWUFBTCxDQUFrQkgsUUFBUXhCLEVBQTFCLEM7OztBQUF0QixxQkFBS1QsUTs7QUFDTCxxQkFBS2dCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJPLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJYyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVloQixJQUFJaUIsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTFgsZUFBTyxvQkFERjtBQUVMWSxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBdkcyQyxlQUFLQyxJOztrQkFBOUJyRCxnQiIsImZpbGUiOiJleGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgemFuTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbm90aWNlYmFyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tFeGVyY2lzZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRleHQub25jZVwiOlwibG9uZ1RleHRcIixcImNvbXBvbmVudElkXCI6XCJzdGF0aWMxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhclxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgbG9uZ1RleHQ6ICfngrnplJnpopjpopjlj7flrozmiJDorrDplJnvvIzmj5DkuqTkvZzkuJrmn6XnnIvmiJHnmoTplJnpopgnLFxyXG4gICAgY2hhcnB0ZXJJZDogJycsXHJcbiAgICBleGVyY2lzZTogW11cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvKiog5LiK5Lyg6ZSZ6aKYICovXHJcbiAgICBhc3luYyBfdXBsb2FkICgpIHtcclxuICAgICAgbGV0IGFuc3dlcklkID0gW10gICAgIC8vIOmimOebrklE5pWw57uEXHJcbiAgICAgIGxldCBhbnN3ZXIgPSBbXSAgICAgICAvLyDpopjnm67nrZTmoYjmlbDnu4RcclxuICAgICAgbGV0IGFsbENvcnJlY3QgPSB0cnVlIC8vIOWFqOmDqOS4uuecn+eahOWIpOaWrVxyXG4gICAgICBmb3IgKGxldCBub2RlcyBvZiB0aGlzLmV4ZXJjaXNlLm5vZGVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcXVlc3Rpb25zIG9mIG5vZGVzLnF1ZXN0aW9ucykge1xyXG4gICAgICAgICAgYW5zd2VySWQucHVzaChxdWVzdGlvbnMuaWQpXHJcbiAgICAgICAgICBhbnN3ZXIucHVzaChxdWVzdGlvbnMuYW5zd2VyKVxyXG4gICAgICAgICAgaWYgKCFxdWVzdGlvbnMuYW5zd2VyKSBhbGxDb3JyZWN0ID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy5fc2V0RXhlcmNpc2VSZXN1bHQoYW5zd2VySWQsIGFuc3dlciwgdGhpcy5jaGFycHRlcklkKVxyXG4gICAgICBpZiAoYWxsQ29ycmVjdCkge1xyXG4gICAgICAgIHdlcHkucmVkaXJlY3RUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2NvcnJlY3Q/aWQ9JHt0aGlzLmNoYXJwdGVySWR9Jm5hbWU9JHt0aGlzLm5hbWV9YH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXJyb3I/aWQ9JHt0aGlzLmNoYXJwdGVySWR9Jm5hbWU9JHt0aGlzLm5hbWV9YH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKiog6K6w6ZSZ55qE5YiH5o2iICovXHJcbiAgICBfY2hhbmdlIChwaW5kZXgsIGluZGV4KSB7XHJcbiAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ11cclxuICAgICAgdGhpcy5leGVyY2lzZS5ub2Rlc1twaW5kZXhdWydxdWVzdGlvbnMnXVtpbmRleF1bJ2Fuc3dlciddID0gIWFuc3dlclxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+W56ug6IqC5Lmg6aKYICovXHJcbiAgX2dldEV4ZXJjaXNlIChpZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svY2hhcHRlci9leGVyY2lzZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY2hhcHRlcklkOiBpZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9rue7g+S5oOe7k+aenCAqL1xyXG4gIF9zZXRFeGVyY2lzZVJlc3VsdCAoaWRzLCBhbnN3ZXJzLCBjaGFwdGVySWQpIHtcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn5o+Q5Lqk5LitJ30pXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vay9jaGFwdGVyL3NldEV4ZXJjaXNlJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjaGFwdGVySWQ6IGNoYXB0ZXJJZCxcclxuICAgICAgICAgIGFuc3dlcjogYW5zd2VycyxcclxuICAgICAgICAgIGFuc3dlcklkOiBpZHNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7IHRpdGxlOiBvcHRpb25zLm5hbWUgfSlcclxuICAgIHRoaXMuY2hhcnB0ZXJJZCA9IG9wdGlvbnMuaWRcclxuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxyXG4gICAgdGhpcy5leGVyY2lzZSA9IGF3YWl0IHRoaXMuX2dldEV4ZXJjaXNlKG9wdGlvbnMuaWQpXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XHJcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=