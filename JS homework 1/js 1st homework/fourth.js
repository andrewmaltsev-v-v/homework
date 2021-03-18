"use strict";

const BYTE = 8;
const KB = 1024;
const MB = 1024 * KB;
const GB = 1024 * MB;

let size = 10;
let unity = "MB";

if ( unity == "BYTE" ) {
    console.log (size * BYTE);
} else if ( unity == "KB" ) {
    console.log (size * KB);
} else if ( unity == "MB" ) {
    console.log (size * MB);
} else if ( unity == "GB" ) {
    console.log (size * GB);
}