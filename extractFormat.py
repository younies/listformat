#!/usr/bin/env python

# import codecs
import json
# import sys

from iso639 import languages
from pprint import pprint
from googletrans import Translator

translator = Translator(service_urls=[
      'translate.google.com',
      'translate.google.co.kr',
    ])

# All the language codes that we will extract them
lang_codes =[]

codes_files = open('languages_codes.txt' , "r")
if codes_files.mode == 'r':
  lines = codes_files.readlines()
  for lang_code in lines:
    lang_code = lang_code.strip()
    if not lang_code: continue
    lang_codes.append(lang_code)


# used to create the list items
essential_names = ['John' , 'Fredrik', 'Olga' , 'Nadeem' , 'Botu' ]
essential_languages = [ 'English' , 'Chinese' , 'Japanes' , 'Spanish' ]


def getListItems(lang_code):
  """ returns the list of items that needed for dijunction/conjunction
  list formatter.
  """
  try: 
    translator.translate('English' , dest=lang_code).text
    (languages.get(alpha2=lang_code)).name
  except:

    print('This languages is hard to find the list items for it: \"' + lang_code +'\"')
    return None

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
    'name_list_english' : essential_names,
    'names_list': names_list,
    'languages_list_english' : essential_languages + [lang_name_of_code],
    'languages_list' : languages_list
  }


result = []

for lang_code in lang_codes:
  items_list = getListItems(lang_code)
  if items_list:
    result.append( getListItems(lang_code))
	
output = open('items_list_for_all_languages.json' , 'w+')
output.write(json.dumps(result))
output.close()