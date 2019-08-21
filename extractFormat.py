
import codecs
from googletrans import Translator
from icu import  Locale

translator = Translator(service_urls=[
      'translate.google.com',
      'translate.google.co.kr',
    ])

lang = 'ja'

names = [
 translator.translate('Arlo' , dest=lang),
 translator.translate('Mila' , dest=lang),
 translator.translate('Jose' , dest=lang),
 translator.translate('Alejandro' , dest=lang)
]

list = codecs.open("list.txt" , mode="r")

out = ""
for name in names:
    content = name.text
    if not content.strip(): continue
    out = out + "\"" + content.strip()  + "\", "

print(out[:-2])