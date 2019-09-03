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
    	conjunction_names : string, // conjucate of the listOfItems contains the names
    	conjunction_languages : string, // conjucate of the listOfItems contains the langugaes
    	disjunction_names: string   // disjuncate of the listOfItems contains the names
    	disjunction_languages: string // disjuncate of the listOfItems contains the languages
     }  
 */
getAllListsLanguages = (langList) => { 

   for (var i =  0 ; i < langList.length ; i++) {
   	langList[i]
   }
   

}