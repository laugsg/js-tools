# CLI tools: removing duplicate words

A frenetic research along half minute reveals that the most common case found was about to get a list where duplicates are reduced to one sample of the duplicated word.

```txt
### most common case
// list
abbrev
abbrev
anymatch
anymatch
undefsafe

// result
abbrev
anymatch
undefsafe
```

This tool comes to fill the gap about to get a list where a word that match a word both are removed, the word and its duplicate. 

```txt
### a list without duplicated words.
// list
abbrev
abbrev
anymatch
anymatch
undefsafe

// result
undefsafe
```

## A Commander.js CLI command

Commander.js is a tool running over Node linked to the "bin" field of the package.json file of the project. Then, It becomes a Node app which allows a "kind a shell" look-and-feel execution system agnostic across any system supporting NodeJS.

## Installation && Usage

1. download
2. install
3. link
4. execute savings

```bash
# download
git clone [repo]
cd [repo]
# install
npm i
# link
npm link
# execute
savings rm -d list.txt
```

## packages

* Commander.js
