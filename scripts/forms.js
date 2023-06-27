// JavaScript source code
/*
Topic 5:
HTML Forms

Objectives:
5.1 Complete and debug code that retrieves form input and sets form field values:
		retrieving form values; identifying the DOM path; getting values from different types of elements; prepopulating, masking, and updating values.

5.2 Complete and debug code that performs input validation: 
		case, string comparisons, Not-a-Number (NaN), not blank.

5.3 Describe the form submission process:
		onsubmit, POST vs GET, potential targets for submission.

Review Chapter 6 of HTML5 and CSS3 for Dummies By David Karlins
*/

/*
Chapter 6: HTML5 Forms
	Introduction:
		Getting the most out of new HTML5 form features
		Using placeholders, input types & datalists to make forms inviting
		Using HTML form output elements to create a calculator
		Validating form data & accessibility with HTML5 input types
	The collection of data through website forms has always been part of the user experience. That is more true today than ever.
	Gathering data from users is one of the most valuable aspects of today's websites.
	Advertisers and sponsors purchase ads on blogs and websites, based on the number of registered visitors (people who sign up at a website to	become members,
	users, or some other form of joining the site's community).
	E-list signup forms collect names of people interested in hearing from you with announcements, special offers, and news.
	Feedback forms provide priceless insights into what users are finding at your site, as well as how they feel about it.
	Search boxes help visitors find what they need at your site.
	And of course, e-commerce purchase forms convert visitors to your site into sales of your product or service.
	So, it doesn't take a rocket scientist to see, that making forms inviting and accessible is critical to almost any website.
	HTML5 provides a set of fairly robust (albeit under-appreciated) tools to do that.
*/

/*
	HTML5 Forms - An Underrated Resource:
	They make forms more inviting, meaning they're less cluttered, more intuitive and friendly, with hints on what kind of content to enter and helpful tools to
	reduce data entry hassles for users.
	They make forms more productive with built-in tools that validate/test form field content, before a form is submitted.
	Validation ensures that required information is included, so that e-mail addresses look like actual e-mail addresses.
	I will explore how HTML5 validation fits into the spectrum of validation tools, and when and how to use it.
		Surveying the new HTML5 form field parameters:
		The new HTML5 form tools are a powerful set of parameters applied to traditional form fields.
		Before I tell you how to define them, I want to first zoom out and survey some of the more dynamic new HTML5 form field	parameters.
		That way, you'll get a sense of just how radical of an enhancement they are to the web designer's toolkit:
			Placeholder text: Appears inside a form field, prompting a user what to enter into a field.
			  Required rules: Forces users to fill in a form field before submitting a form.
			Validation rules: Helps users enter data that fit criteria for how the content should look (used for e-mail addresses, phone numbers, etc).
		  Number input types: Makes it easier for users, especially mobile users (who tap), to enter values.
				   Datalists: Saves users time when typing entries in a form field.
							  When a user begins to type, a set of filtered options from a list appears to allow the user to easily complete the entry.
		And there's more, including particularly inviting tools to make it easy for users to choose dates and colors while completing a	form:
			Date parameters in form fields display pop-up calendars.
			Color parameters in form fields display pop-up color palettes.
*/

/*
	HTML5 vs JavaScript or Server-Side Scripts
	None of the features that I discussed in the previous section are new to form design.
	However, until the advent of HTML5, they required some combination of JavaScript and/or server-side scripting to implement:
		Three Ways to Validate Form Data:
			1. Server-Side Scripts (.php)
					Require back-end programming, slower because validation is done after data is sent to the server.
			2. JavaScript
					Requires JavaScript coding, fast because it takes place in the user's browser.
			3. HTML5
					No scripting, fast because it takes place in browser.
		The advantages of using HTML5 to build friendly, efficient forms include:
			HTML5 is easier to implement than JavaScript or server-side scripting.
			HTML5 form field parameters don't slow down the user's experience while waiting for a script to download and run.
			HTML5 form field parameters adapt well to different devices.
			For example, a form field with a date parameter displays in a specific, mobile-friendly format on an iPhone or Android.
*/

/*
	Compatibility Issues
	Given all the advantages of using HTML5 form field parameters, what is the down-side? There's just one issue: compatibility.
	So what exactly does that mean for the average web developer?
	All HTML form features are supported in about 3/4 of all browsers, but versions of IE, Firefox, Chrome, Safari, and Opera support all HTML5 form features.
	IE 9 and earlier do not support HTML5 form features.
	The trend is for browsers to adopt these and other features of HTML5, but the status of browser support for HTML5 form tools is a moving target.
	You can check the latest state of things at	http://caniuse.com/#feat=forms.
	HTML5 form tools make forms more inviting and accessible, but because HTML5 form field parameters enhance forms and make them more inviting and
	accessible, they are not essential for users.
	To accommodate IE8 and earlier users with HTML5 forms, you just need to make sure that you don't rely on HTML5 form parameters.
	For example, HTML5 form field placeholders (text that appears within a form field and then disappears when a user starts typing	in the form field) can
	substitute for form labels (text that appears next to a form, telling a user what to enter in the form field).
	However, by using form labels and supplementing them with placeholder text, you can make form fields more inviting, while still	responding to the needs of
	IE8 users, as well as users who rely on form field labels for assistance in filling out forms.
*/

/*
	Creating HTML5 Forms
	Before you can apply HTML5 form field parameters, you need a properly defined HTML form.
	The code below defines an entire HTML5 page with a basic defined <form>	element.
	Feel free to use this code as a basic template for building your own forms.
		<!DOCTYPE HTML>
		<html>
		<head>
			<meta charset="UTF-8">
			<title>Form</title>
		</head>
		<body>
			<form>
				<h1>Please fill out the form fields below</h1>
				<p>
					<input type="submit" value="Submit the Form"/>
					<input type="reset" value="Reset the form"/>
				</p>
			</form>
		</body>
		</html>
	Note that the entire form is enclosed inside the <form></form> tags, if form fields are not enclosed inside the tags, they won't work.
*/

