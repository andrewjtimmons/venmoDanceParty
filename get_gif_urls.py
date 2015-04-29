import json
import urllib2
import re

def get_page(url):
	response = urllib2.urlopen(url)
	page = response.read()
	return page

def extract_gifs(page):
	gif_urls = re.findall(r'(https:.*/(.*\.(gif)))', page)
	return gif_urls


def main(url):
	page = get_page(url)
	gif_urls = extract_gifs(page)
	url_list = [url[0] for url in gif_urls]
	return url_list

print main('https://venmo.com/team/')