getListFormatter = (lang , langname,  listOfItems) => {
	lfc = new Intl.ListFormat(lang , { type: 'conjunction' }); 
    lfd = new Intl.ListFormat(lang , { type: 'disjunction' });

    conj = lfc.format(listOfItems);
    disj = lfd.format(listOfItems) ;

    return {
    	lang: lang,
    	language_name : langname,
    	conjunction : conj,
    	disjunction: disjunction
    }
}

