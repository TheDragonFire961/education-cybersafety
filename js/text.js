/*
    textjs: contains JS for working with text.
    
    Copyright (C) 2019 Ethan/TheDragonFire961.
    This file is part of Education Cybersafety.
    
    Education Cybersafety is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Education Cybersafety is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with Education Cybersafety.  If not, see <https://www.gnu.org/licenses/>.
	
    To contact the authors of this program, email <qpcc_tdf961(AT)outlook.com>. See the
    GitHub repo for this project: https://github.com/TheDragonFire961/education-cybersafety
*/

// @note: Ace editor doesn't fucking remember my whitespace settings, so remember to set that before a drunk coding
// run

// The text class contains all methods necessary to build, well, text!
class textClass {
	// Defines go in the construct function at the end 
	// Following are HTML tag construct functions.
	// textClass.NewP(): creates new paragraph. It exposes HTML attributes, with specific fields for class and id.
	NewP(content = '', HTMLclass = '', id = '', others = '') {
		var parameters = '';
		if (HTMLclass !== '') {
		    parameters += ' class="' + HTMLclass + '"';
		} 
		if (id !== '') {
		    parameters += ' id="' + id + '"';
		} 
		if (others !== '') {
		    parameters += ' ' + others;
		}
	    return "<p" + parameters + ">" + content + "</p>";
	}
	// textClass.NewA(): creates a new hyperlink (a tag).
	NewA(label = '', href = 'button', onclickTarget = '', rel = 'noopener', target = '_self', id = '', HTMLclass = '', others = '') {
		var parameters = '';
		parameters += ' type="' + type + '"'; 
		if (onclickTarget !== '') {
		    parameters += ' onclick="' + onclickTarget + '"';
		}
        if (href !== '') {
		    parameters += ' href="' + href + '"';
		} 
        // There should better be a good reason why rel and target are empty...
		parameters += ' rel="' + rel + '"';
		parameters += ' target="' + target + '"';
		if (id !== '') {
		    parameters += ' id="' + id + '"';
		} 
		if (HTMLclass !== '') {
		    parameters += ' class="' + HTMLclass + '"';
		}
	    return "<button" + parameters + ">" + label + "</button>";
	}
	// textClass.NewButton() creates a new button.
	NewButton(label = '', type = 'button', onclickTarget = '', id = '', HTMLclass = '', others = '') {
		var parameters = '';
		parameters += ' type="' + type + '"'; 
		if (onclickTarget !== '') {
		    parameters += ' onclick="' + onclickTarget + '"';
		} 
		if (id !== '') {
		    parameters += ' id="' + id + '"';
		} 
		if (HTMLclass !== '') {
		    parameters += ' class="' + HTMLclass + '"';
		}
	    return "<button" + parameters + ">" + label + "</button>";
	}
	// textClass.NewTag(): creates any body tag.
	NewTag(content = '') {
		this.content.innerHTML += content; // Note you need to know what tag you want to put in your head; the function won't do that for you!
	    return;
	}
	// textClass.NewImg(); creates a new HTML image. Meta tag for textClass.NewImage(); yes, there is a difference between the two.
	// Do not use textClass.NewImg() unless the image you are referring to is either public domain, CC0-licensed or similarly public domain somehow.
	NewImg(path = '', alt = '', HTMLclass = '', id = '') {
		// NO hotlinked images, since the QPCC overlords _will_ kick your ass if we do.
        // The W3C overlords say that alt text is _mandatory_ on all <img>s, so don't bother checking that crap to see if it's empty.
		var parameters;
		// Throw warning if the path looks like a URL (not allowed);
		if (path.match(/^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i)) {
			console.warn("Hotlinking of image(s) detected. You cannot hotlink images; please download locally and import.");
		}
		
	}
    NewImage(path = '', alt = '', imgRef = '', onclickTarget = '', HTMLclass = '', others= '', id = '', imgHTMLClass = '', imgId = '', imgOthers = '') {
		// We create the image by wrapping it with the image's image ID (assigned in js/imageRegistry.js).
		// It is borne out of two parts: an <a> tag to provide a hyperlink and an <img> tag inside.
        //
		// Best create the URL before injecting it
		var imgRefFull = 'index.html?mode=image&amp;imgRef=' + imgRef;
		// Return a recursively created hyperlink and image combo.
		return this.NewA(this.NewImg(path, alt, imgHTMLClass, imgId, imgOthers), imgRef, onclickTarget, 'noopener', '_blank', id, HTMLClass, others);
	}
	// Following are publishing functions. The constructor functions _don't_ publish text 
	// automatically; it must be passed through a publishing function.
	// textClass.Print(): Prints the content to DOM.
	Print(content) {
		return this.content.innerHTML += content;
	}
	// textClass.Clear(): Clears the DOM entirely. Useful for resetting the page?
	Clear() {
		return this.content.innerHTML = '';
	}
	// textClass.Queue(): holds the text in a queue, prints it and/or deletes it. To queue, pass 
	// textClass.Queue(content). Replace it with textClass.Queue(true) to publish the contents of the queue.
    // To flush it, pass (textClass.Queue('anything', true);.
	Queue(content, flush) {
		if (content === true) {
			this.Print(this.queue);
		} else {
		    this.queue += content;
		}
		if (flush === true) {
			this.queue = ''; // Clears queue
		}
	}
	// Following are helper functions.
	// textClass.title(): sets the <title> element in the index.html file.
	Title(string) {
		document.title = string;
	}
	// Following are constructor (akin to PHP __construct()) functions.
	constructor() {
		// Define some DOM elements
		this.content = document.getElementById("content");
        this.queue = '';
    }
}

// This class contains constructs for a single in-text reference. We use the WP format here: they
// look like this: [1] and can be hovered over by the user to get a reference.
class Ref {
	constructor() {
		
	}
}
