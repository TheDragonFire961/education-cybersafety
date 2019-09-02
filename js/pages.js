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
    //  **En: Ethan (the author of this comment).
	//  **Li: Lilly. No, that I isn't the first letter of her last name.
    Introduction() {
        this.text.Queue(this.text.NewH(1, 'Welcome to Education Cybersafety!'));
        this.text.Queue(this.text.NewP('Education Cybersafety is a guide to the cruel world that is the internet. It gives advice as to how to keep your online identity safe from impersonation and defamation, explains what various online threats such as impersonation, and gives examples of what has happened to people online who did not keep their identity safe.'));
        this.text.Queue(this.text.NewP('Our guides include:<ul><li>' + this.text.NewA('Impersonation', '#', "pages.LoadPage('Identity_theft');") + '</li><li>' + this.text.NewA('Oversharing on social media', '#', "pages.LoadPage('Digital_footprint_management');") + '</li><li style="text-indent:1.3em;">' + this.text.NewA('What is a digital footprint?', '#', "pages.LoadPage('Digital_footprint');") + '</li><li>' + this.text.NewA('Defamation on social media', '#', "pages.LoadPage('Defamation');") + '</li><li>' + this.text.NewA('Tips to prevent identity theft and oversharing', '#', "pages.LoadPage('Tips');") + '</li></ul>'));
        this.ref.RefList();
	    this.text.Queue(true, true);
    }
    Identity_theft() {
        this.text.Queue(this.text.NewH(1, 'Impersonation'));
        this.text.Queue(this.text.PageNavbar('Home', "pages.LoadPage('Introduction');", 'Impersonation', "pages.LoadPage('Identity_theft');"));
        this.text.Queue(this.text.NewP('Impersonation is the art of stealing a victim’s online identity and/or fraudulently posing as them, and a common issue that can arise from poor online safety. There are a variety of motives to explain why one may choose to impersonate a victim, be it for financial gain, to attack a victim or other means.'));
        this.text.Queue(this.text.NewP('Impersonation is frequenctly assisted by people oversharing on social media (see ' + this.text.NewA('Oversharing on social media', '#', "pages.LoadPage('Digital_footprint_management');") + '). Though ill-advised, it is legal in most countries to breach your own privacy. If an impersonator breaches your privacy however, a claim of misuse of private information is available. For example, in one case, a victim&apos;s sexual orientation, relationship status and political and religious views were misused. The validitiy of the information was called into question, but nevertheless damages were awarded. However, this is not all an impersonator might steal; they might communicate with others under their false identity.' 
+ this.ref.Web('https://himsworthscott.com/issue/can-i-someone-impersonating-online/', 'What can I do about someone impersonating me online?', 'Himsworth Scott', 'Himsworth Scott', true, null, null, null, 2019, 'September', 2)));
        this.text.Queue(this.text.NewP('One particular example is of a woman, herein given the pseudonym “Margaret”. Following a date with a man named Marcos Lujan, of nine month’s length, Margaret decided to end her relationship with Marcos. \
However, in retaliation, Marcos started to impersonate her online and solicited sex from groups of men. These men would visit Margaret under the guise that she had given them permission to undertake sexual intercourse with Margaret and harass her about this. Note that the real Margaret had never given them permission for sexual intercourse, but Marcos, impersonating her, had convinced many groups of men that she had. Following her harassment, Margaret moved away from her South Austin, United States home and was diagnosed with post-traumatic stress disorder.'));
        this.text.Queue(this.text.NewP('Advice that was sourced from police following the Margaret incident involves recording the URL [author’s note: or save a local copy, if applicable] of the message and immediately call the social media site to report it. Police state that \
the operating network should remove the profile but information should be saved for police. Marcos Lujan was convicted of online impersonation, a third-degree felony in the US, and served several months behind bars. However, he was released in early 2015. ' + this.ref.Web('https://www.khou.com/article/news/crime/woman-shares-horrific-online-impersonation-story/148485375', 'Woman shares &apos;horrific&apos; impersonation story', 'KHOU', 'KHOU staff', true, 2015, 'July', 29, 2019, 'July', 29)));
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
		this.text.Queue(this.text.PageNavbar('Home', "pages.LoadPage('Introduction');", 'Oversharing on Social Media', "pages.LoadPage('Digital_footprint_management');", 'Digital Footprint', "pages.LoadPage('Digital_footprint');"));
        this.text.Queue(this.text.NewP('A digital footprint is the information about a particular person that exists on the Internet as a result of their online activity. ' + this.ref.Web('https://www.google.com/search?q=what+is+a+digital+footprint', 'what is a digital footprint - Google Search', 'Google', 'Google', true, null, null, null, 2019, 'July', 2, {date_format: 'DATEFORMAT_jFY'}) + ' It includes every piece of information you provide on the internet and includes name, gender, email address and other properties. ' + this.ref.Web('https://prezi.com/jijoyq-jkdrr/the-importance-of-a-positive-digital-footprint/', 'THE IMPORTANCE OF A POSITIVE DIGITAL FOOTPRINT', 'Prezi', 'pr an', true, null, null, null, 2019, 'July', 2, ))); // When Edge DevTools says you need an additional bracket but you don't know what the hell it's talking about. Thanks to THIS line of code I'm neglecting one of Lilly's emails! How fun.
        this.text.Queue(this.text.NewP('An individual&apos;s digital footprint is a self portrait of a person painted online. It can be used to form an image about an individual on the online world. It can be used by future employers and universities to help vet potential students/employees, perhaps disqualifying them if their digital footprint says so.'));
	    this.text.Queue(this.text.NewH(2, 'References'));
	    this.text.Queue(this.ref.RefList());
	    this.text.Queue(true, true);
    }
    Digital_footprint_management() {
        this.text.Queue(this.text.NewH(1, 'Oversharing on Social Media')); 
	    this.text.Queue(this.text.PageNavbar('Home', "pages.LoadPage('Introduction');", 'Oversharing on Social Media', "pages.LoadPage('Digital_footprint_management');"));
        this.text.Queue(this.text.NewP('Oversharing on social media; that is, giving away private information, is a common issue. Reasons for it occuring include: <ul><li>Perceived anonymity - people believe that hiding behind usernames and not using their real names prevents it from being an issue.</li><li>Invisibility - It is easier for people to give away information behind a keyboard and when their target isn&apos;t looking at the poster.</li><li>Delayed communication - messages need not be returned immediately</li><li>Filling in the other person - the poster may be pretending to be someone else.</li><li>Social media is not real, and therefore people do not believe giving information is of negative consequence</li><li>Lack of authority -People may disagree with someone’s identity online or offline, causing them to blurt out something which should never be said in real life or in front of the police.</li><li> \
Boredom - people, bored, give away personal information freely without realising the consequences.</li><li>Egocentricity - people think that they&apos;re the centre of the universe, that the universe cares about what they&apos;re doing and therefore need to disclose personal info publically.</li><li>Low self-esteem - people, depressed, are seeking attention and validation.</li></ul>' + this.ref.Web('https://memarketingservices.com/oversharing-on-social-media/', 'The Problem with Oversharing on Social Media', 'ME Marking Services', 'Mandy Edwards', false, 2018, 'January', 2, 2019, 'July', 2)));
        this.text.Queue(this.text.NewH(2, 'Unintentional oversharing'));
        this.text.Queue(this.text.NewP('Some technology often leads to unintended consequences, such as threats to privacy and changes in the relationship between public and private buttons. These issues have been studied with respect to a variety of internet problems.' + this.ref.Web('https://academic.oup.com/jcmc/article/15/1/83/4064812', 'Facebook and Online Privacy: Attitudes, Behaviors, and Unintended Consequences', 'Oxford Academic', 'Bernhard Debatin', false, 2009, 'October', 1, 2019, 'July', 8)));
        this.text.Queue(this.text.NewH(2, 'References'));
	this.text.Queue(this.ref.RefList());
	this.text.Queue(true, true);
    }
    Defamation() {
        this.text.Queue(this.text.NewH(1, 'Defamation on Social Media'));
	this.text.Queue(this.text.PageNavbar('Home', "pages.LoadPage('Introduction');", 'Defamation on Social Media', "pages.LoadPage('Defamation');"));
        this.text.Queue(this.text.NewP('Defamation on social media is as effective as on other classical means. The fact that social media facilitates broadcasting information adds further risk. Further, you can be just as liable if you defame another person.'));
        this.text.Queue(this.text.NewP('Defamation occurs when a person intentionally spreads information about another person, group or company that can (or has the goal to) either damage their reputation or make others think less of them. Defamation can be effected in print, via photos or over the internet. The latter medium is relatively new but the same principles apply. Even if you only share defamatory material (for example, retweeting a Twitter tweet), you can be found guilty of defamation. Several defences of defamation exist, including that the defaming statement was true, or expression of an honest opinion. Bar these two, you can be held liable for defamation if you spread information which constitues \
a hurtful and untrue statement about another entity.'));
        this.text.Queue(this.text.NewH(2, 'Litigation over defamation'));
        this.text.Queue(this.text.NewP('Several lawsuits have been fought over defamation.'));
        this.text.Queue(this.text.NewP('In Australia, a former high school student was ordered to pay $100,000 in damages over a series of defamatory posts. His victim was one of his teachers.'));
        this.text.Queue(this.text.NewP('In the US, a teenager, identified only as John Doe, was beset by four pranksters who created a fake Facebook profile impersonating him and making racist and explicitily sexual comments with it. It attracted 580 friends and falsely identitfied John as homosexual. Damages being sought exceed $50,000. ' + this.ref.Web('https://abcnews.go.com/Technology/AheadoftheCurve/teens-sued-fake-facebook-profile/story?id=8702282', 'Teens Sued For Fake Facebook Profile', 'ABC News', 'Ki Mae Heussner', false, 2009, 'September', 29, 2019, 'September', 2)));
        this.text.Queue(this.text.NewH(2, 'If you&apos;re accused of defamation'));
        this.text.Queue(this.text.NewP('If you are accused of defamation, and you realise that the post was offensive, you should take down the offending post and apologise. The victim might forgive you and you may avoid court. ' + this.ref.Web('https://www.slatergordon.com.au/blog/5-things-to-know-about-social-media-defamation', '5 things to know about social media defamation', 'Slater and Gordon', 'Slater and Gordon', true, 2014, 'March', 17, 2019, 'September', 2)));
        this.text.Queue(this.text.NewH(2, 'References'));
        this.text.Queue(this.ref.RefList());
        this.text.Queue(true, true);
    }
    Tips() {
        this.text.Queue(this.text.NewH(1, 'Tips to Protect Against Identity Theft and Oversharing'));
        this.text.Queue(this.text.PageNavbar('Home', "pages.LoadPage('Introduction');", 'Tips to Protect Against Identity Theft', "pages.LoadPage('Tips');"));
        this.text.Queue(this.text.NewP('Despite the threats of identity theft and oversharing on social media, there are ways to protect yourself.<ul><li>Avoid sharing too much personal information online on social media.</li><li>Use the privacy setting to protect privacy.</li><li>Try and keep track of all your online accounts and be careful of the ones you actively use and delete the ones you don’t use.</li><li>Google yourself to see your online image and reputation.</li><li>Keep separate accounts for separate reasons (if possible).</li><li>Keep track of your passwords and never share them in the online world.</li><li>Regularly change your passwords.</li><li>Log off from accounts after use.</li></ul> ' + this.ref.Web('https://prezi.com/jijoyq-jkdrr/the-importance-of-a-positive-digital-footprint/', 'THE IMPORTANCE OF A POSITIVE DIGITAL FOOTPRINT', 'Prezi', 'pr an', true, null, null, null, 2019, 'July', 2)));
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
        if (page === "Digital_footprint_management") {
            this.pageId = "Digital_footprint_management";
            this.Digital_footprint_management();
        }
        if (page === "Defamation") {
            this.pageId = "Defamation";
            this.Defamation();
        }
        if (page === "Tips") {
            this.pageId = "Tips";
            this.Tips();
        }
    }
    constructor() {        
        this.text = new textClass();
        this.ref = new Ref();
    }
    
}
