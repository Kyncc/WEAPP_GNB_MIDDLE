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
          url: 'https://small.guinaben.com/v2/workbook/chapter/exercise',
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
          url: 'https://small.guinaben.com/v2/workbook/chapter/setExercise',
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

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiZGF0YSIsIm5hbWUiLCJsb25nVGV4dCIsImNoYXJwdGVySWQiLCJleGVyY2lzZSIsIm1ldGhvZHMiLCJfdXBsb2FkIiwiYW5zd2VySWQiLCJhbnN3ZXIiLCJhbGxDb3JyZWN0Iiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJyZWRpcmVjdFRvIiwidXJsIiwiX2NoYW5nZSIsInBpbmRleCIsImluZGV4IiwiJGFwcGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJpZHMiLCJhbnN3ZXJzIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1ldGhvZCIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJfZ2V0RXhlcmNpc2UiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7ME1BQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsVUFBdEMsRUFBaUQsZUFBYyxTQUEvRCxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxnQkFBVSxzQkFGTDtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLGdCQUFVO0FBSkwsSyxRQU9Q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RE07QUFFWGtCLGtCQUFRLE1BRkc7QUFHWGxDLGdCQUFNO0FBQ0p5Qix1QkFBV0EsU0FEUDtBQUVKakIsb0JBQVF1QixPQUZKO0FBR0p4QixzQkFBVXVCO0FBSE4sV0FISztBQVFYSixpQkFSVyxtQkFRRkMsR0FSRSxFQVFHO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FWVTtBQVdYQyxjQVhXLGdCQVdMQyxHQVhLLEVBV0E7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRCxXQWJVO0FBY1hNLGtCQWRXLHNCQWNDO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQWhCVSxTQUFiO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7Ozs7NEZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFFTixPQUFPSSxRQUFRcEMsSUFBakIsRUFBekI7QUFDQSxxQkFBS0UsVUFBTCxHQUFrQmtDLFFBQVF4QixFQUExQjtBQUNBLHFCQUFLWixJQUFMLEdBQVlvQyxRQUFRcEMsSUFBcEI7O3VCQUNzQixLQUFLdUMsWUFBTCxDQUFrQkgsUUFBUXhCLEVBQTFCLEM7OztBQUF0QixxQkFBS1QsUTs7QUFDTCxxQkFBS2dCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJPLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJYyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVloQixJQUFJaUIsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTFgsZUFBTyxvQkFERjtBQUVMWSxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBdkcyQyxlQUFLQyxJOztrQkFBOUJyRCxnQiIsImZpbGUiOiJleGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB6YW5Ob3RpY2ViYXIgZnJvbSAnQC9jb21wb25lbnRzL3phbi1ub3RpY2ViYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rRXhlcmNpc2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuTm90aWNlYmFyMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGV4dC5vbmNlXCI6XCJsb25nVGV4dFwiLFwiY29tcG9uZW50SWRcIjpcInN0YXRpYzFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhclxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBsb25nVGV4dDogJ+eCuemUmemimOmimOWPt+WujOaIkOiusOmUme+8jOaPkOS6pOS9nOS4muafpeeci+aIkeeahOmUmemimCcsXG4gICAgY2hhcnB0ZXJJZDogJycsXG4gICAgZXhlcmNpc2U6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDkuIrkvKDplJnpopggKi9cbiAgICBhc3luYyBfdXBsb2FkICgpIHtcbiAgICAgIGxldCBhbnN3ZXJJZCA9IFtdICAgICAvLyDpopjnm65JROaVsOe7hFxuICAgICAgbGV0IGFuc3dlciA9IFtdICAgICAgIC8vIOmimOebruetlOahiOaVsOe7hFxuICAgICAgbGV0IGFsbENvcnJlY3QgPSB0cnVlIC8vIOWFqOmDqOS4uuecn+eahOWIpOaWrVxuICAgICAgZm9yIChsZXQgbm9kZXMgb2YgdGhpcy5leGVyY2lzZS5ub2Rlcykge1xuICAgICAgICBmb3IgKGxldCBxdWVzdGlvbnMgb2Ygbm9kZXMucXVlc3Rpb25zKSB7XG4gICAgICAgICAgYW5zd2VySWQucHVzaChxdWVzdGlvbnMuaWQpXG4gICAgICAgICAgYW5zd2VyLnB1c2gocXVlc3Rpb25zLmFuc3dlcilcbiAgICAgICAgICBpZiAoIXF1ZXN0aW9ucy5hbnN3ZXIpIGFsbENvcnJlY3QgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLl9zZXRFeGVyY2lzZVJlc3VsdChhbnN3ZXJJZCwgYW5zd2VyLCB0aGlzLmNoYXJwdGVySWQpXG4gICAgICBpZiAoYWxsQ29ycmVjdCkge1xuICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9jb3JyZWN0P2lkPSR7dGhpcy5jaGFycHRlcklkfSZuYW1lPSR7dGhpcy5uYW1lfWB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXJyb3I/aWQ9JHt0aGlzLmNoYXJwdGVySWR9Jm5hbWU9JHt0aGlzLm5hbWV9YH0pXG4gICAgICB9XG4gICAgfSxcbiAgICAvKiog6K6w6ZSZ55qE5YiH5o2iICovXG4gICAgX2NoYW5nZSAocGluZGV4LCBpbmRleCkge1xuICAgICAgbGV0IGFuc3dlciA9IHRoaXMuZXhlcmNpc2Uubm9kZXNbcGluZGV4XVsncXVlc3Rpb25zJ11baW5kZXhdWydhbnN3ZXInXVxuICAgICAgdGhpcy5leGVyY2lzZS5ub2Rlc1twaW5kZXhdWydxdWVzdGlvbnMnXVtpbmRleF1bJ2Fuc3dlciddID0gIWFuc3dlclxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5bnq6DoioLkuaDpopggKi9cbiAgX2dldEV4ZXJjaXNlIChpZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svY2hhcHRlci9leGVyY2lzZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog6K6+572u57uD5Lmg57uT5p6cICovXG4gIF9zZXRFeGVyY2lzZVJlc3VsdCAoaWRzLCBhbnN3ZXJzLCBjaGFwdGVySWQpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svY2hhcHRlci9zZXRFeGVyY2lzZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhcHRlcklkOiBjaGFwdGVySWQsXG4gICAgICAgICAgYW5zd2VyOiBhbnN3ZXJzLFxuICAgICAgICAgIGFuc3dlcklkOiBpZHNcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogb3B0aW9ucy5uYW1lIH0pXG4gICAgdGhpcy5jaGFycHRlcklkID0gb3B0aW9ucy5pZFxuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxuICAgIHRoaXMuZXhlcmNpc2UgPSBhd2FpdCB0aGlzLl9nZXRFeGVyY2lzZShvcHRpb25zLmlkKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXG4gICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgIH1cbiAgfVxufVxuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiemFuTm90aWNlYmFyIiwiZGF0YSIsIm5hbWUiLCJsb25nVGV4dCIsImNoYXJwdGVySWQiLCJleGVyY2lzZSIsIm1ldGhvZHMiLCJfdXBsb2FkIiwiYW5zd2VySWQiLCJhbnN3ZXIiLCJhbGxDb3JyZWN0Iiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJ3ZXB5IiwicmVkaXJlY3RUbyIsInVybCIsIl9jaGFuZ2UiLCJwaW5kZXgiLCJpbmRleCIsIiRhcHBseSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsImNoYXB0ZXJJZCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwiaWRzIiwiYW5zd2VycyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtZXRob2QiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwib3B0aW9ucyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiX2dldEV4ZXJjaXNlIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELGVBQWMsU0FBL0QsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMscUJBQWVDO0FBREwsSyxRQUlaQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVLHNCQUZMO0FBR0xDLGtCQUFZ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Q3RDVCx1QkFBS1UsT0FBTCxDQUFhO0FBQ1hSLGVBQUssNERBRE07QUFFWGtCLGtCQUFRLE1BRkc7QUFHWG5DLGdCQUFNO0FBQ0owQix1QkFBV0EsU0FEUDtBQUVKbEIsb0JBQVF3QixPQUZKO0FBR0p6QixzQkFBVXdCO0FBSE4sV0FISztBQVFYSixpQkFSVyxtQkFRRkMsR0FSRSxFQVFHO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FWVTtBQVdYQyxjQVhXLGdCQVdMQyxHQVhLLEVBV0E7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRCxXQWJVO0FBY1hNLGtCQWRXLHNCQWNDO0FBQ1ZyQiwyQkFBS3NCLFdBQUw7QUFDRDtBQWhCVSxTQUFiO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7Ozs7NEZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFFTixPQUFPSSxRQUFRckMsSUFBakIsRUFBekI7QUFDQSxxQkFBS0UsVUFBTCxHQUFrQm1DLFFBQVF6QixFQUExQjtBQUNBLHFCQUFLWixJQUFMLEdBQVlxQyxRQUFRckMsSUFBcEI7O3VCQUNzQixLQUFLd0MsWUFBTCxDQUFrQkgsUUFBUXpCLEVBQTFCLEM7OztBQUF0QixxQkFBS1QsUTs7QUFDTCxxQkFBS2lCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJPLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJYyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVloQixJQUFJaUIsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTFgsZUFBTyxvQkFERjtBQUVMWSxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBdkcyQ2hDLGVBQUtpQyxJOztrQkFBOUJ2RCxnQiIsImZpbGUiOiJleGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgemFuTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbm90aWNlYmFyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tFeGVyY2lzZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRleHQub25jZVwiOlwibG9uZ1RleHRcIixcImNvbXBvbmVudElkXCI6XCJzdGF0aWMxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhclxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgbG9uZ1RleHQ6ICfngrnplJnpopjpopjlj7flrozmiJDorrDplJnvvIzmj5DkuqTkvZzkuJrmn6XnnIvmiJHnmoTplJnpopgnLFxyXG4gICAgY2hhcnB0ZXJJZDogJycsXHJcbiAgICBleGVyY2lzZTogW11cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvKiog5LiK5Lyg6ZSZ6aKYICovXHJcbiAgICBhc3luYyBfdXBsb2FkICgpIHtcclxuICAgICAgbGV0IGFuc3dlcklkID0gW10gICAgIC8vIOmimOebrklE5pWw57uEXHJcbiAgICAgIGxldCBhbnN3ZXIgPSBbXSAgICAgICAvLyDpopjnm67nrZTmoYjmlbDnu4RcclxuICAgICAgbGV0IGFsbENvcnJlY3QgPSB0cnVlIC8vIOWFqOmDqOS4uuecn+eahOWIpOaWrVxyXG4gICAgICBmb3IgKGxldCBub2RlcyBvZiB0aGlzLmV4ZXJjaXNlLm5vZGVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcXVlc3Rpb25zIG9mIG5vZGVzLnF1ZXN0aW9ucykge1xyXG4gICAgICAgICAgYW5zd2VySWQucHVzaChxdWVzdGlvbnMuaWQpXHJcbiAgICAgICAgICBhbnN3ZXIucHVzaChxdWVzdGlvbnMuYW5zd2VyKVxyXG4gICAgICAgICAgaWYgKCFxdWVzdGlvbnMuYW5zd2VyKSBhbGxDb3JyZWN0ID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy5fc2V0RXhlcmNpc2VSZXN1bHQoYW5zd2VySWQsIGFuc3dlciwgdGhpcy5jaGFycHRlcklkKVxyXG4gICAgICBpZiAoYWxsQ29ycmVjdCkge1xyXG4gICAgICAgIHdlcHkucmVkaXJlY3RUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2NvcnJlY3Q/aWQ9JHt0aGlzLmNoYXJwdGVySWR9Jm5hbWU9JHt0aGlzLm5hbWV9YH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXJyb3I/aWQ9JHt0aGlzLmNoYXJwdGVySWR9Jm5hbWU9JHt0aGlzLm5hbWV9YH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKiog6K6w6ZSZ55qE5YiH5o2iICovXHJcbiAgICBfY2hhbmdlIChwaW5kZXgsIGluZGV4KSB7XHJcbiAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ11cclxuICAgICAgdGhpcy5leGVyY2lzZS5ub2Rlc1twaW5kZXhdWydxdWVzdGlvbnMnXVtpbmRleF1bJ2Fuc3dlciddID0gIWFuc3dlclxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+W56ug6IqC5Lmg6aKYICovXHJcbiAgX2dldEV4ZXJjaXNlIChpZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vay9jaGFwdGVyL2V4ZXJjaXNlJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKiog6K6+572u57uD5Lmg57uT5p6cICovXHJcbiAgX3NldEV4ZXJjaXNlUmVzdWx0IChpZHMsIGFuc3dlcnMsIGNoYXB0ZXJJZCkge1xyXG4gICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfmj5DkuqTkuK0nfSlcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2svY2hhcHRlci9zZXRFeGVyY2lzZScsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY2hhcHRlcklkOiBjaGFwdGVySWQsXHJcbiAgICAgICAgICBhbnN3ZXI6IGFuc3dlcnMsXHJcbiAgICAgICAgICBhbnN3ZXJJZDogaWRzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGUgKCkge1xyXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogb3B0aW9ucy5uYW1lIH0pXHJcbiAgICB0aGlzLmNoYXJwdGVySWQgPSBvcHRpb25zLmlkXHJcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWVcclxuICAgIHRoaXMuZXhlcmNpc2UgPSBhd2FpdCB0aGlzLl9nZXRFeGVyY2lzZShvcHRpb25zLmlkKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
>>>>>>> dev
