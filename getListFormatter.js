getListFormatter = (lang , listOfItems) => {
	lfc = new Intl.ListFormat(lang , { type: 'conjunction' }); 
    lfd = new Intl.ListFormat(lang , { type: 'disjunction' });

    console.log(lfc.format(listOfItems));
    console.log(lfd.format(listOfItems)) ;
}
