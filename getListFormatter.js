getListFormatter = (lang , langname,  listOfItems) => {
	lfc = new Intl.ListFormat(lang , { type: 'conjunction' }); 
    lfd = new Intl.ListFormat(lang , { type: 'disjunction' });

    conj = lfc.format(listOfItems);
    disj = lfd.format(listOfItems) ;

    return {
    	langCode: lang,
    	langName : langname,
    	conjunction : conj,
    	disjunction: disjunction
    }
}

