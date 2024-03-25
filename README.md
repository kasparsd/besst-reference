# BESST Reference

Bafang creates amazing electric bike systems. The [BESST software](https://bafang-e.com/en/oem-area/service/besst/) is used to configure their controllers, displays and sensors over the CAN-bus and their CAN-over-UART tool (BESST Box). Since it is an [Electron app](https://www.electronjs.org) (a web application behind the scenes), we have access to the main components of the codebase.

Follow the instructions below to re-create this:

1. Download the BESST application `.exe` from [their website](https://bafang-e.com/en/oem-area/service/besst/) (version 1.2.43 used in this repository).
2. Rename it from `.exe` to `.zip` and uncompress the archive.
3. Uncompress the `$PLUGINSDIR/app-32.7z` archive within in.
4. Uncompress the [electron app](https://www.electronjs.org) `resources/app.asar` archive in the `app-32` directory using `npx @electron/asar extract resources/app.asar app` to the `app` directory.
5. Re-create the original source code using the source maps (`.js.map` files) included in the `app/static/js` directory using `npx reverse-sourcemap app/static/js` to the `app/static/js/webpack` directory.

## Research Questions

The following questions are of interest:

- What is the CAN protocol?
- Is it possible to use generic USB-to-CAN adapters for communication?

## BESST Box Hardware

The application includes Windows drivers for the following Silicon Labs (VID 10C4) hardware:

- Silicon Labs CP210x USB to UART Bridge (PID EA60, EA63)
- Silicon Labs Dual CP2105 USB to UART Bridge (PID EA70, EA7A)
- Silicon Labs Quad CP2108 USB to UART Bridge (PID EA71, EA7B)

so it is reasonable to assume that the BESST Box is based on one of these chips.

The application also includes the source code for the [`besst-usb-sdk` JS library](https://github.com/kasparsd/besst-reference/tree/a392951eaa5adae99c5ecc07896ed83c8c04d280/app/static/js/webpack/node_modules/besst-usb-sdk/src) which is used for [all device communication](https://github.com/kasparsd/besst-reference/blob/a392951eaa5adae99c5ecc07896ed83c8c04d280/app/static/js/webpack/device/conn.js#L5). 

## Related Projects

- https://github.com/OpenSourceEBike/Bafang_M500_M600
- https://github.com/lijon/BafangWebConfig