/*
	Form Actions
	Form action parameters define what happens when a user clicks a Submit button.
	If there is no defined form action, nothing happens when a user clicks "Submit."
		<form action="http://myURL/script.php" method="post or get">
		The URL is the address of a server-script that manages form data.
		The method, post or get, is defined by the creator of the server-side script.
	Form action parameters normally link to a server-side script.
	Where do those scripts come from? Essentially, two sources:
		You (or your programming team) create these scripts, save them to your server, and connect them to databases that manage the data.
		You get a link to a script as part of a package supplied by	a wide range of vendors.
*/

/*
	Free Form Action Scripts Online
	Many online resources provide server-side scripts to manage search boxes, sign-up forms, feedback forms, and other forms:
		  MailChimp: MailChimp provides a powerful e-list manager to collect e-mail addresses and send out e-newsletters.
				     The site provides forms and links to scripts to manage them.
				     You generate a form using WYSIWYG (what you see is what you get) tools at https://mailchimp.com, and you get HTML code for your form that
				     includes a defined form action parameter.
  thesitewizard.com: For do-it-yourself form management, thesitewizard.com (http://www.thesitewizard.com) generates scripts to manage	feedback forms.
				     This valuable resource generates server-side scripts that you upload and save at your website.
Google and FreeFind: Search boxes, linked to appropriate scripts, are available from Google (http://www.google.com/cse) and FreeFind (http://www.freefind.com).
		Google Docs: Forms to store data in databases can be generated from Google Docs (http://www.docs.google.com).
					 While working with a spreadsheet in Google Docs, open the Insert menu and choose Form.
	All these, as well as others, provide very helpful and detailed documentation for how to connect your form to the necessary script with an action parameter.
*/

/*
	A simple e-mail form action
	The easiest way to collect form data is to simply have a user e-mail the form data to you via an e-mail client.
	This method works as long as the user has a configured e-mail client.
	However, this method isn't appropriate for robust data management because all that happens is, the form content is e-mailed to an e-mail address you provide.
	If you're looking for a more professional way to have form content e-mailed to your e-mail address, try the tools at http://thesitewizard.com.
	The action parameter used to e-mail form data is the <form> tag:
		<form action="mailto:email@email.com>
	You can use the mailto: form action to test forms, as well as for limited data collection.
*/

/*
	Limitations of an E-Mail Address Form Action
	E-mail address form actions are a very simple way to collect form data.
	The data doesn't get logged into a database or spreadsheet  it just comes to you in an e-mail.
	You might use this technique to collect comments from users, or to test a form.
	One downside to using an e-mail form action is that it exposes your e-mail address (at least the one you elect to associate	with the form) to users and also
	to "scrapers" that harvest e-mail addresses from websites.
*/

/*
	Defining Input and Label Tags
	The two main tags used to define form fields within an HTML5 form are:
		<input>
		<label>
	The <label> tag is always associated with an <input> tag, and the <label> provides text that is displayed next to the <input> field:
		<label for="fieldname">text that displays</label>
		<input type="text" name="fieldname">
	And here's an example of how this is applied to an <input> tag to collect a name:
		<label for="name">Name</label>
		<input type="text" name="name">
	Traditionally, in HTML, the "text" input type is used for most form fields.
	What is exciting and new in HTML5 is that you can define additional input types.
	When supported in browsers, these input types trigger convenient pop-ups and other tools in browsers, like a color palette or a calendar for dates.
	Pre-HTML5 input types tend to be nonmobile-friendly, for example, are awkward to tap on a mobile phone viewport.
	The new HTML5 input types provide more functionality than those	they replace.
	That said, documentation for all pre-HTML5 input parameters is available at w3.org: http://www.w3.org/TR/html-markup/input.html
*/

/*
	Defining Placeholder Text
	Placeholder text  text that displays within a form field until a user starts typing, is defined as a parameter within an <input> element:
		<input type="text" name="fieldname" placeholder="text that appears in the field" />
	Here's an example of user-viewed placeholder text applied to an <input> tag used to collect a name:
		<input type="text" name="name" placeholder="Your name..." />
	You can use placeholder text to replace or supplement a form label, try to avoid redundancy.
	You might have a label that reads Name, for example, supplemented with 'Please use your login name'.
	Because of the substantial advantages when relying on placeholder text instead of a label in mobile sites, one approach is to use a media query, to apply the
	property 'visibility: none' to the <label> tag selector in a CSS file, used for mobile design.
*/

/*
	Implementing HTML5 Input Types
	Earlier in the chapter, we noted how cool, new HTML5 input types translate into helpful interface elements in browsers.
	For example, the color input type displays a fun, inviting color palette that makes it easy for users to define a specific color without looking up color
	values, and the date input type displays a handy calendar that makes it convenient for users to look up and enter a date.
	And all this is done with just HTML5  no scripting required!
	However, not all input types have as useful or dynamic browser support as date and color, but that's okay  input types are	also useful for validation.
	The email input type, for example, has no default display in browsers, but when it's applied, browsers test input to see whether it looks like an e-mail
	address before allowing a user to submit a form, some mobile devices change keyboards depending on the input type.
	For example, some display an "@" symbol in the keyboard for
	e-mail input types.
	To make this all happen, we define input types.
	As I noted earlier, any form field that requires text can have "text" defined as the input type.
	But to trigger handy and helpful tools like the calendar or color palette I mentioned, it is necessary to define a specific	input type.
*/

