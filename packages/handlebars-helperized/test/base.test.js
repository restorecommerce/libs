import fs from 'fs';
import { Renderer } from '../lib/index.js';
import { expect, it, describe } from 'vitest';

// Renderer = Renderer.default;

const data = {
  firstName: 'John',
  lastName: 'Doe'
};

const load = function loadTemplateFile(name) {
  return fs.readFileSync(`./test/templates/${name}.hbs`, 'utf-8');
};

const basicTpl = load('basic');
const layoutTpl = load('layout');
const layoutUseTpl = load('layout-use');
const style = fs.readFileSync('./test/templates/basic.css', 'utf-8');

/**
 * Core functionality testing
 */
describe('the handlebars template engine', () => {
  it('should be able to render basic templates', async () => {
    const renderer = new Renderer(basicTpl);
    await renderer.waitLoad();
    let result = renderer.render(data);
    result = result.replace(/\s/g, '');
    expect(result).to.equal('<div>JohnDoe</div>');
  });

  it('should be able to render templates with layouts', async () => {
    const renderer = new Renderer(layoutUseTpl, layoutTpl);
    await renderer.waitLoad();
    let result = renderer.render(data);
    result = result.replace(/\s/g, '');
    expect(result).to.equal('<div>HeaderDefaultContentMainOverwrittenContent</div>');
  });

  it('should be able to render templates with a style', async () => {
    const renderer = new Renderer(basicTpl, layoutUseTpl, style);
    await renderer.waitLoad();
    let result = renderer.render(data);
    result = result.replace(/\r?\n|\r/g, '');
    expect(result).to.equal('<div style="color: red; text-align: center;">John Doe</div>');
  });

  it('should be able to render templates with a provided custom helper', async () => {
    const filePathList = ['../test/handlebars/helper-loud.js'];
    const tpl = '<h1>Hello {{loud name}}</h1>';
    const renderer = new Renderer(tpl, '', '', {}, filePathList );
    await renderer.waitLoad();
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000)
    });
    const result = renderer.render({ name: 'John' });
    const expectedResult = '<h1>Hello JOHN</h1>';
    expect(result).to.equal(expectedResult);
  });
});
