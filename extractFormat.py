#!/usr/bin/env python

import codecs
from googletrans import Translator

translator = Translator(service_urls=[
      'translate.google.com',
      'translate.google.co.kr',
    ])

languages = [
       'ja',
       'es'
]


for lang in languages:
	names = [
 		translator.translate('Arlo' , dest=lang),
 		translator.translate('Mila' , dest=lang),
 		translator.translate('Jose' , dest=lang),
 		translator.translate('Alejandro' , dest=lang)
	]


	out = ""

	for name in names:
    		content = name.text
    		if not content.strip(): continue
    		out = out + "\"" + content.strip()  + "\", "

	print(out[:-2])



