/*
    errorHandler.js: contains error handlers and panic events.
	
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
*/

/* 
    This event listener will listen for any crap that happens to fail (an error, for you non-techies).
    JS errors still screw up page execution, but at least they'll get an explanation as to _why_ this 
    piece of anticyberbullying crap failed, kernel panic style.
 
    Note that error messages are different across browsers. 
*/

function Panic (message, url, lineNo, columnNo, error) { // @fixme: Change names of vars
    // The main message of this function is "Crap, something's gone really wrong, that has just 
    // killed all the JS." Idiots, please don't call this _unless_ a breaking error has occured. 
    // This function is not too dissimilar to unix kernel panics.
    // Create a new variable to hold the DOM pointer for the error div 
    var errorMessageDiv;
    errorMessageDiv = document.getElementById("error-message");
    try { 
        // We really don't need failures of our error handler. Provide as much protection as 
	// possible, even if it is the dreaded try block.
        // Make errorMessageDiv visible
	errorMessageDiv.class = '';
    }
    catch (error) {
	
    }
    finally {
	// The crap that's _always_ executed. Happy debugging.
    }
}

window.onerror = function(message, source, lineno, colno, error) {
    console.log("Am I really executing?");
    Panic(message, source, lineno, colno, error);
}

