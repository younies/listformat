/**
  input: 
    {
		'lang_code': string,
	    'lang_name_of_code': string,
	    'name_list_english' : list of strings,
	    'names_list': list of strings,
	    'languages_list_english' : list of strings,
	    'languages_list' : list of strings
    }


   output:
   {
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

getListFormatter = (items) => {
	lfc = new Intl.ListFormat(items.lang_code , { type: 'conjunction' }); 
    lfd = new Intl.ListFormat(items.lang_code , { type: 'disjunction' });

    conjNames = lfc.format(items.names_list);
    conjLanguages = lfc.format(items.languages_list);


    disjNames = lfd.format(items.names_list) ;
    disjLanguages = lfd.format(items.languages_list);

    return {
    	langCode: items.lang_code,
    	langName : items.lang_name_of_code,
    	listOfNamesEnglish: items.name_list_english,
    	listOfNames: items.names_list,
    	listOfLanguagesEnglish: items.languages_list_english,
    	listOfLanguages: items.languages_list,
    	conjunctionNames : conjNames,
    	conjunctionLanguages:  conjLanguages  ,
    	disjunctionNames: disjNames,
    	disjunctionLanguages: disjLanguages,
    }
}

