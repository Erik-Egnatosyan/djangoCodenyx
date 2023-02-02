from django import template

register = template.Library()

@register.filter
def highlight_text(value):
    parts = value.split('<')
    result = ''
    for part in parts:
        if '>' in part:
            word, rest = part.split('>', 1)
            result += '<span class=highlight>' '&lt;' + word + '&gt;' +'</span>' + rest
        else:
            result += part
    return result