/*
	Defining an Input Type
	So, how do you specify input type? Here's the syntax for defining an input type:
		<input type="type" name="fieldname">
	Here's a list of the most useful HTML5 input types:
		color				// comes with a helpful color palette
		date				// comes with a calendar for easy date selection
		datetime			// allows users to add a time zone to the date and time they enter
		datetime-local		// comes with an intuitive set of blank spaces that prompt users to enter a month, day, year, and time (based on user's time zone)
		email
		month				// auto-prompting to make month selection easy and accurate
		number				// comes with different forms of scrolling number pickers, depending on the browser and device
		range				// slider for choosing values, without resorting to the numbers keypad
		search				// searchbox-looking input field, displays the "hourglass" icon before a user enters search content, the "x" icon to clear the search content.
		tel					// prompting easy input for phone numbers
		time				// provides an intuitive format for entering hour, minute, and a.m./p.m. values.
		url
		week
	Many of these field types  in fact, the most useful ones  are	pretty self-defining.
	If you want to find out what color someone prefers as the background for an image, use a color type.
	If you want their phone number, use the tel type.
*/

/*
	Using Input Types for Accessibility
	Browser support for HTML5 input types is uneven and, as of this	writing, a work in progress.
	That said, most modern browsers have nice, intuitive, and highly practical styling for many input types:
		The color input types come with a helpful color palette, and date input types open a calendar for easy date selection.
		The tel input type is particularly helpful on mobile devices, prompting easy input for phone numbers.
		HTML5 number input types display with different forms of scrolling number pickers, depending on the browser and	device.
		HTML5 datetime-local input types display with an intuitive set of blank spaces that prompt a user to enter a month, day, year, and time (based on a user's
		current time zone).
		The datetime input type is similar to the datetime-local type except that it allows users to add a time zone to the date and time they enter into a field.
		The month input type provides autoprompting to make month selection easy and accurate.
		The range input type displays a slider for choosing values, without resorting to the numbers keypad.
		You need to define a range of values with this syntax:
			<input type="range" value="x" min="x" max="x" name="range" />
		The range value defines the default setting, the max and min values define the starting and ending values.
		The search input type displays a searchbox-looking input field, this displays the iconic "looking glass" icon before a user enters search content, and the
		useful "x" icon to clear the search content.
		The time input type provides an intuitive format for entering hour, minute, and a.m./p.m. values.
	As HTML5 support continues to evolve, you can expect additional formatting features.
	Other input types, such as email and url, are more valuable for	their role in validating input.
	Don't forget that part of the value of using HTML5 parameters in your design is search engine optimization (SEO).
*/

/*
	Defining a Datalist
	Traditionally, web designers have been able to present lists of choices in a form through the use of select/option menus.
	You see them everywhere; you click a drop-down menu, and you get a bunch of choices.
	There are, however, limitations when presenting lists of choices in this manner.
	One limitation inherent in select/option menus is they can be unwieldy.
	The other limitation, or constraint, in using select/options menus, is there is no option listed for "None of the above"  meaning a user can't indicate that
	the desired selection isn't on the menu.
	Using HTML5 datalists solve both issues:
		They present a set of options, but the entire list doesn't appear at once:
			The options are filtered by what a user enters into the field.
			Users can enter content not on the list:
		<p>
			Choose a set of letters
		</p>
		<input list="list" />
			<datalist id="list">
				<option value="aaa" />
				<option value="abc" />
				<option value="bbb" />
			</datalist>
*/

/*
	Creating Form Output Elements
	Given my own highly limited math skills, I really appreciate the new HTML5 output parameter, this new tool performs calculations for a user.
	Form output is managed through a distinct form, that is, unlike form input fields, each output has its own form:
		<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
			<input type="number" id="a"> +
			<input type="number" id="b"> =
			<output name="x" for="a b"> </output>
		</form>
	This syntax defines two variables that are entered by the user:	namely, a and b.
	This syntax also defines the operation to be performed as addition, as well as defining a box where the output goes.
*/

/*
	HTML5 Form Validation
	The term "validate" comes from the Latin "valid", meaning strong, so, validated data is strong data, as opposed to useless data.
	For example, if someone enters "dave" in an e-mail address form field, that's not going to be very useful, and a validation	technique will reject this data
	since dave doesn't look like an e-mail address.
	Some HTML5 form fields have built-in validation properties, such as the email input type.
	The email input type will insist that users enter something that looks like an e-mail address into the field, or an error message will appear when a user
	tries to submit the form.
	I'll survey the most important validation tools built into HTML5, and when and how to use them.
*/

/*
	Required Input
	The most basic HTML form field validation property, required.
	The required validation property can be applied to any <input> type, including text, email, url, etc.
	For example, the following code requires a user to submit a name:
		<input type="text" name="name" required>
	If a user attempts to submit the form with nothing in the name field, an error message appears and is defined by the browser itself.
*/

/*
	Validating E-Mail Addresses
	The email input type requires that anything in that field look like an e-mail address:
		<input type="email" name="email" placeholder="Email address" size="60" />
	You can test the field by entering something that doesn't look like an e-mail address and clicking submit, the error message display varies by browser.
*/

/*
	Validating Numbers
	By default, the number input type will accept only number values: that is, written with numerals (25), and not text (twenty-five):
		<p>
			How old are you?
			<input type="number" name="age" />
		</p>
	If a user attempts to submit content that's not a number value, an error message displays.
	If you want to restrict the input values to a set range, you can use the range input type.
	If you are collecting a user's age for a membership form that requires users to be 50 years or older, you might restrict valid input to values of >= 50.
*/

/*
	Summary
	In this chapter, I walked you through how to use many different	HTML5 form tools  input types, output, and datalists.
	I showed you how HTML5 form elements can be used to make input more inviting and fun, content more accurate, and forms validated before submission.
	A final thought on all this: don't miss the forest for the trees.
	Consistent use of HTML5 input types, and taking full advantage of other HTML5 form tools has a cumulative effect, making your forms	stand out, attract users,
	and generate more accurate content.
*/

