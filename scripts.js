let Teapot = function() {
    this.getInform = function() {
        if (confirm('Включить чайник?')) {
            this.type = confirm('Ваш чайник электрический?');

            if (this.type) {
                this.power = +prompt('Введите мощность чайника:');
                this.water = +prompt('Введите количество воды в чайнике:');
                this.temperature = +prompt('Введите температуру воды:');

                if (isNaN(this.power) || isNaN(this.water) || isNaN(this.temperature) || this.temperature < 0 || this.temperature > 100 || this.power == '' || this.water == '' || this.temperature == '') {
                    alert('Ошибка.');
                    this.getInform();
                } else {
                    this.timeElec();
                }
            } else {
                this.water = +prompt('Введите количество воды в чайнике:');
                this.temperature = +prompt('Введите температуру воды:');

                if (isNaN(this.water) || isNaN(this.temperature) || this.temperature < 0 || this.temperature > 100 || this.water == '' || this.temperature == '') {
                    alert('Ошибка.');
                    this.getInform();
                } else {
                    this.time();
                }
            }
        } else {
            console.log('Чайник выключен');
        }
    };

    this.timeElec = function() {
        this.t = (4200 * this.water * (100 - this.temperature)) / this.power / 60;
        console.log('Время закипания воды в чайнике: ' + (this.t).toFixed(2) + ' мин');
    };

    this.time = function() {
        this.t = (4200 * this.water * (100 - this.temperature)) / 1700 / 60;
        console.log('Время закипания воды в чайнике: ' + (this.t).toFixed(2) + ' мин');
    };
};

let TeapotNew = function() {
    Teapot.apply(this);

    let parentTimeElec = this.timeElec;

    this.timeElec = function() {
        parentTimeElec.call(this);
        this.bolling();
    };

    this.bolling = function() {
        setTimeout(function() {
            if (this.t != 0 || !isNaN(this.t)) {
                alert('Вода закипела. Чайник выключен.');
            }
        }, 1000);
    };
};

let teapot = new TeapotNew();

teapot.getInform();



let Constructor = function() {
    this.create = function(tagName) {
        this.elemTag = document.createElement(tagName);
        document.body.appendChild(this.elemTag);
    };

    this.attr = function(element, name, value) {
        this.elem = document.querySelector(element);
        this.elem.setAttribute(name, value);
    };

    this.html = function(name, value) {
        this.htmlTag = document.querySelector('html');
        this.htmlTag.setAttribute(name, value);
    };

    this.search = function(selector) {
        this.elemSeach = document.querySelector(selector);
        console.log(this.elemSeach);
    };

    this.addClass = function(tag, addclass) {
        this.tag = document.querySelector(tag);
        this.tag.classList.add(addclass);
    };

    this.removeClass = function(tag, removeclass) {
        this.tag = document.querySelector(tag);
        this.tag.classList.remove(removeclass);
    };

    this.toggleClass = function(tag, toggleclass) {
        this.tag = document.querySelector(tag);
        this.tag.classList.toggle(toggleclass);
    };

    this.hasClass = function(tag, hasclass) {
        this.tag = document.querySelector(tag);
        this.contains = this.tag.classList.contains(hasclass);
        console.log(this.contains);
    };

    this.append = function(element, newElement) {
        this.elem = document.querySelector(element);
        this.newElem = document.createElement(newElement);
        if (arguments[2]) {
            this.beforeElement = document.querySelector(arguments[2]);
            this.elem.insertBefore(this.newElem, this.beforeElement);
        } else {
            this.elem.appendChild(this.newElem);
        }
    };

    this.on = function(element, eventName, funcName) {
        this.element = document.querySelector(element);
        this.element.addEventListener(eventName, funcName);
    };
};

let ConstructorFunc = function() {
    Constructor.apply(this, arguments);
};

let constructor = new ConstructorFunc();

function Func(event) {
    let target = event.target;
    target.style.borderRadius = '50%';
}

constructor.create('div');
constructor.attr('div', 'class', 'block');
constructor.html('lang', 'en');
constructor.search('body');

constructor.addClass('body', 'name');
constructor.removeClass('body', 'name');
constructor.toggleClass('body', 'name');
constructor.hasClass('body', 'name');

constructor.append('body', 'p', 'div');

constructor.on('div', 'click', Func);