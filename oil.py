# pip install requests beautifulsoup4 pandas python-dateutil
#!/usr/bin/env python3
# -*- coding: utf-8 -*-


#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests

URL = "https://oil.nbsasu.com/beijing/"

def fetch_html(url: str) -> str:
    # resp = requests.get(url, headers=HEADERS, timeout=1000)
    resp = requests.get(url)
    # resp.raise_for_status()
    # resp.encoding = resp.apparent_encoding
    print(resp.text)
    return resp.text





def main() -> None:
    html = fetch_html(URL)

    # html = html.encode('utf-8').decode('unicode_escape')

    # 可选：保存到文件
    with open("/root/oil.html", "w", encoding="utf-8") as f:
        f.write(html)


if __name__ == "__main__":
    main()