/*
GMetrix:
	Forms Pre-Assessment:
	Q1: When might a programmer consider prepopulating a field on a form?
			If a field value is the same for virtually every field.
				This should only be done when a field will not mess	things up if someone should change the value of that field, but fails to do so.
				If, when users are filling out a form, a field value is the same for virtually every field, you may want to consider prepopulating the field.
		
	Q2: When processing secure data in a browser, the get method should not be used often.
			True.

	Q3: For validating multiple fields, JavaScript is often the best avenue.
			True.

	Q4: Setting an input field to a password type field will not mask the field.
			False.
*/

/*
	Forms Videos:
		Retrieve Input and Set Form Field Values
			Retrieve Form Values:
				<p>
					How many hours a week do you play an instrument now?
				</p>
				<input type="number" size="3" value="hoursPlayed" id="hoursPlayed" />
				<p>
					Add comments below
				</p>
				<textarea name="comments" rows="6" cols="50" maxlength="255"> </textarea>
				<script>
					function fillTestResults()
					{
						var testResults = document.getElementById('testResults');
						var firstName = document.getElementById('firstName').value;
						var lastName = document.getElementById('lastName').value;
						testResults.innerHTML = "You entered " + firstName + " " + lastName + " for a ";
					}
				</script>
*/

/*
			DOM Path:
				In the Developer Console:
					document.forms
						<HtmlCollection length="1">
							<form id="contactForm" action="thankyou.htm" method="post">
								  ...
							</form>
						</HtmlCollection>

					document.forms[0].element
						<HtmlCollection length="16">
							<fieldset>...</fieldset>
							<select name="location" id="location">
								...
							</select>
							<input name="firstname" id="firstname" type="text" />
							<input name="lastname" id="lastname" type="text" />
							<input name="city" id="city" onchange="checkCity(this.value);" type="text" />
							<input name="state" id="state" onchange="convertUpper(this.value, 'state');" type="text" />
							<input name="zip" id="zip" type="text" />
							<input name="email" id="email" type="email" />
							<input name="password" id="password" type="text" />
							<fieldset>...</fieldset>
						</HtmlCollection>

					document.getElementById('firstName').value
						"Jason"
*/

/*
			Values from Elements:
				<p>
					How did you hear about us?
				</p>
				<select name="found" id="found">
					<optgroup label="Media">
						<option value="TV">TV</option>
						<option value="Radio">Radio</option>
						<option value="Other">Other</option>
					</optgroup>
					<optgroup label="Web">
						<option value="Google">Google</option>
						<option value="Bing">Bing</option>
					</optgroup>
				</select>
				<script>
					function fillTestResults()
					{
						var testResults = document.getElementById('testResults');
						var firstName = document.getElementById('firstName').value;
						var lastName = document.getElementById('lastName').value;
						var found = document.getElementById('found').value;
						testResults.innerHTML = "You entered " + firstName + " " + lastName + " for a name. You found us via " + found + '.';
					}
				</script>
*/

/*
			Prepopulating Values:
			<select onchange="fillState(this.value);" name="location" id="location">
				<option value=""></option>
				<option value="Salt Lake City" onclick="fillState()"></option>
				<option value="Summerlin" onclick="fillState()"></option>
			</select>
			<script>
				function fillState(location)
				{
					var state = document.getElementById('state');
					if(state.value == '')
					{
						if(location == 'Salt Lake City')
						{
							state.value = 'UT';
						}
						else if(location == 'Summerlin')
						{
							state.value = 'NV';
						}
						else
						{
							state.value = null;
						}
					}
				}
			</script>
*/

/*
			Masking Values:
				<td>
					<label for="password">
						Password
					</label>
				</td>
				<td>
					<input type="password" name="password" id="password /">
				</td>
*/

/*
		Input Validation
			Upper and Lower Case:
				<input list="instruments" name="instrument" id="instrument" onchange="convertLower(this.value, 'instrument');" />
				<datalist id="instruments">
					<option value="guitar"></option>
					<option value="piano"></option>
					<option value="drums"></option>
					<option value="ukelele"></option>
				</datalist>
				<td>
					<label for="state">
						State
					</label>
				</td>
				<td>
					<input type="text" name="state" id="state" onchange="convertUpper(this.value, 'state');" />
				</td>
				<script>
					function convertUpper(text, field)
					{
						document.getElementById('field').value = text.toUpperCase();
					}
					function convertLower(text, field)
					{
						document.getElementById(field).value = text.toLowerCase();
					}
				</script>
*/

/*
			String Comparisons:
				<td>
					<label for="city">
						City
					</label>
				</td>
				<td>
					<input type="text" name="city" id="city" onchange="checkCity(this.value);" />
				</td>
			<script>
				function checkCity(city)
				{
					city = city.toUpperCase();
					if(city == 'LAS VEGAS' || city == 'NORTH LAS VEGAS' || city == 'HENDERSON')
							{
								document.getElementById('testResults').innerHTML = 'The Summerlin location will open in 2018.';
							}
				}
			</script>
*/

/*
			Validation:
			<tr>
				<td>
					<label for="zip">
						Zip
					</label>
				</td>
				<td>
					<input type="text" name="zip" id="zip" required />
				</td>
			</tr>
			<tr>
				<td>
					<label for="email">
						Email Address
					</label>
				</td>
				<td>
					<input type="email" name="email" id="email" />
				</td>
			</tr>
				<input type="number" size="3" value="hoursPlayed" id="hoursPlayed" />
			<input type="button" class="buttons" name="testForm" value="Test form" onclick="fillTestResults(); checkFields();" />
			<script>
				function checkFields()
				{
					if(document.getElementById('firstName').value == '' || document.getElementById('lastName').value == '')
					{
						alert('One or more required name fields are empty.');
					}
				}
			</script>
*/

