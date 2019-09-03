/**
 * returns list format for all the list formats
 *   input: list of objects in form {
   			'lang_code': string,
		    'lang_name_of_code': string,
		    'name_list_english' : list of strings,
		    'names_list': list of strings,
		    'languages_list_english' : list of strings,
		    'languages_list' : list of strings
 *          }

     return: list of object in form {
	    langCode: string,
      langName : string,
      listOfNamesEnglish: array of strings,
      listOfNames: array of strings,
      listOfLanguagesEnglish: array of strings,
        listOfLanguages: array of strings,
      conjunctionNames : string, // conjucate of the listOfItems contains the names
      conjunctionLanguages : string, // conjucate of the listOfItems contains the langugaes
      disjunctionNames: string   // disjuncate of the listOfItems contains the names
      disjunctionLanguages: string // disjuncate of the listOfItems contains the languages
     }  
 */
getAllListsLanguages = (langList) => { 
  result = []
   for (var i =  0 ; i < langList.length ; i++) {
   		items = langList[i]
      result.push(getListFormatter(items))        
   }
   return result
}