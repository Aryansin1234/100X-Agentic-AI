"""Fix unescaped apostrophes inside single-quoted JS strings in data.js."""
import re

with open('src/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def fix_js(text):
    """Parse JS text and escape apostrophes inside single-quoted strings."""
    result = []
    i = 0
    while i < len(text):
        c = text[i]
        # Start of single-quoted string
        if c == "'":
            j = i + 1
            chars = ["'"]
            while j < len(text):
                ch = text[j]
                if ch == '\\':
                    chars.append(ch)
                    chars.append(text[j+1])
                    j += 2
                    continue
                elif ch == "'":
                    chars.append("'")
                    j += 1
                    break
                else:
                    chars.append(ch)
                    j += 1
            # Check if any inner chars are apostrophes that would break the string
            # Rebuild: escape bare apostrophes inside
            inner = ''.join(chars[1:-1])  # content between quotes
            inner_fixed = inner.replace("'", "\\'")
            result.append("'" + inner_fixed + "'")
            i = j
        # Double-quoted string — pass through
        elif c == '"':
            j = i + 1
            chars = ['"']
            while j < len(text):
                ch = text[j]
                if ch == '\\':
                    chars.append(ch)
                    chars.append(text[j+1])
                    j += 2
                    continue
                elif ch == '"':
                    chars.append('"')
                    j += 1
                    break
                else:
                    chars.append(ch)
                    j += 1
            result.append(''.join(chars))
            i = j
        # Template literal — pass through (they can contain apostrophes freely)
        elif c == '`':
            j = i + 1
            chars = ['`']
            depth = 0
            while j < len(text):
                ch = text[j]
                if ch == '\\':
                    chars.append(ch)
                    chars.append(text[j+1])
                    j += 2
                    continue
                elif ch == '$' and j+1 < len(text) and text[j+1] == '{':
                    depth += 1
                    chars.append(ch)
                    j += 1
                elif ch == '}' and depth > 0:
                    depth -= 1
                    chars.append(ch)
                    j += 1
                elif ch == '`' and depth == 0:
                    chars.append('`')
                    j += 1
                    break
                else:
                    chars.append(ch)
                    j += 1
            result.append(''.join(chars))
            i = j
        else:
            result.append(c)
            i += 1
    return ''.join(result)

fixed = fix_js(content)

with open('src/data.js', 'w', encoding='utf-8') as f:
    f.write(fixed)

print("Fixed src/data.js successfully")
