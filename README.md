# Udacity FEND Project 4:  Feed Reader tester

This project tests a pre-existing feed reader application using <a href="https://jasmine.github.io/">Jasmine</a>.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

# What is the Project Testing

1. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
2. Return the `allFeeds` variable to a passing state.
3. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
4. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
5. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
6. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
7. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
9. No test should be dependent on the results of another.
10. Callbacks should be used to ensure that feeds are loaded before they are tested.
11. When complete - all tests should pass.

# How to Run this Project

Open the index.html file in your browser.  Once loaded, the test results will be displayed at the bottom of the page.  
