/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests are placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

 /* Some code is based on Matt Cranford's Feedreader walkthrough
  * (https://matthewcranford.com/), modified to better fit the rubric
  * and according to my understanding of the project's needs. Research
  * for the Asyncronous section was completed on Stack Overflow to better
  * understand BeforeEach/Done functionality*/


$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
     it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
      });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

	 	 it('has a url defined', function() {
		  	for(let feed of allFeeds) {
				expect(feed.url).toBeDefined();
			    expect(feed.url.length).not.toBe(0);
		  	}

		 });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

		  it('has a name defined', function() {
			  for(let feed of allFeeds) {
			  	expect(feed.name).toBeDefined();
			    expect(feed.name.length).not.toBe(0);
	  		}

		 });
  });


    /* This is a test suite to ensure the menu element is
     * hidden by default. */

  describe('The menu', function() {

		 it('is hidden', function() {
			  const body = document.querySelector('body');
			  expect(body.classList.contains('menu-hidden')).toBe(true);
		 });


    /* This is a test that ensures the menu changes
     * visibility when the menu icon is clicked. */

		 it('toggles visibility when clicked', function(){
				const body = document.querySelector('body');
				const menu = document.querySelector('.menu-icon-link');

			menu.click();
		   	expect(body.classList.contains('menu-hidden')).toBe(false);
			});


	  });

    /* This is a test suite to ensure that when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container. */

	 describe('Initial Entries', function() {

  //BeforeEach and Done are used for asyncronous work
		 beforeEach(function(done){
				loadFeed(0, function() {
					done();
			});

  });

   //This verifies that the feeds are loaded and there are live entries
		 it('completes its work', function(done){
		 	 const entries = document.querySelector(".feed").getElementsByClassName("entry").length;
		   expect(entries).toBeGreaterThan(0);
			 done();
		 });


    /*  This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

describe('New Feed Selection', function() {
  // This test adds the first existing entry into an existingFeeds variable and verifies that the code is run asyncronously

	  var existingFeeds;
  	beforeEach(function(done){
				loadFeed(0, function() {
		       let existingFeeds = document.querySelector('.feed').getElementsByClassName("entry");
           loadFeed(1, function() {
					 done();
				 });
  		});
    });

//This test confirms that when a new feed is added, it actually updates the list

	  	it('loads a new feed', function() {
		    	var newFeed = document.querySelector('.feed').getElementsByClassName("entry");
		    	expect(newFeed).not.toBe(existingFeeds);
	  	});
  	});
 });
}());
