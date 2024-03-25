# BESST Reference

Bafang creates amazing electric bike systems. The [BESST software](https://bafang-e.com/en/oem-area/service/besst/) is used to configure their controllers, displays and sensors over the CAN-bus and their CAN-over-UART tool (BESST Box). Since it is an [Electron app](https://www.electronjs.org) (a web application behind the scenes), we have access to the main components of the codebase.

Follow the instructions below to re-create this:

1. Download the BESST application `.exe` from [their website](https://bafang-e.com/en/oem-area/service/besst/).
2. Rename it from `.exe` to `.zip` and uncompress the archive.
3. Uncompress the `$PLUGINSDIR/app-32.7z` archive within in.
4. Uncompress the [electron app](https://www.electronjs.org) `resources/app.asar` archive in the `app-32` directory using `npx @electron/asar extract resources/app.asar app` to the `app` directory.
5. Re-create the original source code using the source maps (`.js.map` files) included in the `app/static/js` directory using `npx reverse-sourcemap app/static/js` to the `app/static/js/webpack` directory.

## Related Projects

- https://github.com/OpenSourceEBike/Bafang_M500_M600
- https://github.com/lijon/BafangWebConfig
