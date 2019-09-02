/*
    pages.js: contains JS for working with text.
	
    Copyright (C) 2019 Ethan/TheDragonFire961 and Lillianna.
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
        this.text.Queue(this.text.NewP('Our guides include:<ul><li>' + this.text.NewA('Impersonation', '#', "pages.LoadPage('Identity_theft');") + '</li><li>' + this.text.NewA('What is a digital footprint?', '#', "pages.LoadPage('Digital_footprint');") + '</ul>'));
        this.ref.RefList();
	this.text.Queue(true, true);
    }
    Identity_theft() {
        this.text.Queue(this.text.NewH(1, 'Impersonation'));
        this.text.Queue(this.text.PageNavbar('Home', "pages.LoadPage('Introduction');", 'Impersonation', "pages.LoadPage('Identity_theft');"));
        this.text.Queue(this.text.NewP('Impersonation is the art of stealing a victim’s online identity and/or fraudulently posing as them, and a common issue that can arise from poor online safety. There are a variety of motives to explain why one may choose to impersonate a victim, be it for financial gain, to attack a victim or other means.'));
        this.text.Queue(this.text.NewP('One particular example is of a woman, herein given the pseudonym “Margaret”. Following a date with a man named Marcos Lujan, of nine month’s length, Margaret decided to end her relationship with Marcos. \
However, in retaliation, Marcos started to impersonate her online and solicited sex from groups of men. These men would visit Margaret under the guise that she had given them permission to undertake sexual intercourse with Margaret and harass her about this. Note that the real Margaret had never given them permission for sexual intercourse, but Marcos, impersonating her, had convinced many groups of men that she had. Following her harassment, Margaret moved away from her South Austin, United States home and was diagnosed with post-traumatic stress disorder.'));
        this.text.Queue(this.text.NewP('Advice that was sourced from police following the Margaret incident involves recording the URL [author’s note: or save a local copy, if applicable] of the message and immediately call the social media site to report it. Police state that \
the operating network should remove the profile but information should be saved for police. Marcos Lujan was convicted of online impersonation, a third-degree felony in the US, and served several months behind bars. However, he was released in early 2015. ' + this.ref.Web('https://www.khou.com/article/news/crime/woman-shares-horrific-online-impersonation-story/148485375', 'Woman shares &apos;horrific&apos; impersonation story', 'KHOU', 'KHOU staff', true, 2015, 'July', 29, 2019, 'July', 2019)));
        this.text.Queue(this.text.NewH(2, 'References'));
	this.text.Queue(this.ref.RefList());
	this.text.Queue(true, true);
    }
    Digital_footprint() {
        // @started 12:08 PM 14/07/2019
        // @implemented en
        // @author li
        // Pointer to original DOCX file: 
        this.text.Queue(this.text.NewH(1, 'Digital Footprint'));
		this.text.Queue(this.text.PageNavbar('Home', "pages.LoadPage('Introduction');", 'Digital Footprint', "pages.LoadPage('Digital_footprint');"));
        this.text.Queue(this.text.NewP('A digital footprint is the information about a particular person that exists on the Internet as a result of their online activity. ' + this.ref.Web('https://www.google.com/search?q=what+is+a+digital+footprint', 'what is a digital footprint - Google Search', 'Google', 'Google', true, null, null, null, 2019, 'July', 2, {date_format: 'DATEFORMAT_jFY'}) + ' It includes every piece of information you provide on the internet and includes name, gender, email address and other properties. ' + this.ref.Web('https://prezi.com/jijoyq-jkdrr/the-importance-of-a-positive-digital-footprint/', 'THE IMPORTANCE OF A POSITIVE DIGITAL FOOTPRINT', 'Prezi', 'pr an', true, null, null, null, 2019, 'July', 2, ))); // When Edge DevTools says you need an additional bracket but you don't know what the hell it's talking about. Thanks to THIS line of code I'm neglecting one of Lilly's emails! How fun.
        this.text.Queue(this.text.NewP('An individual&apos;s digital footprint is a self portrait of a person painted online. It can be used to form an image about an individual on the online world. It can be used by future employers and universities to help vet potential students/employees, perhaps disqualifying them if their digital footprint says so.'));
	    this.text.Queue(this.text.NewH(2, 'References'));
	    this.text.Queue(this.ref.RefList());
	    this.text.Queue(true, true);
    }
    Run() {
        // Starts the page handler. '
        this.LoadPage("Introduction");
    }
    LoadPage(page) {
        this.text.Clear();
        if (page === "Introduction") {
            this.pageId = "Introduction";
            this.Introduction();
        }
	    if (page === "Identity_theft") {
		this.pageId = "Identity_theft";
		this.Identity_theft();
	    }
        if (page === "Digital_footprint") {
            this.pageId = "Digital_footprint";
            this.Digital_footprint();
        }
    }
    constructor() {        
        this.text = new textClass();
        this.ref = new Ref();
    }
    
}
