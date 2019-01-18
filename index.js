var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      url: '',
      data: []
    };

    _this.getSmallData = _this.getSmallData.bind(_this);
    _this.getBigData = _this.getBigData.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'getSmallData',
    value: function getSmallData() {
      var _this2 = this;

      var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({ data: data });
      });
      // .then(console.log(this.state.data))
    }
  }, {
    key: 'getBigData',
    value: function getBigData() {
      var _this3 = this;

      var url = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this3.setState({ data: data });
      });
      // .then(console.log(this.state.data))
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0445:'
        ),
        React.createElement('br', null),
        React.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary', onClick: this.getSmallData },
          '\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435'
        ),
        React.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary', onClick: this.getBigData },
          '\u0411\u043E\u043B\u044C\u0448\u0438\u0435'
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'table',
          { className: 'table table-hover' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              { scope: 'col' },
              React.createElement(
                'th',
                null,
                'id'
              ),
              React.createElement(
                'th',
                null,
                'firstName'
              ),
              React.createElement(
                'th',
                null,
                'lastName'
              ),
              React.createElement(
                'th',
                null,
                'email'
              ),
              React.createElement(
                'th',
                null,
                'phone'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.state.data.map(function (item) {
              return React.createElement(
                'tr',
                { key: item.id },
                React.createElement(
                  'td',
                  null,
                  item.id
                ),
                React.createElement(
                  'td',
                  null,
                  item.firstName
                ),
                React.createElement(
                  'td',
                  null,
                  item.lastName
                ),
                React.createElement(
                  'td',
                  null,
                  item.email
                ),
                React.createElement(
                  'td',
                  null,
                  item.phone
                )
              );
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));