/*
			NaN (Not a Number):
				3		=	Correct
				three	=	NaN
*/

/*
		Form Submission Process:
			onsubmit:
				<form action="thankyou.html" method="post" id="contactForm" onsubmit="checkFields();">
						...
				</form>
				<script>
					function convertUpper(text, field)
					{
						document.getElementById(field).value = text.toUpperCase();
					}
					function convertLower(text, field)
					{
						document.getElementById(field).value = text.toLowerCase();
					}
					function checkCity(city)
					{
						city = city.toUpperCase();
						if(city == 'LAS VEGAS' || city == 'NORTH LAS VEGAS' || city == 'HENDERSON')
							{
								document.getElementById('testResults').innerHTML = 'The Summerlin location will open in 2018.';
							}
					}
					function checkFields()
					{
						if(document.getElementById('firstName').value == '' || document.getElementById('lastName').value == '')
							{
								alert('One or more required name fields are empty.');
							}
					}
				</script>
*/

/*
			post vs get:
				<!--post will post information to a database.-->
				<!--get will retrieve information from a database.-->
				<form action="thankyou.html" method="post" id="contactForm" onsubmit="checkFields();">
						...
				</form>
*/

/*
			Understand Potential Submission Targets:
				The target is defined in the action attribute of the <form> tag.
				The most common targets for data on a form:
					Database:
						Data can be added to a database, or data can be used to look up a database to return matches.
					Script:
						The data can be directed to a script file for further processing.
						The script file is a go-between for a webpage submitting data to a data source, such as a database.
						Many of these are server-side scripts, and use a variety of programming languages, such as C# or Python.
					Webpage:
						The data can be processed on another webpage, and that webpage could have direct access to a database.
				Writing long form processing scripts is not important.
				Know the potential places on a form that data could go once a form is submitted.
*/

/*
		Exam #5 Tips:
		Interacting with HTML Forms
			Know how to retrieve form values.
			Even though different form elements exist, use the value attribute of the element.
			Use the getElementById method to retrieve that form	value.
			Know that forms are a direct descendant of the document object in the Document Object Model (DOM): document.forms
			Know how to prepopulate fields, and how to mask a value typed in an input text box.
			Know the role of the toUpperCase() and toLowerCase() methods.
				Remember that for strings to compare accurately, convert the strings to compare to a consistent	casing: "Las Vegas" != "LAS VEGAS".
			Know how to use JavaScript to validate a form.
			Remember that NaN means Not a Number.
			For any validation code that needs to run when a form is submitted, add that function to the onsubmit event of the form.
			The action attribute in a form is used to direct where the form is going to go to get processed, that could be a script, webpage or database.

		Final Exam Tips:
			Make sure you know which code example to use given a situation: for loop, while loop, do loop
			Know when to use if(), else if(), nested if()
			For code examples, make sure you know the order in which the statements go in.
			Know the differences between the events: onclick, onmouseover, onmouseout, onload, onchange, onkeydown.
*/

/*
	Forms Exercise Labs:
	Q1: Using the drag and drop method, drag each entry to its correct position in the code sample in order to make the	displayed prepopulating values true.
			function fillState(location)
			{
				var state = document.getElementById('state');
				if(state.value == "")
				{
					if(location == 'Salt Lake City')
					{
						state.value = 'UT';
					}
					else if(location == 'Summerlin')
					{
						state.value = 'NV';
					}
					else
					{
						state.value = null;
					}
				}
			}
		
	Q2: Drag and drop the correct target to its use in JavaScript.
			Script: data can be directed to a script for further processing.
			Database: data can be added or data can be used to return matches.
			Webpage: data can be processed on a different webpage.
*/

/*
	Forms Post-Assessment:
	Q1: The NaN indicator will usually appear when a(n) _ expecting a _ takes place:
			calculation, number

	Q2: Which attribute is usually used to retrieve what someone has filled out in an input field?
			value

	Q3: The displayed password field is masked, true or false?
			False
				A masked field does not show typed statements unless otherwise instructed to do so.

	Q4: How does a form field become required?
			Adding the required attribute to the code

	Q5: Which does this console show?
			A list of forms

	Q6: Which is a potential target for form submission?
			Script

	Q7: Which are two methods that convert text to uppercase and lowercase?
			.toUpperCase() and .toLowerCase()

	Q8: Using the drag and drop method, drag each entry to its correct position in the code sample in order to make the	displayed prepopulating values true.
			function fillState(location)
			{
				var state = document.getElementById('state');
				if(state.value == "")
				{
					if(location == 'Salt Lake City')
					{
						state.value = 'UT';
					}
					else if(location == 'Summerlin')
					{
						state.value = 'NV';
					}
					else
					{
						state.value = null;
					}
				}
			}

	Q9: Why is a case conversion necessary in an instance where a form field uses an if statement to check the text entered in that field?
			JavaScript is a case-sensitive language
		
	Q10: Drag and drop the correct target to its use in JavaScript.
			Script: data can be directed to a script for further processing.
			Database: data can be added or data can be used to return matches.
			Webpage: data can be processed on a different webpage.

	Q11: What is the name of the ID being used in the form code?
			<p>
				How did you hear about us?
			</p>
			<select name="found" id="found">
				<optgroup label="Media">
					<option value="TV">TV</option>
					<option value="Radio">Radio</option>
					<option value="Other">Other</option>
				</optgroup>
				<optgroup label="Web">
					<option value="Google">Google</option>
					<option value="Bing">Bing</option>
				</optgroup>
			</select>
				found

	Q12: onsubmit is the _ used to run any last code before a form sends its data to be processed.
			event

	Q13: Which are the two most common validation tasks?
			To make sure required fields are filled out.
			To make sure the correct type of data is entered into a field.

	Q14: When a form is submitted for processing to a database, which method is used?
			post
*/

