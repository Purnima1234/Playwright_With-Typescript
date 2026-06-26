# Playwright CLI Options

## Basic Commands

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/login.spec.js

# Run tests with a specific browser
npx playwright test --browser=chromium
npx playwright test --browser=firefox
npx playwright test --browser=webkit

# Run in headed mode (see the browser)
npx playwright test --headed

# Run in UI mode (interactive test runner)
npx playwright test --ui

# Show test report after run
npx playwright show-report

# Debug mode (opens Playwright Inspector)
npx playwright test --debug

# Run tests matching a title
npx playwright test -g "login test"

# Generate a config file
npx playwright init
```

## Most Useful for Beginners

```bash
npx playwright test --headed --debug
```
Opens the browser visibly and pauses at each step in the Playwright Inspector.

> All commands must be run from inside the project folder where `package.json` is located.
