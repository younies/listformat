#!/usr/bin/env python3

import codecs
from iso639 import languages
from pprint import pprint
from googletrans import Translator

translator = Translator(service_urls=[
      'translate.google.com',
      'translate.google.co.kr',
    ])

# All the language codes that we will extract them
lang_codes = [
       'ja',
       'es'
]


# used to create the list items
essential_names = ['John' , 'Fredrik', 'Olga' , 'Nadeem' , 'Botu' ]
essential_languages = [ 'English' , 'Chinese' , 'Japanes' , 'Spanish' ]


def getListItems(lang_code):
  """ returns the list of items that needed for dijunction/conjunction
  list formatter.
  """
  names_list = []
  languages_list = []
  for name in essential_names:
    names_list.append(translator.translate(name , dest=lang_code).text)
  
  for lang_name in essential_languages: 
    languages_list.append(translator.translate(lang_name , dest=lang_code).text)
  # add the language name to the languages list
  lang_name_of_code = (languages.get(alpha2=lang_code)).name
  languages_list.append(translator.translate(lang_name_of_code , dest=lang_code).text)

  return {
    'lang_code': lang_code,
    'lang_name_of_code': lang_name_of_code,
    'names_list': names_list,
    'languages_list' : languages_list
  }



  

for lang_code in lang_codes:
	list_names = getListItems(lang_code)
	print (list_names)
