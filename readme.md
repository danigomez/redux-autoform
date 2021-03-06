#redux-autoform [![Build Status](https://travis-ci.org/gearz-lab/redux-autoform.svg?branch=master)](https://travis-ci.org/gearz-lab/redux-autoform) [![npm version](https://badge.fury.io/js/redux-autoform.svg)](https://badge.fury.io/js/redux-autoform) [![Coverage Status](https://coveralls.io/repos/github/gearz-lab/redux-autoform/badge.svg?branch=master)](https://coveralls.io/github/gearz-lab/redux-autoform?branch=master) [![codecov](https://codecov.io/gh/gearz-lab/redux-autoform/branch/master/graph/badge.svg)](https://codecov.io/gh/gearz-lab/redux-autoform)




`Redux-autoform` is a wrapper around [redux-form](https://github.com/erikras/redux-form) for dynamically generating forms based on metadata.

**Beta version disclaimer**

`redux-autoform` is under active development. APIs will change and things may still not work as expected. If you find
  any issue, please [report it](https://github.com/gearz-lab/redux-autoform/issues). I'll do my best to fix it.
  
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Demo](#demo)
- [Docs](#docs)
- [Installing](#installing)
- [Using](#using)
- [Third-party components](#third-party-components)
- [Styles](#styles)
- [Localization](#localization)
- [Building and running the demo locally](#building-and-running-the-demo-locally)
- [Change log](#change-log)
- [Contributing](#contributing)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Demo
---

You can check the [online demo here](http://redux-autoform.github.io/redux-autoform/demo.html). Don't forget to check out all the **presets**.


Docs
---

[Docs are available here](https://github.com/gearz-lab/redux-autoform/blob/master/docs-md/documentation.md).

Installing
---

    npm install redux-autoform

Using
---

####AutoForm ([source](https://github.com/gearz-lab/redux-autoform/blob/master/src/AutoForm.js))####

The main React component.

```js
import { AutoForm } from 'redux-autoform';
```
    
The `AutoForm` props are listed [here](https://github.com/gearz-lab/redux-autoform/blob/master/docs-md/documentation.md).
    
Additionally, you need a `ComponentFactory`. The `ComponentFactory` is responsible for determining which React
component to use for a given field metadata. `redux-autoform` comes with 3 `ComponentFactory`:

####ComponentFactory ([source](https://github.com/gearz-lab/redux-autoform/blob/master/src/ComponentFactory.js))####

This a *clean* factory. In order to use it, `import` it, register all your components and then pass it to the `componentFactory`
prop of the `AutoForm`.

```js
import { ComponentFactory } from 'redux-autoform';
```

####DefaultEditComponentFactory ([source](https://github.com/gearz-lab/redux-autoform/blob/master/src/BootstrapEditComponentFactory.js))####

This is a pre-populated factory, the same used in the [demo](http://gearz-lab.github.io/redux-autoform/demo.html).
In order to use it, `import` it and just pass it to the `componentFactory` prop of the `AutoForm`.

```js
import { DefaultEditComponentFactory } from 'redux-autoform';
```
    
Third-party components
----------------------

If you are using the default factories, you need to manually install the third-party components.

Components that are installed automatically:

- [redux-form](https://github.com/erikras/redux-form/).
- [react-bootstrap](http://react-bootstrap.github.io/).

Components that are need to be installed manually, if you are using the default factories:

- [react-select](https://github.com/JedWatson/react-select).
- [react-widgets](https://github.com/jquense/react-widgets).

    
Styles
------

- Import `styles.less` file. This file contains infrastructural styling.
- If you are using the default factories, import `styles-defaultfactories.less`. This file contains styles related to the components used in the default factories.
- If you are using the default factories, import the thid-party styles for the components used in the default factories. The example below lists what have to be imported:


**yourstyles.less**:

    @import './node_modules/bootstrap/less/bootstrap.less';
    @import './node_modules/font-awesome/less/font-awesome.less';
    @import './node_modules/react-widgets/dist/css/react-widgets.css';
    @import './node_modules/react-select/dist/react-select.css';
    @import './node_modules/redux-autoform/lib/less/styles';
    @import './node_modules/redux-autoform/lib/less/styles-defaultfactories';

Alternatively, if you're using webpack with `css-loader` and `less-loader`, which you probably are, you can just import these less files directly in your JavaScript.
    
    
Localization
---

AutoForm doesn't directly depend on localization, but the default component factories do. So, if you're using the default component factories, this is what you should do:

- Install [numbro](http://numbrojs.com/). This is the library used for number localization.
- Install [moment](http://momentjs.com/). This is the library used for datetime localization.
 
```js
// import moment and numbro
import moment from 'moment';
import numbro from 'numbro';
 // import the localizers
 import { momentLocalizer, numbroLocalizer } from 'redux-autoform';
// if you are using react-widgets, which is used by default on the standard factories, you need to import it's localizer too:
import reactWidgetsMomentLocalizer from 'react-widgets/lib/localizers/moment';
// set up the localizers
momentLocalizer(moment);
numbroLocalizer(numbro);
reactWidgetsMomentLocalizer(moment);
```

    
The `DefaultEditComponentFactory` relies on components that rely on localization. 

Building and running the demo locally
---

    git clone https://github.com/gearz-lab/redux-autoform.git
    cd redux-autoform
    set NODE_ENV=development
    // OR, if you use Linux or OSX
    $export NODE_ENV=development
    npm install
    
In order to run the demo, run:

    npm run start
    
Now the demo should be available here: [http://localhost:4000/](http://localhost:4000/).
    
In order to run the `karma` tests:

    npm run test
    // OR, to run in Chrome instead of PhantomJS
    npm run test-chrome
     
Change log
---

What has changed is stated [here](https://github.com/gearz-lab/redux-autoform/blob/master/docs-md/changeLog.md).
   
Contributing
---

**Pull-requests are really really welcome**. If you don't know what to contribute with, please check the [issues](https://github.com/gearz-lab/redux-autoform/issues).
 
I'll be more than glad to invite frequent contributors to join the organization.
If you need help understanding the project, please post an issue and I'll do my best to reply and make sure you understand everything
you need.

In order to make a pull request:

 1. Fork it.
 2. Create your feature-branch git checkout -b your-new-feature-branch
 3. Commit your change git commit -am 'Add new feature'
 4. Push to the branch git push origin your-new-feature-branch
 5. Create new Pull Request with master branch

License
---
`redux-autoform` is [MIT](https://github.com/gearz-lab/redux-autoform/blob/master/LICENSE) licensed.

