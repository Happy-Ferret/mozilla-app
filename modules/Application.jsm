/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const { classes: Cc, interfaces: Ci, results: Cr, utils: Cu } = Components;
const { console } = Cu.import("resource://gre/modules/Console.jsm", {});
Cu.import("resource://gre/modules/Services.jsm");

this.EXPORTED_SYMBOLS = ["Application"];

this.Application = {
  start: function() {
    let features = [
      "chrome",
      "close",
      "dialog=no",
      "extrachrome",
      "resizable",
      "scrollbars",
      "width=512",
      "height=384",
    ];

    Services.ww.openWindow(null, "data:text/plain,Hello,%20World!", "_blank", features.join(","), null);
  },
};