/*
Video Tutorials:
	Creating Forms:
		Form Structure
			<form method="post" action="https://whatever.com/order.aspx"> </form>
			Typically, the form submission will be to a server-side technology, like ASP.NET, PHP, CGI, etc.
			The action attribute is the destination of the form submission.
		HTTP Messages
			http post - encodes form data in the body of the http message
			http get - encodes form and other data in the URL
			http://en.wikipedia.org/wiki/POST_(HTTP)
		Pizza Shop
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>Creating Forms</title>
			</head>
			<body>
				<h1>Creating Forms</h1>
				<form method="post" action="form.aspx">
					<p>
						<label>
							Customer name:
							<input type="text" id="customerName" name="customerName" maxlength="20" />
						</label>
					</p>
					<fieldset>
						<legend>
							Pizza Size
						</legend>
						<p>
							<label>								
								<input type="radio" name="size" value="small" />
								Small (10" inch)
							</label>
						</p>
						<p>
							<label>
								<input type="radio" name="size" value="medium" checked />
								Medium (12" inch)
							</label>
						</p>
						<p>
							<label>
								<input type="radio" name="size" value="large" />
								Large (14" inch)
							</label>
						</p>
					</fieldset>
					<fieldset>
						<legend>
							Pizza Topping
						</legend>
						<p>
							<label>
								<input type="checkbox" name="toppings" value="bacon" />
								Bacon
							</label>
						</p>
						<p>
							<label>
								<input type="checkbox" name="toppings" value="cheese" />
								Extra Cheese
							</label>
						</p>
						<p>
							<label>
								<input type="checkbox" name="toppings" value="onion" checked />
								Onion
							</label>
						</p>
						<p>
							<label>
								<input type="checkbox" name="toppings" value="mushroom" />
								Mushroom
							</label>
						</p>
					</fieldset>
					<p>
						Crust
						<select name="crust" multiple>
							<option value="c1">Normal</option>
							<option value="c2" selected>Chicago Deep Dish (+ 2)</option>
							<option value="c3">New York Thin</option>
						</select>
					</p>
					<p>
						<label for="comments">Delivery Instructions:</label>
							<textarea name="comments" cols="50" rows="5" maxlength="1000">
								How do we get to your house?
							</textarea>
					</p>
					<p>
						<input type="submit" value="Continue to Step 2" />
					</p>
					<p>
						<input type="reset" value="Reset Values" />
					</p>
				</form>
			</body>
			</html>
*/

/*
		Input Types
			<input type="text"
				<textarea>
			<input type="password"
			<input type="hidden"
			<input type="checkbox"
			<input type="radio"
			<input type="file"
			<input type="submit"
			<input type="image"
*/

/*
		Buttons vs Inputs
			<button type="button"
			<button type="submit"
			<button type="reset"
			Buttons have more CSS properties to style than equivalent
			Input versions:
			http://particletree.com/features/rediscovering-the-button-element/
*/

/*
	Form Validation and Other Future HTML5 Form Enhancements:
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<title>Validating & Enhancing Forms</title>
			<style type="text/css" media="all">
				span
				{
					width: 175px;
					display: block;
					float: left;
				}
				input
				{
					float: left;
				}
				p
				{
					padding-top: 10px;
					clear: all;
				}
				h2
				{
					padding-top: 20px;
					clear: all;
				}
				label
				{
					padding-right: 20px;
				}
			</style>
		</head>
		<body>
			<h1>Forms</h1>
			<form method="post" action="form.aspx">
				<h2>Email</h2>
				<p>
					<label>
						<span>
							Email Input:
						</span>
						<input type="email" name="emailInput" required />
					</label>
				</p>
				<h2>Telephone</h2>
				<p>
					<label>
						<span>
							Telephone Input:
						</span>
						<input type="tel" name="telInput" required />
							Oddly, the spec says the browser should	do nothing special. Hmm...
					</label>
				</p>
				<h2>URL</h2>
				<p>
					<label>
						<span>
							URL Input:
						</span>
						<input type="url" name="urlInput" required />
					</label>
				</p>
				<h2>Numeric Values</h2>
				<p>
					<label>
						<span>
							Number Input:
						</span>
						<input type="number" name="numberInput" required />
					</label>
				</p>
				<h2>Ranged Values</h2>
				<p>
					<label>
						<span>
							Range Input:
						</span>
						<input type="range" name="rangeInput" required value="42" />
							Value set to 42. By default, values are between 0 and 100.
					</label>
				</p>
				<h2>Data List</h2>
				<p>
					<label>
						<span>
							Data List:
						</span>
						<input type="text" list="someList" />
						<datalist id="someList">
							<option label=First Value="First">
							<option label=Second Value="Second">
							<option label=Third Value="Third">
						</datalist>
					</label>
				</p>
				<h2>Attributes</h2>
				<p>
					<label>
						<span>
							autofocus:
						</span>
						<input type="text" autofocus />
					</label>
				</p>
				<p>
					<label>
						<span>
							pattern:
						</span>
						<input type="text" pattern="^\d{5} (-\d{4})?$" />
							Hint: Use a valid/invalid zip code
					</label>
				</p>
				<p>
					<label>
						<span>
							placeholder:
						</span>
						<input type="text" placeholder="Hello world!" />
					</label>
				</p>
				<p>
					<label>
						<span>
							required:
						</span>
						<input type="text" required />
					</label>
				</p>
				<p>
					<label>
						<span>
							step:
						</span>
						<input type="number" step="5" />
							Hint: Must be divisible by 5
					</label>
				</p>
				<p>
					<button>
						Submit
					</button>
				</p>
			</form>
		</body>
		</html>
*/

