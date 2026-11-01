"""Copia o currículo (repositório privado `curriculum`) para o site, sem dados privados.

Uso:  python scripts/importar-cv.py ../curriculum/dados/cv.yaml

Gera src/data/cv.json (sem o telefone e a foto) e copia os PDFs da versão lateral
de ../curriculum/saida/ para public/cv/. Rode `sh compilar.sh` no curriculum antes, para os
PDFs estarem em dia. Depois faça commit do cv.json e dos PDFs.
"""
import json
import shutil
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

# PDFs que o botão "Baixar PDF" oferece (os PDFs trazem o telefone; decisão do Ricardo em 2026-11-01).
PDFS = {'curriculo-ricardo-silveira-lateral-pt.pdf': 'curriculo-ricardo-silveira.pdf',
        'resume-ricardo-silveira-lateral-en.pdf': 'resume-ricardo-silveira.pdf'}
saida = origem.parent.parent / 'saida'
pasta = destino.parent.parent.parent / 'public' / 'cv'
pasta.mkdir(parents=True, exist_ok=True)
for de, para in PDFS.items():
    if (saida / de).exists():
        shutil.copyfile(saida / de, pasta / para)
        print(f'PDF: {para}')
    else:
        print(f'aviso: {saida / de} não existe; rode compilar.sh no curriculum')
