# Downloads (signed release files)

The website's download buttons point here (`assets/site.js` → `RELEASE`, `DOWNLOADS`). The files are **not in
git** (the APK alone is about 100 MB); fill the folder from a signed release before uploading the site:

```sh
bash tools/release/site_downloads.sh dist/0.1.8-b12      # a folder with the release files + SHA256SUMS(.sig)
```

It checks that the APK carries the release key and that `SHA256SUMS` is signed by the release key, then copies:
`universal-pos-<v>.apk`, `UniversalPOS-Setup-<v>.exe`, `universal-pos_<v>_amd64.deb`,
`universal-pos-<v>-linux-x64.tar.gz`, `universal-pos-update-<v>*.posupdate`, `SHA256SUMS`, `SHA256SUMS.sig`,
`release-pubkey.pem`. Keep `RELEASE` in `assets/site.js` equal to the app version.
