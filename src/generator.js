const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const Type = {
    'nameMatch': /\$YourModules\$/g,
    'keyMatch': /\$YourKey\$/g,
    'modules': function (name, key) {
        this.route(name, key);
        this.basectrl(name, key);
        this.createctrl(name, key);
        this.view(name, key);
        this.createview(name, key);
    },
    'route': function (name, key) {
        fs.exists('./routes', (exist) => {
            if (exist) {
                let route = __dirname + `\\template\\routes\\route.js`;
                fs.readFile(route, {flag: 'r+', encoding: 'utf8'}, (err, data) => {
                    let content = data;
                    let filePatch = './routes/' + name + '.js';
                    content = content.replace(this.keyMatch, key);
                    content = content.replace(this.nameMatch, name);
                    fs.writeFile(filePatch, content, function (err) {
                        if (err) {
                            throw new Error('写入失败');
                            return;
                        }
                        console.log(chalk.green('add routes successfully！'));
                    })
                });
            } else {
                throw new Error('Directory ./route is not exist！');
            }
        })
    },
    'basectrl': function (name, key) {
        let directory = './webapp/c';
        if (fs.existsSync(directory)) {
            let baseController = __dirname + `\\template\\controller\\baseController.js`;
            let content = fs.readFileSync(baseController, {flag: 'r+', encoding: 'utf8'});
            let filePatch = './webapp/c/' + name + '/' + name + 'Controller.js';
            content = content.replace(this.keyMatch, key);
            content = content.replace(this.nameMatch, name);
            if (!fs.existsSync(directory + '/' + name)) {
                fs.mkdirSync(directory + '/' + name);
            }
            fs.writeFileSync(filePatch, content);
            console.log(chalk.green('add baseCtrl successfully！'));
        } else {
            throw new Error('Directory ' + directory + ' is not exist！');
        }
    },
    'createctrl': function (name, key) {
        let directory = './webapp/c';
        if (fs.existsSync(directory)) {
            let createController = __dirname + `\\template\\controller\\CreateController.js`;
            let content = fs.readFileSync(createController, {flag: 'r+', encoding: 'utf8'});
            let filePatch = './webapp/c/' + name + '/Create' + name + 'Controller.js';
            content = content.replace(this.keyMatch, key);
            content = content.replace(this.nameMatch, name);
            if (!fs.existsSync(directory + '/' + name)) {
                fs.mkdirSync(directory + '/' + name);
            }
            fs.writeFileSync(filePatch, content);
            console.log(chalk.green('add createCtrl successfully！'));
        } else {
            throw new Error('Directory ' + directory + ' is not exist！');
        }
    },
    'view': function (name, key) {
        let directory = './views';
        if (fs.existsSync(directory)) {
            let view = __dirname + `\\template\\views\\index.html`;
            let content = fs.readFileSync(view, {flag: 'r+', encoding: 'utf8'});
            let filePatch = './views/' + name + '/index.html';
            content = content.replace(this.keyMatch, key);
            content = content.replace(this.nameMatch, name);
            if (!fs.existsSync(directory + '/' + name)) {
                fs.mkdirSync(directory + '/' + name);
            }
            fs.writeFileSync(filePatch, content);
            console.log(chalk.green('add view successfully！'));
        } else {
            throw new Error('Directory ' + directory + ' is not exist！');
        }
    },
    'createview': function (name, key) {
        let directory = './webapp/v';
        if (fs.existsSync(directory)) {
            let createView = __dirname + `\\template\\views\\create.html`;
            let content = fs.readFileSync(createView, {flag: 'r+', encoding: 'utf8'});
            let filePatch = './webapp/v/' + name + '/Create' + name + '.html';
            if (!fs.existsSync(directory + '/' + name)) {
                fs.mkdirSync(directory + '/' + name);
            }
            fs.writeFileSync(filePatch, content);
            console.log(chalk.green('add createView successfully！'));
        } else {
            throw new Error('Directory ' + directory + ' is not exist！');
        }
    }
};

const generator = {
    run: function (type, name, key) {
        if (Type[type]) {
            Type[type](name, key);
        } else {
            chalk.red('please input correct argv!')
        }
    }
};

module.exports = generator;