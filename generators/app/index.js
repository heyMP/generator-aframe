'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What would you like to name this aframe project?',
        default: this.appname.replace(' ', '-')
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      props = Object.assign(props, { underscoreName: props.name.replace('-', '_') });
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_name'),
      this.destinationPath(`${this.props.name}`),
      this.props
    );
  }

  install() {
    // Run npm install and bower install
    // this.installDependencies();
  }
};