/*
	How to Capture Form Data with JavaScript:
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<title>Capturing Form Data</title>
			<script>
				function formProcess()
				{
					var capture = document.forms["input"]["fname"].value + "<br/>";
					capture += document.forms["input"]["color"].value + "<br/>";
					capture += document.forms["input"]["iceCream"].value + "<br/>";
					if(document.forms["input"]["callMe0"]).checked
					{
						capture += document.forms["input"]["callMe0"].value + "<br/>";
					}
					else
					{
						capture += document.forms["input"]["callMe1"].value + "<br/>";
					}
					document.getElementById("outputDiv").innerHTML = capture;
				}
			</script>
		</head>
		<body>
			<div id="outputDiv" style="height:100px; border:1px solid;"> </div>
			<form id="input" name="myForm" enctype="multipart/form-data" onsubmit="return false">
			<p>
				Name:
				<input type="text" id="fname" name="fname" />
			</p>
			<p>
				Favourite Color:
				<input type="color" id="color" name="color" />
			</p>
			<p>
				Ice Cream:
				<select name="Ice Cream" id="iceCream">
					<option>Vanilla</option>
					<option>Chocolate</option>
					<option>Strawberry</option>
				</select>
			</p>
			<p>
				Call Me?
				<label>
					<input type="radio" name="callMe" value="Yes" id="callMe_0" />
						Yes
				</label>
				<label>
					<input type="radio" name="callMe" value="No" id="callMe_1" />
						No
				</label>
				<br/> <br/>
					<input type="submit" value="OK" onclick="formProcess()" />
			</p>
			</form>
		</body>
		</html>
*/

/*
Supplementary Material:
	More About Validating Form Data:
		There are a variety of input controls available for a web developer to use to get input from a user.
		We have seen Validation of the contents of fields using JavaScript.
		HTML5 offers some simple validation capabilities by simply using the new "Validation Attributes" for the element:
			value			provides a "default" value
			placeholder		a tip that is cleared upon any input
			required		field must be given a value
			maxlength		maximum number of characters
			min & max		works with numbers and dates
			pattern			used with regular expressions (regexp)
*/

