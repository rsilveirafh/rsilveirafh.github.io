"""Copia o currículo (repositório privado `curriculum`) para o site, sem dados privados.

Uso:  python scripts/importar-cv.py ../curriculum/dados/cv.yaml

Gera src/data/cv.json. Ficam de fora o telefone e a foto.
Rode de novo sempre que o cv.yaml mudar e faça commit do cv.json.
"""
import json
import sys
from pathlib import Path

import yaml

PRIVADOS = {'telefone', 'foto'}

origem = Path(sys.argv[1] if len(sys.argv) > 1 else '../curriculum/dados/cv.yaml')
destino = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'cv.json'

cv = yaml.safe_load(origem.read_text(encoding='utf-8'))
cv['pessoa'] = {k: v for k, v in cv['pessoa'].items() if k not in PRIVADOS}


def texto(v):
    # Datas YAML (2024-11) viram string; o resto passa igual.
    return str(v) if v is not None and not isinstance(v, (str, int, float, bool, list, dict)) else v


def limpar(o):
    if isinstance(o, dict):
        return {k: limpar(v) for k, v in o.items()}
    if isinstance(o, list):
        return [limpar(v) for v in o]
    return texto(o)


dados = limpar(cv)
assert 'telefone' not in json.dumps(dados), 'telefone vazou para o JSON'
destino.write_text(json.dumps(dados, ensure_ascii=False, indent=1) + '\n', encoding='utf-8', newline='\n')
print(f'{destino} ({len(dados["experiencia"])} experiências, {len(dados["publicacoes"])} publicações)')
