# Downloads (local copy of the release files)

The website's download buttons do **not** use this folder. They link by file id to the public Google Drive folder
https://drive.google.com/drive/folders/1dYrT1z130PTQhZxCjpWgZplp2VIS2gf3 (`DOWNLOADS` in `assets/site.js`). The files
are **not in git** (the update file alone is about 200 MB).

After a new release, upload these to that Drive folder (anyone with the link can view):
`universal-pos-<v>.apk`, `UniversalPOS-Setup-<v>.exe`, `universal-pos_<v>_amd64.deb`,
`universal-pos-<v>-linux-x64.tar.gz`, `SHA256SUMS`, `SHA256SUMS.sig`, `release-pubkey.pem`.
Then put the new file ids in `DOWNLOADS` and keep `RELEASE` in `assets/site.js` equal to the app version.

Do not upload the `.posupdate` file or this README. The update file is sent to customers directly.