/*
Quiz:
	Q1: Please drag the options to complete the code:
			How do you prefer to get to work?
				Walk
				Rub
				Cycle
				Take Bus	Submit

				Cycle

			<!DOCTYPE html>
			<html>
			<body>
				<h3>How do you prefer to get to work?</h3>
				<select id="myOptions" size="4">
					<option value="Walk">Walk</option>
					<option value="Run">Run</option>
					<option value="Cycle">Cycle</option>
					<option value="Take the bus">Take Bus</option>
				</select>
				<button onclick="funcTransport()">Submit</button>
				<p id="result"></p>
				<script>
					function funcTransport()
					{
						var found = document.getElementById("myOptions").value;
						document.getElementById("result").innerHTML = found;
					}
				</script>
			</body>
			</html>
		To retrieve the value of a <select> element, we use its value property, not the innerHTML property.
		This is just like using the <input> element.

	Q2: The correct password is 'nevada' and is case insensitive. Please drag the options to complete the code:
			Password: _
			Submit

			<form>
				Password:
				<input type="password" id="password" name="password" /> <br/>
				<input type="submit" value="Submit" onclick="validatePassword()" />
			</form>
			<script>
				function validatePassword()
				{
					var passwordEntered = document.getElementById("password").value;
					var validPassword = "nevada";
					if(passwordEntered.toLowerCase() == validPassword)
					{
						alert("Login successful!");
					}
					else
					{
						alert("Invalid password entered!");
					}
				}
			</script>
				The toLowerCase() method in JavaScript converts a string to lowercase letters.

	Q3: Please drag the options to complete the code:
			<form name="myForm" action="/process.php" onsubmit="validateForm()" method="post">
				 Name:
				 <input type="submit" value="Submit" />
			</form>
				"myForm" is the name of the form.
				"/process.php" is the name of the file stored on a web server.
				"validateForm()" is the name of the JavaScript function called to validate the user entries (the function has not been displayed in the question).
				"post" is a HTTP Request Method.

	Q4: Please drag the options to complete the code:
			First name: Joe
			Last Name: Bloggs
			PPS No: 7648316S
		
			Submit
		
			Joe Bloggs 7648316S

				<!DOCTYPE html>
				<html>
				<body>
					<script>
						function processForm()
						{
							var firstName = document.getElementById("fName").value;
							var lastName = document.getElementById("lName").value;
							var ppsNo = document.getElementById("ppsNo").value;
							var testOutput = document.getElementById("testResults");
							testOutput.innerHTML = firstName + "" + lastName + "" + ppsNo;
						}
					</script>
					<form>
						First name:
						<input type="text" id="fName" name="firstname" /> <br/>	<br/>
						Last name:
						<input type="text" id="lName" name="lastname" /> <br/> <br/>
						PPS No: &nbsp; &nbsp;
						<input type="text" id="ppsNo" name="ppsNo" /> <br/> <br/>
						<input type="submit" value="Submit" onclick="processForm()"> <br/> <br/>
						<p id="testResults"></p>
					</form>
				</body>
				</html>
					The value attribute specifies the value of an <input> element.
					We don't use the innerHTML property in the context of retrieving values entered into form fields.

	Q5: In the Zip Code field, the text 'None' should appear by default when the page loads, as not every region has a zip code.
		Please drag the options to complete the code:
			Zip Code: None

			Submit
			
			<!DOCTYPE html>
			<html>
			<body>
				<form action="/process_page.php">
					Zip Code:
					<input type="text" name="zipCode" value="None" /> <br/> <br/>
					<input type="submit" value="Submit" onclick="processForm()">
				</form>
			</body>
			</html>
				To pre-populate/set the value of an element, we use the value property.
		
	Q6: The characters entered into the Password field on the form should be masked with asterisks. Please drag the options to complete the code:
			Password: ******

			Submit

			<!DOCTYPE html>
			<html>
			<body>
				<form action="/process_page.php">
					Password:
					<input type="password" name="password" /> <br/> <br/>
					<input type="submit" value="Submit">
				</form>
			</body>
			</html>
				The <input> "password" element allows the user to enter a password without the characters being displayed.

	Q7: Users are required to enter a value. Please drag the options to complete the code:
			Staff ID: ! Please fill out this field.

			Submit

			<!DOCTYPE html>
			<html>
			<body>
				<form action="/process_page.php">
					Staff ID:
					<input type="text" required /> <br/> <br/>
					<button>Submit</button>
				</form>
			</body>
			</html>
				By including the required attribute, it ensures that the text field must be filled out before the form is submitted.
				Other valid syntax options include:
				1. Assign an empty string "" to the required attribute:	<input type="text" required="" />
				2. Assign the string "required" to the required attribute: <input type="text" required="required" />
				If you specify a # in the action attribute of a form object: <form action="#">, you are not attempting to submit the form to a server.
				The # value indicates that the form stays on the same page, this is good for practice if you don't have access to a server.

	Q8: Please drag the options to complete the code:
			Age: 13		Name: Billy		Click

			5 admittance fee for teenagers!

			<body>
				Age:
				<input type="number" id="age" name="age" /> &nbsp;
				Name:
				<input type="text" id="name" name="name" />
				<button onclick="displayCustomGreeting()"> Click </button>
				<script>
					function displayCustomGreeting()
					{
						var ageEntered = document.getElementById("age").value;
						var nameEntered = document.getElementById("name").value;
						var message = "";
						if(ageEntered <= 12)
						{
							message = "2 admittance fee for children!";
						}
						else if(ageEntered > 12 && ageEntered < 18)
						{
							message = "5 admittance fee for teenagers!";
						}
						else
						{
							message = "10 admittance fee for adults!";
						}
						document.getElementById("fee").innerHTML = message;
					}
				</script>
				<p id="fee"></p>
			</body>
				To call a JavaScript function when a button is clicked, we use the onclick() event.
				The onsubmit() event is called in the context of a form being submitted.

	Q9: The most common addition to the onsubmit event will be one or more functions used to validate a form.
			<form onsubmit="validateUserInput()">
				Name:
				<input type="text" />
				Age:
				<input type="number" />
				<input type="submit" />
			</form>
		onsubmit is the event used to run any last code before a form sends its data to be processed.
		The most common addition to the onsubmit event will be one or more functions used to validate a form.

	Q10: I have typed the name of the exam course code (MTA 98-382) into a search engine. (Notice that the search terms show in the URL below):
		 https://www.google.ie/search?source=hp&ei=TYZgWvrJIOvFgAbknr7wAQ&q=MTA+98-382&oq=MTA+98-382&gs_l=psy-ab.3.....
		 Select the correct option which will complete the statement below:
			The HTTP "get" Request Method was used to facilitate the request-response between the client and server.
				With the get method, the search terms actually show in the URL, if you are processing secure data, you may not want to use the get method.
			The HTTP "post" method would be a better choice in that	scenario.

	Q11: Select the correct options to complete the statement below:
			"post" is a request method supported by the HTTP protocol used by the World Wide Web.
			By design, the method requests that a web server accept the data enclosed in the body of the request message, most likely for storing it.
			It is often used when uploading a file or when submitting a	completed web form.
			In contrast, the HTTP "get" request method retrieves information from the server.
			As part of this request, some data can be passed within the	URL's query string, specifying (for example) search terms, date ranges, or other
			information that defines the query.
			With the POST Method, the query string (name/value pairs) is sent in the HTTP message body of a POST request.
			With the GET Method, the query string (name/value pairs) is sent in the URL of a GET request.

	Q12: How can I display a list of all of the elements contained on a form?
			document.forms[0].elements
				This returns an array of the forms created on the web page.
				The question states that there is only one form on the web page, so its contents are stored at index position [0] of the array.

	Q13: When the 'Submit' button is pressed, the total price of the item, including VAT at 10%, should be displayed.
		 What happens when the 'Submit' button is pressed, given an input value of 'forty'?

			 Amount:	forty

			 Submit

			<!DOCTYPE html>
			<html>
			<body>
				<form>
					Amount:
					<input type="text" id="bill" name="bill"> <br/> <br/>
					<input type="submit" value="Submit" onClick="calculateVAT()">
				</form>
				<script>
					function calculateVAT()
					{
						var bill = document.getElementById("bill").value;
						var vatDue = bill * 0.10;
						var totalAmountDue = bill + vatDue;
						document.getElementById("output").innerHTML = totalAmountDue;
					}
				</script>
			<p id="output"></p>
			</body>
			</html>
				The NaN property will be displayed in the output.
					The NaN property represents: "Not-a-Number".
					If a JavaScript function expects to work with a number, but is given text, the value NaN will be used instead.

	Q14: Which are some of the most common targets for data submitted on a form?
			A script
			A web page
			A database
				The target is defined in the action attribute of the form tag.
				The most common targets for data on a form are a script, a web page and a database.

	Q15: As this is a void element, there is no inner html here, true or false?
			<input type="text" name="lastname" id="lastname" />	
				True.
					As there is no text between the opening and closing tag, there is no inner html here.

	Q16: You wish to ensure that a valid email address is entered by a user on a form.
		 This can be achieved using HTML or JavaScript, true or false?
			True.
				Either HTML or JavaScript can be used.
				We could use the HTML5 input email object.
				This will automatically validate the user entry to ensure that it is a valid email address.
*/