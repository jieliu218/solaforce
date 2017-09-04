# testcafe-reporter-test-reporter
[![Build Status](https://travis-ci.org/jieliu218/testcafe-reporter-test-reporter.svg)](https://travis-ci.org/jieliu218/testcafe-reporter-test-reporter)

This is the **test-reporter** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/jieliu218/testcafe-reporter-test-reporter/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-test-reporter
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter test-reporter
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('test-reporter') // <-
    .run();
```

## Author
Jie Liu 
