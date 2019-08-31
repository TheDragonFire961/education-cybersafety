/*
    pages.js: contains JS for working with text.
	
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
	
    Important licencing note: The actual rendered content here is licenced under a Creative Commons
    Attribution 4.0 license: <https://creativecommons.org/licenses/by/4.0/>
    
	@dependencies text.js
*/ 
class Pages {
    // Naming syntax:
    // Each page has its own function in this format (underscores for emphasis):
    // *So, if we had a page about _Digital Footprint_, wholly written by _Lilly_ (if you don't know who she is, that's an alias for
    //  Lillianna), then we would give it the following name, in snake case, preserving original caps. Shorthand author codes:
    //  **En: Ethan (the author of this comment)
    Introduction() {
        this.text.Queue(this.text.NewH(1, 'Welcome to Education Cybersafety!'));
	    this.text.Queue(this.text.NewP('Education Cybersafety is a guide to the cruel world that is the internet.'));
        this.text.Queue(this.text.NewP('Our guides include:<ul><li>' + NewA('Introduction to identity theft') + '</li></ul>'));
        this.text.Queue(true, true);
    }
    Digital_footprint() {
        // @started 12:08 PM 14/07/2019
        // @implemented en
        // @author li
        // Pointer to original DOCX file: 
        this.text.Queue(this.text.NewH(1, 'Digital Footprint'));
        this.text.Queue(this.text.NewP('A digital footprint is the information about a particular person that exists on the Internet as a result of their online activity.' + this.ref.Web('https://www.google.com/search?q=what+is+a+digital+footprint', 'what is a digital footprint - Google Search', 'Google', 'Google', true, null, null, null, 2019, 'July', 2, {date_format: DATEFORMAT_jFY}))); // When Edge DevTools says you need an additional bracket but you don't know what the hell it's talking about. Thanks to THIS line of code I'm neglecting one of Lilly's emails! How fun.
    }
    Run() {
        // Starts the page handler.
        this.LoadPage("Introduction");
    }
    LoadPage(page) {
        if (page = "Introduction") {
            this.pageId = "Introduction";
            this.Introduction();
        }
    }
    constructor() {        
        this.text = new textClass();
        this.ref = new Ref();
    }
    
}
