import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/discordapp\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.facebook\.com\/plugins\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.codepen\.io\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.production-assets\.codepen\.io\/.+/i);
whiteListIframe(/^(https?:)?\/\/everycircuit\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/circuits\.io\/.+/i);
whiteListIframe(/^(https?:)?\/\/tinkercad\.com\/things\/.+/i);
