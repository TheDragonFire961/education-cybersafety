/*
    en-au.js: contains English (Australian)-localised strings of text.
	
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

// This object contains all of the localised text strings
class prStrings {
	// You _can_ call a string in this class directly, but this function handles it better
	GetString(stringID = null) {
		if (!stringID) {
			// Exit if stringID is null (perhaps by someone not defining it somewhere)
			throw "stringID cannot be null in prStrings.GetString()";
		}
	}
}