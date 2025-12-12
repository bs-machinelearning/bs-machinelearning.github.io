#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Script to resize images in specific folders
# - team and spotlights: 200x200 px
# - events and proj: max dimension 1080 px

import os
from PIL import Image

FOUNDERS = [
	"cap.jpg",
	"cos.jpg",
	"jack.jpg",
	"laura.jpg",
	"moro.jpg",
	"mrml.jpg",
	"rocco.jpg",
	"tancre.jpg",
	"vacca.jpg"
]

def resize_to_square(img, size):
	return img.resize((size, size), Image.LANCZOS)

def resize_to_max_dim(img, max_dim):
	w, h = img.size
	if max(w, h) <= max_dim:
		return img
	if w > h:
		new_w = max_dim
		new_h = int(h * max_dim / w)
	else:
		new_h = max_dim
		new_w = int(w * max_dim / h)
	return img.resize((new_w, new_h), Image.LANCZOS)

def process_folder(folder, resize_fn, **kwargs):
	exts = {'.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp'}
	for fname in os.listdir(folder):
		fpath = os.path.join(folder, fname)
		if not os.path.isfile(fpath):
			continue
		ext = os.path.splitext(fname)[1].lower()
		if ext not in exts:
			continue
		# Rename .jpeg to .jpg
		new_fname = fname
		if ext == '.jpeg':
			new_fname = fname[:-5] + '.jpg'
		new_fpath = os.path.join(folder, new_fname)
		if new_fname != fname:
			os.rename(fpath, new_fpath)
			print(f"filename {fname} -> filename {new_fname}")
			fpath = new_fpath
			fname = new_fname
		try:
			with Image.open(fpath) as img:
				img = img.convert('RGB')
				img_resized = resize_fn(img, **kwargs)
				img_resized.save(fpath)
		except Exception:
			pass

def process_team_folder(folder):
	exts = {'.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp'}
	for fname in os.listdir(folder):
		fpath = os.path.join(folder, fname)
		if not os.path.isfile(fpath):
			continue
		ext = os.path.splitext(fname)[1].lower()
		if ext not in exts:
			continue
		# Rename .jpeg to .jpg
		new_fname = fname
		if ext == '.jpeg':
			new_fname = fname[:-5] + '.jpg'
		# Rename first-last to first_last (only in team folder)
		# if '-' in os.path.splitext(new_fname)[0]:
		# 	base, ext2 = os.path.splitext(new_fname)
		# 	new_fname = base.replace('-', '_') + ext2
		new_fpath = os.path.join(folder, new_fname)
		if new_fname != fname:
			os.rename(fpath, new_fpath)
			print(f"filename {fname} -> filename {new_fname}")
			fpath = new_fpath
			fname = new_fname
		try:
			with Image.open(fpath) as img:
				img = img.convert('RGB')
				if fname in FOUNDERS:
					img_resized = resize_to_square(img, 800)
				else:
					img_resized = resize_to_square(img, 200)
				img_resized.save(fpath)
		except Exception:
			pass

if __name__ == "__main__":
	base = os.path.dirname(os.path.abspath(__file__))
	team_folder = os.path.join(base, 'assets', 'img', 'team')
	spotlights_folder = os.path.join(base, 'assets', 'img', 'spotlights')
	folders_1080 = [
		os.path.join(base, 'assets', 'img', 'events'),
		os.path.join(base, 'assets', 'img', 'proj'),
	]

	if os.path.isdir(team_folder):
		process_team_folder(team_folder)

	if os.path.isdir(spotlights_folder):
		process_folder(spotlights_folder, resize_to_square, size=200)

	for folder in folders_1080:
		if os.path.isdir(folder):
			process_folder(folder, resize_to_max_dim, max_dim=1080)
