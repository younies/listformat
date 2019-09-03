separator = (times) => {
	sympole = '	'
	result = ''

	for (var i = 0; i < times; i++) {
		result = result.concat(sympole);
	}

	return result
}


concatList = (list) => {
	result = ""
	for (var i = 0; i < list.length; i++) {
		result = result.concat(list[i] + separator(1));
	}

   return result;
}

/**
  Input: list of object in form of
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
   outPut 
*/


csvListFormatter = (items) => {
	result = "";

	result = result.concat('Language Code' + separator(1));
	result = result.concat('Language Name' + separator(1));
	result = result.concat('English Name 1' + separator(1));
	result = result.concat('English Name 2' + separator(1));
	result = result.concat('English Name 3' + separator(1));
	result = result.concat('English Name 4' + separator(1));
	result = result.concat('English Name 5' + separator(1));
	result = result.concat('Target  Name 1' + separator(1));
	result = result.concat('Target  Name 2' + separator(1));
	result = result.concat('Target  Name 3' + separator(1));
	result = result.concat('Target  Name 4' + separator(1));
	result = result.concat('Target  Name 5' + separator(1));
	result = result.concat('Conjuntion of the names' + separator(1));
	result = result.concat('Disjunction of the names' + separator(1));
	result = result.concat('English Language 1' + separator(1));
	result = result.concat('English Language 2' + separator(1));
	result = result.concat('English Language 3' + separator(1));
	result = result.concat('English Language 4' + separator(1));
	result = result.concat('English Language 5' + separator(1));
	result = result.concat('Target  Language 1' + separator(1));
	result = result.concat('Target  Language 2' + separator(1));
	result = result.concat('Target  Language 3' + separator(1));
	result = result.concat('Target  Language 4' + separator(1));
	result = result.concat('Target  Language 5' + separator(1));
	result = result.concat('Conjuntion of languages' + separator(1));
	result = result.concat('Disjunction of the languages' + "\n");


 
    for (var i = 0; i < items.length; i++) {
    	item = items[i];

    	result = result.concat(item.langCode + separator(1));
		result = result.concat(item.langName + separator(1));
		result = result.concat(concatList(item.listOfNamesEnglish));
		result = result.concat(concatList(item.listOfNames));
		result = result.concat(item.conjunctionNames + separator(1));
		result = result.concat(item.disjunctionNames + separator(1));
		result = result.concat(concatList(item.listOfLanguagesEnglish));
		result = result.concat(concatList(item.listOfLanguages));
		result = result.concat(item.conjunctionLanguages + separator(1));
		result = result.concat(item.disjunctionLanguages + "\n");
    }
   
   return result
}