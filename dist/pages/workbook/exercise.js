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
          url: 'https://mid.guinaben.com/workbook/chapter/exercise',
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
          url: 'https://mid.guinaben.com/workbook/chapter/setExercise',
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
        title: '各位家长，用这个记错题，速度快，用处大',
        path: '/pages/my/index'
      };
    }
  }]);

  return WorkbookExercise;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookExercise , 'pages/workbook/exercise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiZGF0YSIsIm5hbWUiLCJsb25nVGV4dCIsImNoYXJwdGVySWQiLCJleGVyY2lzZSIsIm1ldGhvZHMiLCJfdXBsb2FkIiwiYW5zd2VySWQiLCJhbnN3ZXIiLCJhbGxDb3JyZWN0Iiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJyZWRpcmVjdFRvIiwidXJsIiwiX2NoYW5nZSIsInBpbmRleCIsImluZGV4IiwiJGFwcGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJpZHMiLCJhbnN3ZXJzIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1ldGhvZCIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJfZ2V0RXhlcmNpc2UiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELGVBQWMsU0FBL0QsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBSVpDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsZ0JBQVUsc0JBRkw7QUFHTEMsa0JBQVksRUFIUDtBQUlMQyxnQkFBVTtBQUpMLEssUUFPUEMsTyxHQUFVO0FB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QkFBUSxNQUZHO0FBR1hsQyxnQkFBTTtBQUNKeUIsdUJBQVdBLFNBRFA7QUFFSmpCLG9CQUFRdUIsT0FGSjtBQUdKeEIsc0JBQVV1QjtBQUhOLFdBSEs7QUFRWEosaUJBUlcsbUJBUUZDLEdBUkUsRUFRRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBVlU7QUFXWEMsY0FYVyxnQkFXTEMsR0FYSyxFQVdBO0FBQ1ROLG1CQUFPTSxHQUFQO0FBQ0QsV0FiVTtBQWNYTSxrQkFkVyxzQkFjQztBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFoQlUsU0FBYjtBQWtCRCxPQW5CTSxDQUFQO0FBb0JEOzs7OzRGQUVZQyxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBRU4sT0FBT0ksUUFBUXBDLElBQWpCLEVBQXpCO0FBQ0EscUJBQUtFLFVBQUwsR0FBa0JrQyxRQUFReEIsRUFBMUI7QUFDQSxxQkFBS1osSUFBTCxHQUFZb0MsUUFBUXBDLElBQXBCOzt1QkFDc0IsS0FBS3VDLFlBQUwsQ0FBa0JILFFBQVF4QixFQUExQixDOzs7QUFBdEIscUJBQUtULFE7O0FBQ0wscUJBQUtnQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2lCTyxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSWMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCQyxnQkFBUUMsR0FBUixDQUFZaEIsSUFBSWlCLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xYLGVBQU8scUJBREY7QUFFTFksY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQXRHMkMsZUFBS0MsSTs7a0JBQTlCcEQsZ0IiLCJmaWxlIjoiZXhlcmNpc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgemFuTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbm90aWNlYmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0V4ZXJjaXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRleHQub25jZVwiOlwibG9uZ1RleHRcIixcImNvbXBvbmVudElkXCI6XCJzdGF0aWMxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICB6YW5Ob3RpY2ViYXIxOiB6YW5Ob3RpY2ViYXJcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgbG9uZ1RleHQ6ICfngrnplJnpopjpopjlj7flrozmiJDorrDplJnvvIzmj5DkuqTkvZzkuJrmn6XnnIvmiJHnmoTplJnpopgnLFxuICAgIGNoYXJwdGVySWQ6ICcnLFxuICAgIGV4ZXJjaXNlOiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5LiK5Lyg6ZSZ6aKYICovXG4gICAgYXN5bmMgX3VwbG9hZCAoKSB7XG4gICAgICBsZXQgYW5zd2VySWQgPSBbXSAgICAgLy8g6aKY55uuSUTmlbDnu4RcbiAgICAgIGxldCBhbnN3ZXIgPSBbXSAgICAgICAvLyDpopjnm67nrZTmoYjmlbDnu4RcbiAgICAgIGxldCBhbGxDb3JyZWN0ID0gdHJ1ZSAvLyDlhajpg6jkuLrnnJ/nmoTliKTmlq1cbiAgICAgIGZvciAobGV0IG5vZGVzIG9mIHRoaXMuZXhlcmNpc2Uubm9kZXMpIHtcbiAgICAgICAgZm9yIChsZXQgcXVlc3Rpb25zIG9mIG5vZGVzLnF1ZXN0aW9ucykge1xuICAgICAgICAgIGFuc3dlcklkLnB1c2gocXVlc3Rpb25zLmlkKVxuICAgICAgICAgIGFuc3dlci5wdXNoKHF1ZXN0aW9ucy5hbnN3ZXIpXG4gICAgICAgICAgaWYgKCFxdWVzdGlvbnMuYW5zd2VyKSBhbGxDb3JyZWN0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fc2V0RXhlcmNpc2VSZXN1bHQoYW5zd2VySWQsIGFuc3dlciwgdGhpcy5jaGFycHRlcklkKVxuICAgICAgaWYgKGFsbENvcnJlY3QpIHtcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svY29ycmVjdD9pZD0ke3RoaXMuY2hhcnB0ZXJJZH0mbmFtZT0ke3RoaXMubmFtZX1gfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkucmVkaXJlY3RUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2Vycm9yP2lkPSR7dGhpcy5jaGFycHRlcklkfSZuYW1lPSR7dGhpcy5uYW1lfWB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqIOiusOmUmeeahOWIh+aNoiAqL1xuICAgIF9jaGFuZ2UgKHBpbmRleCwgaW5kZXgpIHtcbiAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ11cbiAgICAgIHRoaXMuZXhlcmNpc2Uubm9kZXNbcGluZGV4XVsncXVlc3Rpb25zJ11baW5kZXhdWydhbnN3ZXInXSA9ICFhbnN3ZXJcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+W56ug6IqC5Lmg6aKYICovXG4gIF9nZXRFeGVyY2lzZSAoaWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvZXhlcmNpc2UnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhcHRlcklkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOiuvue9rue7g+S5oOe7k+aenCAqL1xuICBfc2V0RXhlcmNpc2VSZXN1bHQgKGlkcywgYW5zd2VycywgY2hhcHRlcklkKSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfmj5DkuqTkuK0nfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvc2V0RXhlcmNpc2UnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogY2hhcHRlcklkLFxuICAgICAgICAgIGFuc3dlcjogYW5zd2VycyxcbiAgICAgICAgICBhbnN3ZXJJZDogaWRzXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6IG9wdGlvbnMubmFtZSB9KVxuICAgIHRoaXMuY2hhcnB0ZXJJZCA9IG9wdGlvbnMuaWRcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWVcbiAgICB0aGlzLmV4ZXJjaXNlID0gYXdhaXQgdGhpcy5fZ2V0RXhlcmNpc2Uob3B0aW9ucy5pZClcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgfVxuICB9XG59XG4iXX0=